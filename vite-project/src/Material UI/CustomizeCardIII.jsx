import * as React from "react";
import Box from "@mui/material/Box";
import LeaseBalanceBtn from "./LeaseBalanceBtn";
import BadgeAvatars from "./Profile";
import LeaseBalanceBtn2 from "./LeaseBalanceBtn2";
import MyTaskBtn from "./MyTaskBtn";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BasicTimeline from "./MainMyTaskTree";

export default function MyTaskPaper() {
  const qiukMe = {
    display: "flex",
    flexDirection: "column",
    padding: "5px 10px",
    gap: "1rem",
  };
  const timeLine = {
    display: "flex",
    justifyContent: "flex-start",
  };

  const yes = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "5px",
  };
  const timer = {
    display: "flex",
    justifyContent: "flex-end",
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
  const permission = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };
  return (
    <Box
      sx={{
        width: 1080,
        height: 100,
        borderRadius: 5,
        backgroundColor: "wheat",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div style={{ margin: "9px 0px" }}>
        <Box
          sx={{
            width: 1000,
            height: 150,
            borderRadius: 5,
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#E85020",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          <div style={qiukMe}>
            <div style={color}> Quick Actions</div>
            <div>What would you like to do next?</div>
            <div>
              <MyTaskBtn />
            </div>
          </div>
        </Box>
      </div>
      {/* ================================================================== */}
      {/* <div style={div}>
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
      </div> */}
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
                <b>Created At</b>
                <p style={{ color: "green" }}>10/5/2029 12:03 PM</p>
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
                <b>Requested By Tenant</b>
                <p style={{ color: "indigo" }}>Adam Mait</p>
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
                <b>Due Date</b>
                <p style={{ color: "green" }}>10/18/2019</p>
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
                <b>Status</b>
                <p style={{ color: "blue" }}>In Progress</p>
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
            <div style={color}> Description</div>
            <div>What would you like to do next?</div>
            <div>
              <LeaseBalanceBtn2 />
            </div>
          </div>
        </Box>
      </div>
      {/* =============================================================== */}
      <div style={{ margin: "10px 0px" }}>
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
            <div style={color}>Entry Notes</div>
            <div style={permission}>
              <div>
                <div style={yes}>
                  <div>Permission To Enter</div>
                  <div>
                    <ThumbUpOffAltIcon /> <br /> Yes
                  </div>
                </div>
              </div>
              <div>
                <div>Please come after 2pm</div>
              </div>
            </div>
            <div>{/* <LeaseBalanceBtn2 /> */}</div>
          </div>
        </Box>
      </div>
      {/* =============================================================== */}
      <div
        style={{
          display: "flex",
          //   alignItems: "center",
          gap: "2rem",
        }}
      >
        <div>
          <div style={{ margin: "10px 0px" }}>
            <Box
              sx={{
                width: 500,
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
                <div>
                  <div style={color}>Entry Notes</div>
                  <div style={permission}>
                    <div>
                      <div style={yes}>
                        <div>
                          <Avatar>NY</Avatar>
                        </div>
                        <div>Kweku</div>
                      </div>
                    </div>
                    <div>
                      <div style={yes}>
                        <div>
                          <Avatar>Yn</Avatar>
                        </div>
                        <div>Asante</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        {/* ====================================== */}

        <div>
          <div style={{ margin: "10px 0px" }}>
            <Box
              sx={{
                width: 300,
                height: 100,
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
                <div>
                  <div style={color}>Related To</div>
                  <div style={permission}>
                    <div>
                      <div style={yes}>
                        <div>
                          <MenuBookIcon />
                        </div>
                        <div>Adam Mait</div>
                      </div>
                    </div>
                    <div>{/* <div>Please come after 2pm</div> */}</div>
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
      {/* =============================================================== */}
      <div style={{ margin: "10px 0px" }}>
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
            <div style={color}>Address</div>
            <div style={permission}>
              <div>
                <div style={yes}>
                  <div>
                    {" "}
                    <LocationOnIcon />
                  </div>
                  <div>
                    KilikuRoad, 262 <p>Accra-Pokuase,country</p>
                    <p>Kweku Asante</p>
                  </div>
                </div>
              </div>
              {/* <div>
                <div>Please come after 2pm</div>
              </div> */}
            </div>
            <div>{/* <LeaseBalanceBtn2 /> */}</div>
          </div>
        </Box>
      </div>
      {/* =============================================================== */}
      {/* =============================================================== */}
      <div style={{ margin: "20px 0px" }}>
        <Box
          sx={{
            width: 1000,
            height: 350,
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
            <div style={color}>Activity Feed</div>
          </div>
          <div style={timer}>3/03/2019</div>
          <div>
            <div style={timeLine}>
              <BasicTimeline />
            </div>
          </div>
        </Box>
      </div>
      {/* =============================================================== */}
    </Box>
  );
}
