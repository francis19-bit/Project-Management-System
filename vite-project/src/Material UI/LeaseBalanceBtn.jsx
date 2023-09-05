import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export default function LeaseBalanceBtn() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.5 } }}>
      <Fab variant="extended" size="medium" color="primary">
        <LocalAtmIcon sx={{ mr: 2 }} />
        Post Charge
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <ThumbUpAltIcon sx={{ mr: 2 }} />
        Recieve Payment
      </Fab>
    </Box>
  );
}
