import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { absoluteUrl } from '../lib/utils';

function SEO({ title, description }) {
  const router = useRouter();
  const canonicalUrl = absoluteUrl(`${router.basePath}${router.pathname}`);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteUrl('/images/og-image.jpg')} />
      <meta property="og:image:alt" content="Léonard Ganty Acupuncture" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_CH" />
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
