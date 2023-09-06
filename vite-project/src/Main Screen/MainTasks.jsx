import React from "react";
import MainCss from "../Main Styles/MainTasks.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VariantAvatars from "../Material UI/Variant";
import FloatingAction from "../Material UI/TaskBtn";
import { NavLink } from "react-router-dom";
import RentTable from "../Material UI/RentTable";

function MainTasks() {
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
                          <small>Tasks</small>
                        </li>

                        <li>
                          <b className={MainCss["Properties-Head"]}>My Task</b>
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
                  <li>Reports</li>
                  <li>Units</li>
                  <li>Leases</li>
                  <li>Tenants</li>
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
          {/* ========================================================== */}
          <div className={MainCss["Properties-DividerII"]}>
            <div className={MainCss["Properties-Search"]}>
              {/* =========================================================== */}
              <div>
                <input
                  type="text"
                  name="text"
                  placeholder="search"
                  className={MainCss["inputI"]}
                />
              </div>
              <div>
                <VariantAvatars />
              </div>
              <div>
                <FloatingAction />
              </div>
              {/* =============================================================== */}
            </div>
          </div>
          {/* ========================================================== */}
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div>
            <RentTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainTasks;
