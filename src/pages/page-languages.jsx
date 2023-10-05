import { useContext } from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary, {
  accordionSummaryClasses,
} from "@mui/joy/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import { Box, List, ListItem, ListItemButton } from "@mui/joy";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PlayCircleOutline, Visibility } from "@mui/icons-material";

export const PageCategories = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "calc(100vh  - 3rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AccordionGroup
        component="section"
        sx={{
          maxWidth: 600,
          [`& .${accordionSummaryClasses.indicator}`]: {
            transition: "0.2s",
          },
          [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
            transform: "rotate(45deg)",
          },
          backgroundColor: "#0090de",
          borderRadius: "sm",
        }}
      >
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            React
            <Typography sx={{ ml: "auto" }}>4 videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <PlayCircleOutline />
                Tutorial práctico: React y TypeScript paso a paso, crea tu
                primera aplicación
                <ListItemButton>
                  <Link to="/">
                    <Visibility />
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItemButton>
                ¿Qué es y cómo funciona useEffect? Hooks de React
              </ListItemButton>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Second accordion
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary indicator={<AddIcon />}>
            Third accordion
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
};
