import { Lock, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";
import { Link } from "react-router-dom";
import "../styles/authStyles.css";

interface AuthFormProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthForm({ children, subtitle, title }: AuthFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("auth form");
  }
  return (
    <>
      <Paper elevation={2}>
        <Box sx={{ p: 5, textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {subtitle}
          </Typography>
          <Stack
            component="form"
            spacing={3}
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            {children}
            <TextField
              label="Email"
              type="email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              label="Pasword"
              type="password"
              autoComplete="current-password"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                },
              }}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              login
            </Button>
            <Divider sx={{ my: 2 }} />
            <Stack
              direction="row"
              spacing={1.5}
              sx={{ alignItems: "center", justifyContent: "center", mt: 1 }}
            >
              <Typography variant="body2" color="text.secondary">
                Don't have an account?
              </Typography>
              <Link
                to="/"
                style={{
                  color: "#6366F1",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Paper>
      <Box
        sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 4, pt: 2 }}
      >
        <Link to="/">Privacy Policy</Link>
        <Typography color="text.secondary" sx={{ fontSize: 20, lineHeight: 1 }}>
          ·
        </Typography>
        <Link to="/">Terms of service</Link>
        <Typography color="text.secondary" sx={{ fontSize: 20, lineHeight: 1 }}>
          ·
        </Typography>
        <Link to="/">Help Center</Link>
      </Box>
    </>
  );
}
