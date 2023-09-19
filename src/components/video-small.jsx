import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { Link } from "react-router-dom";
import extractVideoId from "../logic/extract-video-id";

export default function VideoSmall({
  author,
  // description,
  keywords,
  title,
  url,
}) {
  const { idYouTube } = extractVideoId(url);
  return (
    <Card
      component="div"
      sx={{
        aspectRatio: "3/2",
        width: "min(70%,300px)",
        "--Card-radius": ".5rem",
      }}
    >
      <CardCover>
        <Link to={url}>
          <img
            src={`https://i3.ytimg.com/vi/${idYouTube}/maxresdefault.jpg`}
            loading="lazy"
            alt={title}
            style={{ borderRadius: ".5rem" }}
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
        <Typography level="title-lg" alignSelf="start" textColor="#eee">
          {title}
        </Typography>
        <Typography level="h4" textColor="#eee">
          {author}
        </Typography>
        <Typography
          startDecorator={<ViewInArIcon color="primary" />}
          textColor="neutral.300"
          align="right"
        >
          {`[${keywords.join(", ")}]`}
        </Typography>
      </CardContent>
    </Card>
  );
}
