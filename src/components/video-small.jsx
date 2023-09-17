import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { Link } from "react-router-dom";
import digVideoId from "../logic/dig-video-id";

export default function VideoSmall({ videoUrl, title, technologies }) {
  const { queryDomain, idYouTube } = digVideoId(videoUrl);
  console.log(queryDomain);
  return (
    <Card sx={{ minHeight: "200px", width: 300 }}>
      <CardCover>
        <Link to={videoUrl}>
          <img
            src={`https://i3.ytimg.com/vi/${idYouTube}/maxresdefault.jpg`}
            loading="lazy"
            alt=""
          />
        </Link>
      </CardCover>
      <CardCover
        sx={{
          pointerEvents: "none",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent
        sx={{
          justifyContent: "flex-end",
          alignItems: "end",
          pointerEvents: "none",
        }}
      >
        <Typography level="title-lg" textColor="#fff">
          {title}
        </Typography>
        <Typography
          startDecorator={<ViewInArIcon color="primary" />}
          textColor="neutral.300"
          align="right"
        >
          {`[${technologies.join(",")}]`}
        </Typography>
      </CardContent>
    </Card>
  );
}
