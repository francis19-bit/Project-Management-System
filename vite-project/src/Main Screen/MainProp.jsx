import React from "react";
import MainCss from "../Main Styles/MainProperties.module.css";
import MainPropTable from "../Material UI/MainPropTable";

function MainProp() {
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
                          <b>Properties</b>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button>+ &nbsp; create New</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>{/* ============================ */}</div>
            </div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]} style={{ color: "#fff" }}>
          <MainPropTable />
        </div>
      </div>
    </>
  );
}

export default MainProp;
