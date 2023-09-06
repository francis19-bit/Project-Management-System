import React from "react";
import css from "../../Main Styles/styles/home.module.css";
import TaskSidebar from "../../Features/Sidebar/TaskSidebar";
import MainHome from "../../Main Screen/MainHome";

function TaskPage() {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <TaskSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <div className={css["StatusBar"]}>
            <MainHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPage;
