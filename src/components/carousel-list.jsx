import { useContext, useRef } from "react";
import { ThemeContext } from "styled-components";
import { Box, Card, Button, Chip } from "@mui/joy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MediaCard from "./media-card";
import createId from "../logic/create-id";
import { CustomDivider } from "./custom-divider";
import { VideoLibrary } from "@mui/icons-material";
import extractVideoId from "../logic/extract-video-id";

export default function CarouselList({ content, layer, title: titleTech }) {
  const toggleTheme = useContext(ThemeContext);
  const idCarousel = useRef(createId(titleTech));
  const moveToleft = (isLeft) => {
    // Hubo un problema con el ID, se usa entonces el atributo role
    const cardImgWidth = document
      .querySelector(`[role="${idCarousel.current}"] > article`)
      ?.getBoundingClientRect().width;
    document
      .querySelector(`[role="${idCarousel.current}"]`)
      .scrollBy((isLeft ? -1 : 1) * cardImgWidth, 0);
  };

  return (
    <Card
      component="section"
      role="carousel-list"
      sx={{
        width: "90%",
        position: "relative",
        border: "none",
        background: "transparent",
        margin: "0 auto 3rem",
        padding: 0,
        "&:hover .MuiButton-root": {
          opacity: 1,
        },
      }}
    >
      <CustomDivider sx={{ height: "30px" }}>
        <Chip
          variant={toggleTheme.name === "dark" ? "solid" : "outlined"}
          startDecorator={<VideoLibrary />}
        >
          <span id={titleTech} style={{ fontWeight: 700, fontSize: 18 }}>
            {`${titleTech} - `}
            <span style={{ opacity: 0.7, fontSize: 14, fontWeight: 400 }}>
              {layer}
            </span>
          </span>
        </Chip>
      </CustomDivider>
      <Box
        role={idCarousel.current}
        component="div"
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
        {content.map(({ author, keywords, title, url }) => {
          const { idYouTube } = extractVideoId(url);
          if (!idYouTube) return;
          return (
            <MediaCard
              key={url + crypto.randomUUID()}
              author={author}
              keywords={keywords}
              title={title}
              src={`https://i3.ytimg.com/vi/${idYouTube}/maxresdefault.jpg`}
              idVideo={idYouTube}
            />
          );
        })}
      </Box>
      <ButtonUser dir="left" handleClick={() => moveToleft(true)} />
      <ButtonUser dir="right" handleClick={() => moveToleft(false)} />
    </Card>
  );
}

const ButtonUser = ({ dir, handleClick }) => {
  const toggleTheme = useContext(ThemeContext);
  const dirVar = dir === "left";
  if (!dirVar && dir !== "right") throw Error("Error declare dir");

  return (
    <Button
      variant="outlined"
      sx={{
        position: "absolute",
        [dirVar ? "left" : "right"]: 0,
        top: "calc(50% - 1.5rem + 15px)",
        zIndex: 200,
        borderRadius: "50%",
        aspectRatio: "1/1",
        width: "3rem",
        opacity: 0,
        backgroundColor: "#eee",
        transition: "all 0.4s",
        "&:hover": {
          backgroundColor: toggleTheme.body,
        },
      }}
      onClick={handleClick}
    >
      {dirVar ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </Button>
  );
};
