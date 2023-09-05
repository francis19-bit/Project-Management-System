import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import LoopIcon from "@mui/icons-material/Loop";

export default function LeaseBalanceBtn2() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.5 } }}>
      <Fab variant="extended" size="medium" color="primary">
        <LoopIcon sx={{ mr: 2 }} />
        Renew Lease
      </Fab>
      <Fab variant="extended" size="medium" color="primary">
        <SyncProblemIcon sx={{ mr: 2 }} />
        Not Renewing
      </Fab>
    </Box>
  );
}
