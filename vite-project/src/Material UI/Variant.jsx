import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TuneIcon from "@mui/icons-material/Tune";

export default function VariantAvatars() {
  return (
    <Stack direction="row" spacing={0.5}>
      <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
        <TuneIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
        <AssignmentIcon />
      </Avatar>
    </Stack>
  );
}
