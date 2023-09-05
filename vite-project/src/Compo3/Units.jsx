import React from "react";
import css from "../styles/home.module.css";
import RentalSidebar from "../Features/Sidebar/RentalSidebar";
import MainTasks from "../Main Component/MainTasks";
import MainUnits from "../Main Component/MainUnits";

const Units = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainUnits />
        </div>
      </div>
    </>
  );
};

export default Units;
