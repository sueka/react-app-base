(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1024:function(e,n,t){"use strict";t.r(n);var r=t(8),a=t.n(r),c=t(9),o=t(901);function l(){var e=a()(["No route matches ","."]);return l=function(){return e},e}n.default=Object(o.a)((function(e){var n=e.location.pathname;throw new Error(Object(c.a)(l(),n))}))},896:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},898:function(e,n,t){var r=t(902),a=t(899);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1};r(a,c);e.exports=a.locals||{}},899:function(e,n,t){(n=t(903)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},900:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English","he":"עברית"}')},901:function(e,n,t){"use strict";t.d(n,"a",(function(){return Fe}));var r=t(8),a=t.n(r),c=t(1),o=t.n(c),l=t(23),s=t.n(l),u=t(238),i=t(917),f=t.n(i),m=t(909),d=t.n(m),p=t(922),v=t.n(p),h=t(918),b=t.n(h),E=t(919),S=t.n(E),g=t(920),_=t.n(g),L=t(239),N=function(){var e=Object(c.useContext)(L.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var r=Object(c.useCallback)((function(e,n){t(n)}),[t]);return o.a.createElement(_.a,{checked:n,onChange:r})},y=t(7),j=t.n(y),C=t(906),M=t.n(C),O=t(110),k=t(140),F=t(910),I=t.n(F),w=t(905),x=t.n(w),R=t(907),U=t.n(R),D=t(912),W=t.n(D),P=t(897),A=t.n(P),V=t(911),T=t.n(V),J=t(913),q=t.n(J),z=t(97),B=t(137),G=t(900);var H=t(178),K=Object(u.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),Q={selectLocale:H.c},X=Object(O.connect)((function(e){return{locale:e.localeSelector.locale}}),Q)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,i=e.selectLocale,f=Object(c.useState)(0),m=s()(f,2),d=m[0],p=m[1],v=Object(c.useMemo)(k.v4,[]),h=Object(z.useTheme)(),b=Object(c.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==h||null===(t=h.props)||void 0===t||null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==h||null===(n=h.props)||void 0===n||null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),E=Object(c.useMemo)((function(){return M()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),S=Object(c.useMemo)((function(){return M()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),g=Object(c.useMemo)((function(){return M()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),_=Object(c.useMemo)((function(){return M()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),L=Object(c.useMemo)((function(){return M()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),N=Object(c.useCallback)((function(e){null!==e&&p(e.offsetWidth)}),[]),y=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in G&&i(e.target.value)}),[i]),C=Object(c.useContext)(B.a).availableLocales;return o.a.createElement(x.a,j()({},a,{className:E}),o.a.createElement(W.a,{className:S,ref:N,htmlFor:v},o.a.createElement(u.FormattedMessage,K.languages)),o.a.createElement(q.a,{classes:{icon:_},labelWidth:d,value:l,onChange:y,id:v,inputProps:{"data-testid":"localeSelect"},input:{standard:o.a.createElement(U.a,{className:g,classes:{underline:L}}),outlined:o.a.createElement(T.a,{className:g,labelWidth:d}),filled:o.a.createElement(I.a,{className:g})}[b]},null==C?void 0:C.map((function(e,n){return o.a.createElement(A.a,{key:n,value:e},G[e])}))))})),Y=t(30),Z=t.n(Y),$=t(10),ee=t.n($),ne=t(14),te=t.n(ne),re=t(26),ae=t.n(re),ce=t(27),oe=t.n(ce),le=t(12),se=t.n(le),ue=t(923),ie=t(914),fe=t.n(ie),me=t(896),de=t(9);function pe(){var e=a()([""," is not a Material-UI Typography color."]);return pe=function(){return e},e}function ve(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=se()(e);if(n){var a=se()(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return oe()(this,t)}}var he=Object(me.b)(Object(me.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),be=o.a.forwardRef((function(e,n){return o.a.createElement(ue.Link,j()({innerRef:n},e))})),Ee=function(e){ae()(t,e);var n=ve(t);function t(){return ee()(this,t),n.apply(this,arguments)}return te()(t,[{key:"render",value:function(){var e=this.props,n=e.color,t=Z()(e,["color"]);return he(n)?o.a.createElement(fe.a,j()({component:be,color:n},t)):(console.warn(Object(de.a)(pe(),n)),o.a.createElement(fe.a,j()({component:be},t)))}}]),t}(o.a.Component),Se=c.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=Z()(e,["to","button","innerRef"]),o=c.forwardRef((function(e,n){return c.createElement(Ee,j()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return c.createElement(A.a,j()({button:!0,component:o,to:t,ref:n},a))})),ge=t(898),_e=t.n(ge),Le=Object(u.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Ne=function(){var e=Object(c.useState)(null),n=s()(e,2),t=n[0],r=n[1],a=Object(c.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(c.useCallback)((function(){r(null)}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{position:"sticky"},o.a.createElement(b.a,null,o.a.createElement(d.a,{edge:"start",color:"inherit",onClick:a},o.a.createElement(S.a,null)),o.a.createElement("div",{className:_e.a.Spacer}),o.a.createElement(N,null),o.a.createElement(X,{classes:{label:_e.a.LocaleSelectLabel,input:_e.a.LocaleSelectInput,selectIcon:_e.a.LocaleSelectSelectIcon,inputUnderline:_e.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),o.a.createElement(v.a,{open:null!==t,anchorEl:t,onClose:l},o.a.createElement(Se,{to:"/",onClick:l},o.a.createElement(u.FormattedMessage,Le.home)),o.a.createElement(Se,{to:"/chess",onClick:l},o.a.createElement(u.FormattedMessage,Le.chess)),o.a.createElement(Se,{to:"/counter",onClick:l},o.a.createElement(u.FormattedMessage,Le.counter)),o.a.createElement(Se,{to:"/info",onClick:l},o.a.createElement(u.FormattedMessage,Le.info)),o.a.createElement(Se,{to:"/paint",onClick:l},o.a.createElement(u.FormattedMessage,Le.paint)),o.a.createElement(Se,{to:"/reminder",onClick:l},o.a.createElement(u.FormattedMessage,Le.reminder))))};function ye(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=se()(e);if(n){var a=se()(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return oe()(this,t)}}var je=function(e){ae()(t,e);var n=ye(t);function t(){var e;ee()(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={hasError:!1},e}return te()(t,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,c=r.error;return a?n(c,t):t}}]),t}(o.a.Component);je.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var Ce=je;function Me(){var e=a()([""," is not an error."]);return Me=function(){return e},e}function Oe(){var e=a()(["",""]);return Oe=function(){return e},e}var ke=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(de.a)(Oe(),String(e));throw new TypeError(Object(de.a)(Me(),String(e)))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ne,null),o.a.createElement(Ce,{renderError:t},n))},Fe=function(e){return function(n){return o.a.createElement(ke,null,o.a.createElement(e,n))}}}}]);
//# sourceMappingURL=noMatch~21833f8f.9e8bd47c.js.map