import { Box, Button, Checkbox, FormControl, FormLabel, Input } from "@mui/joy";
import { Link } from "react-router-dom";
import ExampleChoiceChipCheckbox from "./choice-chip";

export const FormBasic = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formElements = event.currentTarget.elements;
        const data = {
          email: formElements.email.value,
          password: formElements.password.value,
          persistent: formElements.persistent.checked,
        };
        alert(JSON.stringify(data, null, 2));
      }}
    >
      <FormControl required>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl required>
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox size="sm" label="Remember for 30 days" name="persistent" />
        <Link fontSize="sm" href="#replace-with-a-link" fontWeight="lg">
          Forgot your password?
        </Link>
      </Box>
      <Box>
        <ExampleChoiceChipCheckbox />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button type="submit">Sign in</Button>
        <Button type="button">Nueva Categoria</Button>
      </Box>
    </form>
  );
};
