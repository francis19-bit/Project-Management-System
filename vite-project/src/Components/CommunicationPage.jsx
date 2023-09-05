import React from "react";
import css from "../styles/home.module.css";
// import CommunicationSidebar from "../Features/Sidebar/RentalSidebar";
import Sidebar from "../Features/Sidebar/Sidebar";
import CommunicationSidebar from "../Features/Sidebar/CommunicationSidebar";
import MainHome from "../Main Component/MainHome";

function CommunicationPage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <CommunicationSidebar />
          {/* <Sidebar /> */}
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <div className={css["StatusBar"]}>
            <MainHome />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunicationPage;
