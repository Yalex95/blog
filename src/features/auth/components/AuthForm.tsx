import { Button, Stack, TextField } from "@mui/material";
import "../styles/authStyles.css";
export default function AuthForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("auth form");
  }
  return (
    <div className="form__auth">
      <Stack
        component="form"
        spacing={2}
        sx={{ maxWidth: 400 }}
        onSubmit={handleSubmit}
      >
        <TextField label="Email" type="email" />
        <TextField
          label="Pasword"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit" variant="contained">
          login
        </Button>
      </Stack>
    </div>
  );
}
