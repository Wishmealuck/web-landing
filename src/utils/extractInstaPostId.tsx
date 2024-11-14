export function extractInstaPostId(url: string) {
  const regex = /\/(?:p|reel)\/([A-Za-z0-9_-]+)/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
