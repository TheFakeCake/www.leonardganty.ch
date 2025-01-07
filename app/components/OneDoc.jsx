'use client';

import { useEffect, useRef } from 'react';

function OneDoc() {
  const iframeRef = useRef();
  const onedocId =
    '7038f07318df7d5a9d26209060fd5cebc2e363ed620a53ecc6eb0136f9f18004';

  useEffect(() => {
    const widgetConfigs = {
      [onedocId]: {
        measurementIds: [],
        hasGoogleTagTracking: false,
        hasFusedeck: false,
      },
    };

    function onMessageHandler(e) {
      var t = e.data['od-widget-id'],
        i = e.data['od-widget-height'],
        d = e.data['od-widget-ios'];

      if (t && t in widgetConfigs && onedocId === t) {
        var a = iframeRef.current;
        i && (a.style.height = `calc(${i}px + var(--footer-wave-height))`),
          !0 === d &&
            ((a.style.width = '100px'),
            (a.style['min-width'] = '100%'),
            (a.scrolling = 'no'));

        var g = e.data['od-tracking-configs'];
        void 0 !== g && (widgetConfigs[t].measurementIds = g);
        var o = e.data['od-has-google-tag-manager'];
        void 0 !== o && (widgetConfigs[t].hasGoogleTagTracking = o);
        var f = e.data['od-has-fusedeck'];
        void 0 !== f && (widgetConfigs[t].hasFusedeck = f);
        var n = e.data.GA4;

        if (widgetConfigs[t].hasGoogleTagTracking && window.dataLayer && n) {
          var s = Object.keys(n.properties),
            r = { event: n.name };
          s.forEach(function (e) {
            r[e] = n.properties[e];
          }),
            dataLayer.push(r);
        }

        if (widgetConfigs[t].hasFusedeck && window.fdData && n) {
          var s = Object.keys(n.properties),
            r = { event: n.name };
          s.forEach(function (e) {
            r[e] = n.properties[e];
          }),
            fdData.push(r);
        }

        if (n && void 0 !== window.gtag) {
          for (var w = 0; w < widgetConfigs[t].measurementIds.length; w++) {
            var f = widgetConfigs[t].measurementIds[w],
              c = ((s = Object.keys(n.properties)), { send_to: f });
            s.forEach(function (e) {
              c[e] = n.properties[e];
            }),
              gtag('event', n.name, c);
          }
        }
      }
    }

    window.addEventListener('message', onMessageHandler);
    iframeRef.current.src = `https://onedoc.ch/fr/widget/${onedocId}`;

    return () => {
      window.removeEventListener('message', onMessageHandler);
    };
  }, []);

  return (
    <iframe
      className="od-widget my-2 box-content w-full border-0 lg:mb-6 lg:mt-12"
      id={`od-widget-${onedocId}`}
      src="about:blank"
      ref={iframeRef}
    ></iframe>
  );
}

export default OneDoc;
