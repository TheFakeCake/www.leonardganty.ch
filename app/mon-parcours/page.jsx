import ContentColumn from '../components/layout/ContentColumn';
import ContentRow from '../components/layout/ContentRow';
import Heading from '../components/Heading';
import Quotation from '../components/Quotation';

export const metadata = {
  title: 'Le parcours et les formations d’acupuncteur de Léonard Ganty',
  description:
    'Léonard Ganty a effectué sa formation d’acupuncture à Genève en parallèle de sa pratique de physiothérapeute.',
  alternates: {
    canonical: '/mon-parcours',
  },
};

export default function MonParcours() {
  return (
    <ContentRow tag="section">
      <ContentColumn>
        <Heading>Mon parcours</Heading>

        <p className="my-2">
          Physiothérapeute de formation, j’ai eu la chance de pratiquer la
          physiothérapie du sport en cabinet et avec des sportifs professionnels
          tel que la relève du <em>Genève-Servette Hockey Club</em>.
        </p>

        <p className="my-2">
          Après ces expériences, j’ai rapidement entamé mon cursus de formation
          en médecine traditionnelle chinoise pour lequel j’ai obtenu mon
          diplôme auprès du{' '}
          <a className="link link-primary" href="https://esc-suisse.ch/">
            Europe&#8209;Shanghai College of TCM
          </a>
          .
        </p>

        <p className="my-2">
          J’ai choisi de me tourner vers cette médecine afin de pouvoir ouvrir
          le champ de mes possibilités de prises en charge. Je peux ainsi
          accompagner des personnes qui souffrent de problématiques pour
          lesquelles je n’ai pas d’outils en tant que physiothérapeute, comme
          les insomnies, le stress ou les troubles menstruels.
        </p>

        <p className="my-2">
          Aujourd’hui, j’ai la chance de pouvoir vous accueillir en cabinet pour
          des traitements d’acupuncture ou de venir directement chez vous si
          besoin.
        </p>

        <p className="my-2">
          En plus de l’acupuncture, je poursuis également mon activité de
          physiothérapeute aux <em>Hôpitaux Universitaires de Genève</em> où je
          prends en charge des patients ayant subi des accidents ou
          interventions chirurgicales orthopédiques.
        </p>

        <Quotation
          className="mr-3 mt-6 text-right sm:mr-0"
          text="Plus le sage donne aux autres, plus il possède."
          author="Lao Tseu"
          source="Dao de jing"
        />
      </ContentColumn>
    </ContentRow>
  );
}
