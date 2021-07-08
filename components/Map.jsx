import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

function createMap(rootElement) {
  const L = require('leaflet');

  const coord = L.latLng(46.16877969546519, 6.11894235702476);
  const map = L.map(rootElement, {
    attributionControl: false,
  }).setView(coord, 12);
  map.scrollWheelZoom.disable();

  L.control.attribution({
    prefix: false,
    position: 'topright'
  }).addTo(map);

  L.tileLayer(
    'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' +
      process.env.NEXT_PUBLIC_MAPTILER_KEY,
    {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      crossOrigin: true,
    }
  ).addTo(map);

  const icon = L.icon({
    iconUrl: 'images/map-marker.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  L.marker(coord, { icon: icon })
    .bindPopup(
      `<strong>Mouvement & Santé</strong><br />
      Route de Saint-Julien 129<br />
      1228 Plan-les-Ouates`,
      {
        offset: [0, -32],
      }
    )
    .addTo(map);

  return map;
}

export default function Map() {
  const rootRef = useRef();

  useEffect(() => {
    const map = createMap(rootRef.current);

    return () => {
      map.remove();
    };
  }, []);

  return <div className="h-96" ref={rootRef}></div>;
}
