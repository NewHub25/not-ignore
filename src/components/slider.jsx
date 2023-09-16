import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_1280.jpg",
    title: "Bird from jungle",
    description: "2M views",
  },
];

export default function CarouselRatio() {
  const moveToleft = (isLeft) => {
    const cardSmLength = document
      .querySelector(".MuiCard-sizeSm")
      .getBoundingClientRect().width;
    document
      .getElementById("box")
      .scrollBy((isLeft ? -1 : 1) * cardSmLength, 0);
  };

  return (
    <>
      <Card
        sx={{
          width: "min(500px, 90%)",
          minHeight: 90,
          position: "relative",
          border: "none",
          background: "transparent",
        }}
      >
        <Box
          id="box"
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: "100%",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            "& > *": {
              scrollSnapAlign: "start",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {data.map((item) => (
            <Card
              orientation="horizontal"
              size="sm"
              key={item.title}
              variant="outlined"
            >
              <AspectRatio ratio="1" sx={{ minWidth: 200 }}>
                <img
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                />
              </AspectRatio>
              <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                <Typography level="title-md">{item.title}</Typography>
                <Typography level="body-sm">{item.description}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
        <ButtonUser dir="left" handleClick={() => moveToleft(true)} />
        <ButtonUser dir="right" handleClick={() => moveToleft(false)} />
      </Card>
    </>
  );
}

const ButtonUser = ({ dir, handleClick }) => {
  const dirVar = dir === "left";
  if (!dirVar && dir !== "right") throw Error("Error declare dir");
  return (
    <Button
      variant="outlined"
      sx={{
        position: "absolute",
        [dirVar ? "left" : "right"]: 0,
        top: "calc(50% - 1.5rem)",
        zIndex: 10,
        borderRadius: "50%",
        aspectRatio: "1/1",
        width: "3rem",
      }}
      onClick={handleClick}
    >
      {dirVar ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </Button>
  );
};
