import React from "react";
import MainCss from "../Main Styles/MainProperties.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FloatingActionButtons from "../Material UI/floatingButton";
import FloatingActionButtonExtendedSize from "../Material UI/FloatBtn";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import VariantAvatars from "../Material UI/Variant";
import FloatingBtn from "../Material UI/PropIndustry";
import { NavLink } from "react-router-dom";
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
                        {/* <li>
                          <b className={MainCss["Properties-Head"]}>
                            Tessa Lane
                          </b>
                        </li> */}
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
