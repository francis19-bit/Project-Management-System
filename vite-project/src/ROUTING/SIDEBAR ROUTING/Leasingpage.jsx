import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import LeasingSidebar from "../../Features/Sidebar/LeasingSidebar";

function Leasingpage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <LeasingSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <div className={css["StatusBar"]}> Staus </div>
        </div>
      </div>
    </>
  );
}

export default Leasingpage;
