const SITE_BASE = 'https://octomedia.agency';

interface CanonicalOptions {
  path: string;
  locale?: string;
  removeTrailingSlash?: boolean;
}

export function generateCanonical({
  path,
  locale = 'en',
  removeTrailingSlash = false,
}: CanonicalOptions): string {
  let normalizedPath = path;

  if (normalizedPath === '/') {
    return SITE_BASE + '/';
  }

  if (removeTrailingSlash && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  const url = new URL(SITE_BASE);
  url.pathname = normalizedPath;

  return url.toString();
}

export function getCurrentPageCanonical(
  pathname: string,
  locale: string = 'en'
): string {
  let path = pathname;

  if (locale && locale !== 'en') {
    if (path.startsWith(`/${locale}`)) {
      path = path.slice(locale.length + 1);
    }
  }

  if (!path || path === '/') {
    return SITE_BASE + '/';
  }

  return generateCanonical({
    path,
    locale,
    removeTrailingSlash: false,
  });
}

export const SITE_URL = SITE_BASE;
