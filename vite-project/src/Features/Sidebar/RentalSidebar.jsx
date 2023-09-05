import React from "react";
import css from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WestIcon from "@mui/icons-material/West";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import { Divider } from "@mui/material";

const RentalSidebar = () => {
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
                        <li className={css["Underlined-Rental"]}>Rentals</li>
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
                    <NavLink to="/properties">
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <button className={css["ApartIcon"]}>
                            <li>
                              {" "}
                              <ApartmentIcon />{" "}
                            </li>
                            <li>Properties</li>
                          </button>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/prop"} style={{ color: "#fff" }}>
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <div className={css["ApartIcon"]}>
                            {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                            <li className={css["unit"]}>
                              {" "}
                              <LensBlurIcon />{" "}
                            </li>
                            <li>Units</li>
                          </div>
                        </li>
                      </ul>
                    </NavLink>
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

export default RentalSidebar;
