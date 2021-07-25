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

  return <div className="h-96" ref={rootRef}></div>;
}
