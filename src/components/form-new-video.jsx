import { useRef } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import CardLayers3d from "./card-layers";
import extractVideoId from "../logic/extract-video-id";

export const FormNewVideo = () => {
  const CATEGORIES = useLoaderData();
  const matches = useMediaQuery("(min-width: 992px)");
  const arrayRefContent = useRef(
    CATEGORIES.flatMap((m) => m.content).map((content) => ({
      ...content,
      src: `https://i3.ytimg.com/vi/${
        extractVideoId(content.url).idYouTube
      }/maxresdefault.jpg`,
    }))
  );

  return (
    <section
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <CardLayers3d
        contents={arrayRefContent.current}
        sx={{
          ...(matches ? { display: "block" } : { display: "none" }),
        }}
      />
      <Outlet />
    </section>
  );
};
