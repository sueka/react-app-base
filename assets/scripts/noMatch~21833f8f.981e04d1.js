(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1019:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),c=t(10),o=t(890);function l(){var e=a()(["No route matches ","."]);return l=function(){return e},e}n.default=Object(o.a)((function(e){var n=e.location.pathname;throw new Error(Object(c.a)(l(),n))}))},886:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},887:function(e,n,t){var r=t(891),a=t(888);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1},o=(r(a,c),a.locals?a.locals:{});e.exports=o},888:function(e,n,t){(n=t(892)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},889:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},890:function(e,n,t){"use strict";t.d(n,"a",(function(){return Fe}));var r=t(9),a=t.n(r),c=t(1),o=t.n(c),l=t(24),s=t.n(l),u=t(235),i=t(905),f=t.n(i),m=t(897),d=t.n(m),p=t(910),v=t.n(p),h=t(906),b=t.n(h),E=t(907),S=t.n(E),g=t(908),_=t.n(g),L=t(236),N=function(){var e=Object(c.useContext)(L.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var r=Object(c.useCallback)((function(e,n){t(n)}),[t]);return(o.a.createElement(_.a,{checked:n,onChange:r}))},y=t(7),j=t.n(y),C=t(175),M=t.n(C),O=t(107),k=t(134),F=t(898),I=t.n(F),w=t(893),x=t.n(w),R=t(895),U=t.n(R),D=t(900),W=t.n(D),P=t(899),A=t.n(P),V=t(901),T=t.n(V),J=t(133),q=t(237),z=t(889);var B=t(176),G=Object(u.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),H={selectLocale:B.c},K=Object(O.connect)((function(e){return{locale:e.localeSelector.locale}}),H)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,i=e.selectLocale,f=Object(c.useState)(0),m=s()(f,2),d=m[0],p=m[1],v=Object(c.useMemo)(k.v4,[]),h=Object(J.useTheme)(),b=Object(c.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==h?void 0:null===(t=h.props)||void 0===t?void 0:null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==h?void 0:null===(n=h.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),E=Object(c.useMemo)((function(){return M()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),S=Object(c.useMemo)((function(){return M()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),g=Object(c.useMemo)((function(){return M()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),_=Object(c.useMemo)((function(){return M()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),L=Object(c.useMemo)((function(){return M()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),N=Object(c.useCallback)((function(e){null!==e&&p(e.offsetWidth)}),[]),y=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in z&&i(e.target.value)}),[i]),C=Object(c.useContext)(q.a).availableLocales;return o.a.createElement(x.a,j()({},a,{className:E}),o.a.createElement(W.a,{className:S,ref:N,htmlFor:v},o.a.createElement(u.FormattedMessage,G.languages)),o.a.createElement(T.a,{classes:{icon:_},native:!0,labelWidth:d,value:l,onChange:y,id:v,inputProps:{"data-testid":"localeSelect"},input:{standard:o.a.createElement(U.a,{className:g,classes:{underline:L}}),outlined:o.a.createElement(A.a,{className:g,labelWidth:d}),filled:o.a.createElement(I.a,{className:g})}[b]},null==C?void 0:C.map((function(e,n){return o.a.createElement("option",{key:n,value:e},z[e])}))))})),Q=t(28),X=t.n(Q),Y=t(912),Z=t.n(Y),$=t(11),ee=t.n($),ne=t(17),te=t.n(ne),re=t(25),ae=t.n(re),ce=t(12),oe=t.n(ce),le=t(26),se=t.n(le),ue=t(911),ie=t(902),fe=t.n(ie),me=t(886),de=t(10);function pe(){var e=a()([""," is not a Material-UI Typography color."]);return pe=function(){return e},e}function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var he=Object(me.b)(Object(me.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),be=o.a.forwardRef((function(e,n){return o.a.createElement(ue.Link,j()({innerRef:n},e))})),Ee=function(e){se()(r,e);var n,t=(n=r,function(){var e,t=oe()(n);if(ve()){var r=oe()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ae()(this,e)});function r(){return ee()(this,r),t.apply(this,arguments)}return te()(r,[{key:"render",value:function(){var e=this.props,n=e.color,t=X()(e,["color"]);return he(n)?o.a.createElement(fe.a,j()({component:be,color:n},t)):(console.warn(Object(de.a)(pe(),n)),o.a.createElement(fe.a,j()({component:be},t)))}}]),r}(o.a.Component),Se=c.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=X()(e,["to","button","innerRef"]),o=c.forwardRef((function(e,n){return c.createElement(Ee,j()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return c.createElement(Z.a,j()({button:!0,component:o,to:t,ref:n},a))})),ge=t(887),_e=t.n(ge),Le=Object(u.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Ne=function(){var e=Object(c.useState)(null),n=s()(e,2),t=n[0],r=n[1],a=Object(c.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(c.useCallback)((function(){r(null)}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{position:"sticky"},o.a.createElement(b.a,null,o.a.createElement(d.a,{edge:"start",color:"inherit",onClick:a},o.a.createElement(S.a,null)),o.a.createElement("div",{className:_e.a.Spacer}),o.a.createElement(N,null),o.a.createElement(K,{classes:{label:_e.a.LocaleSelectLabel,input:_e.a.LocaleSelectInput,selectIcon:_e.a.LocaleSelectSelectIcon,inputUnderline:_e.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),o.a.createElement(v.a,{open:null!==t,anchorEl:t,onClose:l},o.a.createElement(Se,{to:"/",onClick:l},o.a.createElement(u.FormattedMessage,Le.home)),o.a.createElement(Se,{to:"/chess",onClick:l},o.a.createElement(u.FormattedMessage,Le.chess)),o.a.createElement(Se,{to:"/counter",onClick:l},o.a.createElement(u.FormattedMessage,Le.counter)),o.a.createElement(Se,{to:"/info",onClick:l},o.a.createElement(u.FormattedMessage,Le.info)),o.a.createElement(Se,{to:"/paint",onClick:l},o.a.createElement(u.FormattedMessage,Le.paint)),o.a.createElement(Se,{to:"/reminder",onClick:l},o.a.createElement(u.FormattedMessage,Le.reminder))))};function ye(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var je=function(e){se()(r,e);var n,t=(n=r,function(){var e,t=oe()(n);if(ye()){var r=oe()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return ae()(this,e)});function r(){var e;ee()(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return te()(r,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,c=r.error;return a?n(c,t):t}}]),r}(o.a.Component);je.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var Ce=je;function Me(){var e=a()([""," is not an error."]);return Me=function(){return e},e}function Oe(){var e=a()(["",""]);return Oe=function(){return e},e}var ke=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(de.a)(Oe(),String(e));throw new TypeError(Object(de.a)(Me(),String(e)))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ne,null),o.a.createElement(Ce,{renderError:t},n))},Fe=function(e){return function(n){return o.a.createElement(ke,null,o.a.createElement(e,n))}}}}]);
//# sourceMappingURL=noMatch~21833f8f.981e04d1.js.map