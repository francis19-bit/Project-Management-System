import * as React from "react";
import Box from "@mui/material/Box";
import LeaseBalanceBtn from "../Material UI/LeaseBalanceBtn";
import BadgeAvatars from "../Material UI/Profile";
import LeaseBalanceBtn2 from "../Material UI/LeaseBalanceBtn2";

export default function SimplePaperII() {
  const qiukMe = {
    display: "flex",
    flexDirection: "column",
    padding: "5px 10px",
    gap: "1rem",
  };
  const color = {
    backgroundColor: "pink",
  };
  const div = {
    display: "flex",
    gap: "4rem",
  };
  const divII = {
    display: "flex",
    alignItems: "center",
    justifyItem: "center",
    padding: "50px",
    textAlign: "center",
    gap: "3rem",
  };
  const divIII = {
    display: "flex",
    alignItems: "center",
    justifyItem: "center",
    padding: "50px",
    textAlign: "center",
    gap: "3rem",
  };
  const div3 = {
    display: "flex",
    alignItems: "center",
    justifyItem: "center",
    textAlign: "center",
    gap: "3rem",
  };
  const textII = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "50px 0px 0px 0px",
    gap: "9px",
  };
  const textI = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "50px 0px 0px 0px",
    gap: "9px",
  };
  return (
    <Box
      sx={{
        width: 1080,
        height: 800,
        borderRadius: 5,
        backgroundColor: "wheat",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div>
        <Box
          sx={{
            width: 1000,
            height: 150,
            borderRadius: 5,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              //   backgroundColor: "#E85020",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <div style={qiukMe}>
            <div style={color}> Quick Actions</div>
            <div>What would you like to do next?</div>
            <div>
              <LeaseBalanceBtn />
            </div>
          </div>
        </Box>
      </div>
      {/* ================================================================== */}
      <div style={div}>
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 150,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={divII}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Outstanding Balance</b>
                <p>-$1,800.00</p>
              </div>
            </div>
          </Box>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 150,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={divIII}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Fixed Term</b>
                <p>10/1/2029-9/23/2030</p>
              </div>
            </div>
          </Box>
        </div>
      </div>
      {/* ================================================================== */}

      {/* ================================================================== */}
      <div style={div3}>
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={textI}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Lease Status</b>
                <p style={{ color: "green" }}>Active</p>
              </div>
            </div>
          </Box>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={textII}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Monthly Rent</b>
                <p style={{ color: "indigo" }}>$2,400.00</p>
              </div>
            </div>
          </Box>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={textII}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Deposits Held</b>
                <p style={{ color: "green" }}>$500.00</p>
              </div>
            </div>
          </Box>
        </div>
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <div style={textII}>
              <div>
                <BadgeAvatars />
              </div>
              <div>
                <b>Insurance Required</b>
                <p style={{ color: "blue" }}>Add Policy</p>
              </div>
            </div>
          </Box>
        </div>
      </div>
      {/* =============================================================== */}
      <div style={{ margin: "10px 0px" }}>
        <Box
          sx={{
            width: 1000,
            height: 200,
            borderRadius: 5,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              //   backgroundColor: "#E85020",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <div style={qiukMe}>
            <div style={color}> Renewal Process-Not Started</div>
            <div>What would you like to do next?</div>
            <div>
              <LeaseBalanceBtn2 />
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
}
