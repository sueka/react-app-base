(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},294:function(e,n,t){var r=t(298),a=t(295);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},c=(r(a,o),a.locals?a.locals:{});e.exports=c},295:function(e,n,t){(n=t(299)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},296:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},297:function(e,n,t){"use strict";var r=t(10),a=t.n(r),o=t(0),c=t.n(o),l=t(23),s=t.n(l),u=t(331),i=t(375),m=t(377),d=t(360),v=t(376),f=t(308),p=t.n(f),b=t(47),h=t.n(b),E=t(92),S=t.n(E),_=t(57),L=t(116),N=t(380),g=t(378),j=t(379),O=t(400),C=t(401),I=t(393),y=t(56),M=t(118),k=t(296);var F=t(94),w=t(330),x=Object(w.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),U={selectLocale:F.c},W=Object(_.c)((function(e){return{locale:e.localeSelector.locale}}),U)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,i=e.selectLocale,m=Object(o.useState)(0),d=s()(m,2),v=d[0],f=d[1],p=Object(o.useMemo)(L.a,[]),b=Object(y.a)(),E=Object(o.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==b?void 0:null===(t=b.props)||void 0===t?void 0:null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==b?void 0:null===(n=b.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),_=Object(o.useMemo)((function(){return S()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),F=Object(o.useMemo)((function(){return S()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),w=Object(o.useMemo)((function(){return S()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),U=Object(o.useMemo)((function(){return S()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),W=Object(o.useMemo)((function(){return S()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),R=Object(o.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),D=Object(o.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in k&&i(e.target.value)}),[]),A=Object(o.useContext)(M.a).availableLocales;return c.a.createElement(g.a,h()({},a,{className:_}),c.a.createElement(O.a,{className:F,ref:R,htmlFor:p},c.a.createElement(u.a,x.languages)),c.a.createElement(I.a,{classes:{icon:U},native:!0,labelWidth:v,value:l,onChange:D,id:p,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(j.a,{className:w,classes:{underline:W}}),outlined:c.a.createElement(C.a,{className:w,labelWidth:v}),filled:c.a.createElement(N.a,{className:w})}[E]},null==A?void 0:A.map((function(e,n){return c.a.createElement("option",{key:n,value:e},k[e])}))))})),R=t(48),D=t.n(R),A=t(383),V=t(12),P=t.n(V),J=t(16),T=t.n(J),q=t(18),z=t.n(q),B=t(17),G=t.n(B),H=t(19),K=t.n(H),Q=t(311),X=t(382),Y=t(293),Z=t(11);function $(){var e=a()([""," is not a Material-UI Typography color."]);return $=function(){return e},e}var ee=Object(Y.b)(Object(Y.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ne=c.a.forwardRef((function(e,n){return c.a.createElement(Q.a,h()({innerRef:n},e))})),te=function(e){function n(){return P()(this,n),z()(this,G()(n).apply(this,arguments))}return K()(n,e),T()(n,[{key:"render",value:function(){var e=this.props,n=e.color,t=D()(e,["color"]);return ee(n)?c.a.createElement(X.a,h()({component:ne,color:n},t)):(console.warn(Object(Z.a)($(),n)),c.a.createElement(X.a,h()({component:ne},t)))}}]),n}(c.a.Component),re=o.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=D()(e,["to","button","innerRef"]),c=o.forwardRef((function(e,n){return o.createElement(te,h()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return o.createElement(A.a,h()({button:!0,component:c,to:t,ref:n},a))})),ae=t(294),oe=t.n(ae),ce=Object(w.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),le=function(){var e=Object(o.useState)(null),n=s()(e,2),t=n[0],r=n[1],a=Object(o.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(o.useCallback)((function(){r(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{position:"sticky"},c.a.createElement(v.a,null,c.a.createElement(m.a,{edge:"start",color:"inherit",onClick:a},c.a.createElement(p.a,null)),c.a.createElement("div",{className:oe.a.Spacer}),c.a.createElement(W,{classes:{label:oe.a.LocaleSelectLabel,input:oe.a.LocaleSelectInput,selectIcon:oe.a.LocaleSelectSelectIcon,inputUnderline:oe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(d.a,{open:null!==t,anchorEl:t,onClose:l},c.a.createElement(re,{to:"/",onClick:l},c.a.createElement(u.a,ce.home)),c.a.createElement(re,{to:"/chess",onClick:l},c.a.createElement(u.a,ce.chess)),c.a.createElement(re,{to:"/counter",onClick:l},c.a.createElement(u.a,ce.counter)),c.a.createElement(re,{to:"/info",onClick:l},c.a.createElement(u.a,ce.info)),c.a.createElement(re,{to:"/reminder",onClick:l},c.a.createElement(u.a,ce.reminder))))},se=function(e){function n(){var e,t;P()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=z()(this,(e=G()(n)).call.apply(e,[this].concat(a)))).state={hasError:!1},t}return K()(n,e),T()(n,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,o=r.error;return a?n(o,t):t}}]),n}(c.a.Component);se.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var ue=se;function ie(){var e=a()([""," is not an error."]);return ie=function(){return e},e}function me(){var e=a()(["",""]);return me=function(){return e},e}t.d(n,"a",(function(){return ve}));var de=function(e){var n=e.children,t=Object(o.useCallback)((function(e){if(e instanceof Error)return Object(Z.a)(me(),String(e));throw new TypeError(Object(Z.a)(ie(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null),c.a.createElement(ue,{renderError:t},n))},ve=function(e){return function(n){return c.a.createElement(de,null,c.a.createElement(e,n))}}},387:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t.n(r),o=t(11),c=t(297);function l(){var e=a()(["No route matches ","."]);return l=function(){return e},e}n.default=Object(c.a)((function(e){var n=e.location.pathname;throw new Error(Object(o.a)(l(),n))}))}}]);
//# sourceMappingURL=noMatch~21833f8f.356b978a.js.map