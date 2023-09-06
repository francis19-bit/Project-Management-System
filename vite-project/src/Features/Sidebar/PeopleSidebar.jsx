import React from "react";
import css from "../../Main Styles/styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WestIcon from "@mui/icons-material/West";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import { Divider } from "@mui/material";

const PeopleSidebar = () => {
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
                        <li className={css["Underlined-Rental"]}>People</li>
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
                          <li>
                            {" "}
                            <EngineeringIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Tenants</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <EngineeringIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li> &nbsp; Owners</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <EngineeringIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Vendors</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <EngineeringIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Prospects</li>
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

export default PeopleSidebar;
