export function absoluteUrl(path) {
  if (path === '' || path.charAt(0) !== '/') {
    path = `/${path}`;
  }
  return `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}${path}`;
}

export function isMobile() {
  return typeof window !== 'undefined'
    ? navigator.userAgent.match(/mobi/i)
    : false;
}

export function debounce(func, delay, maxDelay = null) {
  let timer = null;
  let maxDelayTime = null;

  return () => {
    if (maxDelay && !maxDelayTime) {
      maxDelayTime = Date.now() + maxDelay;
    }

    if (!maxDelay || Date.now() + delay < maxDelayTime) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        timer = null;
        maxDelayTime = null;
        func.apply(this, arguments);
      }, delay);
    }
  };
}
