import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import CancelIcon from "@mui/icons-material/Cancel";
import Basic from "../Main Styles/Basics.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(6),
  //   textAlign: "",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  const [selectedDate, setSelectedDate] = useState(new Date("2023-01-18"));
  const dividerStyle = {
    borderLeft: "1px solid black",
    height: "100%",
    // margin: "0 5px",
  };
  const dividerStyleII = {
    borderLeft: "1px solid black",
    height: "100%",
    // margin: "0 5px",
  };
  const dividerStyleIII = {
    borderLeft: "1px solid black",
    height: "100%",
    // margin: "0 10px",
    // marginLeft: "-300%",
    // position: "relative",
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          {" "}
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          {" "}
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
        <Item>
          {" "}
          <div>
            <div className={Basic["Tenant"]}>
              <div>
                <ul className={Basic["PName"]}>
                  <li>
                    {" "}
                    <AssignmentIcon />{" "}
                  </li>
                  <li>
                    <p>
                      Task &nbsp; <a>Medium priority</a>{" "}
                    </p>
                    Joanna Rocks
                    <p>
                      {" "}
                      <small>Pineview-ATT Mod 4</small>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={Basic["Amount"]}>
                  <li>
                    <CancelIcon />
                  </li>
                  <li>00000</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyle}></span>
              </div>
              <div>
                <ul className={Basic["User"]}>
                  <li>
                    <Avatar>AJ</Avatar>
                  </li>
                  <li>User</li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleII}></span>
              </div>
              <div>
                <ul className={Basic["Time"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <CalendarMonthIcon style={{ width: "18px" }} />
                      </li>
                      <li>
                        {" "}
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <AccessTimeIcon style={{ width: "18px" }} />
                      </li>
                      <li>Monday</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ==================== */}
              <div>
                <ul className={Basic["Time-all"]}>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <LocationOnIcon style={{ width: "18px" }} />
                      </li>
                      <li>987 ICP Tessa</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={Basic["Time-ul"]}>
                      <li>
                        <SensorDoorIcon style={{ width: "18px" }} />
                      </li>
                      <li>Unit</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              {/* ======================= */}
              <div>
                <div className={Basic["In-progress"]}>
                  <div>
                    <AccessTimeIcon style={{ width: "19px" }} />
                  </div>
                  <div>
                    <a>In Progress</a>
                  </div>
                </div>
              </div>
              <div>
                <span style={dividerStyleIII}></span>
              </div>
              <div>
                <div>
                  <MoreVertIcon />
                </div>
              </div>
            </div>
          </div>
        </Item>
      </Stack>
    </Box>
  );
}
