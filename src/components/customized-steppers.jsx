import { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(
  ({ theme, ownerState, toggleTheme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#333",
    height: 40,
    aspectRatio: "1/1",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.5)",
    ...(ownerState.active && {
      backgroundImage: `linear-gradient( 136deg, #eee 10%, ${toggleTheme.principal} 50%, #101820 100%)`,
      height: 50,
    }),
    ...(ownerState.completed && {
      backgroundImage: `linear-gradient( 136deg, #eee 10%, ${toggleTheme.principal} 50%, #101820 100%)`,
    }),
  })
);

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  const toggleTheme = useContext(ThemeContext);

  const icons = {
    1: <SlowMotionVideoIcon />,
    2: <VideoSettingsIcon />,
    3: <LibraryAddCheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      toggleTheme={toggleTheme}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Agregando nuevo video",
  "Añadiendo detalles del video y URL",
  "Subamos el video",
];

export default function CustomizedSteppers({ step }) {
  const toggleTheme = useContext(ThemeContext);

  return (
    <Stack sx={{ flexGrow: 0 }} spacing={4} component="article">
      <Stepper
        alternativeLabel
        activeStep={step}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <span
                style={{
                  color: toggleTheme.text,
                }}
              >
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
