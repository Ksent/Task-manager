"use strict";(self.webpackChunktask_manager=self.webpackChunktask_manager||[]).push([[201],{1201:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(7294),r=a(1070),c=a(7565),s=a(3951),l=a(6042),i=a(71);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}const m=function(e){var t=e.index,a=e.id,m=e.text,u=e.date,d=e.time,k=e.checked,_=(0,c.T)(),h=new Date(u).toLocaleDateString();function g(){_((0,l.bd)()),_((0,l.k4)({id:"edit"})),_((0,s.Ud)(a))}return n.createElement(r._l,{draggableId:a.toString(),index:t},(function(e){return n.createElement("li",{className:"tasker__item"},n.createElement("div",o({className:"tasker__inner",ref:e.innerRef},e.draggableProps,e.dragHandleProps),n.createElement("p",{className:"tasker__content tasker__content-text"},n.createElement("input",{className:"tasker__toggle",type:"checkbox",id:"toggle-task-"+a,checked:k,onChange:function(){return _((0,s.L$)(a))}}),n.createElement("label",{className:"tasker__subtitle",htmlFor:"toggle-task-"+a},m,n.createElement("span",{className:"tasker__datetime"},h," в ",d)),n.createElement(i.oe,{className:"tasker__toggle-icon",width:"16",height:"16",fill:"transparent",stroke:"#494a4b"}),n.createElement(i.DL,{className:"tasker__checkmark-icon",width:"22",height:"22",stroke:"#2de294"})),n.createElement("p",{className:"tasker__content"},n.createElement("button",{className:"tasker__edit-btn",title:"Редактировать",onClick:g},n.createElement(i.yl,{width:"18",height:"18",fill:"#c4c4c4"})),n.createElement("button",{className:"tasker__delete-btn",title:"Удалить",onClick:function(){return _((0,s._5)(a))}},n.createElement(i.Fz,{width:"20",height:"20",stroke:"#c4c4c4"})))))}))},u=function(){return n.createElement("li",{className:"tasker__item"},n.createElement("h2",{className:"tasker__title"},"Задачи не найдены"))};function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}const k=function(e){var t=e.className,a=(0,c.T)(),l=(0,c.C)((function(e){return e.tasks.tasksFilter})),i=(0,c.C)((function(e){return e.tasks.searchValue}));return n.createElement("div",{className:t+" tasker"},n.createElement(r.Z5,{onDragEnd:function(e){e.destination&&a((0,s.Yd)(e))}},n.createElement(r.bK,{droppableId:"list"},(function(e){return n.createElement("ul",d({className:"tasker__list",ref:e.innerRef},e.droppableProps),""!==i&&0===l.length?n.createElement(u,null):l.map((function(e,t){return n.createElement(m,d({key:e.id,index:t},e))})),e.placeholder)}))))}}}]);