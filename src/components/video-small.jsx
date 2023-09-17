import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function VideoSmall({ videoUrl, imgUrl, title, routes }) {
  //   const [isHover, setIsHover] = useState(true);

  return (
    <Card sx={{ minHeight: "200px", width: 300 }}>
      <CardCover>
        <img
          src="https://i3.ytimg.com/vi/4lAYfsq-2TE/maxresdefault.jpg"
          loading="lazy"
          alt=""
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
        <Typography level="title-lg" textColor="#fff">
          Tutorial práctico: React y TypeScript paso a paso, crea tu primera
          aplicación
        </Typography>
        <Typography
          startDecorator={<VisibilityIcon color="primary" />}
          textColor="neutral.300"
          align="right"
        >
          React y TypeScript
        </Typography>
      </CardContent>
    </Card>
  );
}
