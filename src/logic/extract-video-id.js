const extractVideoId = (url) => {
  let [queryDomain, idYouTube, seconds] = url.split(/(?<==)/);
  if (seconds) {
    idYouTube = idYouTube.replace("=", "");
  }

  return { queryDomain, idYouTube };
};
export default extractVideoId;
