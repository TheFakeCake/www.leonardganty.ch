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
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  // Add handler on routerChangeComplete event to close the navigation after a
  // new page finished loading
  useEffect(() => {
    const routeChangeCompleteHandler = () => setShowNav(false);

    router.events.on('routeChangeComplete', routeChangeCompleteHandler);

    return () => {
      router.events.off('routeChangeComplete', routeChangeCompleteHandler);
    };
  });

  function toggleNavHandler() {
    setShowNav((showNav) => !showNav);
  }

  return (
    <header
      className="fixed top-0 z-max w-full h-16 px-4 py-1 bg-primary text-gray-100 shadow-md flex justify-between"
      role="banner"
    >
      <Link href="/">
        <a>
          <Image src={logo} alt="Logo" width={56} height={56} />
        </a>
      </Link>

      <BurgerButton
        className="self-center lg:hidden"
        toggled={showNav}
        onClick={toggleNavHandler}
        aria-controls="mainNav"
        aria-label="Permuter l'affichage de la navigation"
      />

      <nav
        className={
          'bg-primary fixed top-16 right-0 bottom-0 left-0 pr-4 pt-10 lg:static lg:block lg:pr-0 lg:pt-0' +
          (showNav ? ' block' : ' hidden')
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
                      'pb-2 border-b-2 hover:text-yellow-200 hover:border-yellow-200 focus:outline-none focus:ring-2 ring-yellow-200 ring-offset-4 ring-offset-primary lg:border-b-0' +
                      (router.asPath === href
                        ? ' border-yellow-200 text-yellow-200 lg:border-b-2'
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
