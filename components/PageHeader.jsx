import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
      className="fixed top-0 flex justify-between w-full h-16 px-4 py-1 text-gray-100 shadow-md z-max bg-primary lg:justify-center"
      role="banner"
    >
      <Link href="/">
        <a className="link self-center rounded-full text-yellow-200 focus:ring-offset-0 hover:opacity-100 lg:hidden">
          <Logo className="w-12 h-12 text-primary-dark border-black bg-gray-50" />
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
          'lg:static lg:pr-0 lg:pt-0 lg:w-full lg:max-w-2xl lg:visible lg:opacity-100 lg:animate-none ' +
          navVisibleClass
        }
        id="mainNav"
      >
        <ul className="flex flex-col items-end text-3xl lg:h-full lg:flex-row lg:justify-between lg:items-center lg:text-lg">
          {navItems.map(({ href, label }) => {
            return (
              <li className="mb-8 lg:mb-0 lg:-mt-1.5" key={href}>
                <Link href={href}>
                  <a
                    className={
                      'pb-2 border-b-2 ring-yellow-200 ring-offset-primary transition ' +
                      'hover:text-yellow-200 hover:border-yellow-200 ' +
                      'focus:outline-none focus:ring-2 focus:ring-offset-4 ' +
                      'focus-not-visible:ring-0 focus-not-visible:ring-offset-0 ' +
                      'lg:pb-0.5 lg:border-b-0' +
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

      <Logo className="hidden lg:block absolute top-13 -mt-0.5 w-10 h-10 text-primary-dark bg-gray-50 border-primary-dark shadow-md" />
    </header>
  );
}

export default PageHeader;
