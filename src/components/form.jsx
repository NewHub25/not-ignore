import { Box, Button, Checkbox, FormControl, FormLabel, Input } from "@mui/joy";
import { Form, Link, useLoaderData } from "react-router-dom";
import ExampleChoiceChipCheckbox from "./choice-chip";
import { useState } from "react";

export const FormBasic = () => {
  const CATEGORIES = useLoaderData();
  const [valueCheckbox, setValueCheckbox] = useState([]);

  return (
    <Form
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
      <Box
      // sx={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
      >
        <ExampleChoiceChipCheckbox
          valueCheckbox={valueCheckbox}
          setValueCheckbox={setValueCheckbox}
          optionsToCheck={CATEGORIES.map((m) => m.title)}
        />
        <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
          ¿Tienes una nueva categoría 😁?
        </Link>
      </Box>
      <FormControl required>
        <FormLabel>Dirección URL Youtube</FormLabel>
        <Input type="text" name="url" />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button type="submit">Sign in</Button>
      </Box>
    </Form>
  );
};
