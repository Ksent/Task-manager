import React, { lazy, Suspense } from 'react';

import { useAppSelector } from '../hooks/reduxHooks';

import Filter from '../components/filter/Filter';
import TaskAddBtn from '../components/task/TaskAddBtn';
import Loader from '../components/loader/Loader';
const TaskList = lazy(() => import('../components/task/TaskList'));

function PageMain() {
  const calendarShow = useAppSelector(state => state.calendarItems.calendarShow);

  return (
    <div className={"page-main" + (calendarShow === true ? " page-main--calendar-open" : "")}>
      <div className="page-main__header">
        <Filter 
          className="page-main__filter"
        />
        <TaskAddBtn 
          className="page-main__add-button"
        />
      </div>
      <Suspense fallback={<Loader />}>
        <TaskList 
          className="page-main__tasker"
        />
      </Suspense>
    </div>
  );
}

export default PageMain;