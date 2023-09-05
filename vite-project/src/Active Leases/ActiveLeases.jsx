import React from "react";
import css from "../styles/home.module.css";
import Sidebar from "../Features/Sidebar/Sidebar";
import MainHome from "../Main Component/MainHome";
import LeasingSidebar from "../Features/Sidebar/LeasingSidebar";
import MainActiveLeases from "./MainActiveLease";

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
