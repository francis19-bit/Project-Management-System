import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsIcon from "@mui/icons-material/Settings";
import paper from "../Main Styles/MinSettingsPaper.module.css";
import AttractionsIcon from "@mui/icons-material/Attractions";
// import SettingsIcon from "@mui/icons-material/Settings";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500, // Increase the width as needed
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const buttonStyle = {
  width: 50, // Increase the width as needed
  height: 50, // Increase the height as needed
};

export default function ReserveFunds() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div style={buttonStyle} onClick={handleOpen}>
        {/* <SettingsIcon style={{ fontSize: 50 }} /> */}
        <div className={paper["GridBtn"]}>
          <div className={paper["GridPaper-Btn"]}>
            <div className={paper["Paper-IconBtn"]}>
              <AttractionsIcon style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className={paper["GridPaper-IIBtn"]}>
            <div className={paper["PaperBtn"]}>
              <div>
                <b>Reserve Funds</b>
              </div>
              <div>Edit the amount of reserve funds </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <b>General Infomation</b>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
