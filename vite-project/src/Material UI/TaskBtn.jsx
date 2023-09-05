import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// import NavigationIcon from "@mui/icons-material/Navigation";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";

export default function FloatingAction() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.3 } }}>
      <Fab variant="extended" size="medium" color="black">
        <BookIcon sx={{ mr: 0.1 }} />
        New Task
      </Fab>
      <Fab variant="extended" size="medium" color="black">
        <PersonAddIcon sx={{ mr: 0.1 }} />
        New Owner Request
      </Fab>
      <Fab variant="extended" size="medium" color="black">
        <PersonIcon sx={{ mr: 0.1 }} />
        New Tenant Request
      </Fab>
      <Fab variant="extended" size="medium" color="black">
        <BookIcon sx={{ mr: 0.1 }} />
        New work order
      </Fab>
    </Box>
  );
}
