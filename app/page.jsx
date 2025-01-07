import Image from 'next/image';
import Link from 'next/link';

import Button from './components/Button';
import ContentColumn from './components/layout/ContentColumn';
import ContentRow from './components/layout/ContentRow';
import Heading from './components/Heading';
import Map from './components/Map';

import logoASCA from '../public/images/logo-asca.png';
import logoRME from '../public/images/logo-rme.svg';
import photoLeonard from '../public/images/photo-leonard-ganty.jpg';
import titleImage from '../public/images/manuscrits-dynastie-qing.jpg';
import titleImageMobile from '../public/images/manuscrits-dynastie-qing-mobile.jpg';

function nextOptimizedImageUrl(src, width, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export const metadata = {
  title: 'Léonard Ganty - Acupuncture à Plan-les-Ouates, Genève',
  description:
    'Léonard Ganty vous accueil sur rendez-vous à Plan-les-Ouates pour des séances d’acupuncture et autres traitements de médecine traditionnelle chinoise.',
  alternates: {
    canonical: '/',
  },
};

export default function Accueil() {
  return (
    <>
      <div className="relative isolate">
        <div className="bg-black/20 py-6 text-center lg:py-20">
          <h1 className="text-shadow-xl text-shadow-blurry text-shadow-opacity-100 mb-10 text-4xl leading-relaxed text-white lg:mb-16">
            Léonard Ganty
            <br />
            <span className="text-5xl">Acupuncture</span>
          </h1>
          <Link href="/prendre-un-rendez-vous" passHref legacyBehavior>
            <Button>Prendre un rendez-vous</Button>
          </Link>
        </div>
        <picture className="absolute inset-0 z-[-1]">
          <source
            srcSet={nextOptimizedImageUrl(titleImage.src, 2048)}
            media="(min-width: 1921px)"
          />
          <source
            srcSet={nextOptimizedImageUrl(titleImage.src, 1920)}
            media="(min-width: 1201px)"
          />
          <source
            srcSet={nextOptimizedImageUrl(titleImage.src, 1200)}
            media="(min-width: 1081px)"
          />
          <source
            srcSet={nextOptimizedImageUrl(titleImage.src, 1080)}
            media="(min-width: 829px)"
          />
          <source
            srcSet={nextOptimizedImageUrl(titleImage.src, 828)}
            media="(min-width: 768px)"
          />
          <source
            srcSet={nextOptimizedImageUrl(titleImageMobile.src, 640)}
            media="(min-width: 385px)"
          />
          <img
            className="h-full w-full object-cover object-right-top md:object-center"
            src={nextOptimizedImageUrl(titleImageMobile.src, 384)}
            alt="Photo de manuscrits de médecine chinoise"
          />
        </picture>
      </div>

      <ContentRow tag="section">
        <ContentColumn>
          <Heading level={2} stylingLevel={1}>
            L’acupuncture
          </Heading>
          <p className="my-2">
            La médecine traditionnelle chinoise est une pratique ancestrale
            héritée du Taoïsme. Cette thérapie millénaire s’appuie sur
            différents outils tels que les aiguilles, les ventouses, la
            moxibustion ou le massage Tui Na.
          </p>
          <p className="my-2">
            Qu’elle soit thérapeutique ou préventive, l’acupuncture recherche
            l’équilibre et l’harmonie des énergies du corps. Les séances
            s’adressent à toute population de l’enfance à l’âge adulte pour
            traiter douleurs, insomnies, troubles menstruels, ou le stress par
            exemple.
          </p>
          <div className="mt-3">
            <Link href="/traitements" className="link link-primary text-lg">
              En savoir plus sur la médecine traditionnelle chinoise
            </Link>
          </div>
        </ContentColumn>
      </ContentRow>

      <ContentRow tag="section">
        <ContentColumn>
          <Heading level={2} stylingLevel={1}>
            Les prises en charge
          </Heading>
          <p className="my-2">
            Je prends en charge des patients en cabinet (
            <em>Mouvement et Santé</em> à Plan-les-Ouates, Genève) ainsi qu’à
            domicile sur demande.
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
          <p className="my-2">
            Prix des consultations en cabinet&nbsp;: 120 CHF
          </p>
          <div className="mb-8 mt-3">
            <Link
              href="/prendre-un-rendez-vous"
              className="link link-primary text-lg"
            >
              Prendre un rendez-vous
            </Link>
          </div>
          <div className="flex justify-center gap-8">
            <Image
              src={logoASCA}
              alt="Logo de l'ASCA"
              title="Fondation suisse pour les médecines complémentaires"
              height={52}
            />
            <Image
              src={logoRME}
              alt="Logo du RME"
              title="Registre de Médecine Empirique"
              height={52}
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
          <p className="my-2">
            Aujourd’hui, je continue mon activité aux Hôpitaux Universitaires de
            Genève en plus de ma pratique de l’acupuncture en cabinet et à
            domicile.
          </p>
          <div className="mb-6 mt-3">
            <Link href="/mon-parcours" className="link link-primary text-lg">
              En savoir plus sur mon parcours
            </Link>
          </div>
          <Image
            src={photoLeonard}
            alt="Photo de Léonard Ganty"
            width={448}
            className="mx-auto"
          />
        </ContentColumn>
      </ContentRow>

      <Map />
    </>
  );
}
