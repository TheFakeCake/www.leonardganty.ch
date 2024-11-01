'use client';

import { useEffect, useState } from 'react';

import { phoneNumber } from '../../app-parameters';
import { isMobile } from '../../lib/utils';

function PhoneNumber({ linkClassName }) {
  const [linkView, setLinkView] = useState(false);

  useEffect(() => {
    setLinkView(isMobile());
  }, []);

  return linkView ? (
    <a className={linkClassName && linkClassName} href={`tel:${phoneNumber}`}>
      {phoneNumber}
    </a>
  ) : (
    phoneNumber
  );
}

export default PhoneNumber;
