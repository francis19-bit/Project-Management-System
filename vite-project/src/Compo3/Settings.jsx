import React from "react";
import css from "../styles/home.module.css";
import RentalSidebar from "../Features/Sidebar/RentalSidebar";
import MainRentApp from "../Main Component/MainRentApp";
import MainSettings from "../Main Component/MainSettings";

const Settings = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <RentalSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainSettings />
        </div>
      </div>
    </>
  );
};

export default Settings;
