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
import {
  mouseOnly,
  platformModifierKeyOnly,
  primaryAction,
} from 'ol/events/condition';
import {
  Attribution,
  Attribution as AttributionControl,
  Control as BaseControl,
  Zoom as ZoomControl,
} from 'ol/control';
import {
  DragPan,
  MouseWheelZoom,
  defaults as defaultInteractions,
} from 'ol/interaction';
import { fromLonLat } from 'ol/proj';
import { toSize } from 'ol/size';

class GoogleMapsLinkControl extends BaseControl {
  constructor(opt_options) {
    const options = opt_options || {};

    const div = document.createElement('div');
    div.className = 'google-maps-link-control ol-control ol-unselectable';

    const link = document.createElement('a');

    if (typeof options.url === 'string' || options.url instanceof String) {
      link.href = options.url;
    } else {
      console.warn('Missing "url" in GoogleMapsLinkControl options');
    }

    if (!options.label) {
      options.label = 'Voir sur Google Maps';
    }
    link.innerText = options.label;

    div.appendChild(link);

    super({
      element: div,
      target: options.target,
    });
  }
}

// Coordinates
const coord = fromLonLat([6.11894235702476, 46.16877969546519]);

const googleMapsUrl =
  'https://www.google.com/maps/place/Mouvement+%26+Sant%C3%A9/@46.168775,6.1167522,17z/data=!3m1!4b1!4m5!3m4!1s0x478c7b55384b8407:0x6e365acdfedc9b1!8m2!3d46.168775!4d6.1189409';

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

  const mapControls = [
    new ZoomControl(),
    new GoogleMapsLinkControl({
      url: googleMapsUrl,
    }),
    new AttributionControl(),
  ];

  const mapInteractions = defaultInteractions({
    altShiftDragRotate: false,
    dragPan: false,
    mouseWheelZoom: false,
    pinchRotate: false,
  }).extend([
    new DragPan({
      // Pan with 2 fingers on mobile and left mouse button WITHOUT SHIFT on desktop
      condition: function (event) {
        return (
          this.getPointerCount() === 2 ||
          (mouseOnly(event) &&
            primaryAction(event) &&
            !event.originalEvent.shiftKey)
        );
      },
    }),
    new MouseWheelZoom({
      // Zoom with ctrl/cmd + mouse wheel
      condition: platformModifierKeyOnly,
    }),
  ]);

  const mapView = new View({
    constrainResolution: true,
    center: coord,
    zoom: 12,
    maxZoom: 20,
  });

  const map = new Map({
    target: rootElement,
    layers: [mapTilerStreetLayer, iconLayer],
    overlays: [popupOverlay],
    controls: mapControls,
    interactions: mapInteractions,
  });

  // Show/hide popup on icon/map click
  map.on('singleclick', function (e) {
    if (
      map.getFeaturesAtPixel(e.pixel, { hitTolerance: 6 }).length > 0 &&
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

  // If IntersectionObserver API is supported, use it to load the map's data when
  // it enters the viewport
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype
  ) {
    map.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries.length > 0 && entries[0].isIntersecting) {
          map.setView(mapView);
          observer.unobserve(map.getTargetElement());
          observer.disconnect();
        }
      },
      {
        rootMargin: '40px',
      }
    );
    map.intersectionObserver.observe(map.getTargetElement());
  } else {
    map.setView(mapView);
  }

  return map;
}

/**
 * Destroy the given OpenLayers map
 *
 * @param {Map}
 */
export function destroyMap(map) {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'isIntersecting' in window.IntersectionObserverEntry.prototype
  ) {
    map.intersectionObserver.unobserve(map.getTargetElement());
    map.intersectionObserver.disconnect();
  }
  map.setTarget(null);
}
