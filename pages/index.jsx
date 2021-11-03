import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/Button';
import ContentColumn from '../components/layout/ContentColumn';
import ContentRow from '../components/layout/ContentRow';
import Heading from '../components/Heading';
import Map from '../components/Map';

import logoASCA from '../public/images/logo-asca.png';
import logoRME from '../public/images/logo-rme.svg';
import photoLeonard from '../public/images/photo-leonard-ganty.jpg';

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Page d'accueil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-8 pb-6 text-center">
        <h1 className="mb-10 text-4xl leading-relaxed">
          Léonard Ganty
          <br />
          <span className="text-5xl">Acupuncture</span>
        </h1>
        <Link href="/tarifs-et-rendez-vous" passHref>
          <Button>Prendre un rendez-vous</Button>
        </Link>
      </div>

      <ContentRow tag="section">
        <ContentColumn>
          <Heading level={2} stylingLevel={1}>
            L&apos;acupuncture
          </Heading>
          <p className="my-2">
            La médecine traditionnelle chinoise est une pratique ancestrale
            héritée du Taoïsme. Cette thérapie millénaire s’appuie sur
            différents outils tels que les aiguilles, les ventouses, la
            moxibustion ou le massage Tui Na.
          </p>
          <p>
            Qu’elle soit thérapeutique ou préventive, l’acupuncture recherche
            l’équilibre et l’harmonie des énergies du corps. Les séances
            s’adressent à toute population de l’enfance à l’âge adulte pour
            traiter la douleur, insomnies, troubles menstruels, ou stress par
            exemple.
          </p>
        </ContentColumn>
      </ContentRow>

      <ContentRow tag="section">
        <ContentColumn>
          <Heading level={2} stylingLevel={1}>
            Les prises en charge
          </Heading>
          <p className="my-2">
            Je prends en charge des patients en cabinet (Mouvement et Santé à
            Plan-les-Ouates, Genève) ainsi qu’à domicile sur demande.
          </p>
          <p className="my-2">
            En Suisse, les traitements sont pris en charge par les assurances
            complémentaires reconnaissant l’
            <abbr
              className="cursor-help"
              title="Fondation suisse pour les médecines complémentaires"
            >
              ASCA
            </abbr>{' '}
            et le{' '}
            <abbr
              className="cursor-help"
              title="Registre de Médecine Empirique"
            >
              RME
            </abbr>
            . Veuillez vérifier auprès de votre assurance complémentaire les
            prestations et thérapeutes pris en charge.
          </p>
          <p className="mb-8">
            Prix des consultations en cabinet&nbsp;: 110 CHF
          </p>
          <div>
            <Image
              src={logoASCA}
              alt="Logo de l'ASCA"
              title="Fondation suisse pour les médecines complémentaires"
              className="inline-block"
              width={160}
              height={48}
              objectFit="contain"
              objectPosition="left"
            />
            <Image
              src={logoRME}
              alt="Logo de du RME"
              title="Registre de Médecine Empirique"
              className="inline-block"
              width={100}
              height={48}
              objectFit="contain"
              objectPosition="right"
            />
          </div>
        </ContentColumn>
      </ContentRow>

      <ContentRow tag="section">
        <ContentColumn>
          <Heading level={2} stylingLevel={1}>
            Léonard Ganty
          </Heading>
          <p className="my-2">
            Physiothérapeute de formation, j’ai eu la chance de pratiquer la
            physiothérapie du sport en cabinet et avec des sportifs
            professionnels tel que la relève du Genève-Servette Hockey Club.
          </p>
          <p className="mb-6">
            Aujourd’hui, je continue mon activité aux Hôpitaux Universitaires de
            Genève en plus de ma pratique de l’acupuncture en cabinet et à
            domicile.
          </p>
          <div className="max-w-md mx-auto">
            <Image src={photoLeonard} alt="Photo de Léonard Ganty" />
          </div>
        </ContentColumn>
      </ContentRow>

      <Map />
    </>
  );
}
