import React from "react";

function Modal({ show, setShow }) {
  function closeModal() {
    setShow(false);
  }

  function addTask() {
    setShow(false);
  }

  return (
    <div 
      className={"tasker__modal modal" + (show ? " modal--show" : "")}
      onClick={closeModal}
    >
      <div 
        className="modal__wrapper"
        onClick={e => e.stopPropagation()}
      >

        <h1 className="modal__title">Добавить задачу</h1>

        <ul className="modal__list">
          <li className="modal__item">
            <label 
              className="modal__subtitle"
            >
              Задача
            </label>
            <input
              
            />
          </li>
          <li className="modal__item">
            <label 
              className="modal__subtitle"
            >
              Дата
            </label>
            <input
              
            />
          </li>
          <li className="modal__item">
            <label 
              className="modal__subtitle"
            >
              Время
            </label>
            <input
              
            />
          </li>
        </ul>

        <div className="modal__button-wrapper">
          <button 
            className="modal__button button button-close"
            onClick={closeModal}
          >
            Отмена
          </button>
          <button 
            className="modal__button button button-save"
            onClick={addTask}
          >
            Сохранить
          </button>
        </div>

      </div>
    </div>
  );
}

export default Modal;