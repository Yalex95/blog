import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6366F1",
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#111827",
      light: "#1F2937",
      dark: "#0F172A",
      contrastText: "#FFFFFF",
    },
    neutral: {
      main: "#F9FAFB",
      light: "#FFFFFF",
      dark: "#E5E7EB",
      contrastText: "#111827",
    },
  },
  typography: {
    fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',

    // H2 - 2.25rem (36px)
    h2: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 700,
      fontSize: "2.25rem", // 36px
      lineHeight: 1.25,
      marginBottom: "0.875rem",
      color: "#111827",
    },

    // Subtitle1 - 1rem (16px)
    subtitle1: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 400,
      fontSize: "1rem", // 16px
      lineHeight: 1.5,
      color: "#6B7280",
    },

    // Otros variants útiles
    h1: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 700,
      fontSize: "3rem", // 48px
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 600,
      fontSize: "1.875rem", // 30px
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 600,
      fontSize: "1.5rem", // 24px
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 500,
      fontSize: "1.25rem", // 20px
      lineHeight: 1.25,
    },
    h6: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 500,
      fontSize: "1.125rem", // 18px
      lineHeight: 1.25,
    },
    body1: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 400,
      fontSize: "1rem", // 16px
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: '"Source Serif Four", "Source Serif Pro", Georgia, serif',
      fontWeight: 400,
      fontSize: "0.875rem", // 14px
      lineHeight: 1.5,
    },
    caption: {
      fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      lineHeight: 1.25,
    },
    overline: {
      fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
      fontWeight: 500,
      fontSize: "0.75rem", // 12px
      lineHeight: 1.25,
      textTransform: "uppercase",
    },
    button: {
      fontFamily: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
      fontWeight: 500,
      fontSize: "0.875rem", // 14px
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 500,
          fontSize: "1.2rem",
          textTransform: "capitalize", // Evita mayúsculas
        },
        // Botón contained (con relleno)
        contained: {
          backgroundColor: "#6366F1", // Color por defecto
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#4F46E5",
          },
        },
        // Botón contained primary
        containedPrimary: {
          backgroundColor: "#6366F1",
          "&:hover": {
            backgroundColor: "#4F46E5",
          },
        },
        // Botón contained secondary
        containedSecondary: {
          backgroundColor: "#111827",
          "&:hover": {
            backgroundColor: "#0F172A",
          },
        },
        // Botón outlined
        outlined: {
          borderColor: "#6366F1",
          color: "#6366F1",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.04)",
            borderColor: "#6366F1",
          },
        },
        // Botón text
        text: {
          color: "#6366F1",
          "&:hover": {
            backgroundColor: "rgba(99, 102, 241, 0.04)",
          },
        },
      },
    },
  },
});
