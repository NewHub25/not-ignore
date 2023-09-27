import { useParams } from "react-router-dom";
import "./../css/computer.css";

export const VideoRoom = () => {
  const { roomId } = useParams();

  return (
    <div className="computer-container">
      <div className="computer-monitor">
        <iframe
          // width="560"
          // height="315"
          src={`https://www.youtube.com/embed/${roomId}?si=e3UBTa8XcDFqBKkJ`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ width: "100%", height: "100%" }}
        >
          Su navegador no soporta IFRAMES
        </iframe>
      </div>
      <div className="computer-bottom"></div>
      <div className="computer-stand"></div>
      <div className="computer-stand-bottom"></div>
    </div>
  );
};
