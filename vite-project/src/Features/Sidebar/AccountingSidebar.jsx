import React from "react";
import css from "../../Main Styles/styles/Accounting.module.css";
import { NavLink } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BarChartIcon from "@mui/icons-material/BarChart";
import PrintIcon from "@mui/icons-material/Print";
import { Divider } from "@mui/material";

const AccountingSidebar = () => {
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
                        <li className={css["Underlined-Rental"]}>Accounting</li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <Divider />
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
                            <MonetizationOnIcon
                              style={{ width: "19px" }}
                            />{" "}
                          </li>
                          <li>&nbsp; Unpaid Rent</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={css["OpenBill"]}>
                            {" "}
                            <LocalAtmIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li> &nbsp; Open Bills</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={css["Reconcilliation"]}>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <RecyclingIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Reconcilliation</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={css["Bill"]}>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <LocalAtmIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Recurring Bills</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={css["Banking"]}>
                        <div className={css["ApartIcon"]}>
                          <li>
                            {" "}
                            <AccountBalanceIcon
                              style={{ width: "19px" }}
                            />{" "}
                          </li>
                          <li>&nbsp; Banking</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={css["chat"]}>
                    <NavLink
                      to={"/chartofaccounting"}
                      style={{ color: "#fff" }}
                    >
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <div className={css["ApartIcon"]}>
                            <li>
                              {" "}
                              <BarChartIcon style={{ width: "19px" }} />{" "}
                            </li>
                            <li>&nbsp; Chart of Accounts</li>
                          </div>
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={css["print"]}>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <PrintIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>&nbsp; Print Checks</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={css["outgoing"]}>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li>
                            {" "}
                            <MonetizationOnIcon
                              style={{ width: "19px" }}
                            />{" "}
                          </li>
                          <li>&nbsp; Outgoing Payments</li>
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

export default AccountingSidebar;
