import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";
import { Form, Link, useLoaderData } from "react-router-dom";
import CustomizedSteppers from "./customized-steppers";
import ChoiceChipCheckbox from "./choice-chip";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

export const FormBasic = () => {
  const CATEGORIES = useLoaderData();
  const [valueCheckbox, setValueCheckbox] = useState([]);
  const toggleTheme = useContext(ThemeContext);

  return (
    <Box
      sx={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <CustomizedSteppers step={0} />
      <Form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          const formElements = event.currentTarget.elements;
          const data = {
            url: formElements.url.value,
            password: formElements.password.value,
            persistent: formElements.persistent.checked,
          };
          alert(JSON.stringify(data, null, 2));
          console.log(valueCheckbox);
        }}
      >
        <Box sx={{ mb: 1, textAlign: "right" }}>
          <ChoiceChipCheckbox
            sx={{
              width: "100%",
              boxSizing: "border-box",
              marginBottom: 1,
              textAlign: "left",
            }}
            valueCheckbox={valueCheckbox}
            setValueCheckbox={setValueCheckbox}
            optionsToCheck={CATEGORIES.map((m) => m.title)}
          />
          <Button variant="solid" color="neutral">
            <Link
              to="newcategory"
              fontSize="sm"
              href="#replace-with-a-link"
              fontWeight="lg"
            >
              ¿Nueva categoría?
            </Link>
          </Button>
        </Box>
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>
            Dirección URL Youtube
          </FormLabel>
          <Input type="text" name="url" />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '3rem',
          }}
        >
          <Button type="submit">Continuar</Button>
        </Box>
      </Form>
    </Box>
  );
};
