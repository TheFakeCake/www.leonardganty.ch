'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import FocusTrap from 'focus-trap-react';

import { debounce } from '../../lib/utils';

import BurgerButton from './BurgerButton';
import Logo from './Logo';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/traitements', label: 'Traitements' },
  { href: '/mon-parcours', label: 'Mon parcours' },
  { href: '/prendre-un-rendez-vous', label: 'Prendre un rendez-vous' },
  { href: '/contact', label: 'Contact' },
];

function PageHeader() {
  const [navVisible, setNavVisible] = useState(null);
  const pathname = usePathname();
  const isBrowser = typeof window !== 'undefined';

  const showNav = () => {
    setNavVisible(true);
    if (isBrowser) {
      // Prevent page scrolling
      document.body.classList.add('overflow-y-hidden');
    }
  };

  const hideNav = useCallback(
    (withAnimation = true) => {
      setNavVisible((navVisible) =>
        navVisible === null || !withAnimation ? null : false,
      );
      if (isBrowser) {
        document.body.classList.remove('overflow-y-hidden');
      }
    },
    [setNavVisible, isBrowser],
  );

  const toggleNavVisible = () => {
    if (navVisible) {
      hideNav();
    } else {
      showNav();
    }
  };

  // Hide navigation on pathname change (page change)
  useEffect(() => {
    hideNav();
  }, [pathname, hideNav]);

  // Add a debounced window resize handler to hide the navigation if the window
  // becomes 1024px wide
  useEffect(() => {
    const onResizeHandler = debounce(
      ({}) => {
        if (window.innerWidth >= 1024) {
          hideNav(false);
        }
      },
      300,
      1000,
    );

    window.addEventListener('resize', onResizeHandler);

    return () => window.removeEventListener('resize', onResizeHandler);
  });

  const navVisibleClass =
    navVisible === null
      ? 'invisible'
      : navVisible === true
        ? 'animate-fade-in-from-invisible'
        : 'animate-fade-out-to-invisible';

  return (
    <FocusTrap active={navVisible}>
      <header
        className="fixed top-0 z-max flex h-16 w-full justify-between bg-primary px-4 py-1 text-stone-100 shadow-md lg:justify-center"
        role="banner"
      >
        <Link
          href="/"
          className="link self-center rounded-full text-amber-200 hover:opacity-100 focus:ring-offset-0 lg:hidden"
          aria-label="Page d'accueil"
        >
          <Logo className="h-12 w-12 border-black bg-stone-50 text-primary-dark" />
        </Link>

        <BurgerButton
          className="self-center lg:hidden"
          toggled={navVisible}
          onClick={toggleNavVisible}
          aria-controls="mainNav"
          aria-label="Permuter l'affichage de la navigation"
        />

        <nav
          className={
            'fixed bottom-0 left-0 right-0 top-16 overflow-y-auto bg-primary pr-4 pt-8 ' +
            'lg:visible lg:static lg:w-full lg:max-w-2xl lg:animate-none lg:overflow-visible lg:pr-0 lg:pt-0 lg:opacity-100 ' +
            navVisibleClass
          }
          id="mainNav"
        >
          <ul className="flex flex-col text-2xl leading-relaxed lg:h-full lg:flex-row lg:items-center lg:justify-between lg:text-lg">
            {navItems.map(({ href, label }) => {
              return (
                <li
                  className="mb-5 text-right last:mb-3 lg:-mt-1.5 lg:mb-0 lg:last:mb-0"
                  key={href}
                >
                  <Link
                    href={href}
                    className={
                      'border-b-2 pb-2 ring-amber-200 ring-offset-primary transition ' +
                      'hover:border-amber-200 hover:text-amber-200 ' +
                      'focus:outline-none focus:ring-2 focus:ring-offset-4 ' +
                      'focus-not-visible:ring-0 focus-not-visible:ring-offset-0 ' +
                      'lg:border-b-0 lg:pb-0.5' +
                      (pathname === href
                        ? ' border-amber-200 font-semibold text-amber-200 lg:border-b-2 lg:font-normal'
                        : '')
                    }
                    aria-current={pathname === href ? 'page' : false}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Logo className="absolute top-13 -mt-0.5 hidden h-10 w-10 border-primary-dark bg-stone-50 text-primary-dark shadow-md lg:block" />
      </header>
    </FocusTrap>
  );
}

export default PageHeader;
