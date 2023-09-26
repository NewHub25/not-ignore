import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

export default function CardLayers3d({ images, sx }) {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(40deg)",
            "& > div:nth-of-type(1)": {
              transform: "scaleY(0.9) translate3d(20px, 20px, 100px)",
            },
            "& > div:nth-of-type(2)": {
              transform: "scaleY(0.8) translate3d(45px, 40px, 100px)",
            },
          },
        },
        ...sx,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          height: "400px",
          width: "400px",
          backgroundColor: "transparent",
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <ImageToLayer src={images[0]} />
        <CardCover
          sx={{
            // background:
            //   "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            border: "1px solid",
            borderColor: "#777",
            backdropFilter: "blur(1px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageToLayer src={images[1]} />
        </CardCover>
        <CardCover
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
            border: "1px solid",
            borderColor: "#000",
            backdropFilter: "blur(1px)",
          }}
        >
          <ImageToLayer src={images[2]} />
        </CardCover>
      </Card>
    </Box>
  );
}

const ImageToLayer = ({ src }) => {
  return (
    <img
      src={src}
      loading="lazy"
      style={{
        width: "80%",
        // height: "100%",
        aspectRatio: "1/1",
        objectFit: "cover",
      }}
      alt="image"
    />
  );
};
