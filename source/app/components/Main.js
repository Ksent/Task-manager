import React from 'react';

import Filter from './Filter';
import AddBtn from './AddBtn';
import TaskList from './TaskList';

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <Filter />
        <AddBtn />
      </div>
      <TaskList />
    </div>
  );
}

export default Main;