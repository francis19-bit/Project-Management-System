import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
// import NavigationIcon from "@mui/icons-material/Navigation";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";

export default function FloatingBtn() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" size="x-large" color="black">
        <div style={{ fontSize: "15px" }}>Poperty Type</div>
      </Fab>
    </Box>
  );
}
