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
import ListMe from "./ListMe";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

function createData(name, AssignedTo, Dueat, RelatedTo, Status) {
  return { name, AssignedTo, Dueat, RelatedTo, Status };
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div style={{ color: "green" }}>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            background: "green",
            color: "wheat",
          }}
        >
          #4HE441
        </div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div>#4HE441</div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div>#4HE441</div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div>#4HE441</div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div>#4HE441</div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  createData(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 -30px",
      }}
    >
      <div>
        <ListMe />
      </div>
      <div className="ul" style={{ margin: "0 20px", fontSize: "14px" }}>
        <div>Tenant Request</div>
        <div>Lights are out</div>
        <div>My Meathead Storage | Zachary Barannon 357 days ago</div>
      </div>
      <div>
        <div>#4HE441</div>
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>Unsigned</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div> Not Set</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>
      <div>
        <AccessTimeIcon style={{ width: "19px" }} />
      </div>
      <div>Not started</div>
    </div>,
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {" "}
        <span style={dividerStyle}></span>
      </div>

      <div>
        {" "}
        <MoreVertIcon />{" "}
      </div>
    </div>
  ),
  // Add more rows as needed
];

const BasicTables = () => {
  const allRows = [...rows, ...moreRows];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task</StyledTableCell>
            <StyledTableCell align="right">Assigned To</StyledTableCell>
            <StyledTableCell align="right">Due at</StyledTableCell>
            <StyledTableCell align="right">Related To</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            {/* <StyledTableCell align="right">Actions</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {allRows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.AssignedTo}</StyledTableCell>
              <StyledTableCell align="right">{row.Dueat}</StyledTableCell>
              <StyledTableCell align="right">{row.RelatedTo}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.Actions}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTables;
