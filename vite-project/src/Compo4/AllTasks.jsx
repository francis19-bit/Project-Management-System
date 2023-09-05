import React from "react";
import css from "../styles/home.module.css";
import TaskSidebar from "../Features/Sidebar/TaskSidebar";
import MainMyTask from "../My Tasks Page/MainMyTask";

const AllTasks = () => {
  return (
    <>
      <div className={css["Master-Grid"]}>
        {/* ===============**Side Bar**==================== */}
        <div className={css["Grid-dividerI"]}>
          <TaskSidebar />
        </div>
        {/* ============** End of**Side Bar**==================== */}
        <div className={css["Grid-dividerII"]}>
          <MainMyTask />
        </div>
      </div>
    </>
  );
};

export default AllTasks;
