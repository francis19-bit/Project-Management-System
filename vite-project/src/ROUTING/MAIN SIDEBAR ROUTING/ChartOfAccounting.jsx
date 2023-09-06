import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import AccountingSidebar from "../../Features/Sidebar/AccountingSidebar";
import MainChartofAccounting from "../../Main Screen/MainChartOfAccounting";

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
