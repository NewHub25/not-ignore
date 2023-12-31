import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@mui/joy";
import { FindInPage } from "@mui/icons-material";
import {
  Form,
  Link,
  useLoaderData,
  useNavigation,
  useSubmit,
  // useSubmit,
} from "react-router-dom";
import ChoiceChipCheckbox from "./choice-chip";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "styled-components";
import { languages_frameworks } from "../utils/options-to-select";
import RadioOptions from "./radio-options";

export const FormNewCategory = () => {
  const submit = useSubmit();
  const { CATEGORIES } = useLoaderData();
  const currentCategories = useRef(
    CATEGORIES.map((m) => m.title.toLowerCase().trim().match(/\w+/)[0])
  );
  const toggleTheme = useContext(ThemeContext);
  const navigation = useNavigation();
  const [newCategories, setNewCategory] = useState([]);
  const [inputNewCategory, setInputNewCategory] = useState("");
  const [valueCheckboxes, setValueCheckboxes] = useState([]);
  const [oneCheckValue, setOneCheckValue] = useState("");

  return (
    <Box
      sx={{
        height: "600px",
        width: "min(400px, 90vw)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        "& > *:last-child": {
          opacity:
            navigation.state === "loading" || navigation.state === "submitting"
              ? 0.5
              : 1,
        },
      }}
    >
      <FormLabel sx={{ fontSize: "1.2rem", color: toggleTheme.text }}>
        Categoría nueva
      </FormLabel>
      <Form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          const {
            currentTarget: {
              elements: { url, title, description, author },
            },
          } = event;

          const bodyPOST = {
            content: [
              {
                author: author.value,
                description: description.value,
                keywords: [...newCategories, ...valueCheckboxes],
                title: title.value,
                url: url.value,
              },
            ],
            layer: oneCheckValue,
            title: newCategories[0],
          };
          // Si no se encapsula en un objeto, se envía como '[object Object]'
          submit({ data: JSON.stringify(bodyPOST) }, { method: "post" });
        }}
      >
        <RadioOptions setOneCheckValue={setOneCheckValue} />
        <FormLabel sx={{ color: toggleTheme.text }}>
          Elige los temas relacionados del nuevo video:
        </FormLabel>
        <Autocomplete
          required={newCategories.length ? false : true}
          size="lg"
          placeholder="Elige primero el más relevante"
          options={languages_frameworks.filter((f) => {
            return !currentCategories.current.includes(
              f.toLowerCase().trim().match(/\w+/)[0]
            );
          })}
          startDecorator={<FindInPage color="info" />}
          multiple
          value={newCategories}
          onChange={(event, newValue) => {
            setNewCategory(newValue);
          }}
          inputValue={inputNewCategory}
          onInputChange={(event, newInputValue) => {
            setInputNewCategory(newInputValue);
          }}
          sx={{ width: "100%", mb: 1 }}
          limitTags={3}
        />
        <ChoiceChipCheckbox
          title="Categorías guardadas (opcional)"
          sx={{
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 2,
          }}
          valueCheckbox={valueCheckboxes}
          setValueCheckbox={setValueCheckboxes}
          optionsToCheck={CATEGORIES.map((m) => m.title)}
        />
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>
            Dirección URL Youtube
          </FormLabel>
          <Input type="text" name="url" />
        </FormControl>
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>
            Título del video
          </FormLabel>
          <Input type="text" name="title" />
        </FormControl>
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>description</FormLabel>
          <Input type="text" name="description" />
        </FormControl>
        <FormControl required>
          <FormLabel sx={{ color: toggleTheme.text }}>Autor</FormLabel>
          <Input type="text" name="author" />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "3rem",
          }}
        >
          <Button type="submit">Agregar</Button>
          <Link to="../">
            <Button type="button" variant="soft">
              Atrás
            </Button>
          </Link>
        </Box>
      </Form>
    </Box>
  );
};
