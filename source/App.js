import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModalWindow, getModalId } from './store/modalSlice';
import Button from './components/generic/Button';
import Modal from './components/modal/Modal';
import Search from './components/search/Search';
import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import TaskList from './components/task/TaskList';
import { IconAdd } from './components/icons/Icons';

function App() {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modalWindow.modalShow);

  function openModal() {
    dispatch(openModalWindow());
    dispatch(getModalId({ id: 'add' }));
  }

  return (
    <div id="app">
      <header className="app-header">
        <div className="app-header__wrapper">
          <Search />
          <Counter />
        </div>
      </header>

      <div className="app-main">
        <div className="app-main__header">
          <Filter />

          <Button 
            tagName="button"
            buttonClass="app-main__add-button"
            handleClick={openModal}
          >
            <IconAdd 
              className="app-main__add-icon button__icon"
              width="46" 
              height="46" 
            />
            <span className="app-main__add-subtitle button__subtitle">
              Новая задача
            </span>
          </Button>

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