import { useEffect, useRef } from 'react';

function OneDoc() {
  const iframeRef = useRef();

  useEffect(() => {
    function onMessageHandler(t) {
      var e = t.data['od-widget-id'],
        d = t.data['od-widget-height'],
        a = t.data['od-widget-ios'];
      if (e) {
        const i = iframeRef.current;
        d && (i.style.height = `calc(${d}px + var(--footer-wave-height))`),
          !0 === a &&
            ((i.style.width = '100px'),
            (i.style['min-width'] = '100%'),
            (i.scrolling = 'no'));
      }
    }

    window.addEventListener('message', onMessageHandler);
    iframeRef.current.src =
      'https://www.onedoc.ch/fr/widget/a2636ad4cc2e8531ee5fdff8925ee9fd2ff3635f7253819175583d4b082ebff0';

    return () => {
      window.removeEventListener('message', onMessageHandler);
    };
  }, []);

  return (
    <iframe
      className="od-widget w-full h-112 box-content border-0"
      id="od-widget-a2636ad4cc2e8531ee5fdff8925ee9fd2ff3635f7253819175583d4b082ebff0"
      src="about:blank"
      ref={iframeRef}
    >
      <p className="my-8 pb-footer-wave-height">
        Votre navigateur n’est pas compatible, merci de prendre rendez-vous
        directement sur <em>OneDoc</em> à l’adresse{' '}
        <a href="https://www.onedoc.ch/fr/acupuncteur/plan-les-ouates/pce3v/leonard-ganty">
          https://www.onedoc.ch/fr/acupuncteur/plan-les-ouates/pce3v/leonard-ganty
        </a>
      </p>
    </iframe>
  );
}

export default OneDoc;
