import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import RentalSidebar from "../../Features/Sidebar/RentalSidebar";
import MainRentApp from "../../Main Screen/MainRentApp";

const RentalApplication = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainRentApp />
        </div>
      </div>
    </>
  );
};

export default RentalApplication;
