import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormData } from "../../../schemas/authSchema";
import { loginUser } from "../services/auth.service";
import "../styles/authStyles.css";

interface AuthFormProps {
  title: string;
  subtitle: string;
}

export default function AuthForm({ subtitle, title }: AuthFormProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@blog.com",
      password: "admin123",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    clearErrors();

    try {
      const users = await loginUser(data.email, data.password);

      if (users.length === 0) {
        setError("root", {
          message: "Invalid credentials",
        });
        setIsLoading(false);
        return;
      }
      //
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setError("root", {
        message: `Server error: ${error}`,
      });
      setIsLoading(false);
    }
  };
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
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 5 }}
          >
            {errors.root?.message && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errors.root.message}
              </Alert>
            )}
            <TextField
              label="Email"
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              autoComplete="username"
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
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
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
              loading={isLoading}
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
