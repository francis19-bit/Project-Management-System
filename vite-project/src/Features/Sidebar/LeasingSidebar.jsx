import React from "react";
import css from "../../styles/Leasing.module.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { NavLink } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import CampaignIcon from "@mui/icons-material/Campaign";
import GroupsIcon from "@mui/icons-material/Groups";
import SmsIcon from "@mui/icons-material/Sms";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import StyleIcon from "@mui/icons-material/Style";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { Divider } from "@mui/material";

const LeasingSidebar = () => {
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
                  <li className={css["go"]}>
                    <NavLink to="/rentpage" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["Underlined-Lease"]}>Leasing</li>
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
                    <NavLink to={"/activeLeases"}>
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <div className={css["ApartIcon"]}>
                            {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                            <li className={css["Annouc"]}>
                              {" "}
                              <StickyNote2Icon style={{ width: "15px" }} />{" "}
                            </li>
                            <li>Active Leases</li>
                          </div>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={[css["Draft"]]}>
                            {" "}
                            <StyleIcon style={{ width: "15px" }} />{" "}
                          </li>
                          <li>Draft Leases</li>
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
                            <AttachMoneyIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>Lease Renewals</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={[css["Rent"]]}>
                        <div className={css["ApartIcon"]}>
                          <li>
                            {" "}
                            <PrecisionManufacturingIcon
                              style={{ width: "19px" }}
                            />{" "}
                          </li>
                          <li>Rental Applications</li>
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

export default LeasingSidebar;
