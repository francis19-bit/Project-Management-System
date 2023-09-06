import React from "react";
import MainCss from "../Main Styles/MainRent.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FloatingActionButtonExtendedSize from "../Material UI/FloatBtn";
import SearchIcon from "@mui/icons-material/Search";
import VariantAvatars from "../Material UI/Variant";
import RentTables from "../Material UI/RentTable";
import { NavLink } from "react-router-dom";

function MainRent() {
  return (
    <>
      <div className={MainCss["Main-Grid"]}>
        {/* ================**Search Bar**================ */}
        <div className={MainCss["Search-Grid"]}></div>
        {/* ================*End of **Search Bar**================ */}
        <div className={MainCss["Properties-Grid"]}>
          <div className={MainCss["Properties-DividerI"]}>
            <div className={MainCss["Properties"]}>
              <div>
                <div className={MainCss["Properties-Lane"]}>
                  <ul className={MainCss["Properties-Ul"]}>
                    <li>
                      <ul className={MainCss["Properties-Tessa"]}>
                        <li>
                          <small>Properties</small>
                        </li>
                        <li>
                          <b className={MainCss["Properties-Head"]}>
                            Tessa Lane
                          </b>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <MoreVertIcon />
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul className={MainCss["Properties-list"]}>
                  <NavLink to={"/leasebalance"}>
                    <li>Overview</li>
                  </NavLink>
                  <NavLink to={"/reports"}>
                    <li>Reports</li>
                  </NavLink>
                  <NavLink to={"/units"}>
                    <li>Units</li>
                  </NavLink>
                  <NavLink to={"/leases"}>
                    {" "}
                    <li>Leases</li>
                  </NavLink>
                  <NavLink to={"/tenants"}>
                    {" "}
                    <li>Tenants</li>
                  </NavLink>
                  <NavLink to={"/rentalapplication"}>
                    <li>Rental Applications</li>
                  </NavLink>
                  <li>Signature Requests</li>
                  <NavLink to={"/tasks"}>
                    <li>Tasks</li>
                  </NavLink>
                  <li>Notes</li>
                  <li>Files</li>
                  <NavLink to={"/settings"}>
                    <li>Settings</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
          <div className={MainCss["Properties-DividerII"]}>
            <div className={MainCss["Properties-Search"]}>
              <ul className={MainCss["Properties-Search-ul"]}>
                <li>
                  <ul className={MainCss["Properties-input-ul"]}>
                    <li>
                      <input
                        placeholder="search"
                        name="text"
                        type="text"
                        className={MainCss["input"]}
                      />
                    </li>
                    <li>
                      <SearchIcon
                        style={{
                          color: "#fff",
                          marginLeft: "-100%",
                          marginTop: "9px",
                        }}
                      />
                    </li>
                  </ul>
                </li>
                <li>
                  <VariantAvatars />
                </li>

                <li>
                  <FloatingActionButtonExtendedSize />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div>
            <RentTables />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRent;
