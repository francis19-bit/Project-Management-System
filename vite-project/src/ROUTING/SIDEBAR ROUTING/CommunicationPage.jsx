import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import CommunicationSidebar from "../../Features/Sidebar/CommunicationSidebar";
import MainHome from "../../Main Screen/MainHome";

function CommunicationPage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <CommunicationSidebar />
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
