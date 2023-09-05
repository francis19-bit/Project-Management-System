import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Typography from "@mui/material/Typography";
import MainCss from "../Accounting/ChartofAcc.module.css";
import ModeIcon from "@mui/icons-material/Mode";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import EditAttributesIcon from "@mui/icons-material/EditAttributes";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  //   p: 1,
};

export default function ChartofAccModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}> + &nbsp; Create New</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <div className={MainCss["Modal-Grid"]}>
              <div className={MainCss["Modal-GridI"]}>
                {/* ================Start********** */}
                <div>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <div className={MainCss["NewAcc"]}>
                      <div>
                        <LibraryBooksIcon style={{ fontSize: "60px" }} />
                      </div>
                      <div>New Account</div>
                    </div>
                  </Typography>
                </div>
                {/* ====================2nd**** */}
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <div className={MainCss["NewAccList"]}>
                    <div>
                      <div className={MainCss["class1"]}>
                        <div>
                          <ModeIcon />
                        </div>
                        <div>Account Info</div>
                      </div>
                    </div>
                    <div>
                      <div className={MainCss["class1"]}>
                        <div>
                          <MarkEmailReadIcon />
                        </div>
                        <div>Opening Balances</div>
                      </div>
                    </div>
                    <div>
                      <div className={MainCss["class1"]}>
                        <div>
                          <CollectionsBookmarkIcon />
                        </div>
                        <div>Lease Options</div>
                      </div>
                    </div>
                    <div>
                      <div className={MainCss["class1"]}>
                        <div>
                          <EditAttributesIcon />
                        </div>
                        <div> Check Printing</div>
                      </div>
                    </div>
                  </div>
                </Typography>
                {/* =======================2ndEnd** */}
                {/* =====================End***** */}
              </div>
              <div className={MainCss["Modal-GridII"]}></div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
