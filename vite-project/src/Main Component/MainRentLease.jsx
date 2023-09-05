import React from "react";
import MainCss from "../Main Styles/RentLes.module.css";

import { NavLink } from "react-router-dom";
import RentLesTable from "../Material UI/RentLesTable";
import RentTableBtn from "../Material UI/RentTableBtn";
import TuneIcon from "@mui/icons-material/Tune";

function MainRentLease() {
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
                  <div className={MainCss["ActiveLease"]}>
                    <div>705 Uribia Lane "." Mo "."</div>
                    <div className={MainCss["ActiveLease-color"]}>ATTM.ATT</div>
                  </div>
                </div>
              </div>
              <div>
                <ul className={MainCss["Properties-list"]}>
                  <li>Overview</li>
                  <li>Tenants</li>
                  <li>Transactions</li>
                  <NavLink to={"/rent"}>
                    <li>Rent</li>
                  </NavLink>
                  {/* <NavLink to={"/rentalapplication"}> */}
                  <li>Deposits</li>
                  {/* </NavLink> */}
                  <li>Signature Requests</li>
                  {/* <NavLink to={"/tasks"}> */}
                  <li>Tasks</li>
                  {/* </NavLink> */}
                  <li>Notes</li>
                  <li>Files</li>
                  <li>Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ========================================================== */}
          <div className={MainCss["Properties-DividerII"]}>
            <div className={MainCss["bar"]}>
              <div>
                <div className={MainCss["items"]}>
                  <div>
                    <input type="text" placeholder="search" name="text" />
                  </div>
                  <div>
                    <TuneIcon />
                  </div>
                </div>
              </div>
              <div>
                <RentTableBtn />
              </div>
            </div>
            {/* ===============Recurring Rent */}
            <div className={MainCss["underline-text"]}>Recurring Rent</div>
            {/* ================End**** */}
          </div>
          {/* ========================================================== */}
          <div className={MainCss["Properties-DividerIII"]}>
            <div className={MainCss["Properties-Divid-I"]}>
              <div className={MainCss["Headen"]}>
                <div>Task</div>
                <div> {/* <BasicTextFields />{" "} */}</div>
              </div>
            </div>
            <div className={MainCss["Properties-Divid-II"]}>dcs</div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div>
            <RentLesTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRentLease;
