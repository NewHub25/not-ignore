import { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import { beginByIndex } from "../logic/begin-index";
import MediaCard from "./media-card";

export default function CardLayers3d({ contents, sx }) {
  const [array, setArray] = useState(contents);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setArray((prevArray) => beginByIndex(prevArray, 1));
    }, 3000);
    return () => {
      clearInterval(idInterval);
    };
  }, []);

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
          width: "450px",
          aspectRatio: "4/3",
          backgroundColor: "transparent",
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <ImageToLayer src={array[2].url} />
        <CardCover
          sx={{
            border: "1px solid",
            borderColor: "#777",
            backdropFilter: "blur(1px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImageToLayer src={array[1].url} />
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
          <MediaCard
            author={array[0].author}
            keywords={array[0].keywords}
            title={array[0].title}
            src={array[0].url}
          />
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
        width: "75%",
        height: "75%",
        aspectRatio: "1/1",
        objectFit: "cover",
      }}
      alt="image"
    />
  );
};
