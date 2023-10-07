import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { reasonsToLearnProgramming } from "../data/fqa";

export const FrequentlyQuestionedAnswers = () => {
  return (
    <main style={{ width: "min(600px, 80%)", margin: "3rem auto" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Razones para aprender a programar
      </h2>
      {reasonsToLearnProgramming.map(({ reason, details }, index) => {
        return (
          <Accordion key={reason}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}a-content`}
              id={`panel${index + 1}a-header`}
            >
              <Typography fontWeight={700}>{reason}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </main>
  );
};
