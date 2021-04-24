'use strict';

let taskerAddBtn = document.querySelector('.tasker__add-btn');
let enterTask = document.querySelector('.tasker__new-task');

let taskerList = document.querySelector('.tasker__task-list');

function createTask() {
  let taskerItem = document.createElement('li');
  taskerItem.setAttribute('class', 'tasker__task-item');
  taskerList.append(taskerItem);
  
  let taskerText = document.createElement('p');
  taskerText.setAttribute('class', 'tasker__task-text');
  taskerItem.prepend(taskerText);
  
  let taskerToggle = document.createElement('input');
  taskerToggle.setAttribute('class', 'tasker__toggle');
  taskerToggle.setAttribute('type', 'checkbox');
  taskerText.prepend(taskerToggle);
  
  let taskerSubtitle = document.createElement('label');
  taskerSubtitle.setAttribute('class', 'tasker__subtitle');
  taskerSubtitle.textContent = enterTask.value;
  taskerToggle.after(taskerSubtitle);
  
  let toggleIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  toggleIcon.setAttribute('class', 'tasker__toggle-icon');
  toggleIcon.setAttribute('width', '16');
  toggleIcon.setAttribute('height', '16');
  toggleIcon.setAttribute('fill', '#ffffff');
  toggleIcon.setAttribute('stroke', '#494a4b');
  taskerSubtitle.after(toggleIcon);
  
  let toggleImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  toggleImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-toggle');
  toggleIcon.prepend(toggleImg);
  
  let checkmarkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  checkmarkIcon.setAttribute('class', 'tasker__checkmark-icon');
  checkmarkIcon.setAttribute('width', '22');
  checkmarkIcon.setAttribute('height', '22');
  checkmarkIcon.setAttribute('stroke', '#8fdab7');
  toggleIcon.after(checkmarkIcon);
  
  let checkmarkImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  checkmarkImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-checkmark');
  checkmarkIcon.prepend(checkmarkImg);
  
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'tasker__delete-btn');
  taskerText.after(deleteBtn);
  
  let deleteIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  deleteIcon.setAttribute('width', '16');
  deleteIcon.setAttribute('height', '16');
  deleteIcon.setAttribute('stroke', '#c9cbcc');
  deleteIcon.setAttribute('stroke-width', '2');
  deleteBtn.prepend(deleteIcon);
  
  let deleteImg = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  deleteImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#icon-delete');
  deleteIcon.prepend(deleteImg);
}

function bindingInputLabel(selectorAll, newName) {
  for (let i = 0; i < selectorAll.length; i++) {
    selectorAll[i].setAttribute(newName, 'toggle-task-' + i);
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
    let nameforInput = 'id';
    let nameforLabel = 'for';

    bindingInputLabel(taskerToggleAll, nameforInput);
    bindingInputLabel(taskerSubtitleAll, nameforLabel);

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