import Link from 'next/link';

import Heading from './components/Heading';

export const metadata = {
  title: 'Oops ! Cette page n’existe pas',
};

export default function NotFound() {
  return (
    <div
      className={
        'relative isolate mb-footer-wave-height mt-6 overflow-hidden pb-12 text-center ' +
        'before:absolute before:inset-0 before:z-[-1] before:text-center before:text-[10rem] before:font-semibold before:leading-snug before:text-stone-200 before:content-["404"] ' +
        'md:overflow-visible md:before:-mt-32 md:before:text-[20rem] md:before:content-["404"] lg:mt-10'
      }
    >
      <Heading>Oops !</Heading>
      <p className="my-4">Cette page n’existe pas.</p>
      <Link href="/" className="link link-primary text-lg">
        Retour à la page d’accueil
      </Link>
    </div>
  );
}
