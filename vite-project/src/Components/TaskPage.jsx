import React from "react";
import css from "../styles/home.module.css";
import TaskSidebar from "../Features/Sidebar/TaskSidebar";
import MainTasks from "../Main Component/MainTasks";
import MainHome from "../Main Component/MainHome";

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
            {/* <MainTasks /> */}
            <MainHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPage;
