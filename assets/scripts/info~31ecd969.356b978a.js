(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{293:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.some((function(t){return t===e}))}},o=function(e){return function(t){return void 0===t||e(t)}}},294:function(e,t,n){var a=n(298),o=n(295);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},c=(a(o,r),o.locals?o.locals:{});e.exports=c},295:function(e,t,n){(t=n(299)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),t.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=t},296:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},297:function(e,t,n){"use strict";var a=n(10),o=n.n(a),r=n(0),c=n.n(r),l=n(23),i=n.n(l),s=n(331),u=n(375),d=n(377),p=n(360),f=n(376),m=n(308),b=n.n(m),h=n(47),g=n.n(h),v=n(92),S=n.n(v),y=n(57),x=n(116),E=n(380),O=n(378),j=n(379),C=n(400),k=n(401),N=n(393),L=n(56),w=n(118),_=n(296);var I=n(94),z=n(330),M=Object(z.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),F={selectLocale:I.c},R=Object(y.c)((function(e){return{locale:e.localeSelector.locale}}),F)((function(e){var t,n,a=e.classes,o=e.FormControlProps,l=e.locale,u=e.selectLocale,d=Object(r.useState)(0),p=i()(d,2),f=p[0],m=p[1],b=Object(r.useMemo)(x.a,[]),h=Object(L.a)(),v=Object(r.useMemo)((function(){var e,t,n,a;return null!==(e=null!==(t=null==o?void 0:o.variant)&&void 0!==t?t:null==h?void 0:null===(n=h.props)||void 0===n?void 0:null===(a=n.MuiFormControl)||void 0===a?void 0:a.variant)&&void 0!==e?e:"standard"}),[null==o?void 0:o.variant,null==h?void 0:null===(t=h.props)||void 0===t?void 0:null===(n=t.MuiFormControl)||void 0===n?void 0:n.variant]),y=Object(r.useMemo)((function(){return S()(null==a?void 0:a.root,null==o?void 0:o.className)}),[null==a?void 0:a.root,null==o?void 0:o.className]),I=Object(r.useMemo)((function(){return S()(null==a?void 0:a.label)}),[null==a?void 0:a.label]),z=Object(r.useMemo)((function(){return S()(null==a?void 0:a.input)}),[null==a?void 0:a.input]),F=Object(r.useMemo)((function(){return S()(null==a?void 0:a.selectIcon)}),[null==a?void 0:a.selectIcon]),R=Object(r.useMemo)((function(){return S()(null==a?void 0:a.inputUnderline)}),[null==a?void 0:a.inputUnderline]),W=Object(r.useCallback)((function(e){null!==e&&m(e.offsetWidth)}),[]),D=Object(r.useCallback)((function(e){var t;"string"==typeof(t=e.target.value)&&t in _&&u(e.target.value)}),[]),T=Object(r.useContext)(w.a).availableLocales;return c.a.createElement(O.a,g()({},o,{className:y}),c.a.createElement(C.a,{className:I,ref:W,htmlFor:b},c.a.createElement(s.a,M.languages)),c.a.createElement(N.a,{classes:{icon:F},native:!0,labelWidth:f,value:l,onChange:D,id:b,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(j.a,{className:z,classes:{underline:R}}),outlined:c.a.createElement(k.a,{className:z,labelWidth:f}),filled:c.a.createElement(E.a,{className:z})}[v]},null==T?void 0:T.map((function(e,t){return c.a.createElement("option",{key:t,value:e},_[e])}))))})),W=n(48),D=n.n(W),T=n(383),U=n(12),V=n.n(U),P=n(16),$=n.n(P),A=n(18),B=n.n(A),J=n(17),G=n.n(J),q=n(19),H=n.n(q),K=n(311),Q=n(382),X=n(293),Y=n(11);function Z(){var e=o()([""," is not a Material-UI Typography color."]);return Z=function(){return e},e}var ee=Object(X.b)(Object(X.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),te=c.a.forwardRef((function(e,t){return c.a.createElement(K.a,g()({innerRef:t},e))})),ne=function(e){function t(){return V()(this,t),B()(this,G()(t).apply(this,arguments))}return H()(t,e),$()(t,[{key:"render",value:function(){var e=this.props,t=e.color,n=D()(e,["color"]);return ee(t)?c.a.createElement(Q.a,g()({component:te,color:t},n)):(console.warn(Object(Y.a)(Z(),t)),c.a.createElement(Q.a,g()({component:te},n)))}}]),t}(c.a.Component),ae=r.forwardRef((function(e,t){var n=e.to,a=(e.button,e.innerRef),o=D()(e,["to","button","innerRef"]),c=r.forwardRef((function(e,t){return r.createElement(ne,g()({ref:t,innerRef:a,color:"inherit",underline:"none"},e))}));return r.createElement(T.a,g()({button:!0,component:c,to:n,ref:t},o))})),oe=n(294),re=n.n(oe),ce=Object(z.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),le=function(){var e=Object(r.useState)(null),t=i()(e,2),n=t[0],a=t[1],o=Object(r.useCallback)((function(e){a(e.currentTarget)}),[]),l=Object(r.useCallback)((function(){a(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{position:"sticky"},c.a.createElement(f.a,null,c.a.createElement(d.a,{edge:"start",color:"inherit",onClick:o},c.a.createElement(b.a,null)),c.a.createElement("div",{className:re.a.Spacer}),c.a.createElement(R,{classes:{label:re.a.LocaleSelectLabel,input:re.a.LocaleSelectInput,selectIcon:re.a.LocaleSelectSelectIcon,inputUnderline:re.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(p.a,{open:null!==n,anchorEl:n,onClose:l},c.a.createElement(ae,{to:"/",onClick:l},c.a.createElement(s.a,ce.home)),c.a.createElement(ae,{to:"/chess",onClick:l},c.a.createElement(s.a,ce.chess)),c.a.createElement(ae,{to:"/counter",onClick:l},c.a.createElement(s.a,ce.counter)),c.a.createElement(ae,{to:"/info",onClick:l},c.a.createElement(s.a,ce.info)),c.a.createElement(ae,{to:"/reminder",onClick:l},c.a.createElement(s.a,ce.reminder))))},ie=function(e){function t(){var e,n;V()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=B()(this,(e=G()(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return H()(t,e),$()(t,[{key:"render",value:function(){var e=this.props,t=e.renderError,n=e.children,a=this.state,o=a.hasError,r=a.error;return o?t(r,n):n}}]),t}(c.a.Component);ie.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var se=ie;function ue(){var e=o()([""," is not an error."]);return ue=function(){return e},e}function de(){var e=o()(["",""]);return de=function(){return e},e}n.d(t,"a",(function(){return fe}));var pe=function(e){var t=e.children,n=Object(r.useCallback)((function(e){if(e instanceof Error)return Object(Y.a)(de(),String(e));throw new TypeError(Object(Y.a)(ue(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null),c.a.createElement(se,{renderError:n},t))},fe=function(e){return function(t){return c.a.createElement(pe,null,c.a.createElement(e,t))}}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),o=n(117),r=n(8);function c(){const e=Object(a.useContext)(o.a);return Object(r.h)(e),e}},323:function(e,t,n){"use strict";var a=n(13),o=n(1),r=n(0),c=n.n(r),l=(n(6),n(29)),i=n(28),s=n(54),u=n(391),d=n(52),p=c.a.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,s=e.color,p=void 0===s?"default":s,f=e.component,m=void 0===f?"button":f,b=e.disabled,h=void 0!==b&&b,g=e.disableElevation,v=void 0!==g&&g,S=e.disableFocusRipple,y=void 0!==S&&S,x=e.endIcon,E=e.focusVisibleClassName,O=e.fullWidth,j=void 0!==O&&O,C=e.size,k=void 0===C?"medium":C,N=e.startIcon,L=e.type,w=void 0===L?"button":L,_=e.variant,I=void 0===_?"text":_,z=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=N&&c.a.createElement("span",{className:Object(l.a)(r.startIcon,r["iconSize".concat(Object(d.a)(k))])},N),F=x&&c.a.createElement("span",{className:Object(l.a)(r.endIcon,r["iconSize".concat(Object(d.a)(k))])},x);return c.a.createElement(u.a,Object(o.a)({className:Object(l.a)(r.root,r[I],i,"inherit"===p?r.colorInherit:"default"!==p&&r["".concat(I).concat(Object(d.a)(p))],"medium"!==k&&[r["".concat(I,"Size").concat(Object(d.a)(k))],r["size".concat(Object(d.a)(k))]],v&&r.disableElevation,h&&r.disabled,j&&r.fullWidth),component:m,disabled:h,focusRipple:!y,focusVisibleClassName:Object(l.a)(r.focusVisible,E),ref:t,type:w},z),c.a.createElement("span",{className:r.label},M,n,F))}));t.a=Object(i.a)((function(e){return{root:Object(o.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.d)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.d)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.d)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},352:function(e,t){e.exports=function(e,t,n,a){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}},353:function(e,t){e.exports=function(e,t,n,a,o){var r={};return Object.keys(a).forEach((function(e){r[e]=a[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce((function(n,a){return a(e,t,n)||n}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}},354:function(e,t){e.exports=function(e,t){throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and runs after the decorators transform.")}},398:function(e,t,n){"use strict";n.r(t);var a,o,r,c=n(0),l=n.n(c),i=n(119),s=n.n(i),u=n(319),d=n(352),p=n.n(d),f=n(12),m=n.n(f),b=n(16),h=n.n(b),g=n(18),v=n.n(g),S=n(17),y=n.n(S),x=n(102),E=n.n(x),O=n(19),j=n.n(O),C=n(353),k=n.n(C),N=(n(354),n(51)),L=n(125),w=n(331),_=n(117),I=n(323),z=n(382),M=n(374),F=n(330),R=Object(F.defineMessages)({fetchData:{id:"src.components.Info.fetchData",defaultMessage:"Fetch data"},fetching:{id:"src.components.Info.fetching",defaultMessage:"Fetching.."},fetchingNotStarted:{id:"src.components.Info.fetchingNotStarted",defaultMessage:"Fetching not started."},fetchingDoneSuccessfully:{id:"src.components.Info.fetchingDoneSuccessfully",defaultMessage:"Fetching done successfully."},fetchingFailed:{id:"src.components.Info.fetchingFailed",defaultMessage:"Fetching failed."}}),W=(a=Object(L.resolve)("GetRepo"),o=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return n=v()(this,(e=y()(t)).call.apply(e,[this].concat(o))),p()(n,"getRepo",r,E()(n)),n.state={successful:!0,fetching:!1},n.handleClick=function(){n.setState({fetching:!0}),n.getRepo.apply({owner:"sueka",repo:"react-app-prototype"}).then((function(e){e.successful?n.setState({successful:!0,fetching:!1,repo:Object(N.right)(e.response.body)}):n.setState({successful:!1,fetching:!1,repo:Object(N.left)(new Error(e.response.body.message))})}),(function(e){console.error(e),n.setState({successful:!1,fetching:!1,repo:null})}))},n}return j()(t,e),h()(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I.a,{onClick:this.handleClick,disabled:this.state.fetching,variant:"contained",color:"secondary"},l.a.createElement(w.a,R.fetchData)),l.a.createElement(M.a,null,this.statusText),null!=this.info&&l.a.createElement(M.a,{component:"span"},this.info))}},{key:"statusText",get:function(){var e=this.props.intl.formatMessage,t=this.state,n=(t.successful,t.fetching),a=t.repo;return n?e(R.fetching):null==a?e(R.fetchingNotStarted):Object(N.isRight)(a)?e(R.fetchingDoneSuccessfully):e(R.fetchingFailed)}},{key:"info",get:function(){var e=this.state.repo;return null==e?e:Object(N.isLeft)(e)?e.toString():l.a.createElement(z.a,{href:e.right.htmlUrl},e.right.fullName)}}]),t}(l.a.Component),r=k()(o.prototype,"getRepo",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o),D=Object(_.c)(W),T=n(297),U=Object(F.defineMessages)({info:{id:"src.components.App.InfoPage.info",defaultMessage:"info"}});t.default=Object(T.a)((function(){var e=Object(u.a)().formatMessage;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e(U.info)}),l.a.createElement(D,null))}))}}]);
//# sourceMappingURL=info~31ecd969.356b978a.js.map