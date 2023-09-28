import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";
import { Form, Link, useLoaderData, useSubmit } from "react-router-dom";
import CustomizedSteppers from "./customized-steppers";
import ChoiceChipCheckbox from "./choice-chip";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";

export const FormBasic = () => {
  const CATEGORIES = useLoaderData();
  const [valueCheckboxs, setValueCheckboxs] = useState([]);
  const [error, setError] = useState(false);
  const toggleTheme = useContext(ThemeContext);
  const submit = useSubmit();

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
          if (!valueCheckboxs.length) {
            setError(true);
            return;
          }
          const formElements = event.currentTarget.elements;
          const data = {
            url: formElements.url.value,
            keywords: [...valueCheckboxs],
          };
          const formDataObject = new FormData();
          formDataObject.append("url", data.url);
          formDataObject.append("keywords", data.keywords);
          alert(JSON.stringify(data, null, 2));
          submit(formDataObject, { method: "post" });
        }}
      >
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>
            Dirección URL Youtube
          </FormLabel>
          <Input type="text" name="url" />
        </FormControl>
        <Box sx={{ mt: 2 }}>
          <ChoiceChipCheckbox
            sx={{
              width: "100%",
              boxSizing: "border-box",
              marginBottom: 2,
            }}
            valueCheckbox={valueCheckboxs}
            setValueCheckbox={setValueCheckboxs}
            optionsToCheck={CATEGORIES.map((m) => m.title)}
            error={error}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "3rem",
          }}
        >
          <Button type="submit">Continuar</Button>
          <Button type="button">
            <Link
              to="newcategory"
              fontSize="sm"
              href="#replace-with-a-link"
              fontWeight="lg"
            >
              Nueva categoría
            </Link>
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
