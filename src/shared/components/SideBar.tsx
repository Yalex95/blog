import {
  Add,
  Checklist,
  DocumentScanner,
  Feed,
  GraphicEq,
  ListAlt,
  Settings,
  Star,
} from "@mui/icons-material";
import { Badge, Button, Stack, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function SideMenu() {
  const theme = useTheme();
  const menuItems = [
    { id: 1, label: "feed", icon: <Feed /> },
    { id: 2, label: "my posts", icon: <ListAlt /> },
    { id: 3, label: "drafts", icon: <DocumentScanner /> },
    { id: 4, label: "published", icon: <Checklist /> },
    { id: 5, label: "analitics", icon: <GraphicEq /> },
    { id: 6, label: "settings", icon: <Settings /> },
  ];
  const SideList = (
    <Box
      component="aside"
      sx={{ width: 250, backgroundColor: theme.palette.neutral.main }}
      role="presentation"
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "start",
          alignItems: "center",
          gap: "1rem",
          padding: "20px 20px 0",
        }}
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
        <div>
          <Typography variant="h4">Lumina</Typography>
          <Typography variant="overline">PERSONAL WORKSPACE</Typography>
        </div>
      </Stack>
      <div className="px-4 py-6">
        <Button
          variant="contained"
          size="small"
          startIcon={<Add fontSize="small" />}
          sx={{ fontSize: "14px", fontWeight: "semibold", width: "100%" }}
        >
          Create new post
        </Button>
      </div>
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={text.label}
                sx={{ textTransform: "capitalize" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return <>{SideList}</>;
}
