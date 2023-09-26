import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";

export default function MediaCard({ author, keywords, title, src }) {
  const matches = useMediaQuery("(min-width: 992px)");

  return (
    <Card
      component="div"
      sx={{
        "--Card-radius": ".5rem",
        aspectRatio: "4/3",
        width: `min(80%, 300px)`,
        height: matches ? "250px" : "150px",
      }}
    >
      <CardCover>
        <img
          id="img"
          src={src}
          loading="lazy"
          alt={title}
          style={{ borderRadius: ".5rem" }}
        />
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
          &mdash; {author}
        </Typography>
        <Typography
          startDecorator={<ViewInArIcon color="primary" />}
          textColor="neutral.300"
          align="right"
        >
          {`[ ${keywords.join(", ")} ]`}
        </Typography>
      </CardContent>
      <Link to={`${src}`}>
        <CardCover
          sx={{
            opacity: 0,
            transition: "opacity .7s",
            zIndex: 100,
            "&:hover": {
              opacity: 1,
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <span style={{ fontSize: "3rem", height: 40 }}>
            <VisibilityIcon sx={{ color: "#eee", fontSize: "5rem" }} />
          </span>
          <span style={{ fontSize: "2rem", color: "#eee" }}>Ver</span>
        </CardCover>
      </Link>
    </Card>
  );
}
