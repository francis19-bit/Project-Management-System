import React from "react";
import MainCss from "../Main Styles/MainHome.module.css";
import SelectSmall from "../Material UI/Dropdown";
import BoxSx from "../Material UI/BoxTanent";
import BoxPay from "../Material UI/BoxPay";
import BoxLease from "../Material UI/BoxLease";
import TemporaryDrawer from "../Material UI/Drawer";

function MainHome() {
  return (
    <>
      <div className={MainCss["Main-Grid"]}>
        {/* ================**Search Bar**================ */}
        <div className={MainCss["Search-Grid"]}></div>
        {/* ================*End of **Search Bar**================ */}
        <div className={MainCss["Welcome-Grid"]}>
          <div className="welcome">
            <div>
              <ul className={MainCss["welcom-back"]}>
                <li>
                  <small>Hi, Madam Mait</small>
                </li>
                <li>
                  {" "}
                  <b className={MainCss["Welcome-color"]}>Welcome back</b>{" "}
                </li>
              </ul>
            </div>
            <div>
              <ul className={MainCss["input"]}>
                <li>
                  <SelectSmall />{" "}
                </li>
                <li>
                  <SelectSmall />{" "}
                </li>
                <li>
                  <SelectSmall />{" "}
                </li>
                <li>
                  <SelectSmall />{" "}
                </li>
                <li className={MainCss["customize"]}>
                  <button className={MainCss["customize-Btn"]}>
                    <li>
                      <TemporaryDrawer />
                    </li>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div className={MainCss["Cards"]}>
            <div>
              <ul className={MainCss["BoxSx"]}>
                <li>
                  <BoxSx />
                </li>
                <li>
                  {" "}
                  <BoxLease />{" "}
                </li>
                <li>
                  <BoxPay />
                </li>
                <li>
                  <BoxLease />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
