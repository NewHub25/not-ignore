const digVideoId = (url) => {
  const [queryDomain, idYouTube] = url.split(/(?<==)/);

  return { queryDomain, idYouTube };
};
export default digVideoId;
