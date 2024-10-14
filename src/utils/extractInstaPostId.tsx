export function extractInstaPostId(url: string) {
  const regex = /\/p\/([^\/]*)/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
