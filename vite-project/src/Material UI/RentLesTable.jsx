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
import BlockIcon from "@mui/icons-material/Block";
import HomeIcon from "@mui/icons-material/Home";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

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
    border: 0,
  },
}));

function createData(name, Assignto, Dueat, RelatedTo, Status, Menu) {
  return { name, Assignto, Dueat, RelatedTo, Status, Menu };
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
          <HomeIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>Recurring Rent</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          <div>
            <div className={Rent["Monthly"]}>
              <div>
                {" "}
                <AutorenewOutlinedIcon />{" "}
              </div>
              <div>Monthly</div>
            </div>
          </div>

          {/* <b className={Rent["color-black"]}>
            <div></div>
            <div>PineView-ATT Mod 4</div>
          </b> */}
        </div>
        <div>
          <div className={Rent["zero"]}>
            {/* <div>
              <DangerousIcon />
            </div> */}
            {/* <div className={Rent["ach"]}>#0027H</div> */}
          </div>
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
            <CalendarMonthIcon />
          </div>
          <div>1/33/4440</div>
        </div>
        <div className={Rent["all-flex"]}>
          <div>
            Next Charge
            <p>12/32/1090</p>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div> Rental Income</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        <div>
          <AccessTimeOutlinedIcon />{" "}
        </div>
        <div>
          <div>Future</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div>$1,000.00</div>
        </div>
      </div>
    </div>,
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <HomeIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>Recurring Rent</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          <div>
            <div className={Rent["Monthly"]}>
              <div>
                {" "}
                <AutorenewOutlinedIcon />{" "}
              </div>
              <div>Monthly</div>
            </div>
          </div>

          {/* <b className={Rent["color-black"]}>
            <div></div>
            <div>PineView-ATT Mod 4</div>
          </b> */}
        </div>
        <div>
          <div className={Rent["zero"]}>
            {/* <div>
              <DangerousIcon />
            </div> */}
            {/* <div className={Rent["ach"]}>#0027H</div> */}
          </div>
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
            <CalendarMonthIcon />
          </div>
          <div>1/33/4440</div>
        </div>
        <div className={Rent["all-flex"]}>
          <div>
            Next Charge
            <p>12/32/1090</p>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div> Rental Income</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        <div>
          <AccessTimeOutlinedIcon />{" "}
        </div>
        <div>
          <div>Future</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div>$1,000.00</div>
        </div>
      </div>
    </div>,
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
  ),
  // Add more rows as needed
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <HomeIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>Recurring Rent</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          <div>
            <div className={Rent["Monthly"]}>
              <div>
                {" "}
                <AutorenewOutlinedIcon />{" "}
              </div>
              <div>Monthly</div>
            </div>
          </div>

          {/* <b className={Rent["color-black"]}>
            <div></div>
            <div>PineView-ATT Mod 4</div>
          </b> */}
        </div>
        <div>
          <div className={Rent["zero"]}>
            {/* <div>
              <DangerousIcon />
            </div> */}
            {/* <div className={Rent["ach"]}>#0027H</div> */}
          </div>
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
            <CalendarMonthIcon />
          </div>
          <div>1/33/4440</div>
        </div>
        <div className={Rent["all-flex"]}>
          <div>
            Next Charge
            <p>12/32/1090</p>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div> Rental Income</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        <div>
          <AccessTimeOutlinedIcon />{" "}
        </div>
        <div>
          <div>Future</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div>$1,000.00</div>
        </div>
      </div>
    </div>,
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <HomeIcon />
        </div>
        <div className={Rent["color-green"]}>
          <div className={Rent["Tasmedium"]}>
            <div>Recurring Rent</div>{" "}
            {/* <div className={Rent["color-"]}>Medium Priority</div> */}
          </div>
          <div>
            <div className={Rent["Monthly"]}>
              <div>
                {" "}
                <AutorenewOutlinedIcon />{" "}
              </div>
              <div>Monthly</div>
            </div>
          </div>

          {/* <b className={Rent["color-black"]}>
            <div></div>
            <div>PineView-ATT Mod 4</div>
          </b> */}
        </div>
        <div>
          <div className={Rent["zero"]}>
            {/* <div>
              <DangerousIcon />
            </div> */}
            {/* <div className={Rent["ach"]}>#0027H</div> */}
          </div>
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
            <CalendarMonthIcon />
          </div>
          <div>1/33/4440</div>
        </div>
        <div className={Rent["all-flex"]}>
          <div>
            Next Charge
            <p>12/32/1090</p>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div> Rental Income</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        <div>
          <AccessTimeOutlinedIcon />{" "}
        </div>
        <div>
          <div>Future</div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div className={Rent["Date"]}>
        {/* <div>
          <BlockIcon />{" "}
        </div> */}
        <div>
          <div>$1,000.00</div>
        </div>
      </div>
    </div>,
    <div className={Rent["Date"]}>
      <div>
        <span style={dividerStyle}></span>{" "}
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
  ),
];

const RentLesTable = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="center">Term</StyledTableCell>
            <StyledTableCell align="center">Charges</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
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
              <StyledTableCell align="center">{row.Status}</StyledTableCell>
              <StyledTableCell align="center">{row.Menu}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RentLesTable;
