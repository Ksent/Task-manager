import React from 'react';

import Filter from './Filter';
import AddBtn from './AddBtn';
import TaskList from './TaskList';

function Main({ setShow }) {
  return (
    <div className="main">
      <div className="main__header">
        <Filter />
        <AddBtn 
          setShow={setShow}
        />
      </div>
      <TaskList 
        setShow={setShow}
      />
    </div>
  );
}

export default Main;