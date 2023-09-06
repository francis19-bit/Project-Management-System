import React from "react";
import css from "../../Main Styles/styles/Tasks.module.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { NavLink } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import StyleIcon from "@mui/icons-material/Style";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Rotate90DegreesCcwIcon from "@mui/icons-material/Rotate90DegreesCcw";
import { Divider } from "@mui/material";

const TaskSidebar = () => {
  return (
    <>
      <div className={css["Container"]}>
        <div className={css["Navigate-Bar"]}>
          <div>
            <div className={css["Nav-Tittle"]}>Estate</div>
          </div>
          <div>
            <Divider />
            <div className={css["Nav-Btn"]}>
              <button type="button" className={css["glow-on-hover"]}>
                + &nbsp; Create New
              </button>
            </div>
          </div>

          <div>
            <div className={css["Nav-Overview-List"]}>
              <div>
                <ol className={css["Nav-Ul"]}>
                  <li className={css["go"]}>
                    <NavLink to="/rentpage" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["Underlined-Tasks"]}>Tasks</li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["Back"]}>
                          <WestIcon
                            style={{ width: "15px", color: "#3b3838" }}
                          />
                        </li>
                        <li className={css["color"]}>Go Back</li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={css["Unsign"]}>
                            {" "}
                            <EditNoteIcon style={{ width: "15px" }} />{" "}
                          </li>
                          <li>Unassigned Tasks</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={[css["Task"]]}>
                            {" "}
                            <AssignmentIndIcon style={{ width: "15px" }} />{" "}
                          </li>
                          {/* <NavLink
                            to={"/rentpage"}
                            style={{ color: "#fff", textDecoration: "none" }}
                          > */}
                          <li>My Tasks</li>
                          {/* </NavLink> */}
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li>
                        <div className={css["ApartIcon"]}>
                          {/* <ApartmentIcon style={{ width: "19px" }} /> Properties */}
                          <li className={[css["work"]]}>
                            {" "}
                            <EditNoteIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <li>Work Orders</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={[css["AllTask"]]}>
                        <div className={css["ApartIcon"]}>
                          <li>
                            {" "}
                            <AssignmentIndIcon style={{ width: "19px" }} />{" "}
                          </li>
                          <NavLink to={"/alltask"}>
                            <li>All Tasks</li>
                          </NavLink>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={[css["Recurring"]]}>
                        <div className={css["ApartIcon"]}>
                          <li>
                            {" "}
                            <Rotate90DegreesCcwIcon
                              style={{ width: "19px" }}
                            />{" "}
                          </li>
                          <li>Recurring Tasks</li>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSidebar;
