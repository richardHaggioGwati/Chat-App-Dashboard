import { Box } from "@mui/material";
import ListItem from "./UI/ListItem";

const Sidebar: React.FC = (customTheme, customMode ) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}
    >
      <ListItem />
    </Box>
  );
};

export default Sidebar;
