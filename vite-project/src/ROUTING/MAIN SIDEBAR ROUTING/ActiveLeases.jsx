import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import LeasingSidebar from "../../Features/Sidebar/LeasingSidebar";
import MainActiveLeases from "../../Main Screen/MainActiveLease";

function ActiveLeases() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <LeasingSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainActiveLeases />
        </div>
      </div>
    </>
  );
}
export default ActiveLeases;
