'use strict';

let taskerAddBtn = document.querySelector('.tasker__add-btn');
let enterTask = document.querySelector('.tasker__new-task');

let taskerList = document.querySelector('.tasker__task-list');

function createTask() {
  let newTaskItem = document.createElement('li');
  newTaskItem.setAttribute('class', 'tasker__task-item');
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
  newTaskSubtitle.textContent = enterTask.value;
  newTaskToggle.after(newTaskSubtitle);
  
  let newToggleIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newToggleIcon.setAttribute('class', 'tasker__toggle-icon');
  newToggleIcon.setAttribute('width', '16');
  newToggleIcon.setAttribute('height', '16');
  newToggleIcon.setAttribute('fill', '#ffffff');
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
  
  let newDeleteBtn = document.createElement('button');
  newDeleteBtn.setAttribute('class', 'tasker__delete-btn');
  newTaskText.after(newDeleteBtn);
  
  let newDeleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  newDeleteIcon.setAttribute('width', '16');
  newDeleteIcon.setAttribute('height', '16');
  newDeleteIcon.setAttribute('stroke', '#c9cbcc');
  newDeleteIcon.setAttribute('stroke-width', '2');
  newDeleteBtn.prepend(newDeleteIcon);
  
  let newDeleteImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  newDeleteImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-delete');
  newDeleteIcon.prepend(newDeleteImg);
}

function bindingInputLabel(selectorAll, newName) {
  for (let i = 0; i < selectorAll.length;) {
    selectorAll[i].setAttribute(newName, 'toggle-task-' + ++i);
  }
}

taskerAddBtn.addEventListener('click', function(evt) {
  
  if (enterTask.value === '') {
    return;
  } else {
    evt.preventDefault();
    createTask();    
    
    let taskerToggleAll = document.querySelectorAll('.tasker__toggle');
    let taskerSubtitleAll = document.querySelectorAll('.tasker__subtitle');
    let nameForInput = 'id';
    let nameForLabel = 'for';

    bindingInputLabel(taskerToggleAll, nameForInput);
    bindingInputLabel(taskerSubtitleAll, nameForLabel);

    enterTask.value = '';         
  }

});

taskerList.addEventListener('click', function(evt) {
  let target = evt.target;
  let taskerItem = document.querySelector('.tasker__task-item');

  if (target.closest('button')) {
    taskerItem.remove();
  }

});