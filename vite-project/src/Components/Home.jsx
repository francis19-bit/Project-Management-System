import React from "react";
import css from "../styles/home.module.css";
import Sidebar from "../Features/Sidebar/Sidebar";
import MainHome from "../Main Component/MainHome";

function Home() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <Sidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainHome />
        </div>
      </div>
    </>
  );
}
export default Home;
