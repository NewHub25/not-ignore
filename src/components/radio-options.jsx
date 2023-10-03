import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import GppGood from "@mui/icons-material/GppGood";

export default function RadioOptions({ setOneCheckValue }) {
  return (
    <RadioGroup
      aria-label="platform"
      overlay
      name="platform"
      sx={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        height: "2.5rem",
        mb: 1,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: "3px solid",
            borderColor: "success.400",
          },
        },
        [`& .${radioClasses.radio}`]: {
          display: "contents",
          "& > svg": {
            zIndex: 2,
            position: "absolute",
            top: "-8px",
            right: "-8px",
            borderRadius: "50%",
            fontSize: "2rem",
            color: "green",
          },
        },
      }}
    >
      {["Frontend Development", "Backend Development"].map((value) => (
        <Sheet
          key={value}
          variant="soft"
          sx={{
            borderRadius: "md",
            boxShadow: "sm",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Radio
            required
            id={value}
            value={value}
            onChange={(e) => {
              setOneCheckValue(e.target.value);
            }}
            checkedIcon={<GppGood />}
          />
          <FormLabel htmlFor={value}>{value}</FormLabel>
        </Sheet>
      ))}
    </RadioGroup>
  );
}
