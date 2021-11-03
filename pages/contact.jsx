import ContentColumn from '../components/layout/ContentColumn';
import ContentRow from '../components/layout/ContentRow';
import Heading from '../components/Heading';
import Map from '../components/Map';
import { emailAddress, isMobile, phoneNumber } from '../app-parameters';

export default function Contact() {
  return (
    <>
      <ContentRow tag="section">
        <ContentColumn>
          <Heading>Me contacter</Heading>
          <div className="grid grid-cols-2 gap-x-1.5 gap-y-2">
            <div className="text-right">Par téléphone&nbsp;:</div>
            {isMobile ? (
              <a
                className="link link-primary text-left"
                href={`tel:${phoneNumber}`}
              >
                {phoneNumber}
              </a>
            ) : (
              <div className="text-left">{phoneNumber}</div>
            )}
            <div className="text-right">Par e-mail&nbsp;:</div>
            <a
              className="link link-primary text-left"
              href={`mailto:${emailAddress}`}
            >
              {emailAddress}
            </a>
          </div>
        </ContentColumn>
      </ContentRow>

      <ContentRow tag="section">
        <ContentColumn className="max-w-full">
          <Heading>Adresse</Heading>

          <address className="mb-4 text-lg not-italic">
            Cabinet <em>Mouvement &amp; Santé</em>
            <br />
            Route de Saint-Julien 129
            <br />
            CH-1228 Plan-les-Ouates
          </address>
          <p className="my-2 mx-auto max-w-prose">
            L&apos;entrée pincipale se trouve du coté de{' '}
            <em>La&nbsp;Promenade</em>.
          </p>
          <p className="my-2 mx-auto max-w-prose">
            Pour les <strong>personnes à mobilité réduite</strong>, un accès
            avec une rampe se trouve du côte de la route de Saint-Julien.
          </p>

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
          </div> */}
        </ContentColumn>
      </ContentRow>

      <Map />
    </>
  );
}
