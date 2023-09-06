import React from "react";
import MainCss from "../Main Styles/ChartofAcc.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import FloatingActionButtons from "../Material UI/floatingButton";
import FloatingActionButtonExtendedSize from "../Material UI/FloatBtn";
import SearchIcon from "@mui/icons-material/Search";
// import BasicStack from "../Material UI/Basics";
import VariantAvatars from "../Material UI/Variant";
// import RentTables from "../Material UI/RentTable";
// import { NavLink } from "react-router-dom";
import FloatingAction from "../Material UI/TaskBtn";
import ChartofAccTable from "../Material UI/ChartOfAccTable";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChartofAccModal from "../Modal/ChartofAccModal";
// import SimpleContainer from "../Material UI/Fluid";

function MainChartofAccounting() {
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
                  <div className={MainCss["flexthem"]}>
                    <div className={MainCss["accout-List"]}>
                      <div className={MainCss["banking"]}>Banking</div>
                      <div className={MainCss["chart"]}>Chart of Account</div>
                      <div>
                        Use these account to categorize and record your
                        transactions.
                      </div>
                    </div>
                  </div>
                  <button className={MainCss["btn"]}>
                    <ChartofAccModal />
                  </button>
                </div>
              </div>
              <div>
                <div className={MainCss["List"]}>
                  <div>
                    <div className={MainCss["ListI"]}>
                      <div>
                        <PrivacyTipOutlinedIcon style={{ fontSize: "19px" }} />{" "}
                      </div>
                      <div>Understanding your chart of accounts</div>
                    </div>
                  </div>
                  <div>
                    <div className={MainCss["ListI"]}>
                      <div>
                        <PrivacyTipOutlinedIcon style={{ fontSize: "19px" }} />{" "}
                      </div>
                      <div>Understanding your chart of accounts</div>
                    </div>
                  </div>
                  <div>
                    <div className={MainCss["ListII"]}>
                      <div>
                        <PrivacyTipOutlinedIcon style={{ fontSize: "19px" }} />{" "}
                      </div>
                      <div>How do I change my default accounts</div>
                    </div>
                  </div>
                  <div>
                    <div className={MainCss["ListII"]}>
                      <div>
                        <PlayCircleFilledWhiteOutlinedIcon
                          style={{ fontSize: "19px" }}
                        />{" "}
                      </div>
                      <div>Watch a video</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={MainCss["Properties-DividerII"]}>
            <div className={MainCss["Properties-Search"]}>
              <div className={MainCss["Input"]}>
                <div>
                  <input
                    type="text"
                    name="text"
                    placeholder="search"
                    className={MainCss["inputI"]}
                  />
                </div>
                <div>
                  <TuneOutlinedIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div>
            <ChartofAccTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainChartofAccounting;
