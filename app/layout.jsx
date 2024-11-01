import { Lora } from 'next/font/google';

import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import { absoluteUrl } from '../lib/utils';

import '../styles/globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

export const viewport = {
  themeColor: '#991b1b',
};

export const metadata = {
  metadataBase: new URL(absoluteUrl('/')),
  manifest: '/site.webmanifest',
  openGraph: {
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'Léonard Ganty Acupuncture',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function Layout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="selection:text-shadow-none flex min-h-screen flex-col bg-stone-100 pt-16 font-serif selection:bg-primary-light selection:text-stone-50">
          <PageHeader />
          <main>{children}</main>
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
