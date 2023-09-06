import React from "react";
import MainCss from "../Main Styles/MainLeaseBalance.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SimplePaper from "../Material UI/CustomCardsII";

function MainLeaseBalance() {
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
                    <div>705 Uribia Lane "." #333 "." Lease</div>
                    <div className={MainCss["ActiveLease-color"]}>
                      12323 ATT ATT
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className={MainCss["Properties-list"]}>
                  <li>Overview</li>
                  <li>Tenants</li>
                  <li>Transactions</li>
                  <li>Rent</li>
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
            <div className={MainCss["Properties-Search"]}>
              {/* =========================================================== */}
              <div>
                {/* <input
                  type="text"
                  name="text"
                  placeholder="search"
                  className={MainCss["inputI"]}
                /> */}
              </div>
              <div>{/* <VariantAvatars /> */}</div>
              <div>{/* <FloatingAction /> */}</div>
              {/* =============================================================== */}
            </div>
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
            <SimplePaper />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLeaseBalance;
