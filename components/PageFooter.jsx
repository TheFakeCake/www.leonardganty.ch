import Image from 'next/image';

import logoMouvementEtSante from '../public/images/logo-mouvement-et-santé.png';
import logoASCA from '../public/images/logo-asca.png';
import logoRME from '../public/images/logo-rme.svg';

function PageFooter() {
  const emailAddress = 'therapie' + '@gant' + 'y.ch';
  const year = new Date().getFullYear();
  return (
    <footer className="page-footer">
      <address className="mb-1 not-italic" aria-label="Adresse">
        Route de Saint-Julien 129
        <br />
        CH-1228 Plan-les-Ouates
      </address>
      <address className="mb-1 not-italic" aria-label="Numéro de téléphone">
        +41 79 843 74 82
      </address>
      <address className="not-italic" aria-label="Adresse e-mail">
        <a
          className="link ring-yellow-200 ring-offset-4 ring-offset-primary-dark hover:text-yellow-200"
          href={'mailto:' + emailAddress}
        >
          {emailAddress}
        </a>
      </address>

      <a
        className="link inline-block w-44 mt-6 ring-yellow-200 ring-offset-4 ring-offset-primary-dark hover:scale-105"
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

      <div className="text-sm opacity-75 mt-6">
        &copy; Copyright Léonard Ganty - {year}
      </div>
      <div className="text-sm opacity-75">Réalisé par Benjamin Ganty.</div>
    </footer>
  );
}

export default PageFooter;
