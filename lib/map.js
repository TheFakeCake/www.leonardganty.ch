import 'ol/ol.css';

import Feature from 'ol/Feature';
import Icon from 'ol/style/Icon';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { mouseOnly, platformModifierKeyOnly } from 'ol/events/condition';
import {
  DragPan,
  MouseWheelZoom,
  defaults as defaultInteractions,
} from 'ol/interaction';
import { fromLonLat } from 'ol/proj';
import { toSize } from 'ol/size';

// Coordinates
const coord = fromLonLat([6.11894235702476, 46.16877969546519]);

function showPopupOverlay(popupOverlay) {
  popupOverlay.setPosition(coord);
}

function hidePopupOverlay(popupOverlay) {
  popupOverlay.setPosition(undefined);
}

/**
 * Create a new map using OpenLayers
 *
 * @param {HTMLElement} rootElement
 * @returns {Map}
 */
export function createMap(rootElement) {
  const mapTilerStreetSource = new XYZ({
    url:
      'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' +
      process.env.NEXT_PUBLIC_MAPTILER_KEY,
    tileSize: 512,
    crossOrigin: 'anonymous',
    attributions: [
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>',
      '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap</a>',
    ],
    attributionsCollapsible: false,
  });

  const mapTilerStreetLayer = new TileLayer({
    source: mapTilerStreetSource,
  });

  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 1],
      scale: 1.25,
      imgSize: toSize([20, 32]),
      src: 'images/map-marker.svg',
    }),
  });

  const iconFeature = new Feature({
    geometry: new Point(coord),
  });
  iconFeature.setStyle(iconStyle);

  const iconSource = new VectorSource({
    features: [iconFeature],
  });

  const iconLayer = new VectorLayer({
    source: iconSource,
  });

  const popupOverlay = new Overlay({
    element: rootElement.querySelector('#map-popup'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
    offset: [0, -40],
    stopEvent: false,
  });

  const mapInteractions = defaultInteractions({
    dragPan: false,
    mouseWheelZoom: false,
  }).extend([
    // Pan with 2 fingers on mobile and ctrl/cmd on desktop
    new DragPan({
      condition: function (event) {
        return this.getPointerCount() === 2 || mouseOnly(event);
      },
    }),
    // Zoom with ctrl/cmd + mouse wheel
    new MouseWheelZoom({
      condition: platformModifierKeyOnly,
    }),
  ]);

  const map = new Map({
    target: rootElement,
    layers: [mapTilerStreetLayer, iconLayer],
    overlays: [popupOverlay],
    interactions: mapInteractions,
    view: new View({
      constrainResolution: true,
      center: coord,
      zoom: 12,
      maxZoom: 20,
    }),
  });

  // Show/hide popup on icon/map click
  map.on('singleclick', function (e) {
    if (
      map.getFeaturesAtPixel(e.pixel).length > 0 &&
      !popupOverlay.getPosition()
    ) {
      popupOverlay.setPosition(coord);
    } else {
      popupOverlay.setPosition(undefined);
    }
  });

  // Set pointer cursor when hovering the icon
  map.on('pointermove', function (e) {
    const hit = map.getFeaturesAtPixel(e.pixel).length > 0;
    map.getTargetElement().style.cursor = hit ? 'pointer' : 'default';
  });

  return map;
}

/**
 * Destroy the given OpenLayers map
 *
 * @param {Map}
 */
export function destroyMap(map) {
  map.setTarget(null);
}