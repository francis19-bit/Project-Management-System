import * as React from "react";
import Box from "@mui/material/Box";
import LeaseBalanceBtn from "./LeaseBalanceBtn";
import BadgeAvatars from "./Profile";
import LeaseBalanceBtn2 from "./LeaseBalanceBtn2";
import paper from "../Main Styles/MinSettingsPaper.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import KeyIcon from "@mui/icons-material/Key";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import ArticleIcon from "@mui/icons-material/Article";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MessageIcon from "@mui/icons-material/Message";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import BasicModal from "../SettingsModal/GeneralInformationSettings";
import PhotoSettings from "../SettingsModal/PhotosSettings";
import PropertySettings from "../SettingsModal/ProtoTypeSettings";
import Amenities from "../SettingsModal/AmenitiesSettings";
import Owners from "../SettingsModal/OwnersSettings";
import BankAccount from "../SettingsModal/BankAccountSettings";
import ReserveFunds from "../SettingsModal/ReserveFundsSettings";
import TenantPortal from "../SettingsModal/TenantsPortalSettings";
import RentAndPayment from "../SettingsModal/RentAndPaySettings";
import RentalApplication from "../SettingsModal/RentalApplicationSettings";
import LateFees from "../SettingsModal/LateFeesSettings";
import TenantRequests from "../SettingsModal/TenantRequestSettings";

export default function SettingsPaper() {
  return (
    <Box
      sx={{
        width: 1080,
        height: 1100,
        borderRadius: 5,
        backgroundColor: "wheat",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        "&:hover": {
          //   backgroundColor: "wheat",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <div>
        {/* <Box
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
        ></Box> */}
      </div>
      {/* ================================================================== */}
      <div>
        <div style={{ margin: "9px 0px" }}>
          {/* <Box
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
          ></Box> */}
        </div>

        <div style={{ margin: "9px 0px" }}>
          {/* <Box
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
          ></Box> */}
        </div>
      </div>
      {/* ================================================================== */}

      {/* ================================================================== */}
      <div className={paper["Paper-divider"]}>
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <BasicModal />
          </Box>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <PhotoSettings />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <PhotoCameraBackIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Photos </b>
                  </div>
                  <div>Upload photos for this property </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>

        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <PropertySettings />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <AutorenewIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Property Type</b>
                  </div>
                  <div>Let Us know which property </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Amenities />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <KeyIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Amenities</b>
                  </div>
                  <div>
                    Specify which amenities are included in this property{" "}
                  </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <Owners />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <PersonOutlineIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Owners</b>
                  </div>
                  <div>Update the owners for this property</div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <BankAccount />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <LocalAtmIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Bank Accounts</b>
                  </div>
                  <div>Select the property bank accounts </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <ReserveFunds />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <AttractionsIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Reserve Funds</b>
                  </div>
                  <div>Edit the amount of reserve funds </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <TenantPortal />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <ArticleIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Tenant Portal</b>
                  </div>
                  <div>
                    Resident portal access settings Edit the tenant portal
                    settings{" "}
                  </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <RentAndPayment />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <RequestPageIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b>Rent & Payment Notifications</b>
                  </div>
                  <div>Send email and text notifications to your tenants </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <RentalApplication />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <MessageIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b> Rental Applications</b>
                  </div>
                  <div>Edit the property rental applications </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <LateFees />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <RequestQuoteIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b> Late Fees</b>
                  </div>
                  <div>Set the fees for these leases</div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
        {/* ========================================================= */}
        <div style={{ margin: "9px 0px" }}>
          <Box
            sx={{
              width: 400,
              height: 130,
              borderRadius: 5,
              backgroundColor: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                // backgroundColor: "#E85020",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <TenantRequests />
            {/* <div className={paper["GridPaper"]}>
              <div className={paper["GridPaper-I"]}>
                <div className={paper["Paper-Icon"]}>
                  <ReceiptIcon style={{ fontSize: 50 }} />
                </div>
              </div>
              <div className={paper["GridPaper-II"]}>
                <div className={paper["Paper"]}>
                  <div>
                    <b> Tenant Requests</b>
                  </div>
                  <div>
                    Get notified and automatically assign new tenant requests
                  </div>
                </div>
              </div>
            </div> */}
          </Box>
        </div>
        {/* ========================================================= */}
      </div>
      {/* =============================================================== */}
      <div style={{ margin: "10px 0px" }}>
        {/* <Box
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
        ></Box> */}
      </div>
    </Box>
  );
}
