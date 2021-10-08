import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import BurgerButton from './BurgerButton';

import logo from '../public/images/logo.svg';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/traitements', label: 'Traitements' },
  { href: '/mon-parcours', label: 'Mon parcours' },
  { href: '/tarifs-et-rendez-vous', label: 'Tarifs et rendez-vous' },
  { href: '/contact', label: 'Contact' },
];

function PageHeader() {
  const [navVisible, setNavVisible] = useState(null);
  const router = useRouter();

  const showNav = () => {
    setNavVisible(true);
    if (process.browser) {
      // Prevent page scrolling
      document.body.classList.add('overflow-y-hidden');
    }
  };

  const hideNav = () => {
    setNavVisible(navVisible === null ? null : false);
    if (process.browser) {
      document.body.classList.remove('overflow-y-hidden');
    }
  };

  const toggleNavVisible = () => {
    if (navVisible) {
      hideNav();
    } else {
      showNav();
    }
  };

  // Add handler on routerChangeComplete event to close the navigation after a
  // new page finished loading
  useEffect(() => {
    const routeChangeCompleteHandler = hideNav;

    router.events.on('routeChangeComplete', routeChangeCompleteHandler);

    return () => {
      router.events.off('routeChangeComplete', routeChangeCompleteHandler);
    };
  });

  const navVisibleClass =
    navVisible === null
      ? 'invisible'
      : navVisible === true
      ? 'animate-fade-in-from-invisible'
      : 'animate-fade-out-to-invisible';

  if (process.browser) {
    document.body.classList.add('lg:overflow-y-auto');
  }

  return (
    <header
      className="fixed top-0 flex justify-between w-full h-16 px-4 py-1 text-gray-100 shadow-md z-max bg-primary"
      role="banner"
    >
      <Link href="/">
        <a>
          <Image src={logo} alt="Logo" width={56} height={56} />
        </a>
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
          'fixed top-16 bottom-0 left-0 right-0 pt-10 pr-4 bg-primary ' +
          'lg:static lg:pr-0 lg:pt-0 lg:visible lg:opacity-100 lg:animate-none ' +
          navVisibleClass
        }
        id="mainNav"
      >
        <ul className="flex flex-col items-end text-3xl lg:flex-row lg:text-lg">
          {navItems.map(({ href, label }) => {
            let anchorClasses = 'pb-2 border-b-2';
            if (router.asPath === href) {
              anchorClasses += ' border-yellow-200 text-yellow-200';
            }
            return (
              <li className="mb-8 lg:mt-5 lg:mb-0 lg:ml-6" key={href}>
                <Link href={href}>
                  <a
                    className={
                      'pb-2 border-b-2 hover:text-yellow-200 hover:border-yellow-200 ' +
                      'focus:outline-none focus:ring-2 ring-yellow-200 ring-offset-4 ring-offset-primary ' +
                      'transition-shadow lg:border-b-0 lg:pb-0' +
                      (router.asPath === href
                        ? ' font-semibold text-yellow-200 border-yellow-200 lg:font-normal lg:border-b-2'
                        : '')
                    }
                    aria-current={router.asPath === href ? 'page' : false}
                  >
                    {label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default PageHeader;
