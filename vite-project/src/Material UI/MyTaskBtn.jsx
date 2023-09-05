import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GradeIcon from "@mui/icons-material/Grade";

export default function MyTaskBtn() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.5 } }}>
      <Fab variant="extended" size="medium" color="primary">
        <LocalAtmIcon sx={{ mr: 2 }} />
        Post An Update
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <ThumbUpAltIcon sx={{ mr: 2 }} />
        Complete Task
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <GradeIcon sx={{ mr: 2 }} />
        New Work Order
      </Fab>
    </Box>
  );
}
