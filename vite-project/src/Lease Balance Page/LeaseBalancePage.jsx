import React from "react";
import css from "../styles/home.module.css";
import RentalSidebar from "../Features/Sidebar/RentalSidebar";
import MainRent from "../Main Component/MainRent";
import MainLeaseBalance from "./MainLeaseBalance";

const LeaseBalancePage = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainLeaseBalance />
        </div>
      </div>
    </>
  );
};

export default LeaseBalancePage;
