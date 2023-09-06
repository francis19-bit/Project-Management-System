import React from "react";
import css from "../../Main Styles/styles/Sidebar.module.css";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";

const Sidebar = () => {
  return (
    <>
      <div className={css["Container"]}>
        <div className={css["Navigate-Bar"]}>
          <div>
            <div className={css["Nav-Tittle"]}>Estate</div>
          </div>
          <div>
            <Divider style={{ color: "black" }} />
            <div className={css["Nav-Btn"]}>
              <button type="button" className={css["glow-on-hover"]}>
                + &nbsp; Create New
              </button>
            </div>
          </div>
          <div>
            <div className={css["Nav-Overview-List"]}>
              <div>
                <button>
                  {/* <NavLink to="/overview" className={css["NavLinks"]}> */}
                  <ul className={css["Nav-Overview-ul"]}>
                    <li>
                      <PreviewIcon style={{ width: "19px" }} />
                    </li>
                    <li>&nbsp;Overview</li>
                  </ul>
                  {/* </NavLink> */}
                </button>
              </div>
              <div>
                <ol className={css["Nav-Ul"]}>
                  <li>
                    <NavLink to="/rentpage" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <ApartmentIcon style={{ width: "19px" }} />
                        </li>
                        <li>Rentals</li>
                        <li style={{ marginLeft: "65%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/leasing"} className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li>
                          <SupervisorAccountIcon style={{ width: "19px" }} />
                        </li>
                        <li>Leasing</li>
                        <li style={{ marginLeft: "60%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/people"} className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li style={{ marginLeft: "-6%" }}>
                          <GroupsIcon style={{ width: "19px" }} />
                        </li>
                        <li>People</li>
                        <li style={{ marginLeft: "73%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/SidebarTasks"} className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li style={{ marginLeft: "-10%" }}>
                          <AssignmentIcon style={{ width: "19px" }} />
                        </li>
                        <li>Tasks</li>
                        <li style={{ marginLeft: "85%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/accounting"} className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li style={{ marginLeft: "6%" }}>
                          <BookOnlineIcon style={{ width: "19px" }} />
                        </li>
                        <li>Accounting</li>
                        <li style={{ marginLeft: "35%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/compage" className={css["NavLinks"]}>
                      <ul className={css["Icon-Arrow"]}>
                        <li className={css["communication"]}>
                          <CampaignIcon style={{ width: "19px" }} />
                        </li>
                        <li>Communications</li>
                        <li style={{ marginLeft: "10%" }}>
                          <ArrowRightAltIcon />
                        </li>
                      </ul>
                    </NavLink>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={css["RepoSettin"]}>
                        <AssessmentIcon style={{ width: "19px" }} />
                      </li>
                      <li>Reports</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={css["Icon-Arrow"]}>
                      <li className={css["RepoSettin"]}>
                        <SettingsIcon style={{ width: "19px" }} />
                      </li>
                      <li>settings</li>
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

export default Sidebar;
