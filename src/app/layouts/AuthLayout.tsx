import { Star } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  const theme = useTheme();
  return (
    <main className="flex flex-col  justify-center items-center h-lvh">
      <Stack
        direction="column"
        sx={{ mb: 4, justifyContent: "center", alignItems: "center" }}
      >
        <Badge
          color="primary"
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: "5px",
            p: 1,
          }}
        >
          <Star sx={{ color: "var(--neutral)" }} />
        </Badge>
        <Typography variant="h1" gutterBottom>
          Lumina
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          the focused Canvas for Authors
        </Typography>
      </Stack>

      <Outlet />
    </main>
  );
}
