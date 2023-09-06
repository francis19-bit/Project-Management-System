import React from "react";
import MainCss from "../Main Styles/MainActiveLease.module.css";
import SimplePaperII from "../Material UI/CustomCardsI";
import { NavLink } from "react-router-dom";

function MainActiveLeases() {
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
                  <li>Deposits</li>
                  <li>Signature Requests</li>
                  <li>Tasks</li>
                  <li>Notes</li>
                  <li>Files</li>
                  <li>Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ========================================================== */}
          {/* ========================================================== */}
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div>
            <SimplePaperII />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainActiveLeases;
