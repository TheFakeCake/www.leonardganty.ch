import { useEffect, useRef } from 'react';
import { createMap, destroyMap } from '../lib/map';

export default function Map() {
  const rootRef = useRef();

  useEffect(() => {
    let map = createMap(rootRef.current);

    return () => {
      destroyMap(map);
      map = null;
    };
  }, []);

  return (
    <div
      className="relative h-128 lg:h-144"
      aria-labelledby="map-label"
      aria-describedby="map-description"
      ref={rootRef}
    >
      <div id="map-label" hidden>
        Carte
      </div>
      <div id="map-description" hidden>
        Carte de Genève avec un marqueur à l&apos;emplacement du cabinet de
        Léonard Ganty.
      </div>
      <div className="absolute inset-0 shadow-inner z-10 pointer-events-none"></div>
      <div id="map-popup" className="map-popup">
        <strong>Mouvement &amp; Santé</strong><br />
        Route de Saint-Julien 129<br />
        1228 Plan-les-Ouates
      </div>
    </div>
  );
}
