import React from 'react';

import Button from '../generic/Button';

function ModalBtns({ resetTask }) {
  return (
    <div className="modal__button-wrapper">
      <Button
        tagName="button"
        buttonClass="modal__button modal__close-btn"
        type="reset"
        handleClick={resetTask}
      >
        Отмена
      </Button>

      <Button
        tagName="button"
        buttonClass="modal__button modal__add-btn"
      >
        Сохранить
      </Button>
    </div>
  )
}

export default ModalBtns;