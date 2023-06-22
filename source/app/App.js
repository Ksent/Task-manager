import React from 'react';
import { useSelector } from 'react-redux';

import Search from './components/Search';
import Counter from './components/Counter';

import Filter from './components/Filter';
import AddBtn from './components/AddBtn';
import TaskList from './components/TaskList';

import Modal from './components/Modal';

function App() {
  const modalShow = useSelector(state => state.modalWindow.modalShow);

  return (
    <div id="app">
      <header className="header">
        <div className="header__wrapper">
          <Search />
          <Counter />
        </div>
      </header>

      <div className="main">
        <div className="main__header">
          <Filter />
          <AddBtn />
        </div>
        <TaskList />
      </div>

      {modalShow && 
        <Modal />
      }
    </div>
  );
}

export default App;