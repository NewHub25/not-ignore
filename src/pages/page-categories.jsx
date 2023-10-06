import { useContext } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import { Box, Card, CardCover, Divider, List, ListItem } from "@mui/joy";
import { Typography } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import { SlowMotionVideo } from "@mui/icons-material";
import { ThemeContext } from "styled-components";
import extractVideoId from "../logic/extract-video-id";

export const PageCategories = () => {
  const CATEGORIES = useLoaderData();
  const toggleTheme = useContext(ThemeContext);

  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh  - 3rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        py: "5rem",
      }}
    >
      <AccordionGroup
        component="section"
        sx={{
          maxWidth: 700,
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: "0.2s",
            color: toggleTheme.text,
            "& .MuiAccordionDetails-root": {
              p: 1,
            },
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: "rotate(45deg)",
          },
          backgroundColor: toggleTheme.body,
          "& *": {
            color: toggleTheme.text,
          },
          borderRadius: "sm",
          "--joy-palette-neutral-plainColor": "#0090de",
        }}
      >
        {CATEGORIES.map(({ content, title }) => {
          return (
            <Accordion key={title}>
              <AccordionSummary
                sx={{ fontSize: "1.3rem" }}
                indicator={<AddIcon />}
              >
                {title}
                <Typography sx={{ ml: "auto" }}>
                  {content.length} videos
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  border: "1px solid",
                  borderLeftColor: "transparent",
                  borderRightColor: "transparent",
                  "--List-gap": "5px",
                }}
              >
                <List>
                  {content.map(({ author, title: titleVideo, url }) => {
                    return (
                      <ListItem
                        key={titleVideo}
                        sx={{
                          border: "1px dashed",
                          pl: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "1.1rem",
                            width: "80%",
                            minHeight: "5rem",
                            position: "relative",
                            opacity: 0.8,
                          }}
                        >
                          {titleVideo}
                          <Typography
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              right: 0,
                              fontWeight: 700,
                              fontSize: ".9rem",
                            }}
                          >
                            {author}
                          </Typography>
                        </Typography>
                        <Link
                          to={`/room/${extractVideoId(url).idYouTube}`}
                          style={{ marginLeft: "auto" }}
                        >
                          <Card
                            component="article"
                            sx={{
                              border: "none",
                              "--Card-radius": "1rem",
                              aspectRatio: "2/1",
                              width: `100px`,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                              p: 0,
                            }}
                          >
                            <img
                              id="img"
                              src={`http://i3.ytimg.com/vi/${
                                extractVideoId(url).idYouTube
                              }/hqdefault.jpg`}
                              loading="lazy"
                              alt="title"
                              style={{ borderRadius: ".5rem", width: "100%" }}
                            />
                            <CardCover
                              component="span"
                              sx={{
                                width: "1.5rem",
                                aspectRatio: "1/1",
                                inset: 0,
                                m: "auto",
                                position: "absolute",
                                p: 0,
                              }}
                            >
                              <SlowMotionVideo
                                sx={{ backgroundColor: toggleTheme.body }}
                              />
                            </CardCover>
                          </Card>
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </AccordionGroup>
    </Box>
  );
};
