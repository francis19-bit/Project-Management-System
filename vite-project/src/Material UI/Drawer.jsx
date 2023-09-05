import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TuneIcon from "@mui/icons-material/Tune";
import MainCss from "../Main Styles/MainHome.module.css";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="customStatement" disablePadding>
          <div className={MainCss["custom"]}>
            <ListItemText
              primary="Widgets"
              className={MainCss["custom-vertical-line"]}
            />
          </div>
        </ListItem>
        {/* <div>Widgets</div> */}
      </List>
      <Divider />
      <List>
        <ListItem key="customStatement" disablePadding>
          {/* <ListItemButton>
            <ListItemText primary="Widgets" />
          </ListItemButton> */}
        </ListItem>
        {/* <div>hgkyh</div> */}
      </List>
    </Box>
  );

  return (
    <div>
      {["Dashboard"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              justifyContent: "center",
            }}
          >
            <Button onClick={toggleDrawer(anchor, true)}>
              <ListItemIcon>
                <TuneIcon /> {/* Include your custom icon component here */}
              </ListItemIcon>
              {anchor}
            </Button>
          </div>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
