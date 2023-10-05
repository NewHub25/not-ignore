import CarouselList from "./carousel-list";
import { useLoaderData } from "react-router-dom";
import { CarouselMedia } from "./carousel-media";
import { ASSETS_IMG } from "./../utils/source-images.js";
import extractVideoId from "../logic/extract-video-id";
import { ScrollTop } from "./scroll-top";
import { Fab, Toolbar } from "@mui/material";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
export const Index = () => {
  const CATEGORIES = useLoaderData();
  const toggleTheme = useContext(ThemeContext);

  return (
    <>
      <Toolbar id="back-to-top-anchor" sx={{ position: "absolute" }} />
      <CarouselMedia images={ASSETS_IMG} />
      {CATEGORIES &&
        CATEGORIES.map(({ content, layer, title }) => {
          if (!content[0]?.url) return;
          if (!extractVideoId(content[0].url).idYouTube) return;
          return (
            <CarouselList
              key={title}
              content={content}
              layer={layer}
              title={title}
            />
          );
        })}
      <ScrollTop>
        <Fab
          size="medium"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: toggleTheme.body,
            zIndex: 1000,
            transition: "all 0.3s",
            border: "1px solid #0090de",
            opacity: 0.7,
            "&:hover": {
              backgroundColor: toggleTheme.body,
              translate: "0px -10px",
            },
          }}
        >
          <KeyboardDoubleArrowUp color="info" fontSize="large" />
        </Fab>
      </ScrollTop>
    </>
  );
};
