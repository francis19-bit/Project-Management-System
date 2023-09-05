import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rent from "../Main Styles/RentApp.module.css";
// import BadgeAvatars from "./Profile";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FileSystemNavigator from "./ChartTree";

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

function createData(
  name,
  Type,
  DefaultAccountfor,
  Description,
  Status,
  Actions
) {
  return { name, Type, DefaultAccountfor, Description, Status, Actions };
}

const dividerStyle = {
  borderLeft: "1px solid black",
  height: "100%",
  margin: "0 20px",
};

const rows = [
  // Your existing rows here...
];

const moreRows = [
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          Accounts Receivable <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Accounts Receivable</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>Account Receivable</div>
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        {/* <div>Account Receivable</div> */}
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
    // <div>
    //   <div className={Rent["Created"]}>
    //     <div>
    //       <span style={dividerStyle}></span>
    //     </div>
    //     <div>hjugy</div>
    //   </div>
    // </div>
  ),
  /* ...other cell data... */
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          Amenity Income <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Accounts Receivable</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>Account Receivable</div>
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        {/* <div>Account Receivable</div> */}
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  /* ...other cell data... */
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          <FileSystemNavigator /> <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Bank</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      {/* <div>Account Receivable</div> */}
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        {/* <div>Account Receivable</div> */}
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  /* ...other cell data... */
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          Amenity Income <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Bank</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      {/* <div>Account Receivable</div> */}
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        {/* <div>Account Receivable</div> */}
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  /* ...other cell data... */
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          #1 - 1900 Main Street Account <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Bank</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      {/* <div>Account Receivable</div> */}
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        {/* <div>Account Receivable</div> */}
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
    // =========================================================
  ),
  //   ===========================================
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>{/* <BadgeAvatars /> */}</div>
        <div className={Rent["color-green"]}>
          #2 - 1890 University <br />
          {/* <b className={Rent["color-black"]}>Grant Smith</b> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b>Asset -> Bank</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div> */}
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List1"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      {/* <div>Account Receivable</div> */}
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>Account Receivable</div>
      </div>
    </div>,
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>

    // =========================================================
  ),
];

const ChartofAccTable = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">
              Default Account for
            </StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Type}</StyledTableCell>
              <StyledTableCell align="center">
                {row.DefaultAccountfor}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">{row.Actions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChartofAccTable;
