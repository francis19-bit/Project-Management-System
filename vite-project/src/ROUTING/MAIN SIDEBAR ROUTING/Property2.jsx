import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import RentalSidebar from "../../Features/Sidebar/RentalSidebar";
import MainProp from "../../Display Screen/MainProp";

const Property2 = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainProp />
        </div>
      </div>
    </>
  );
};

export default Property2;
