(self.webpackChunkrap=self.webpackChunkrap||[]).push([[954],{7085:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var r=t(67294),a=t(64593),s=t(31753),o=t(81135),c=t(276),i=function(e){return function(n){return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e.apply(void 0,[n].concat(r))}}},u=t(26178),l=t(93977),d=t(5007),m=t(282),g=t(97127),f=t(85315),k=(0,f.vU)({add:{id:"src.components.Reminder.AddTaskButton.add",defaultMessage:"Add"}}),v=function(e){var n=e.addTask;return r.createElement(m.Z,{onClick:n,variant:"contained",color:"secondary"},r.createElement(g.Z,k.add))},p=t(62822),h=function(e){var n=e.children;return r.createElement(p.Z,null,n)},T=t(319),E=t.n(T),C=t(59713),Z=t.n(C),L=t(63038),A=t.n(L),I=t(13258),y=t(17812),w=t(50998),D=t(46869),R=t(81860),b=t(8286),B=t(28428),M=t(79756),x=t(97551),_=t.n(x),U=t(94184),j=t.n(U),O=t(84785),S=t(9192),X=t(93379),F=t.n(X),H=t(80627),K={insert:"head",singleton:!1},P=(F()(H.Z,K),H.Z.locals||{}),W=(0,f.vU)({asBoundedLengthStringErrorMessage:{id:"src.components.Reminder.TaskListItem.asBoundedLengthStringErrorMessage",defaultMessage:"{ name } must be 0-{ upperBound } characters."}}),$=function(e){var n=e.value,t=e.index,a=e.onChange,o=e.onDelete,c=e.validate,i=(0,O.useDrag)({item:{type:"TaskListItem",value:n,index:t},isDragging:function(e){var t=e.getItem();return n.isIdenticalTo(t.value)},collect:function(e){return{dragging:e.isDragging()}}}),u=A()(i,3),l=u[0].dragging,d=u[1],m=u[2],g=(0,r.useMemo)((function(){return j()(P.TaskListItemContainer,Z()({},P.Dragging,l))}),[l]),f=(0,r.useCallback)((function(e){a({content:e.target.value})}),[a]),k=(0,r.useCallback)((function(e,n){a({done:e.target.checked})}),[a]),v=(0,s.Z)(),p=v.formatMessage,h=v.locale,T=(0,r.useMemo)((function(){return c(n)}),[n,c]),C=(0,r.useMemo)((function(){return Object.values(T).some((function(e){return void 0!==e}))}),[T]),L=(0,r.useMemo)((function(){if(void 0===T.content)return null;if(S.gB.apply(void 0,E()(Object.keys(W)))(T.content.key)){var e=p(W[T.content.key],T.content.values);switch(h){case"en":return _().sentence(e);case"ja":case"he":return e;default:throw new Error}}return null}),[h,p,T.content]);return r.createElement("div",{ref:m},r.createElement(w.Z,{classes:{container:g}},r.createElement(D.Z,null,r.createElement("div",{ref:d},r.createElement(M.Z,null))),r.createElement(D.Z,null,r.createElement(I.Z,{color:"primary",checked:n.done,onChange:k})),r.createElement(b.Z,{variant:"standard",fullWidth:!0,value:n.content,onChange:f,disabled:n.done,error:C,helperText:L}),r.createElement(R.Z,null,r.createElement(y.Z,{onClick:o,edge:"end"},r.createElement(B.Z,null)))))},q=t(17109),z=function(e){var n=e.children,t=e.index,a=e.moveTask,s=(0,r.useRef)(null),o=(0,O.useDrop)({accept:"TaskListItem",hover:function(e,n){if((0,q.s)(s.current),e.index!==t){var r=n.getClientOffset();(0,q.s)(r);var o=s.current.getBoundingClientRect(),c=r.y-o.top,i=(o.bottom-o.top)/2;e.index<t&&c<i||e.index>t&&c>i||(a(e.index,t),e.index=t)}}});return(0,A()(o,2)[1])(s),r.createElement("div",{ref:s},n)},G=(0,u.su)("a Task for presentation",(function(e){return{content:(0,u.LI)((0,u.t6)("content",(0,l.r)({upperBound:140})))(e.content),done:(0,u.LI)(u.jK)(e.done)}})),J={getTasks:d.j9,addTask:d.fv,changeTaskContent:d.Zn,markTaskAsDone:d.BM,markTaskAsUndone:d.fX,deleteTask:d.nu,moveTask:d.bf},N=(0,c.$j)((function(e){return{tasks:e.reminder.tasks}}),J)((function(e){var n=e.tasks,t=e.getTasks,a=e.addTask,s=e.changeTaskContent,o=e.markTaskAsDone,c=e.markTaskAsUndone,u=e.deleteTask,l=e.moveTask;(0,r.useEffect)((function(){t()}),[t]);var d=(0,r.useCallback)((function(e,n){var t=n.content,r=n.done;void 0!==t&&s(e,t),void 0!==r&&(r?o(e):c(e))}),[s,o,c]);return r.createElement(r.Fragment,null,r.createElement(h,null,n.map((function(e,n){return r.createElement(z,{key:n,index:n,moveTask:l},r.createElement($,{key:e.id.value,value:e,index:n,onChange:i(d)(e.id),onDelete:i(u)(e.id),validate:G}))})).toArray()),r.createElement(v,{addTask:a}))})),Q=(0,f.vU)({reminder:{id:"src.components.App.ReminderPage.reminder",defaultMessage:"Reminder"}}),V=(0,o.D)((function(){var e=(0,s.Z)().formatMessage;return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:e(Q.reminder)}),r.createElement(N,null))}))},93977:function(e,n,t){"use strict";t.d(n,{r:function(){return l},j:function(){return d}});var r=t(28655),a=t.n(r);var s,o,c=t(53331),i=t(16142),u=t(26178),l=function(e){var n=e.lowerBound,t=void 0===n?-1/0:n,r=e.upperBound,o=void 0===r?1/0:r;return function(e){var n=(0,u.XC)(e);if(t<=n.length&&n.length<=o)return n;throw new i.Z((0,c.Z)(s||(s=a()([""," is not between "," and "," characters."])),n,t,o),"asBoundedLengthStringErrorMessage",{input:n.length,lowerBound:t,upperBound:o})}};function d(e){var n=(0,u.XC)(e);if(!function(e){try{return new URL(e),!0}catch(e){return!1}}(n))throw new i.Z((0,c.Z)(o||(o=a()([""," is not a URL."])),n));return n}},80627:function(e,n,t){"use strict";var r=t(94015),a=t.n(r),s=t(23645),o=t.n(s)()(a());o.push([e.id,".src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3OHhp.src-components-Reminder-TaskListItem-classes__Dragging--2_mhr {\n  opacity: 0;\n}\n","",{version:3,sources:["webpack://./src/components/Reminder/TaskListItem/classes.css"],names:[],mappings:"AAAA;EACE,UAAU;AACZ",sourcesContent:[".TaskListItemContainer.Dragging {\n  opacity: 0;\n}\n"],sourceRoot:""}]),o.locals={TaskListItemContainer:"src-components-Reminder-TaskListItem-classes__TaskListItemContainer--3OHhp",Dragging:"src-components-Reminder-TaskListItem-classes__Dragging--2_mhr"},n.Z=o}}]);
//# sourceMappingURL=reminder.04ab3f3b.js.map