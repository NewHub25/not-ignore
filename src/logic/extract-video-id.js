const extractVideoId = (url) => {
  // https://www.youtube.com/watch?v=iLmBy-HKIAw&list=WL&index=2
  // https://youtu.be/iLmBy-HKIAw?si=B82xaXgQArZbhKSW
  const result = url.match(
    /https:\/\/(www\.)?\w+\.\w+\/(\w+\?v=)?([0-9a-zA-Z-_]+)/
  );
  return { url: result[0], idYouTube: result?.[3] };
};

export default extractVideoId;
