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
import BadgeAvatars from "./Profile";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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
  Property,
  ExpectedMoveIn,
  CreatedAt,
  Status,
  Actions
) {
  return { name, Property, ExpectedMoveIn, CreatedAt, Status, Actions };
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
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Grant Smith</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
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
      <div>{/* <LocationOnIcon /> */}</div>
      <div>{/* <b>Room 2</b> */}</div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),
  /* ...other cell data... */
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Coffee Shop</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b className={Rent["color-Red"]}>Movie-in 79 days ago</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Coffee Shop</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b className={Rent["color-Red"]}>Movie-in 79 days ago</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Coffee Shop</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b className={Rent["color-Red"]}>Movie-in 79 days ago</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Coffee Shop</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b className={Rent["color-Red"]}>Movie-in 79 days ago</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <BadgeAvatars />
        </div>
        <div className={Rent["color-green"]}>
          Lease <br /> <b className={Rent["color-black"]}>Coffee Shop</b>
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
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b>Room 1</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          <div>
            <LocationOnIcon />
          </div>
          <div>
            <b className={Rent["color-Red"]}>Movie-in 79 days ago</b>
          </div>
        </div>
      </div>
    </div>,
    // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        <div>
          <CalendarMonthIcon />
        </div>
        <div>2/07/2023</div>
      </div>
    </div>,
    // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>hjugy</div>
      </div>
    </div>
  ),

  /* ...other cell data... */
  /* ...other cell data... */
  /* ...other cell data... */
];

const RentApp = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Lessee</StyledTableCell>
            <StyledTableCell align="right">Property</StyledTableCell>
            <StyledTableCell align="right">Expected Move In</StyledTableCell>
            <StyledTableCell align="right">Created At</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Property}</StyledTableCell>
              <StyledTableCell align="right">
                {row.ExpectedMoveIn}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CreatedAt}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              <StyledTableCell align="right">{row.Actions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RentApp;
