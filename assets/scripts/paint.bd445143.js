(self.webpackChunkreact_app_prototype=self.webpackChunkreact_app_prototype||[]).push([[962],{71289:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return he}});var a=t(67294),r=t(64593),l=t(31753),u=t(72152),c=t(63038),s=t.n(c),o=t(282),i=t(64436),f=t(30553),h=t(96019),v=t(62822),p=t(50998),d=t(95757),m=t(40074),E=t(67162),C=t(44845),b=t(22318),g=t(97127),Z=t(9192),k=t(88001),y=t(48926),x=t.n(y),w=t(87757),A=t.n(w),P=t(41120),S=t(94184),R=t.n(S),B=t(17109),_=t(30677),O=t(34575),M=t.n(O),Y=t(93913),D=t.n(Y),q=t(2205),z=t.n(q),T=t(78585),X=t.n(T),I=t(29754),U=t.n(I);function W(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=U()(e);if(n){var r=U()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return X()(this,t)}}var F=function(e){z()(t,e);var n=W(t);function t(e){var a,r=e.red,l=e.green,u=e.blue,c=e.alpha;return M()(this,t),(a=n.call(this)).red=r,a.green=l,a.blue=u,a.alpha=c,a}return D()(t,[{key:"hashCode",value:function(){var e=0;return e=31*(e=31*(e=31*(e=31*e+this.red.hashCode())+this.green.hashCode())+this.blue.hashCode())+this.alpha.hashCode()}}]),t}(t(18982).Z),N=t(33918);function J(e,n){var t=e.x,a=e.y,r=n.getImageData(t,a,1,1),l=s()(r.data,4),u=l[0],c=l[1],o=l[2],i=l[3];return new F({red:u,green:c,blue:o,alpha:i})}function L(e,n,t,a){return j.apply(this,arguments)}function j(){return(j=x()(A().mark((function e(n,t,a,r){var l,u,c,s;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,B.s)(r),l=[],u=J(n,r),l.push(n);case 4:if(0===l.length){e.next=19;break}if(c=l.shift(),(0,B.s)(c),s=J(c,r),u.equals(s)){e.next=10;break}return e.abrupt("continue",4);case 10:return r.fillRect(c.x,c.y,1,1),c.x>0&&l.push({x:c.x-1,y:c.y}),c.y>0&&l.push({x:c.x,y:c.y-1}),c.x<t-1&&l.push({x:c.x+1,y:c.y}),c.y<a-1&&l.push({x:c.x,y:c.y+1}),e.next=17,(0,N.Z)(30);case 17:e.next=4;break;case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=t(93379),H=t.n(G),K=t(14830),Q={insert:"head",singleton:!1},V=(H()(K.Z,Q),K.Z.locals||{}),$=(0,P.Z)({Canvas:function(e){return{width:e.width,height:e.height}}}),ee=(0,a.forwardRef)((function(e,n){var t=e.width,r=e.height,l=e.lineWidth,u=e.context,c=e.tool,o=(0,a.useState)(!1),i=s()(o,2),f=i[0],h=i[1],v=(0,a.useState)(null),p=s()(v,2),d=p[0],m=p[1],E=(0,a.useRef)(null),C=(0,_.Z)(n,E),b=$({width:t,height:r}),g=(0,a.useMemo)((function(){return R()(b.Canvas,V.Canvas)}),[b.Canvas]),Z=(0,k.Z)().dpr;(0,a.useEffect)((function(){null!=u&&null!==E.current&&null!==Z&&(E.current.width=Z*t,E.current.height=Z*r,u.scale(Z,Z))}),[t,r,u,E,Z]);var y=(0,a.useCallback)((function(e){"pen"===c&&((0,B.N)(d),h(!0),m({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[c,d]),w=(0,a.useCallback)((function(e){f&&((0,B.s)(u),(0,B.s)(d),u.lineWidth=l*(0!==e.pressure?e.pressure:1),u.lineJoin="round",u.beginPath(),u.moveTo(d.x,d.y),u.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),u.stroke(),m({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY}))}),[l,u,f,d]),P=(0,a.useCallback)((function(){h(!1),m(null)}),[]),S=(0,a.useCallback)((function(){h(!1),m(null)}),[]),O=(0,a.useCallback)(function(){var e=x()(A().mark((function e(n){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("bucket"===c){e.next=2;break}return e.abrupt("return");case 2:return(0,B.s)(u),e.next=5,L({x:n.nativeEvent.offsetX,y:n.nativeEvent.offsetY},t,r,u);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,r,u,c]);return a.createElement("canvas",{ref:C,className:g,width:t,height:r,onPointerDown:y,onPointerMove:w,onPointerUp:P,onPointerLeave:S,onClick:O})})),ne=t(74540),te=t(20590),ae=t(5391),re=t(26663),le=function(e){var n=e.value,t=e.onChange;return a.createElement(re.Z,{orientation:"vertical",exclusive:!0,value:n,onChange:t},a.createElement(ae.Z,{value:"pen"},a.createElement(ne.Z,null)),a.createElement(ae.Z,{value:"bucket",disabled:!0},a.createElement(te.Z,null)))},ue=t(85315),ce=(0,ue.vU)({clear:{id:"src.components.Paint.clear",defaultMessage:"Clear"},brushSize:{id:"src.components.Paint.brushSize",defaultMessage:"Brush size"}}),se=(0,Z.gB)("butt","round","square"),oe=(0,Z.gB)("pen","bucket"),ie=function(){var e=(0,a.useState)(),n=s()(e,2),t=n[0],r=n[1],l=(0,a.useState)("round"),u=s()(l,2),c=u[0],Z=u[1],y=(0,a.useState)(10),x=s()(y,2),w=x[0],A=x[1],P=(0,a.useState)("pen"),S=s()(P,2),R=S[0],B=S[1],_=(0,k.Z)().dpr,O=(0,a.useCallback)((function(e){r(null==e?void 0:e.getContext("2d"))}),[]),M=(0,a.useCallback)((function(){null==t||t.clearRect(0,0,320,320)}),[t]),Y=(0,a.useCallback)((function(e,n){oe(n)&&B(n)}),[]),D=(0,a.useCallback)((function(e){se(e.target.value)&&Z(e.target.value)}),[]),q=(0,a.useCallback)((function(e,n){if(Array.isArray(n))throw new Error;A(n)}),[]);return(0,a.useEffect)((function(){null!=t&&(t.lineCap=c)}),[t,c]),a.createElement(a.Fragment,null,a.createElement(ee,{width:320,height:320,lineWidth:w,ref:O,context:t,tool:R}),a.createElement(o.Z,{onClick:M},a.createElement(g.Z,ce.clear)),a.createElement(le,{value:R,onChange:Y}),a.createElement(i.Z,{disabled:"pen"!==R},a.createElement(h.Z,null,"line cap"),a.createElement(E.Z,{name:"lineCap",value:c,onChange:D},a.createElement(f.Z,{value:"butt",label:"butt",control:a.createElement(m.Z,null)}),a.createElement(f.Z,{value:"round",label:"round",control:a.createElement(m.Z,null)}),a.createElement(f.Z,{value:"square",label:"square",control:a.createElement(m.Z,null)}))),a.createElement(v.Z,null,a.createElement(p.Z,null,a.createElement(d.Z,null,a.createElement(b.Z,{gutterBottom:!0},a.createElement(g.Z,ce.brushSize)),a.createElement(C.Z,{min:1/(null!=_?_:1),value:w,onChange:q})))))},fe=(0,ue.vU)({paint:{id:"src.components.App.PaintPage.paint",defaultMessage:"Paint"}}),he=(0,u.D)((function(){var e=(0,l.Z)().formatMessage;return a.createElement(a.Fragment,null,a.createElement(r.Z,{title:e(fe.paint)}),a.createElement(ie,null))}))},14830:function(e,n,t){"use strict";var a=t(94015),r=t.n(a),l=t(23645),u=t.n(l)()(r());u.push([e.id,".src-components-Paint-Canvas-classes__Canvas--10YIO {\n  background-color: white; /* TODO */\n}\n","",{version:3,sources:["webpack://./src/components/Paint/Canvas/classes.css"],names:[],mappings:"AAAA;EACE,uBAAuB,EAAE,SAAS;AACpC",sourcesContent:[".Canvas {\n  background-color: white; /* TODO */\n}\n"],sourceRoot:""}]),u.locals={Canvas:"src-components-Paint-Canvas-classes__Canvas--10YIO"},n.Z=u}}]);
//# sourceMappingURL=paint.bd445143.js.map