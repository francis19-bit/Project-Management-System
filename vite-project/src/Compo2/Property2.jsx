import React from "react";
import css from "../styles/home.module.css";
import RentalSidebar from "../Features/Sidebar/RentalSidebar";

// import MainProperties from "../Main Component/MainProperties";
import MainProp from "../Main Component/MainProp";

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
          {/* <MainProperties /> */}
          <MainProp />
        </div>
      </div>
    </>
  );
};

export default Property2;
