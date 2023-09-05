import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rent from "../Main Styles/Task.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Avatar from "@mui/material/Avatar";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { NavLink } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BusinessIcon from "@mui/icons-material/Business";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import Person2Icon from "@mui/icons-material/Person2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 8,
  },
}));

function createData(name, Assignto, Dueat, RelatedTo) {
  return { name, Assignto, Dueat, RelatedTo };
}

const dividerStyle = {
  borderLeft: "1px solid black",
  height: "100%",
  margin: "0 20px",
};

const rows = [];

const moreRows = [
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <BusinessIcon />
          </div>
          <div>Office</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 2 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <FamilyRestroomIcon />
          </div>
          <div>Multy-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 4 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <Person2Icon />
          </div>
          <div>Single-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 1 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <BusinessIcon />
          </div>
          <div>Office</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 2 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <FamilyRestroomIcon />
          </div>
          <div>Multy-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 4 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <Person2Icon />
          </div>
          <div>Single-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 1 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <BusinessIcon />
          </div>
          <div>Office</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 2 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <FamilyRestroomIcon />
          </div>
          <div>Multy-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 4 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>656 Adegate Road</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          {/* <div>Joana Rocks</div> */}

          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div>Linda door, 45345</div>
          </b>
        </div>
        <div>
          {/* <div className={Rent["zero"]}>
            <div>
              <DangerousIcon />
            </div>
            <div className={Rent["ach"]}>#0027H</div>
          </div> */}
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <div className={Rent["all-flex"]}>
          <div>
            <Person2Icon />
          </div>
          <div>Single-Family</div>
        </div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <AccessAlarmIcon />
          </div>
          <div>Monday</div>
        </div> */}
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        {/* <div className={Rent["all-flex"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>192 Huron Terry</div>
        </div> */}
        <div className={Rent["all-flex"]}>
          <div>
            <LocalLibraryIcon />
          </div>
          <div> 1 Unit</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),

  // Add more rows as needed
];

const MainPropTable = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Property</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Active Units</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.Assignto}</StyledTableCell>
              <StyledTableCell align="center">{row.Dueat}</StyledTableCell>
              <StyledTableCell align="center"> {row.RelatedTo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainPropTable;
