import Image from 'next/legacy/image';

import PhoneNumber from './PhoneNumber';

import logoMouvementEtSante from '../../public/images/logo-mouvement-et-santé.png';
import logoASCA from '../../public/images/logo-asca.png';
import logoRME from '../../public/images/logo-rme.svg';
import { emailAddress } from '../../app-parameters';

function PageFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <address className="mb-1 not-italic" aria-label="Adresse">
        Route de Saint-Julien 129
        <br />
        CH-1228 Plan-les-Ouates
      </address>
      <address className="my-2 not-italic" aria-label="Numéro de téléphone">
        <PhoneNumber linkClassName="link text-lg ring-amber-200 ring-offset-primary-dark focus:ring-offset-4 hover:text-amber-200" />
      </address>
      <address className="not-italic" aria-label="Adresse e-mail">
        <a
          className="link text-lg ring-amber-200 ring-offset-primary-dark hover:text-amber-200 focus:ring-offset-4"
          href={'mailto:' + emailAddress}
        >
          {emailAddress}
        </a>
      </address>

      <a
        className="link mt-6 inline-block w-44 ring-amber-200 ring-offset-primary-dark hover:scale-105 focus:ring-offset-4"
        href="https://mouvementetsante.ch/"
      >
        <Image
          src={logoMouvementEtSante}
          alt="Logo de Mouvement et Santé"
          title="Le cabinet Mouvement et Santé dans lequel Léonard Ganty pratique l'acupuncture"
          layout="responsive"
        />
      </a>

      <div className="mt-4">
        <Image
          src={logoASCA}
          alt="Logo de l'ASCA"
          title="Fondation suisse pour les médecines complémentaires"
          className="inline-block"
          width={100}
          height={32}
          objectFit="contain"
          objectPosition="left"
        />
        <Image
          src={logoRME}
          alt="Logo de du RME"
          title="Registre de Médecine Empirique"
          className="inline-block"
          width={70}
          height={32}
          objectFit="contain"
          objectPosition="right"
        />
      </div>

      <div className="mt-6 text-sm opacity-75">
        &copy; Copyright Léonard Ganty - {year}
      </div>
      <div className="text-sm opacity-75">Réalisé par Benjamin Ganty.</div>
    </footer>
  );
}

export default PageFooter;
