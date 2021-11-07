import Head from 'next/head';

import OneDoc from '../components/OneDoc';

export default function TarifsEtRendezVous() {
  return (
    <>
      <Head>
        <title>Réserver une séance d’acupuncture avec Léonard Ganty</title>
        <meta
          name="description"
          content="Prenez rendez-vous avec Léonard Ganty pour une séance d’acupuncture et autres traitements de médecine traditionnelle chinoise."
        />
      </Head>

      <OneDoc></OneDoc>
    </>
  );
}
