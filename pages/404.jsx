import Link from 'next/link';

import Heading from '../components/Heading';

const containerClass = `
  relative isolate mt-6 mb-footer-wave-height pb-12 text-center overflow-hidden md:overflow-visible lg:mt-10
  before:absolute before:inset-0 before:z-[-1] before:content-["404"] before:text-center
  before:text-[10rem] before:leading-snug before:font-semibold before:text-gray-200
  before:md:content-["404"] before:md:-mt-32 before:md:text-[20rem]
`
  .trim()
  .split(/\s+/)
  .join(' ');

export default function PageNotFound() {
  return (
    <div className={containerClass}>
      <Heading className="mt-0 mb-6">Oops !</Heading>
      <p className="my-4">Cette page n’existe pas.</p>
      <Link href="/">
        <a className="link link-primary text-lg">
          Retour à la page d’accueil
        </a>
      </Link>
    </div>
  );
}
