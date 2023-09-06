import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import RentalSidebar from "../../Features/Sidebar/RentalSidebar";
import MainLeases from "../../Display Screen/MainLeases";

const Leases = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainLeases />
        </div>
      </div>
    </>
  );
};

export default Leases;
