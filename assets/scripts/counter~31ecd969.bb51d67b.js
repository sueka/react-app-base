(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},294:function(e,t,n){var a=n(298),o=n(295);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},c=(a(o,r),o.locals?o.locals:{});e.exports=c},295:function(e,t,n){(t=n(299)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},296:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},297:function(e,t,n){"use strict";var a=n(10),o=n.n(a),r=n(0),c=n.n(r),l=n(23),i=n.n(l),s=n(330),d=n(374),u=n(376),p=n(359),m=n(375),b=n(308),f=n.n(b),h=n(49),v=n.n(h),g=n(92),y=n.n(g),S=n(58),x=n(114),O=n(379),C=n(377),E=n(378),j=n(400),k=n(399),L=n(392),N=n(57),R=n(117),I=n(296);var w=n(116),_=n(329),z=Object(_.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),M={selectLocale:w.c},F=Object(S.c)((function(e){return{locale:e.localeSelector.locale}}),M)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.locale,d=e.selectLocale,u=Object(r.useState)(0),p=i()(u,2),m=p[0],b=p[1],f=Object(r.useMemo)(x.a,[]),h=Object(N.a)(),g=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==h?void 0:null===(n=h.props)||void 0===n?void 0:null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==h?void 0:null===(t=h.props)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),S=Object(r.useMemo)((function(){return y()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),w=Object(r.useMemo)((function(){return y()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),_=Object(r.useMemo)((function(){return y()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),M=Object(r.useMemo)((function(){return y()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),F=Object(r.useMemo)((function(){return y()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),T=Object(r.useCallback)((function(e){null!==e&&b(e.offsetWidth)}),[]),W=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in I&&d(e.target.value)}),[]),V=Object(r.useContext)(R.a).availableLocales;return c.a.createElement(C.a,v()({},o,{className:S}),c.a.createElement(j.a,{className:w,ref:T,htmlFor:f},c.a.createElement(s.a,z.languages)),c.a.createElement(L.a,{classes:{icon:M},native:!0,labelWidth:m,value:l,onChange:W,id:f,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(E.a,{className:_,classes:{underline:F}}),outlined:c.a.createElement(k.a,{className:_,labelWidth:m}),filled:c.a.createElement(O.a,{className:_})}[g]},null==V?void 0:V.map((function(e,t){return c.a.createElement("option",{key:t,value:e},I[e])}))))})),T=n(42),W=n.n(T),V=n(382),B=n(12),U=n.n(B),$=n(16),P=n.n($),A=n(18),D=n.n(A),H=n(17),J=n.n(H),G=n(19),q=n.n(G),K=n(311),Q=n(381),X=n(293),Y=n(11);function Z(){var e=o()([""," is not a Material-UI Typography color."]);return Z=function(){return e},e}var ee=Object(X.b)(Object(X.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),te=c.a.forwardRef((function(e,t){return c.a.createElement(K.a,v()({innerRef:t},e))})),ne=function(e){function t(){return U()(this,t),D()(this,J()(t).apply(this,arguments))}return q()(t,e),P()(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=W()(e,["color"]);return ee(t)?c.a.createElement(Q.a,v()({component:te,color:t},n)):(console.warn(Object(Y.a)(Z(),t)),c.a.createElement(Q.a,v()({component:te},n)))}}]),t}(c.a.Component),ae=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=W()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(ne,v()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(V.a,v()({button:!0,component:c,to:n,ref:t},o))})),oe=n(294),re=n.n(oe),ce=Object(_.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),le=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{position:"sticky"},c.a.createElement(m.a,null,c.a.createElement(u.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(f.a,null)),c.a.createElement("div",{className:re.a.Spacer}),c.a.createElement(F,{classes:{label:re.a.LocaleSelectLabel,input:re.a.LocaleSelectInput,selectIcon:re.a.LocaleSelectSelectIcon,inputUnderline:re.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(p.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ae,{to:"/",onClick:l},c.a.createElement(s.a,ce.home)),c.a.createElement(ae,{to:"/chess",onClick:l},c.a.createElement(s.a,ce.chess)),c.a.createElement(ae,{to:"/counter",onClick:l},c.a.createElement(s.a,ce.counter)),c.a.createElement(ae,{to:"/info",onClick:l},c.a.createElement(s.a,ce.info)),c.a.createElement(ae,{to:"/reminder",onClick:l},c.a.createElement(s.a,ce.reminder))))},ie=function(e){function t(){var e,n;U()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=D()(this,(e=J()(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return q()(t,e),P()(t,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),t}(c.a.Component);ie.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var se=ie;function de(){var e=o()([""," is not an error."]);return de=function(){return e},e}function ue(){var e=o()(["",""]);return ue=function(){return e},e}n.d(t,"a",(function(){return me}));var pe=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(Y.a)(ue(),String(e));throw new TypeError(Object(Y.a)(de(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null),c.a.createElement(se,{renderError:n},t))},me=function(e){return function(t){return c.a.createElement(pe,null,c.a.createElement(e,t))}}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n(115),r=n(8);function c(){const e=Object(a.useContext)(o.a);return Object(r.h)(e),e}},323:function(e,t,n){"use strict";var a=n(13),o=n(1),r=n(0),c=n.n(r),l=(n(6),n(30)),i=n(29),s=n(55),d=n(390),u=n(53),p=c.a.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,s=e.color,p=void 0===s?"default":s,m=e.component,b=void 0===m?"button":m,f=e.disabled,h=void 0!==f&&f,v=e.disableElevation,g=void 0!==v&&v,y=e.disableFocusRipple,S=void 0!==y&&y,x=e.endIcon,O=e.focusVisibleClassName,C=e.fullWidth,E=void 0!==C&&C,j=e.size,k=void 0===j?"medium":j,L=e.startIcon,N=e.type,R=void 0===N?"button":N,I=e.variant,w=void 0===I?"text":I,_=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),z=L&&c.a.createElement("span",{className:Object(l.a)(r.startIcon,r["iconSize".concat(Object(u.a)(k))])},L),M=x&&c.a.createElement("span",{className:Object(l.a)(r.endIcon,r["iconSize".concat(Object(u.a)(k))])},x);return c.a.createElement(d.a,Object(o.a)({className:Object(l.a)(r.root,r[w],i,"inherit"===p?r.colorInherit:"default"!==p&&r["".concat(w).concat(Object(u.a)(p))],"medium"!==k&&[r["".concat(w,"Size").concat(Object(u.a)(k))],r["size".concat(Object(u.a)(k))]],g&&r.disableElevation,h&&r.disabled,E&&r.fullWidth),component:b,disabled:h,focusRipple:!S,focusVisibleClassName:Object(l.a)(r.focusVisible,O),ref:t,type:R},_),c.a.createElement("span",{className:r.label},z,n,M))}));t.a=Object(i.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.d)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.d)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.d)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},393:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(118),c=n.n(r),l=n(319),i=n(330),s=n(58),d=n(323),u=n(1),p=n(13),m=(n(60),n(6),n(30)),b=n(53),f=n(55),h=n(29);d.a.styles;var v=o.a.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,c=e.color,l=void 0===c?"default":c,i=e.component,s=void 0===i?"div":i,d=e.disabled,f=void 0!==d&&d,h=e.disableFocusRipple,v=void 0!==h&&h,g=e.disableRipple,y=void 0!==g&&g,S=e.fullWidth,x=void 0!==S&&S,O=e.orientation,C=void 0===O?"horizontal":O,E=e.size,j=void 0===E?"medium":E,k=e.variant,L=void 0===k?"outlined":k,N=Object(p.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),R=Object(m.a)(a.grouped,a["grouped".concat(Object(b.a)(C))],a["grouped".concat(Object(b.a)(L))],a["grouped".concat(Object(b.a)(L)).concat(Object(b.a)(C))],a["grouped".concat(Object(b.a)(L)).concat("default"!==l?Object(b.a)(l):"")],f&&a.disabled);return o.a.createElement(s,Object(u.a)({role:"group",className:Object(m.a)(a.root,r,x&&a.fullWidth,"contained"===L&&a.contained,"vertical"===C&&a.vertical),ref:t},N),o.a.Children.map(n,(function(e){return o.a.isValidElement(e)?o.a.cloneElement(e,{className:Object(m.a)(R,e.props.className),disabled:e.props.disabled||f,color:e.props.color||l,disableFocusRipple:v,disableRipple:y,fullWidth:x,size:e.props.size||j,variant:e.props.variant||L}):null})))})),g=Object(h.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(f.d)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(f.d)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(v),y=n(373),S=n(102),x=n(329),O=Object(x.defineMessages)({reset:{id:"src.components.Counter.reset",defaultMessage:"reset"},increment:{id:"src.components.Counter.increment",defaultMessage:"+"},decrement:{id:"src.components.Counter.decrement",defaultMessage:"-"},incrementIfOdd:{id:"src.components.Counter.incrementIfOdd",defaultMessage:"+ if odd"},willIncrementInOneSecond:{id:"src.components.Counter.willIncrementInOneSecond",defaultMessage:"+ in 1 second"}}),C={reset:S.h,increment:S.e,decrement:S.d,incrementIfOdd:S.g,incrementAsync:S.f},E=Object(s.c)((function(e){return{value:e.counter.count}}),C)((function(e){var t=e.value,n=e.reset,r=e.increment,c=e.decrement,l=e.incrementIfOdd,s=e.incrementAsync,u=Object(a.useCallback)((function(){s(1e3)}),[]);return o.a.createElement("div",null,o.a.createElement(y.a,{component:"span"},t),o.a.createElement(g,null,o.a.createElement(d.a,{onClick:n},o.a.createElement(i.a,O.reset)),o.a.createElement(d.a,{onClick:r},o.a.createElement(i.a,O.increment)),o.a.createElement(d.a,{onClick:c},o.a.createElement(i.a,O.decrement)),o.a.createElement(d.a,{onClick:l,"data-testid":"incrementIfOddButton"},o.a.createElement(i.a,O.incrementIfOdd)),o.a.createElement(d.a,{onClick:u,"data-testid":"incrementAsyncButton"},o.a.createElement(i.a,O.willIncrementInOneSecond))))})),j=n(297),k=Object(x.defineMessages)({counter:{id:"src.components.App.CounterPage.counter",defaultMessage:"counter"}});t.default=Object(j.a)((function(){var e=Object(l.a)().formatMessage;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:e(k.counter)}),o.a.createElement(E,null))}))}}]);
//# sourceMappingURL=counter~31ecd969.bb51d67b.js.map