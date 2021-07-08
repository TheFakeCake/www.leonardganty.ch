import Link from 'next/link';

import Button from '../components/Button';

export default function MonParcours() {
  return (
    <div className="p-1">
      <h1>Mon parcours</h1>
      <p>En construction ...</p>
      <Link href="/" passHref>
        <Button className="block">Retour à l&apos;accueil</Button>
      </Link>
    </div>
  );
}
