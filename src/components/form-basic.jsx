import {
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  FormControl,
  FormLabel,
  Input,
  LinearProgress,
  Typography,
} from "@mui/joy";
import { ArrowOutward, AssignmentTurnedIn } from "@mui/icons-material";
import {
  Form,
  Link,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import CustomizedSteppers from "./customized-steppers";
import ChoiceChipCheckbox from "./choice-chip";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import {
  CheckBoxesContext,
  ErrorCheckboxContext,
} from "../contexts/form-context";
import { deleteLocalFormVideo } from "../logic/local-storage";
import { updateStoreOneVideoLocal } from "../logic/fetch";
import { useSnackbar } from "notistack";

const setpsComponents = {
  0: <FormStepOne />,
  1: <FormStepTwo />,
  2: <EndForm />,
};
export const FormBasic = () => {
  const { storage } = useLoaderData();
  const [valueCheckboxes, setValueCheckboxes] = useState([]);
  const [errorCheckbox, setErrorCheckboxes] = useState(false);
  const navigation = useNavigation();

  let stepCount = 0;
  if (["url", "keywords"].every((k) => storage?.[k])) {
    stepCount = 1;
  }
  if (["title", "description", "author"].every((k) => storage?.[k])) {
    stepCount = 2;
  }

  return (
    <Box
      component="main"
      sx={{
        height: "500px",
        width: "min(500px, 90vw)",
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
      <CustomizedSteppers step={stepCount} />
      <CheckBoxesContext.Provider value={[valueCheckboxes, setValueCheckboxes]}>
        <ErrorCheckboxContext.Provider
          value={[errorCheckbox, setErrorCheckboxes]}
        >
          <Box component="article" sx={{ width: "90%" }}>
            {(navigation.state === "loading" ||
              navigation.state === "submitting") && (
              <LinearProgress
                color="primary"
                variant="solid"
                thickness={3}
                sx={{ mb: 2 }}
              />
            )}
            {setpsComponents[stepCount]}
          </Box>
        </ErrorCheckboxContext.Provider>
      </CheckBoxesContext.Provider>
    </Box>
  );
};

function FormStepOne() {
  const submit = useSubmit();
  const { CATEGORIES } = useLoaderData();
  const toggleTheme = useContext(ThemeContext);
  const [valueCheckboxes, setValueCheckboxes] = useContext(CheckBoxesContext);
  const [errorCheckbox, setErrorCheckboxes] = useContext(ErrorCheckboxContext);
  const [errorUrl, setErrorUrl] = useState(false);

  return (
    <Form
      style={{
        width: "100%",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        if (!valueCheckboxes.length) {
          setErrorCheckboxes(true);
          return;
        }
        if (
          !/https:\/\/(www.youtube.com|youtu.be)\//.test(
            event.currentTarget.elements.url.value
          )
        ) {
          setErrorUrl(true);
          return;
        }
        const formElements = event.currentTarget.elements;
        const formDataObject = new FormData();
        formDataObject.append("url", formElements.url.value);
        formDataObject.append("keywords", [...valueCheckboxes]);
        submit(formDataObject, { method: "post" });
      }}
    >
      <FormControl required>
        <FormLabel sx={{ color: toggleTheme.text }}>
          Dirección URL Youtube
        </FormLabel>
        <Input type="text" name="url" color={errorUrl ? "danger" : "primary"} />
        {errorUrl && (
          <label
            style={{
              color: "#f33",
              fontWeight: "bold",
              fontSize: 15,
              marginTop: 5,
            }}
          >
            La dirección URL de Youtuve debe ser válida
          </label>
        )}
      </FormControl>
      <Box sx={{ mt: 2 }}>
        <ChoiceChipCheckbox
          sx={{
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 2,
          }}
          valueCheckbox={valueCheckboxes}
          setValueCheckbox={setValueCheckboxes}
          optionsToCheck={CATEGORIES.map((m) => m.title)}
          error={errorCheckbox}
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
        <Button
          type="button"
          variant="soft"
          endDecorator={<ArrowOutward fontSize="small" />}
        >
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
  );
}

function FormStepTwo() {
  const submit = useSubmit();
  const toggleTheme = useContext(ThemeContext);

  return (
    <Form
      style={{
        width: "100%",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const formDataObject = new FormData();
        formDataObject.append("title", formElements.title.value);
        formDataObject.append("description", formElements.description.value);
        formDataObject.append("author", formElements.author.value);
        submit(formDataObject, { method: "post" });
      }}
    >
      <FormControl required sx={{ mt: 2 }}>
        <FormLabel sx={{ color: toggleTheme.text }}>Título principal</FormLabel>
        <Input type="text" name="title" />
      </FormControl>
      <FormControl required sx={{ mt: 2 }}>
        <FormLabel sx={{ color: toggleTheme.text }}>Descripción</FormLabel>
        <Input type="text" name="description" />
      </FormControl>
      <FormControl required sx={{ mt: 2 }}>
        <FormLabel sx={{ color: toggleTheme.text }}>Autor del video</FormLabel>
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
        <Button type="submit">Continuar</Button>
      </Box>
    </Form>
  );
}

function EndForm() {
  const { CATEGORIES, storage } = useLoaderData();
  const submit = useSubmit();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        storage.keywords = Array.isArray(storage.keywords)
          ? storage.keywords
          : storage.keywords.split(",");
        const { data, url, ID } = updateStoreOneVideoLocal(CATEGORIES, storage);
        deleteLocalFormVideo();
        console.log({ data, url, ID });
        submit({ data, url, ID }, { method: "PUT" });
      }}
    >
      <Box
        component="ul"
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
      >
        <Card component="li" sx={{ width: 400, height: 250, flexGrow: 1 }}>
          <CardCover>
            <img
              src="/undraw_educator.jpg"
              loading="lazy"
              alt="undraw educator"
            />
          </CardCover>
          <CardContent sx={{ position: "relative" }}>
            <Typography
              fontWeight="sm"
              textColor="#333"
              sx={{ position: "absolute", bottom: -10, right: 0 }}
            >
              Edúcate y sigue adelante
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "3rem",
        }}
      >
        <Button
          type="submit"
          color="success"
          onClick={() =>
            enqueueSnackbar("Registro enviado", { variant: "customInfo" })
          }
          endDecorator={<AssignmentTurnedIn />}
        >
          Finalizar
        </Button>
      </Box>
    </Form>
  );
}
