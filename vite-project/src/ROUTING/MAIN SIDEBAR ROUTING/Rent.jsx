import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import LeasingSidebar from "../../Features/Sidebar/LeasingSidebar";
import MainRentLease from "../../Display Screen/MainRentLease";

function Rent() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <LeasingSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainRentLease />
        </div>
      </div>
    </>
  );
}
export default Rent;
