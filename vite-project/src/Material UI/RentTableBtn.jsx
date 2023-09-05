import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

export default function RentTableBtn() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab variant="extended" size="small" color="primary">
        <CreditCardIcon sx={{ mr: 1 }} />
        Recurring Credit
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <CreditScoreIcon sx={{ mr: 1 }} />
        Recurring Charge
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <PaidIcon sx={{ mr: 1 }} />
        Recurring Payment
      </Fab>
      <Fab variant="extended" size="small" color="primary">
        <HomeIcon sx={{ mr: 1 }} />
        Recurring Rent
      </Fab>
    </Box>
  );
}
