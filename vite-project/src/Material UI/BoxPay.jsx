import * as React from "react";
import Box from "@mui/material/Box";
import Boxs from "../Main Styles/BoxSxI.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CachedIcon from "@mui/icons-material/Cached";
import Avatar from "@mui/material/Avatar";
import CancelIcon from "@mui/icons-material/Cancel";
import { Divider } from "@mui/material";

export default function BoxPay() {
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 400,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div className={Boxs["grid"]}>
          <div className={Boxs["first"]}>
            <div className={Boxs["Tenant-color"]}>
              <div className={Boxs["Tenant"]}>
                <div>
                  <ul className={Boxs["Recent"]}>
                    <li>Recent Payments Received</li>
                  </ul>
                </div>
                <div>
                  <ul className={Boxs["Recent-li"]}>
                    <li>
                      <CachedIcon />
                    </li>
                    <li>
                      <MoreVertIcon />{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={Boxs["second"]}>
            <Divider />
            <ul className={`${Boxs["Tenant-ul"]} ${Boxs["scrollable-list"]}`}>
              <li>
                <div className={Boxs["Tenant"]}>
                  <div>
                    <ul className={Boxs["Recent-Request"]}>
                      <li>
                        {" "}
                        <Avatar>PF</Avatar>{" "}
                      </li>
                      <li>
                        Recent Tenant Requests
                        <p>
                          {" "}
                          <small className={Boxs["time"]}>
                            {" "}
                            2 hours ago | 156243-House 1
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={Boxs["Recent-li"]}>
                      <li>
                        <CancelIcon />
                      </li>
                      <li>Not started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className={Boxs["Tenant"]}>
                  <div>
                    <ul className={Boxs["Recent-Request"]}>
                      <li>
                        {" "}
                        <Avatar>PF</Avatar>{" "}
                      </li>
                      <li>
                        Recent Tenant Requests
                        <p>
                          {" "}
                          <small className={Boxs["time"]}>
                            {" "}
                            2 hours ago | 156243-House 1
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={Boxs["Recent-li"]}>
                      <li>
                        <CancelIcon />
                      </li>
                      <li>Not started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className={Boxs["Tenant"]}>
                  <div>
                    <ul className={Boxs["Recent-Request"]}>
                      <li>
                        {" "}
                        <Avatar>PF</Avatar>{" "}
                      </li>
                      <li>
                        Recent Tenant Requests
                        <p>
                          {" "}
                          <small className={Boxs["time"]}>
                            {" "}
                            2 hours ago | 156243-House 1
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={Boxs["Recent-li"]}>
                      <li>
                        <CancelIcon />
                      </li>
                      <li>Not started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className={Boxs["Tenant"]}>
                  <div>
                    <ul className={Boxs["Recent-Request"]}>
                      <li>
                        {" "}
                        <Avatar>PF</Avatar>{" "}
                      </li>
                      <li>
                        Recent Tenant Requests
                        <p>
                          {" "}
                          <small className={Boxs["time"]}>
                            {" "}
                            2 hours ago | 156243-House 1
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={Boxs["Recent-li"]}>
                      <li>
                        <CancelIcon />
                      </li>
                      <li>Not started</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className={Boxs["Tenant"]}>
                  <div>
                    <ul className={Boxs["Recent-Request"]}>
                      <li>
                        {" "}
                        <Avatar>PF</Avatar>{" "}
                      </li>
                      <li>
                        Recent Tenant Requests
                        <p>
                          {" "}
                          <small className={Boxs["time"]}>
                            {" "}
                            2 hours ago | 156243-House 1
                          </small>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={Boxs["Recent-li"]}>
                      <li>
                        <CancelIcon />
                      </li>
                      <li>Not started</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}
