import React from "react";
import css from "../styles/home.module.css";
import AccountingSidebar from "../Features/Sidebar/AccountingSidebar";
import MainHome from "../Main Component/MainHome";

function AccountingPage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <AccountingSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <div className={css["StatusBar"]}>
            {" "}
            <MainHome />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountingPage;
