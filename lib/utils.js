export function absoluteUrl(path) {
  if (path === '' || path.charAt(0) !== '/') {
    path = `/${path}`;
  }
  return `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}${path}`;
}
