import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import PeopleSidebar from "../../Features/Sidebar/PeopleSidebar";

function PeoplePage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <PeopleSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <div className={css["StatusBar"]}> Staus </div>
          <div>WELCOME</div>
          Peoples
        </div>
      </div>
    </>
  );
}

export default PeoplePage;
