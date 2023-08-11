import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTask } from '../../store/taskSlice';
import ModalInput from './ModalInput';
import ModalBtns from './ModalBtns';

function ModalForm({ closeModal }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const editedTask = tasks.find(task => task.edited === true);
  const [text, setText] = useState(editedTask.text);
  const [date, setDate] = useState(editedTask.date);
  const [time, setTime] = useState(editedTask.time);

  function resetTask() {
    closeModal();

    setText('');
    setDate('');
    setTime('');
  }

  function sendTask(e) {
    e.preventDefault();

    dispatch(editTask({ text, date, time }));
    resetTask();
  }

  return (
    <div 
      className="modal__wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="modal__title">Редактировать задачу</h1>

      <form 
        className="modal__form"
        onSubmit={sendTask}
      >
        <ModalInput 
          subtitle="Задача"
          name="text"
          value={text}
          setValue={(e) => setText(e.target.value)}
          autoFocus
        />

        <ModalInput 
          subtitle="Дата"
          name="date"
          value={date}
          setValue={(e) => setDate(e.target.value)}
        />

        <ModalInput 
          subtitle="Время"
          name="time"
          value={time}
          setValue={(e) => setTime(e.target.value)}
        />

        <ModalBtns 
          resetTask={resetTask}
        />
      </form>

    </div>
  );
}

export default ModalForm;