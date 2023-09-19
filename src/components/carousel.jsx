import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Box, Card, Button, Chip } from "@mui/joy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VideoSmall from "./video-small";
import createId from "../logic/create-id";
import { CustomDivider } from "./custom-divider";
import { VideoLibrary } from "@mui/icons-material";

export default function Carousel({ content, layer, title: titleTech }) {
  const toggleTheme = useContext(ThemeContext);
  const [idCarousel] = useState(createId(titleTech));
  const moveToleft = (isLeft) => {
    const cardImgWidth = document
      .querySelector(`#${idCarousel} > div`)
      .getBoundingClientRect().width;
    document
      .getElementById(idCarousel)
      .scrollBy((isLeft ? -1 : 1) * cardImgWidth, 0);
  };

  return (
    <Card
      sx={{
        // width: "min(900px, 90%)",
        width: "90%",
        // minHeight: 90,
        position: "relative",
        border: "none",
        background: "transparent",
        margin: "0 auto 2rem",
        padding: 0,
      }}
    >
      <CustomDivider>
        <Chip
          variant={toggleTheme.name === "dark" ? "outlined" : "solid"}
          startDecorator={<VideoLibrary />}
        >
          <span id={titleTech}>
            {`${titleTech} - `}
            <span style={{ opacity: 0.7, fontSize: 14 }}>{layer}</span>
          </span>
        </Chip>
      </CustomDivider>
      <Box
        id={idCarousel}
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
        {content.map(
          ({
            author,
            // description,
            keywords,
            title,
            url,
          }) => (
            <VideoSmall
              key={url}
              author={author}
              keywords={keywords}
              title={title}
              url={url}
            />
          )
        )}
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
        top: "calc(50% - 1.5rem)",
        zIndex: 10,
        borderRadius: "50%",
        aspectRatio: "1/1",
        width: "3rem",
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
