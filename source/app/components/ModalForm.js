import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask } from '../store/taskSlice';

function ModalForm({ closeModal }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  function sendTask(e) {
    e.preventDefault();
    dispatch(addNewTask({ text, date, time }));
    closeModal();
    setText('');
    setDate('');
    setTime('');
  }

  return (
    <div 
      className="modal__wrapper"
      onClick={e => e.stopPropagation()}
    >

      <h1 className="modal__title">Добавить задачу</h1>

      <form 
        className="modal__form"
        onSubmit={sendTask}
      >

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="text"
        >
          Задача
        </label>
        <input
          className="modal__enter"
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="date"
        >
          Дата
        </label>
        <input
          className="modal__enter"
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="time"
        >
          Время
        </label>
        <input
          className="modal__enter"
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

        <div className="modal__button-wrapper">
          <button 
            className="modal__button button button-close"
            type="reset"
            onClick={closeModal}
          >
            Отмена
          </button>
          <button 
            className="modal__button button button-save"
          >
            Сохранить
          </button>
        </div>

      </form>

    </div>
  );
}

export default ModalForm;