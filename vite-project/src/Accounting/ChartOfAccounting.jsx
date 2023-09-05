import React from "react";
import css from "../styles/home.module.css";
import Sidebar from "../Features/Sidebar/Sidebar";
import MainHome from "../Main Component/MainHome";
import AccountingSidebar from "../Features/Sidebar/AccountingSidebar";
import MainChartofAccounting from "./MainChartOfAccounting";

function ChartofAccounting() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <AccountingSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainChartofAccounting />
        </div>
      </div>
    </>
  );
}
export default ChartofAccounting;
