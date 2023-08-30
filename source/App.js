import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModalWindow, getModalId } from './store/modalSlice';
import Button from './components/generic/Button';
import Modal from './components/modal/Modal';
import Calendar from './components/calendar/Calendar';
import SearchForm from './components/search/SearchForm';
import Counter from './components/counter/Counter';
import Filter from './components/filter/Filter';
import TaskList from './components/task/TaskList';
import { IconAdd } from './components/icons/Icons';

function App() {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modalWindow.modalShow);
  const calendarShow = useSelector(state => state.calendarItems.calendarShow);
  const [searchValue, setSearchValue] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  function openModal() {
    dispatch(openModalWindow());
    dispatch(getModalId({ id: 'add' }));
  }

  return (
    <div id="app">
      <header className="app-header">
        <div className="app-header__wrapper">
          <ul className="app-header__list">
            <Calendar 
              setSearchValue={setSearchValue}
              startDate={startDate}
              setStartDate={setStartDate}
            />
            <SearchForm 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </ul>
          <Counter />
        </div>
      </header>

      <div className={"app-main" + (calendarShow === true ? " app-main--calendar-open" : "")}>
        <div className="app-main__header">
          <Filter 
            startDate={startDate}
          />

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