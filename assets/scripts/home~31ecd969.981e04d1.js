(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1023:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(238),l=n.n(r),c=n(235),i=n(903),s=n.n(i),u=n(107),d=n(7),p=n.n(d),m=function(e){return o.a.createElement(c.FormattedTime,p()({},e,{weekday:void 0,era:void 0,year:void 0,month:void 0,day:void 0}))},f=Object(u.connect)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return(o.a.createElement(s.a,null,o.a.createElement(m,{value:t,format:"medium"})))})),v=n(894),b=n.n(v),h=n(223),g=Object(c.defineMessages)({setTheClock:{id:"src.components.SetClockButton.setTheClock",defaultMessage:"Set the clock"}}),y={updateNow:h.c},S=Object(u.connect)(null,y)((function(e){var t=e.updateNow;return(o.a.createElement(b.a,{onClick:t},o.a.createElement(c.FormattedMessage,g.setTheClock)))})),E=Object(u.connect)((function(e){return{now:e.io.now}}))((function(e){var t=e.now;return(o.a.createElement(s.a,null,o.a.createElement(c.FormattedDate,{value:t,format:"medium"})))})),x=n(890),C=Object(c.defineMessages)({home:{id:"src.components.App.HomePage.home",defaultMessage:"home"},helloWorld:{id:"src.components.App.HomePage.helloWorld",defaultMessage:"Hello, world!"}});t.default=Object(x.a)((function(){var e=Object(c.useIntl)().formatMessage;return(o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e(C.home)}),o.a.createElement(s.a,null,o.a.createElement(c.FormattedMessage,C.helloWorld)),o.a.createElement(s.a,null,o.a.createElement(c.FormattedNumber,{format:"usd",value:100})),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(S,null)))}))},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},887:function(e,t,n){var a=n(891),o=n(888);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},l=(a(o,r),o.locals?o.locals:{});e.exports=l},888:function(e,t,n){(t=n(892)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},889:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},890:function(e,t,n){"use strict";n.d(t,"a",(function(){return Me}));var a=n(9),o=n.n(a),r=n(1),l=n.n(r),c=n(24),i=n.n(c),s=n(235),u=n(905),d=n.n(u),p=n(897),m=n.n(p),f=n(910),v=n.n(f),b=n(906),h=n.n(b),g=n(907),y=n.n(g),S=n(908),E=n.n(S),x=n(236),C=function(){var e=Object(r.useContext)(x.a),t=e.dark,n=e.setDark;if(null==t||null==n)throw new Error;var a=Object(r.useCallback)((function(e,t){n(t)}),[n]);return(l.a.createElement(E.a,{checked:t,onChange:a}))},k=n(7),N=n.n(k),w=n(175),L=n.n(w),_=n(107),O=n(134),M=n(898),j=n.n(M),I=n(893),F=n.n(I),R=n(895),z=n.n(R),W=n(900),T=n.n(W),P=n(899),D=n.n(P),U=n(901),V=n.n(U),$=n(133),A=n(237),B=n(889);var H=n(176),J=Object(s.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),q={selectLocale:H.c},G=Object(_.connect)((function(e){return{locale:e.localeSelector.locale}}),q)((function(e){var t,n,a=e.classes,o=e.FormControlProps,c=e.locale,u=e.selectLocale,d=Object(r.useState)(0),p=i()(d,2),m=p[0],f=p[1],v=Object(r.useMemo)(O.v4,[]),b=Object($.useTheme)(),h=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==b?void 0:null===(n=b.props)||void 0===n?void 0:null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==b?void 0:null===(t=b.props)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),g=Object(r.useMemo)((function(){return L()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),y=Object(r.useMemo)((function(){return L()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),S=Object(r.useMemo)((function(){return L()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),E=Object(r.useMemo)((function(){return L()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),x=Object(r.useMemo)((function(){return L()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),C=Object(r.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),k=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in B&&u(e.target.value)}),[u]),w=Object(r.useContext)(A.a).availableLocales;return l.a.createElement(F.a,N()({},o,{className:g}),l.a.createElement(T.a,{className:y,ref:C,htmlFor:v},l.a.createElement(s.FormattedMessage,J.languages)),l.a.createElement(V.a,{classes:{icon:E},native:!0,labelWidth:m,value:c,onChange:k,id:v,inputProps:{"data-testid":"localeSelect"},input:{standard:l.a.createElement(z.a,{className:S,classes:{underline:x}}),outlined:l.a.createElement(D.a,{className:S,labelWidth:m}),filled:l.a.createElement(j.a,{className:S})}[h]},null==w?void 0:w.map((function(e,t){return l.a.createElement("option",{key:t,value:e},B[e])}))))})),K=n(28),Q=n.n(K),X=n(912),Y=n.n(X),Z=n(11),ee=n.n(Z),te=n(17),ne=n.n(te),ae=n(25),oe=n.n(ae),re=n(12),le=n.n(re),ce=n(26),ie=n.n(ce),se=n(911),ue=n(902),de=n.n(ue),pe=n(886),me=n(10);function fe(){var e=o()([""," is not a Material-UI Typography color."]);return fe=function(){return e},e}function ve(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var be=Object(pe.b)(Object(pe.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),he=l.a.forwardRef((function(e,t){return l.a.createElement(se.Link,N()({innerRef:t},e))})),ge=function(e){ie()(a,e);var t,n=(t=a,function(){var e,n=le()(t);if(ve()){var a=le()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return oe()(this,e)});function a(){return ee()(this,a),n.apply(this,arguments)}return ne()(a,[{key:"render",value:function(){var e=this.props,t=e.color,n=Q()(e,["color"]);return be(t)?l.a.createElement(de.a,N()({component:he,color:t},n)):(console.warn(Object(me.a)(fe(),t)),l.a.createElement(de.a,N()({component:he},n)))}}]),a}(l.a.Component),ye=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=Q()(e,["to","button","innerRef"]),l=r.forwardRef((function(e,t){return r.createElement(ge,N()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(Y.a,N()({button:!0,component:l,to:n,ref:t},o))})),Se=n(887),Ee=n.n(Se),xe=Object(s.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Ce=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),c=Object(r.useCallback)((function(){a(null)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{position:"sticky"},l.a.createElement(h.a,null,l.a.createElement(m.a,{edge:"start",color:"inherit",onClick:o},l.a.createElement(y.a,null)),l.a.createElement("div",{className:Ee.a.Spacer}),l.a.createElement(C,null),l.a.createElement(G,{classes:{label:Ee.a.LocaleSelectLabel,input:Ee.a.LocaleSelectInput,selectIcon:Ee.a.LocaleSelectSelectIcon,inputUnderline:Ee.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),l.a.createElement(v.a,{open:null!==n,anchorEl:n,onClose:c},l.a.createElement(ye,{to:"/",onClick:c},l.a.createElement(s.FormattedMessage,xe.home)),l.a.createElement(ye,{to:"/chess",onClick:c},l.a.createElement(s.FormattedMessage,xe.chess)),l.a.createElement(ye,{to:"/counter",onClick:c},l.a.createElement(s.FormattedMessage,xe.counter)),l.a.createElement(ye,{to:"/info",onClick:c},l.a.createElement(s.FormattedMessage,xe.info)),l.a.createElement(ye,{to:"/paint",onClick:c},l.a.createElement(s.FormattedMessage,xe.paint)),l.a.createElement(ye,{to:"/reminder",onClick:c},l.a.createElement(s.FormattedMessage,xe.reminder))))};function ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Ne=function(e){ie()(a,e);var t,n=(t=a,function(){var e,n=le()(t);if(ke()){var a=le()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return oe()(this,e)});function a(){var e;ee()(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={hasError:!1},e}return ne()(a,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),a}(l.a.Component);Ne.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var we=Ne;function Le(){var e=o()([""," is not an error."]);return Le=function(){return e},e}function _e(){var e=o()(["",""]);return _e=function(){return e},e}var Oe=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(me.a)(_e(),String(e));throw new TypeError(Object(me.a)(Le(),String(e)))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ce,null),l.a.createElement(we,{renderError:n},t))},Me=function(e){return function(t){return l.a.createElement(Oe,null,l.a.createElement(e,t))}}},894:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(896))},896:function(e,t,n){"use strict";var a=n(30),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(n(28)),l=o(n(7)),c=a(n(1)),i=(o(n(14)),o(n(82))),s=o(n(70)),u=n(174),d=o(n(904)),p=o(n(172)),m=function(e){return{root:(0,l.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,u.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,u.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,u.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,u.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,u.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}};t.styles=m;var f=c.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,s=e.color,u=void 0===s?"default":s,m=e.component,f=void 0===m?"button":m,v=e.disabled,b=void 0!==v&&v,h=e.disableElevation,g=void 0!==h&&h,y=e.disableFocusRipple,S=void 0!==y&&y,E=e.endIcon,x=e.focusVisibleClassName,C=e.fullWidth,k=void 0!==C&&C,N=e.size,w=void 0===N?"medium":N,L=e.startIcon,_=e.type,O=void 0===_?"button":_,M=e.variant,j=void 0===M?"text":M,I=(0,r.default)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),F=L&&c.createElement("span",{className:(0,i.default)(a.startIcon,a["iconSize".concat((0,p.default)(w))])},L),R=E&&c.createElement("span",{className:(0,i.default)(a.endIcon,a["iconSize".concat((0,p.default)(w))])},E);return c.createElement(d.default,(0,l.default)({className:(0,i.default)(a.root,a[j],o,"inherit"===u?a.colorInherit:"default"!==u&&a["".concat(j).concat((0,p.default)(u))],"medium"!==w&&[a["".concat(j,"Size").concat((0,p.default)(w))],a["size".concat((0,p.default)(w))]],g&&a.disableElevation,b&&a.disabled,k&&a.fullWidth),component:f,disabled:b,focusRipple:!S,focusVisibleClassName:(0,i.default)(a.focusVisible,x),ref:t,type:O},I),c.createElement("span",{className:a.label},F,n,R))})),v=(0,s.default)(m,{name:"MuiButton"})(f);t.default=v}}]);
//# sourceMappingURL=home~31ecd969.981e04d1.js.map