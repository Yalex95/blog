import { Button, Stack, TextField } from "@mui/material";
import type React from "react";
import "../styles/authStyles.css";

interface AuthFormProps {
  children?: React.ReactNode;
}

export default function AuthForm({ children }: AuthFormProps) {
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
        {children}
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
