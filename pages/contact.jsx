import Link from 'next/link';

import ContentColumn from '../components/layout/ContentColumn';
import ContentRow from '../components/layout/ContentRow';
import Heading from '../components/Heading';
import Map from '../components/Map';
import PhoneNumber from '../components/PhoneNumber';
import SEO from '../components/SEO';
import { emailAddress } from '../app-parameters';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contacter Léonard Ganty - Acupuncture"
        description="Le numéro de téléphone de Léonard Ganty et l’adresse du cabinet où il pratique l’acupuncture."
      />

      <ContentRow tag="section">
        <ContentColumn className="max-w-screen-md">
          <Heading>Me contacter</Heading>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto,18rem]">
            <div>
              <p className="mb-2">
                N’hésitez pas à me contacter par téléphone ou par e-mail.
              </p>
              <p>
                Pour tout nouveau rendez-vous, consultez la{' '}
                <Link href="/prendre-un-rendez-vous" passHref>
                  <a className="link link-primary">page dédiée</a>
                </Link>
                .
              </p>
            </div>

            <div className="text-center text-lg sm:pl-4 sm:border-l sm:border-primary sm:border-opacity-30 sm:text-left">
              <span className="block font-semibold">Téléphone</span>{' '}
              <PhoneNumber linkClassName="link link-primary" />
              <span className="block mt-2 font-semibold">E-mail</span>{' '}
              <a className="link link-primary" href={`mailto:${emailAddress}`}>
                {emailAddress}
              </a>
            </div>
          </div>
        </ContentColumn>
      </ContentRow>

      <ContentRow tag="section">
        <ContentColumn className="max-w-screen-md">
          <Heading>Adresse</Heading>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto,18rem]">
            <address className="mx-auto text-lg not-italic sm:order-2 sm:mx-0 sm:pl-4 sm:border-l sm:border-primary sm:border-opacity-30">
              <strong>Cabinet Mouvement &amp; Santé</strong>
              <br />
              Route de Saint-Julien 129
              <br />
              CH-1228 Plan-les-Ouates
            </address>

            <div>
              <p className="mb-2">
                L’entrée pincipale se trouve du coté de{' '}
                <em>La&nbsp;Promenade</em>.
              </p>
              <p>
                Pour les <strong>personnes à mobilité réduite</strong>, un accès
                avec une rampe se trouve du côte de la route de Saint-Julien.
              </p>
            </div>
          </div>
        </ContentColumn>
      </ContentRow>

      {/* <Heading level={2}>Comment venir</Heading>

          <div className="grid mx-auto max-w-screen-lg grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-2">
            <div>
              <Heading level={3}>En transport public</Heading>
              <ul className="border-t border-primary">
                <li className="my-1">
                  <span className="block font-semibold">Léman Express :</span>
                  Depuis la gare <em>Lancy-Bachet</em>, prendre le bus&nbsp;
                  <strong>D</strong> ou <strong>46</strong>.
                </li>
                <li className="my-1">
                  <span className="block font-semibold">Bus D :</span> Arrêt{' '}
                  <em>Plan-les-Ouates Mairie</em>.
                </li>
                <li className="my-1">
                  <span className="block font-semibold">Bus 46 :</span> Arrêt{' '}
                  <em>Vuattes</em> à 300 mètres du cabinet.
                </li>
              </ul>
            </div>
            <div>
              <Heading level={3}>En véhicule</Heading>
              <ul className="border-t border-primary">
                <li className="my-1">
                  <span className="block font-semibold">Places de parc :</span>
                  Des places de parc avec horodateur se trouvent le long de la
                  route de Saint-Julien
                </li>
                <li className="my-1">
                  <span className="block font-semibold">Parking :</span> Le
                  parking de la Migros de Plan-les-Ouates à 300 mètres du
                  cabinet.
                </li>
              </ul>
            </div>
          </div>
        </ContentColumn>
      </ContentRow> */}

      <Map />
    </>
  );
}
