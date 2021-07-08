import Link from 'next/link';

import Button from '../components/Button';
import Map from '../components/Map';

export default function Contact() {
  return (
    <>
      <div className="p-1">
        <h1>Contact</h1>
        <p>En construction ...</p>
        <Link href="/" passHref>
          <Button className="block">Retour à l&apos;accueil</Button>
        </Link>
      </div>
      <Map />
    </>
  );
}
