import React from "react";
import MainCss from "../Main Styles/MainProperties.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FloatingActionButtonExtendedSize from "../Material UI/FloatBtn";
import Avatar from "@mui/material/Avatar";
import FloatingBtn from "../Material UI/PropIndustry";
import { NavLink } from "react-router-dom";

function MainProperties() {
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
                          <small>Properties</small>
                        </li>
                        <li>
                          <b className={MainCss["Properties-Head"]}>
                            Tessa Lane
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
                  <NavLink to={"/leasebalance"}>
                    <li>Overview</li>
                  </NavLink>
                  <NavLink to={"/reports"}>
                    <li>Reports</li>
                  </NavLink>
                  <NavLink to={"/units"}>
                    <li>Units</li>
                  </NavLink>
                  <NavLink to={"/leases"}>
                    {" "}
                    <li>Leases</li>
                  </NavLink>
                  <NavLink to={"/tenants"}>
                    {" "}
                    <li>Tenants</li>
                  </NavLink>
                  <NavLink to={"/rentalapplication"}>
                    <li>Rental Applications</li>
                  </NavLink>
                  <li>Signature Requests</li>
                  <NavLink to={"/tasks"}>
                    <li>Tasks</li>
                  </NavLink>
                  <li>Notes</li>
                  <li>Files</li>
                  <NavLink to={"/settings"}>
                    <li>Settings</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={MainCss["Cards-Grid"]}>
          <div className={MainCss["space"]}></div>
          <div className={MainCss["CardsI"]}>
            <div className={MainCss["card"]}>
              <div className={MainCss["image"]}>Quick Actions</div>
              <div className={MainCss["content"]}>
                <div>
                  <div className={MainCss["title"]}>
                    What will you do next ?
                  </div>
                </div>

                <div className={MainCss["desc"]}>
                  <FloatingActionButtonExtendedSize />
                </div>
              </div>
            </div>
          </div>
          <div className={MainCss["CardsII"]}>
            <div className={MainCss["ul"]}>
              <div>
                <div className={MainCss["spaceI"]}>
                  <div className={MainCss["cardI"]}>
                    <div className={MainCss["contentI"]}>
                      <div>
                        <div className={MainCss["avata"]}>
                          <Avatar>ck</Avatar>
                        </div>
                      </div>

                      <div className={MainCss["descI"]}>
                        <div className={MainCss["titleI"]}>
                          {" "}
                          <FloatingBtn />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={MainCss["spaceI"]}>
                  <div className={MainCss["cardI"]}>
                    <div className={MainCss["contentI"]}>
                      <div>
                        <div className={MainCss["avata"]}>
                          <Avatar>ck</Avatar>
                        </div>
                      </div>

                      <div className={MainCss["descI"]}>
                        <div className={MainCss["titleI"]}>
                          {" "}
                          <FloatingBtn />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={MainCss["spaceI"]}>
                  <div className={MainCss["cardI"]}>
                    <div className={MainCss["contentI"]}>
                      <div>
                        <div className={MainCss["avata"]}>
                          <Avatar>ck</Avatar>
                        </div>
                      </div>

                      <div className={MainCss["descI"]}>
                        <div className={MainCss["titleI"]}>
                          {" "}
                          <FloatingBtn />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={MainCss["CardsIII"]}>
            <div className={MainCss["card-I"]}>
              <div className={MainCss["image-I"]}>Quick Actions</div>
              <div className={MainCss["content-I"]}>
                <div>
                  <div className={MainCss["title-I"]}>
                    What will you do next ?
                  </div>
                </div>
                <div>
                  <div className={MainCss["card-cube"]}>Image</div>
                  <div className={MainCss["card-cube"]}>Image</div>
                </div>
                <div className={MainCss["desc-I"]}>
                  <FloatingActionButtonExtendedSize />
                </div>
              </div>
            </div>
            <div className={MainCss["spaceII-I"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainProperties;
