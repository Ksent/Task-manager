'use strict';

let enterTask = document.querySelector('.tasker__new-task');
let taskerAddBtn = document.querySelector('.tasker__add-btn');

let taskerList = document.querySelector('.tasker__task-list');
let taskerListAll = taskerList.getElementsByTagName('p');

function bindingInputLabel(selectorAll, newName) {
  for (let i = 0; i < selectorAll.length;) {
    selectorAll[i].setAttribute(newName, 'toggle-task-' + ++i);
  }
}

function createTask(textTask) {
  let newTaskItem = document.createElement('li');
  newTaskItem.setAttribute('class', 'tasker__task-item');
  newTaskItem.setAttribute('draggable', 'true');
  taskerList.append(newTaskItem);
  
  let newTaskText = document.createElement('p');
  newTaskText.setAttribute('class', 'tasker__task-text');
  newTaskItem.prepend(newTaskText);
  
  let newTaskToggle = document.createElement('input');
  newTaskToggle.setAttribute('class', 'tasker__toggle');
  newTaskToggle.setAttribute('type', 'checkbox');
  newTaskText.prepend(newTaskToggle);
  
  let newTaskSubtitle = document.createElement('label');
  newTaskSubtitle.setAttribute('class', 'tasker__subtitle');
  newTaskSubtitle.textContent = textTask;
  newTaskSubtitle.setAttribute('contenteditable', false);
  newTaskToggle.after(newTaskSubtitle);
  
  let taskerToggleAll = document.querySelectorAll('.tasker__toggle');
  let taskerSubtitleAll = document.querySelectorAll('.tasker__subtitle');
  let nameForInput = 'id';
  let nameForLabel = 'for';
  
  bindingInputLabel(taskerToggleAll, nameForInput);
  bindingInputLabel(taskerSubtitleAll, nameForLabel);
  
  let newToggleIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newToggleIcon.setAttribute('class', 'tasker__toggle-icon');
  newToggleIcon.setAttribute('width', '16');
  newToggleIcon.setAttribute('height', '16');
  newToggleIcon.setAttribute('fill', 'transparent');
  newToggleIcon.setAttribute('stroke', '#494a4b');
  newTaskSubtitle.after(newToggleIcon);
  
  let newToggleImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  newToggleImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-toggle');
  newToggleIcon.prepend(newToggleImg);
  
  let newCheckmarkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newCheckmarkIcon.setAttribute('class', 'tasker__checkmark-icon');
  newCheckmarkIcon.setAttribute('width', '22');
  newCheckmarkIcon.setAttribute('height', '22');
  newCheckmarkIcon.setAttribute('stroke', '#8fdab7');
  newToggleIcon.after(newCheckmarkIcon);
  
  let newCheckmarkImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  newCheckmarkImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-checkmark');
  newCheckmarkIcon.prepend(newCheckmarkImg);

  let newTaskIcons = document.createElement('p');
  newTaskIcons.setAttribute('class', 'tasker__task-icons');
  newTaskText.after(newTaskIcons);

  let newEditBtn = document.createElement('button');
  newEditBtn.setAttribute('class', 'tasker__edit-btn');
  newEditBtn.setAttribute('title', 'Редактировать');
  newTaskIcons.prepend(newEditBtn);

  let newEditIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newEditIcon.setAttribute('width', '18');
  newEditIcon.setAttribute('height', '18');
  newEditIcon.setAttribute('fill', '#c9cbcc');
  newEditBtn.prepend(newEditIcon);

  let newEditImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  newEditImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-edit');
  newEditIcon.prepend(newEditImg);
  
  let newDeleteBtn = document.createElement('button');
  newDeleteBtn.setAttribute('class', 'tasker__delete-btn');
  newDeleteBtn.setAttribute('title', 'Удалить');
  newEditBtn.after(newDeleteBtn);
  
  let newDeleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newDeleteIcon.setAttribute('width', '20');
  newDeleteIcon.setAttribute('height', '20');
  newDeleteIcon.setAttribute('stroke', '#c9cbcc');
  newDeleteIcon.setAttribute('stroke-width', '2');
  newDeleteBtn.prepend(newDeleteIcon);
  
  let newDeleteImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  newDeleteImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-delete');
  newDeleteIcon.prepend(newDeleteImg);
}

taskerAddBtn.addEventListener('click', function(evt) {
  
  if (enterTask.value === '') {
    return;
  } else {
    evt.preventDefault();
    createTask(enterTask.value);
    enterTask.value = '';
  }
  
});

taskerList.addEventListener('click', function(evt) {
  let target = evt.target;
  let taskerItemAll = document.querySelectorAll('.tasker__task-item');
  let taskerSubtitleAll = document.querySelectorAll('.tasker__subtitle');

  for (let i = 0; i < taskerItemAll.length; i++) {

    for (let j = 0; j < taskerSubtitleAll.length; j++) {

      if (taskerItemAll[i].contains(target.closest('.tasker__delete-btn'))) {
        taskerItemAll[i].remove();
      }
      
      if (taskerItemAll[i].contains(target.closest('.tasker__edit-btn')) && i === j) {  
        let taskerInput = taskerSubtitleAll[j].previousElementSibling;

        if (taskerSubtitleAll[j].getAttribute('contenteditable') == 'false') {
          taskerInput.setAttribute('disabled', true);
          taskerSubtitleAll[j].setAttribute('contenteditable', true);
        } else {
          taskerInput.removeAttribute('disabled');
          taskerSubtitleAll[j].setAttribute('contenteditable', false);
        }

      }
      
    }
    
  }

});

taskerList.addEventListener('dragstart', function(evt) {
  let target = evt.target;

  target.classList.add('selected');
  for (let i = 0; i < taskerListAll.length; i++) {
    taskerListAll[i].classList.add('events');
  }
});

taskerList.addEventListener('dragend', function(evt) {
  let target = evt.target;

  target.classList.remove('selected');
  for (let i = 0; i < taskerListAll.length; i++) {
    taskerListAll[i].classList.remove('events');
  }
});

function getNextItem(cursorPosition, target) {
  let nextItem;
  let itemCoord = target.getBoundingClientRect();
  let itemCenter = itemCoord.y + itemCoord.height / 2;

  if (cursorPosition < itemCenter) {
    nextItem = target;
  } else {
    nextItem = target.nextElementSibling;
  }

  return nextItem;
}

taskerList.addEventListener('dragover', function(evt) {
  evt.preventDefault();

  let target = evt.target;
  let activeItem = taskerList.querySelector('.selected');

  if (activeItem !== target && target.classList.contains('tasker__task-item')) {
    let nextItem = getNextItem(evt.clientY, target);

    if (nextItem && activeItem === nextItem.previousElementSibling || activeItem === nextItem) {
      return;
    }

    taskerList.insertBefore(activeItem, nextItem);
  } else {
    return;
  }

});


