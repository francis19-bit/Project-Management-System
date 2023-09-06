import React from "react";
import MainCss from "../Main Styles/MainMyTask.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MyTaskPaper from "../Material UI/CustomizeCardIII";

function MainMyTask() {
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
                          <small>Tasks</small> <br />{" "}
                        </li>
                        <li>
                          <b className={MainCss["Properties-Head"]}>
                            Leak &nbsp; #809H{" "}
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
                  <li>Overview</li>
                  <li>Subtasks</li>
                  <li>Notes</li>
                  <li>Files</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ========================================================== */}

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
            <MyTaskPaper />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMyTask;
