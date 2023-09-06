import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import RentalSidebar from "../../Features/Sidebar/RentalSidebar";
import MainTenants from "../../Display Screen/MainTenants";

const Tenats = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainTenants />
        </div>
      </div>
    </>
  );
};

export default Tenats;
