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
import Rent from "../Main Styles/Lease.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { NavLink } from "react-router-dom";

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

function createData(name, Term, Status, Rent, Deposits, End) {
  return { name, Term, Status, Rent, Deposits, End };
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
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              <div>
                <CheckCircleIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Monthly</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$500.00</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              <div>
                <CheckCircleIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Monthly</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$500.00</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Pin"]}>
              <div>
                <IndeterminateCheckBoxIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Monthly</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$500.00</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Pin"]}>
              <div>
                <IndeterminateCheckBoxIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Monthly</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$500.00</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Pin"]}>
              <div>
                <IndeterminateCheckBoxIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Annually</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$6500.00</div>
      </div>
    </div>
  ),
  createData(
    <div className={Rent["List1"]}>
      <div className={Rent["List1-I"]}>
        <div>
          <AssignmentIcon />
        </div>
        <div className={Rent["color-green"]}>
          12346 ATT ATT <br />{" "}
          <b className={Rent["color-black"]}>
            <div>
              <LocationOnIcon />
            </div>
            <div> 705 Uribia Lane "." #333</div>
          </b>
        </div>
      </div>
    </div>, // =========================================================
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
            <b>8/24/2023-2/30/2030</b>
          </div>
        </div>
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Red"]}>
              {/* <div>
                <AddIcCallIcon />
              </div> */}
              <div>Expires in 2.481 days</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["Locat"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["Locate"]}>
        {/* <div className={Rent["Date"]}>
          <div>
            <CalendarMonthIcon />
          </div>
          <div>
            <b>8/24/2023</b>
          </div>
        </div> */}
        <div className={Rent["List1"]}>
          {/* <div>
            <LocationOnIcon />
          </div> */}
          <div>
            <b className={Rent["color-Pin"]}>
              <div>
                <IndeterminateCheckBoxIcon />
              </div>
              <div> &nbsp; Active</div>
            </b>
          </div>
        </div>
      </div>
    </div>, // =========================================================
    <div className={Rent["List"]}>
      <div>
        <span style={dividerStyle}></span>
      </div>
      <div className={Rent["List1-I"]}>
        {/* <div>
          <CalendarMonthIcon />
        </div> */}
        <div>$2,280,00.00 / Annually</div>
      </div>
    </div>, // =========================================================
    <div>
      <div className={Rent["Created"]}>
        <div>
          <span style={dividerStyle}></span>
        </div>
        <div>$500.00</div>
      </div>
    </div>
  ),

  // Add more rows as needed
];

const LeasesTable = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Lease Balance</StyledTableCell>
            <StyledTableCell align="right">Term</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Rent</StyledTableCell>
            <StyledTableCell align="right">Deposits</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <NavLink to="/leasebalance" className={Rent["pages"]}>
                  {row.name}
                </NavLink>
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <NavLink to="/leasebalance" className={Rent["pages"]}>
                  {row.Term}
                </NavLink>
              </StyledTableCell>
              <StyledTableCell align="right">
                <NavLink to="/leasebalance" className={Rent["pages"]}>
                  {row.Status}
                </NavLink>
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <NavLink to="/leasebalance" className={Rent["pages"]}>
                  {row.Rent}
                </NavLink>
              </StyledTableCell>
              <StyledTableCell align="right">
                <NavLink to="/leasebalance" className={Rent["pages"]}>
                  {row.Deposits}
                </NavLink>
              </StyledTableCell>
              <StyledTableCell align="right">{row.End}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeasesTable;
