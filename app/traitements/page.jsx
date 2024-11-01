import ContentColumn from '../components/layout/ContentColumn';
import ContentRow from '../components/layout/ContentRow';
import Heading from '../components/Heading';

export const metadata = {
  title: 'Les traitements d’acupuncture pratiqués par Léonard Ganty',
  description:
    'La médecine traditionnelle chinoise comprend de nombreuses techniques, dont l’acupuncture, pour traiter autant de maux et problèmes.',
};

export default function Traitements() {
  return (
    <ContentRow tag="section">
      <ContentColumn>
        <Heading level={1}>Traitements</Heading>

        <p>
          La médecine traditionnelle chinoise s’adresse à tous le monde et n’a
          que très peu de contre-indications. Lors de notre première séance, une
          anamnèse est faite dont les conclusions permettent d’adapter votre
          prise en charge selon votre problématique. Selon vos besoins et
          attentes, nous utiliserons différentes techniques de soins.
        </p>

        <Heading level={2}>Pour quels maux ?</Heading>

        <p className="my-2">
          Voici une liste non exhaustive de maux que la médecine traditionnelle
          chinoise peut prendre en charge.
        </p>
        <dl className="text-left">
          {[
            {
              dt: 'Douleurs musculo-squelettiques',
              dd: 'La médecine traditionnelle chinoise permet de soulager les douleurs du corps et améliorer votre mobilité lors de lombalgies, épicondylites, arthroses ou tendinopathies par exemple.',
            },
            {
              dt: 'Insomnies et fatigue',
              dd: 'Avoir un sommeil réparateur est fondamental pour une bonne santé, l’acupuncture permet d’améliorer la qualité du sommeil et de l’endormissement.',
            },
            {
              dt: 'Céphalées',
              dd: 'Les migraines ou maux de tête ont différentes origines qui peuvent être soulagées par l’acupuncture.',
            },
            {
              dt: 'Stress',
              dd: 'Notre société impose un rythme effréné au corps et à l’esprit conduisant parfois au stress chronique voire des burn-out. L’acupuncture est un excellent moyen de prise en charge ou de prévention de ces problématiques.',
            },
            {
              dt: 'Dépression',
              dd: 'Qu’il s’agisse de dépression saisonnière en hiver ou d’un état dépressif de diverses origines, l’acupuncture est un excellent moyen d’accompagnement.',
            },
            {
              dt: 'Troubles menstruels',
              dd: 'La santé des femmes lors des menstruations ou de la ménopause est malheureusement trop peu prise en charge car les symptômes sont considérés comme « normaux ». L’acupuncture permet de prendre en charge notamment la dysménorrhée, ménorragie ou les symptômes de (pré) ménopause.',
            },
            {
              dt: 'Fertilité',
              dd: 'Les troubles de la fertilité de l’homme ou de la femme sont difficiles à accepter car touchent l’essence même de notre existence. Les moyens de la médecine occidentale telle que la fécondation in vitro (FIV) sont souvent invasifs et lourds, l’acupuncture est un complément à ne pas négliger.',
            },
            {
              dt: 'Allergie',
              dd: 'Lorsque le printemps arrive, les désagréments liés aux pollens peuvent être atténués par l’acupuncture s’ils sont pris en charge dès la fin de l’hiver.',
            },
          ].map(({ dt, dd }, index) => {
            return [
              <dt className="font-semibold" key={`dt-${index}`}>
                {dt}
              </dt>,
              <dd className="mb-2 ml-4 last:mb-0" key={`dd-${index}`}>
                {dd}
              </dd>,
            ];
          })}
        </dl>

        <Heading level={2}>La médecine traditionnelle chinoise</Heading>

        <p className="my-2">
          La médecine traditionnelle chinoise est une pratique ancestrale
          héritée du Taoïsme. Cette thérapie est utilisée depuis plusieurs
          millénaires dans la Chine ancienne puis le Japon, la Corée ou le
          Vietnam. Elle s’appuie sur différents principes tirés de l’observation
          de la nature à l’exemple des 5 éléments ou le yin et le yang.
        </p>
        <p className="my-2">
          L’objectif de cette médecine est la recherche de l’équilibre et
          l’harmonie des énergies qui circulent dans le corps par les méridiens.
          S’agissant d’une médecine holistique, l’harmonie s’applique à
          l’énergie mais aussi l’esprit, le corps ou la diététique. La médecine
          chinoise possède un arsenal thérapeutique varié, tels que
          l’acupuncture, les ventouses, la moxibustion ou le massage Tui Na. Ces
          différentes techniques sont utilisées selon vos besoins, attentes ou
          éventuelles craintes des aiguilles.
        </p>

        <Heading level={3}>Acupuncture</Heading>

        <p className="my-2">
          L’acupuncture est une technique qui utilise des aiguilles très fines
          (1/4 de millimètre) piquée dans la peau. Les aiguilles (stériles et
          jetables) sont insérées sur des points spécifiques qui parcourent les
          méridiens. Ces points d’acupuncture permettent de stimuler l’énergie
          ou de la faire circuler selon le besoin. Lors d’une séance, les
          aiguilles appliquées restent en place environ 30 minutes selon les
          problématiques. Ce laps de temps permet d’utiliser d’autres techniques
          manuelles par exemple, ou simplement de se relaxer.
        </p>

        <Heading level={3}>Ventouse</Heading>

        <p className="my-2">
          L’utilisation de ventouses fait partie de la médecine traditionnelle
          chinoise et faisait aussi partie de notre médecine « de grand-mère »
          en Europe jusqu’au 20e siècle. L’intérêt des ventouses est de stimuler
          des points d’acupuncture sans utiliser d’aiguilles ainsi que de
          chasser les pathogènes. La méthode consiste à flamber l’intérieur
          d’une ventouse en verre ou en bambou avant de l’appliquer sur la peau.
          Le vide d’air créer une aspiration des tissus superficiels permettant
          un effet énergétique mais aussi mécanique d’assouplissement de la peau
          et des muscles.
        </p>

        <Heading level={3}>Moxibustions</Heading>

        <p className="my-2">
          La moxibustion définit l’utilisation de « moxa » pour stimuler un
          point d’acupuncture en le réchauffant. Le moxa est issu d’une plante,
          l’armoise chinoise, conditionné sous forme de bâton, de cône à encens
          ou de feuilles séchées. Après avoir allumé le moxa, celui-ci est
          rapproché de la peau ou appliquer sur du gingembre pour ne pas brûler
          la peau. La chaleur agréable dégagée permet de traiter différents maux
          durant nos séances en cabinet mais aussi vous-même à la maison, par
          exemple pour les femmes enceintes dont le bébé est en siège.
        </p>

        <Heading level={3}>Tui Na</Heading>

        <p className="my-2">
          Le Tui Na est une technique manuelle de massage chinois ayant un
          objectif de stimulation du corps et de l’esprit. Les manœuvres de
          massages se font sur les méridiens et des points d’acupuncture
          spécifiques permettant de faire circuler l’énergie. Les techniques
          manuelles comprennent aussi l’acupression qui consiste en
          l’utilisation des mains plutôt qu’une aiguille afin de stimuler un
          point d’acupuncture.
        </p>
      </ContentColumn>
    </ContentRow>
  );
}
