export const cacheImageUrl = (url: string) => {
  return `${url}?t=${new Date().getTime()}`;
};
