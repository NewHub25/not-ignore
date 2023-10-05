import { useEffect, useRef } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import CardLayers3d from "../components/card-layers";
import extractVideoId from "../logic/extract-video-id";

export const PageFormVideo = () => {
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
  const handleUnload = (event) => {
    event.preventDefault();
    return (event.returnValue = "");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <section
      style={{
        boxSizing: "border-box",
        height: "calc(100vh - 5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <CardLayers3d
        contents={arrayRefContent.current}
        sx={{
          ...(matches
            ? { display: "block", transform: "scale(1.2)" }
            : { display: "none" }),
        }}
      />
      <Outlet />
    </section>
  );
};
