(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1031:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(139),l=n.n(r),c=n(238),i=n(110),s=n(904),d=n.n(s),u=n(988),p=n.n(u),m=n(915),f=n.n(m),b=n(171),v=Object(c.defineMessages)({reset:{id:"src.components.Counter.reset",defaultMessage:"reset"},increment:{id:"src.components.Counter.increment",defaultMessage:"+"},decrement:{id:"src.components.Counter.decrement",defaultMessage:"-"},incrementIfOdd:{id:"src.components.Counter.incrementIfOdd",defaultMessage:"+ if odd"},willIncrementInOneSecond:{id:"src.components.Counter.willIncrementInOneSecond",defaultMessage:"+ in 1 second"}}),h=function(){var e=Object(i.useSelector)(b.i),t=Object(i.useDispatch)(),n=Object(a.useCallback)((function(){t(Object(b.h)())}),[t]),r=Object(a.useCallback)((function(){t(Object(b.e)())}),[t]),l=Object(a.useCallback)((function(){t(Object(b.d)())}),[t]),s=Object(a.useCallback)((function(){t(Object(b.g)())}),[t]),u=Object(a.useCallback)((function(){t(Object(b.f)(1e3))}),[t]);return o.a.createElement("div",null,o.a.createElement(f.a,{component:"span"},e),o.a.createElement(p.a,null,o.a.createElement(d.a,{onClick:n},o.a.createElement(c.FormattedMessage,v.reset)),o.a.createElement(d.a,{onClick:r},o.a.createElement(c.FormattedMessage,v.increment)),o.a.createElement(d.a,{onClick:l},o.a.createElement(c.FormattedMessage,v.decrement)),o.a.createElement(d.a,{onClick:s,"data-testid":"incrementIfOddButton"},o.a.createElement(c.FormattedMessage,v.incrementIfOdd)),o.a.createElement(d.a,{onClick:u,"data-testid":"incrementAsyncButton"},o.a.createElement(c.FormattedMessage,v.willIncrementInOneSecond))))},g=Object(a.memo)(h),y=n(901),S=Object(c.defineMessages)({counter:{id:"src.components.App.CounterPage.counter",defaultMessage:"counter"}});t.default=Object(y.a)((function(){var e=Object(c.useIntl)().formatMessage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:e(S.counter)}),o.a.createElement(g,null))}))},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},898:function(e,t,n){var a=n(902),o=n(899);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);e.exports=o.locals||{}},899:function(e,t,n){(t=n(903)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},900:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English","he":"עברית"}')},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return Me}));var a=n(8),o=n.n(a),r=n(1),l=n.n(r),c=n(23),i=n.n(c),s=n(238),d=n(917),u=n.n(d),p=n(909),m=n.n(p),f=n(922),b=n.n(f),v=n(918),h=n.n(v),g=n(919),y=n.n(g),S=n(920),x=n.n(S),C=n(239),E=function(){var e=Object(r.useContext)(C.a),t=e.dark,n=e.setDark;if(null==t||null==n)throw new Error;var a=Object(r.useCallback)((function(e,t){n(t)}),[n]);return l.a.createElement(x.a,{checked:t,onChange:a})},O=n(7),k=n.n(O),R=n(906),L=n.n(R),N=n(110),j=n(140),M=n(910),_=n.n(M),w=n(905),I=n.n(w),z=n(907),F=n.n(z),T=n(912),W=n.n(T),P=n(897),V=n.n(P),B=n(911),D=n.n(B),U=n(913),$=n.n(U),A=n(97),H=n(137),J=n(900);var G=n(178),q=Object(s.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),K={selectLocale:G.c},Q=Object(N.connect)((function(e){return{locale:e.localeSelector.locale}}),K)((function(e){var t,n,a=e.classes,o=e.FormControlProps,c=e.locale,d=e.selectLocale,u=Object(r.useState)(0),p=i()(u,2),m=p[0],f=p[1],b=Object(r.useMemo)(j.v4,[]),v=Object(A.useTheme)(),h=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==v||null===(n=v.props)||void 0===n||null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==v||null===(t=v.props)||void 0===t||null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),g=Object(r.useMemo)((function(){return L()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),y=Object(r.useMemo)((function(){return L()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),S=Object(r.useMemo)((function(){return L()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),x=Object(r.useMemo)((function(){return L()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),C=Object(r.useMemo)((function(){return L()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),E=Object(r.useCallback)((function(e){null!==e&&f(e.offsetWidth)}),[]),O=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in J&&d(e.target.value)}),[d]),R=Object(r.useContext)(H.a).availableLocales;return l.a.createElement(I.a,k()({},o,{className:g}),l.a.createElement(W.a,{className:y,ref:E,htmlFor:b},l.a.createElement(s.FormattedMessage,q.languages)),l.a.createElement($.a,{classes:{icon:x},labelWidth:m,value:c,onChange:O,id:b,inputProps:{"data-testid":"localeSelect"},input:{standard:l.a.createElement(F.a,{className:S,classes:{underline:C}}),outlined:l.a.createElement(D.a,{className:S,labelWidth:m}),filled:l.a.createElement(_.a,{className:S})}[h]},null==R?void 0:R.map((function(e,t){return l.a.createElement(V.a,{key:t,value:e},J[e])}))))})),X=n(30),Y=n.n(X),Z=n(10),ee=n.n(Z),te=n(14),ne=n.n(te),ae=n(26),oe=n.n(ae),re=n(27),le=n.n(re),ce=n(12),ie=n.n(ce),se=n(923),de=n(914),ue=n.n(de),pe=n(896),me=n(9);function fe(){var e=o()([""," is not a Material-UI Typography color."]);return fe=function(){return e},e}function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return le()(this,n)}}var ve=Object(pe.b)(Object(pe.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),he=l.a.forwardRef((function(e,t){return l.a.createElement(se.Link,k()({innerRef:t},e))})),ge=function(e){oe()(n,e);var t=be(n);function n(){return ee()(this,n),t.apply(this,arguments)}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.color,n=Y()(e,["color"]);return ve(t)?l.a.createElement(ue.a,k()({component:he,color:t},n)):(console.warn(Object(me.a)(fe(),t)),l.a.createElement(ue.a,k()({component:he},n)))}}]),n}(l.a.Component),ye=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=Y()(e,["to","button","innerRef"]),l=r.forwardRef((function(e,t){return r.createElement(ge,k()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(V.a,k()({button:!0,component:l,to:n,ref:t},o))})),Se=n(898),xe=n.n(Se),Ce=Object(s.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),Ee=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),c=Object(r.useCallback)((function(){a(null)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{position:"sticky"},l.a.createElement(h.a,null,l.a.createElement(m.a,{edge:"start",color:"inherit",onClick:o},l.a.createElement(y.a,null)),l.a.createElement("div",{className:xe.a.Spacer}),l.a.createElement(E,null),l.a.createElement(Q,{classes:{label:xe.a.LocaleSelectLabel,input:xe.a.LocaleSelectInput,selectIcon:xe.a.LocaleSelectSelectIcon,inputUnderline:xe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),l.a.createElement(b.a,{open:null!==n,anchorEl:n,onClose:c},l.a.createElement(ye,{to:"/",onClick:c},l.a.createElement(s.FormattedMessage,Ce.home)),l.a.createElement(ye,{to:"/chess",onClick:c},l.a.createElement(s.FormattedMessage,Ce.chess)),l.a.createElement(ye,{to:"/counter",onClick:c},l.a.createElement(s.FormattedMessage,Ce.counter)),l.a.createElement(ye,{to:"/info",onClick:c},l.a.createElement(s.FormattedMessage,Ce.info)),l.a.createElement(ye,{to:"/paint",onClick:c},l.a.createElement(s.FormattedMessage,Ce.paint)),l.a.createElement(ye,{to:"/reminder",onClick:c},l.a.createElement(s.FormattedMessage,Ce.reminder))))};function Oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=ie()(e);if(t){var o=ie()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return le()(this,n)}}var ke=function(e){oe()(n,e);var t=Oe(n);function n(){var e;ee()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return ne()(n,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),n}(l.a.Component);ke.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var Re=ke;function Le(){var e=o()([""," is not an error."]);return Le=function(){return e},e}function Ne(){var e=o()(["",""]);return Ne=function(){return e},e}var je=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(me.a)(Ne(),String(e));throw new TypeError(Object(me.a)(Le(),String(e)))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ee,null),l.a.createElement(Re,{renderError:n},t))},Me=function(e){return function(t){return l.a.createElement(je,null,l.a.createElement(e,t))}}},904:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(908))},908:function(e,t,n){"use strict";var a=n(25),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(n(30)),l=o(n(7)),c=a(n(1)),i=(o(n(16)),o(n(73))),s=o(n(74)),d=n(176),u=o(n(916)),p=o(n(135)),m=function(e){return{root:(0,l.default)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,d.fade)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,d.fade)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,d.fade)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,d.fade)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,d.fade)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}};t.styles=m;var f=c.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,s=e.color,d=void 0===s?"default":s,m=e.component,f=void 0===m?"button":m,b=e.disabled,v=void 0!==b&&b,h=e.disableElevation,g=void 0!==h&&h,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,C=e.focusVisibleClassName,E=e.fullWidth,O=void 0!==E&&E,k=e.size,R=void 0===k?"medium":k,L=e.startIcon,N=e.type,j=void 0===N?"button":N,M=e.variant,_=void 0===M?"text":M,w=(0,r.default)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),I=L&&c.createElement("span",{className:(0,i.default)(a.startIcon,a["iconSize".concat((0,p.default)(R))])},L),z=x&&c.createElement("span",{className:(0,i.default)(a.endIcon,a["iconSize".concat((0,p.default)(R))])},x);return c.createElement(u.default,(0,l.default)({className:(0,i.default)(a.root,a[_],o,"inherit"===d?a.colorInherit:"default"!==d&&a["".concat(_).concat((0,p.default)(d))],"medium"!==R&&[a["".concat(_,"Size").concat((0,p.default)(R))],a["size".concat((0,p.default)(R))]],g&&a.disableElevation,v&&a.disabled,O&&a.fullWidth),component:f,disabled:v,focusRipple:!S,focusVisibleClassName:(0,i.default)(a.focusVisible,C),ref:t,type:j},w),c.createElement("span",{className:a.label},I,n,z))})),b=(0,s.default)(m,{name:"MuiButton"})(f);t.default=b},988:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=a(n(989))},989:function(e,t,n){"use strict";var a=n(25),o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var r=o(n(7)),l=o(n(30)),c=a(n(1)),i=(n(138),o(n(16)),o(n(73))),s=o(n(135)),d=n(176),u=o(n(74));o(n(904)).default.styles;var p=function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:(0,d.fade)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:(0,d.fade)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}};t.styles=p;var m=c.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,d=e.color,u=void 0===d?"default":d,p=e.component,m=void 0===p?"div":p,f=e.disabled,b=void 0!==f&&f,v=e.disableElevation,h=void 0!==v&&v,g=e.disableFocusRipple,y=void 0!==g&&g,S=e.disableRipple,x=void 0!==S&&S,C=e.fullWidth,E=void 0!==C&&C,O=e.orientation,k=void 0===O?"horizontal":O,R=e.size,L=void 0===R?"medium":R,N=e.variant,j=void 0===N?"outlined":N,M=(0,l.default)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),_=(0,i.default)(a.grouped,a["grouped".concat((0,s.default)(k))],a["grouped".concat((0,s.default)(j))],a["grouped".concat((0,s.default)(j)).concat((0,s.default)(k))],a["grouped".concat((0,s.default)(j)).concat("default"!==u?(0,s.default)(u):"")],b&&a.disabled);return c.createElement(m,(0,r.default)({role:"group",className:(0,i.default)(a.root,o,E&&a.fullWidth,h&&a.disableElevation,"contained"===j&&a.contained,"vertical"===k&&a.vertical),ref:t},M),c.Children.map(n,(function(e){return c.isValidElement(e)?c.cloneElement(e,{className:(0,i.default)(_,e.props.className),color:e.props.color||u,disabled:e.props.disabled||b,disableElevation:e.props.disableElevation||h,disableFocusRipple:y,disableRipple:x,fullWidth:E,size:e.props.size||L,variant:e.props.variant||j}):null})))})),f=(0,u.default)(p,{name:"MuiButtonGroup"})(m);t.default=f}}]);
//# sourceMappingURL=counter~31ecd969.9e8bd47c.js.map