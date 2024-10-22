import Head from 'next/head';
import Link from 'next/link';

import Heading from '../components/Heading';

const containerClass = `
  relative isolate mt-6 mb-footer-wave-height pb-12 text-center overflow-hidden md:overflow-visible lg:mt-10
  before:absolute before:inset-0 before:z-[-1] before:content-["404"] before:text-center
  before:text-[10rem] before:leading-snug before:font-semibold before:text-gray-200
  md:before:content-["404"] md:before:-mt-32 md:before:text-[20rem]
`
  .trim()
  .split(/\s+/)
  .join(' ');

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Oops ! Cette page n’existe pas</title>
      </Head>
      <div className={containerClass}>
        <Heading>Oops !</Heading>
        <p className="my-4">Cette page n’existe pas.</p>
        <Link href="/" className="link link-primary text-lg">
          Retour à la page d’accueil
        </Link>
      </div>
    </>
  );
}
