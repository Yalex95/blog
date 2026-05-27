import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';  // ← Importar ThemeProvider
import CssBaseline from '@mui/material/CssBaseline';   // ← Para normalizar estilos
import { router } from "./app/router/index.tsx";
import { theme } from "./theme";  // ← Importar tu theme
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>  {/* ← Envolver con ThemeProvider */}
      <CssBaseline />  {/* ← Resetea estilos de MUI */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);