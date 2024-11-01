'use client';

import { useEffect, useRef } from 'react';

export default function Map() {
  const rootRef = useRef(null);
  const destroyMapRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadAndCreateMap = async () => {
      const { createMap, destroyMap } = await import('../../lib/map');

      if (rootRef.current) {
        destroyMapRef.current = destroyMap;
        mapRef.current = createMap(rootRef.current);
      }
    };

    let observer = null;

    if (
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'isIntersecting' in window.IntersectionObserverEntry.prototype
    ) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.length > 0 && entries[0].isIntersecting) {
            observer.unobserve(rootRef.current);
            observer.disconnect();
            observer = null;

            loadAndCreateMap();
          }
        },
        {
          rootMargin: '40px',
        },
      );

      observer.observe(rootRef.current);
    } else {
      loadAndCreateMap();
    }

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (mapRef.current) {
        destroyMapRef.current(mapRef.current);
        destroyMapRef.current = null;
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="group relative h-128 focus:outline-none lg:h-128"
      aria-labelledby="map-label"
      aria-describedby="map-description"
      tabIndex="0"
      ref={rootRef}
    >
      <div id="map-label" hidden>
        Carte
      </div>
      <div id="map-description" hidden>
        Carte de Genève avec un marqueur à l’emplacement du cabinet de Léonard
        Ganty.
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 shadow-inner group-focus-visible:ring-2 group-focus-visible:ring-inset group-focus-visible:ring-primary"></div>
      <div id="map-popup" className="map-popup">
        <strong>Mouvement &amp; Santé</strong>
        <br />
        Route de Saint-Julien 129
        <br />
        1228 Plan-les-Ouates
      </div>
    </div>
  );
}
