import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";

export default function ExampleChoiceChipCheckbox({
  optionsToCheck,
  valueCheckbox,
  setValueCheckbox,
}) {
  return (
    <Sheet variant="outlined" sx={{ width: 360, p: 2, borderRadius: "sm" }}>
      <Typography id="rank" level="body-sm" fontWeight="lg" sx={{ mb: 1.5 }}>
        Elige una categoría
      </Typography>
      <div role="group" aria-labelledby="rank">
        <List
          orientation="horizontal"
          wrap
          sx={{
            "--List-gap": "8px",
            "--ListItem-radius": "20px",
            "--ListItem-minHeight": "32px",
          }}
        >
          {optionsToCheck.map((item) => (
            <ListItem key={item}>
              {valueCheckbox.includes(item) && (
                <Done
                  fontSize="md"
                  color="primary"
                  sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: "none" }}
                />
              )}

              <Checkbox
                size="sm"
                disableIcon
                overlay
                label={item}
                checked={valueCheckbox.includes(item)}
                variant={valueCheckbox.includes(item) ? "soft" : "outlined"}
                onChange={(event) => {
                  if (event.target.checked) {
                    setValueCheckbox((val) => [...val, item]);
                  } else {
                    setValueCheckbox((val) =>
                      val.filter((text) => text !== item)
                    );
                  }
                }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: checked
                      ? {
                          border: "1px solid",
                          borderColor: "primary.500",
                        }
                      : {},
                  }),
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Sheet>
  );
}
