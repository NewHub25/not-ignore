import { Link, useLoaderData, useParams } from "react-router-dom";
import "./../css/computer.css";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import { useEffect, useRef } from "react";
import extractVideoId from "../logic/extract-video-id";
import { AccountBox, BarChart } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

export const VideoRoom = () => {
  const matches = useMediaQuery("(min-width: 992px)");
  const { roomId } = useParams();
  const CATEGORIES = useLoaderData();
  const uniqueData = useRef(
    (function () {
      let contentResult;
      for (let i = 0; i < CATEGORIES.length; i++) {
        const category = CATEGORIES[i];
        for (let j = 0; j < category.content.length; j++) {
          const contentVideo = category.content[j];
          if (roomId === extractVideoId(contentVideo.url).idYouTube) {
            contentResult = contentVideo;
            break;
          }
        }
        if (contentResult) break;
      }
      return contentResult;
    })()
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 5rem)",
        mb: 5,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: matches ? "row" : "column",
        gap: "1rem",
        boxSizing: "border-box",
        padding: "1rem",
      }}
    >
      <div className="computer-container">
        <div className="computer-monitor">
          <iframe
            // width="560"
            // height="315"
            src={`https://www.youtube.com/embed/${roomId}?si=e3UBTa8XcDFqBKkJ`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen="true"
          >
            Su navegador no soporta IFRAMES
          </iframe>
        </div>
        <div className="computer-bottom"></div>
        <div className="computer-stand"></div>
        <div className="computer-stand-bottom"></div>
      </div>
      <Card variant="outlined">
        <Typography
          level="h1"
          startDecorator={<AccountBox fontSize="large" color="primary" />}
          sx={{ opacity: 0.9 }}
        >
          {uniqueData.current.author}
        </Typography>
        <Typography
          level="h2"
          fontSize="xl"
          startDecorator={<BarChart fontSize="large" color="info" />}
          sx={{ mb: 0.5, opacity: 0.7 }}
        >
          {uniqueData.current.title}
        </Typography>
        <Typography>{uniqueData.current.description}</Typography>
        <Stack spacing={2} alignItems="center">
          Temas relacionados:
          <ButtonGroup
            variant="outlined"
            size="md"
            aria-label="outlined button group"
          >
            {uniqueData.current.keywords.map((keyword) => {
              return (
                <Tooltip
                  key={keyword}
                  title={`Aprende más de ${keyword} en YouTube`}
                  color="primary"
                  variant="soft"
                >
                  <Link
                    to={`https://www.youtube.com/results?search_query=${keyword}`}
                  >
                    <Button>{keyword}</Button>
                  </Link>
                </Tooltip>
              );
            })}
          </ButtonGroup>
        </Stack>
      </Card>
    </Box>
  );
};
