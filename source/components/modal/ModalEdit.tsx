import React, { FormEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { editTask } from '../../store/taskSlice';
import FormField from '../generic/FormField';
import ModalBtns from './ModalBtns';
import { resetTask } from '../../utils/resetTask';
import { ICloseModal } from '../../types/modal';

function ModalEdit({ closeModal }: ICloseModal) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasks);
  const editedTask = tasks.find(task => task.edited === true);
  const [text, setText] = useState<string>(editedTask ? editedTask.text : '');
  const [date, setDate] = useState<string>(editedTask ? editedTask.date : '');
  const [time, setTime] = useState<string>(editedTask ? editedTask.time : '');

  function sendTask(e: FormEvent) {
    e.preventDefault();
    
    dispatch(editTask({ text, date, time }));
    resetTask(closeModal, setText, setDate, setTime);
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
        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="text"
          name="text"
          value={text}
          handleChange={(e) => setText(e.target.value)}
          required
          autoFocus
        >
          <span className="modal__subtitle">Задача</span>
        </FormField> 

        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="date"
          name="date"
          value={date}
          handleChange={(e) => setDate(e.target.value)}
          required
        >
          <span className="modal__subtitle">Дата</span>
        </FormField> 

        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="time"
          name="time"
          value={time}
          handleChange={(e) => setTime(e.target.value)}
          required
        >
          <span className="modal__subtitle">Время</span>
        </FormField> 

        <ModalBtns 
          resetTask={() => resetTask(closeModal, setText, setDate, setTime)}
        />
      </form>

    </div>
  );
}

export default ModalEdit;