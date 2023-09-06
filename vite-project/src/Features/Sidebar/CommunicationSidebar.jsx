import React from "react";
import css from "../../Main Styles/styles/communication.module.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { NavLink } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupsIcon from "@mui/icons-material/Groups";
import SmsIcon from "@mui/icons-material/Sms";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Divider } from "@mui/material";

const CommunicationSidebar = () => {
  return (
    <>
      <div className={css["Container"]}>
        <div className={css["Navigate-Bar"]}>
          <div>
            <div className={css["Nav-Tittle"]}>Estate</div>
          </div>
          <div>
            <Divider />
            <div className={css["Nav-Btn"]}>
              <button type="button" className={css["glow-on-hover"]}>
                + &nbsp; Create New
              </button>
            </div>
          </div>

          <div>
            <div className={css["Nav-Overview-List"]}>
              <div>
                <ol className={css["Nav-Ul"]}>
                  <li>
                    <NavLink to="/rentpage" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["Underlined-communication"]}>
                          Communications
                        </li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["Back"]}>
                          <WestIcon
                            style={{ width: "15px", color: "#3b3838" }}
                          />
                        </li>
                        <li className={css["color"]}>Go Back</li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={css["Annouc"]}>
                            {" "}
                            <CampaignIcon />{" "}
                          </li>
                          <li>Annoucements</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={[css["logs"]]}>
                            {" "}
                            <SmsIcon style={{ width: "15px" }} />{" "}
                          </li>
                          <li>Communication Log</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={[css["logs"]]}>
                            {" "}
                            <CampaignIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>Signature Requests</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          <li className={[css["logs"]]}>
                            {" "}
                            <BorderColorIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>Signature Templates</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunicationSidebar;
