(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{302:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},303:function(e,n,t){var r=t(307),a=t(304);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var c={insert:"head",singleton:!1},o=(r(a,c),a.locals?a.locals:{});e.exports=o},304:function(e,n,t){(n=t(308)(!1)).push([e.i,".src-components-Nav-classes__Spacer--36ovl {\n  flex-grow: 1;\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV {\n  color: currentColor\n}\n\n.src-components-Nav-classes__LocaleSelectLabel--3h3DV.src-components-Nav-classes__LocaleSelectLabel--3h3DV.Mui-focused {\n    opacity: 0.618;\n    color: currentColor;\n  }\n\n.src-components-Nav-classes__LocaleSelectInput--3oNu1.src-components-Nav-classes__LocaleSelectInput--3oNu1 {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk.src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk {\n  color: currentColor;\n}\n\n.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx:hover:not(.Mui-disabled)::before,\n  .src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx.src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx::after {\n    border-bottom-color: currentColor;\n  }\n",""]),n.locals={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"},e.exports=n},305:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},306:function(e,n,t){"use strict";t.d(n,"a",(function(){return Ee}));var r=t(9),a=t.n(r),c=t(0),o=t.n(c),l=t(18),s=t.n(l),u=t(341),i=t(387),f=t(389),m=t(372),p=t(388),d=t(317),v=t.n(d),h=t(390),b=t(124),E=function(){var e=Object(c.useContext)(b.a),n=e.dark,t=e.setDark;if(null==n||null==t)throw new Error;var r=Object(c.useCallback)((function(e,n){t(n)}),[t]);return(o.a.createElement(h.a,{checked:n,onChange:r}))},S=t(45),_=t.n(S),N=t(98),L=t.n(N),g=t(59),y=t(301),j=t(393),C=t(391),O=t(392),k=t(414),I=t(415),M=t(407),w=t(55),F=t(125),x=t(305);var R=t(100),U=t(276),D=Object(U.d)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),W={selectLocale:R.c},P=Object(g.c)((function(e){return{locale:e.localeSelector.locale}}),W)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,i=e.selectLocale,f=Object(c.useState)(0),m=s()(f,2),p=m[0],d=m[1],v=Object(c.useMemo)(y.a,[]),h=Object(w.a)(),b=Object(c.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==h?void 0:null===(t=h.props)||void 0===t?void 0:null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==h?void 0:null===(n=h.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),E=Object(c.useMemo)((function(){return L()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),S=Object(c.useMemo)((function(){return L()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),N=Object(c.useMemo)((function(){return L()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),g=Object(c.useMemo)((function(){return L()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),R=Object(c.useMemo)((function(){return L()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),U=Object(c.useCallback)((function(e){null!==e&&d(e.offsetWidth)}),[]),W=Object(c.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in x&&i(e.target.value)}),[]),P=Object(c.useContext)(F.a).availableLocales;return o.a.createElement(C.a,_()({},a,{className:E}),o.a.createElement(k.a,{className:S,ref:U,htmlFor:v},o.a.createElement(u.a,D.languages)),o.a.createElement(M.a,{classes:{icon:g},native:!0,labelWidth:p,value:l,onChange:W,id:v,inputProps:{"data-testid":"localeSelect"},input:{standard:o.a.createElement(O.a,{className:N,classes:{underline:R}}),outlined:o.a.createElement(I.a,{className:N,labelWidth:p}),filled:o.a.createElement(j.a,{className:N})}[b]},null==P?void 0:P.map((function(e,n){return o.a.createElement("option",{key:n,value:e},x[e])}))))})),A=t(46),V=t.n(A),J=t(396),T=t(12),q=t.n(T),z=t(17),B=t.n(z),G=t(19),H=t.n(G),K=t(14),Q=t.n(K),X=t(20),Y=t.n(X),Z=t(318),$=t(395),ee=t(302),ne=t(10);function te(){var e=a()([""," is not a Material-UI Typography color."]);return te=function(){return e},e}function re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ae=Object(ee.b)(Object(ee.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ce=o.a.forwardRef((function(e,n){return o.a.createElement(Z.a,_()({innerRef:n},e))})),oe=function(e){Y()(r,e);var n,t=(n=r,function(){var e,t=Q()(n);if(re()){var r=Q()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return H()(this,e)});function r(){return q()(this,r),t.apply(this,arguments)}return B()(r,[{key:"render",value:function(){var e=this.props,n=e.color,t=V()(e,["color"]);return ae(n)?o.a.createElement($.a,_()({component:ce,color:n},t)):(console.warn(Object(ne.a)(te(),n)),o.a.createElement($.a,_()({component:ce},t)))}}]),r}(o.a.Component),le=c.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=V()(e,["to","button","innerRef"]),o=c.forwardRef((function(e,n){return c.createElement(oe,_()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return c.createElement(J.a,_()({button:!0,component:o,to:t,ref:n},a))})),se=t(303),ue=t.n(se),ie=Object(U.d)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},paint:{id:"src.components.Nav.paint",defaultMessage:"paint"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),fe=function(){var e=Object(c.useState)(null),n=s()(e,2),t=n[0],r=n[1],a=Object(c.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(c.useCallback)((function(){r(null)}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{position:"sticky"},o.a.createElement(p.a,null,o.a.createElement(f.a,{edge:"start",color:"inherit",onClick:a},o.a.createElement(v.a,null)),o.a.createElement("div",{className:ue.a.Spacer}),o.a.createElement(E,null),o.a.createElement(P,{classes:{label:ue.a.LocaleSelectLabel,input:ue.a.LocaleSelectInput,selectIcon:ue.a.LocaleSelectSelectIcon,inputUnderline:ue.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),o.a.createElement(m.a,{open:null!==t,anchorEl:t,onClose:l},o.a.createElement(le,{to:"/",onClick:l},o.a.createElement(u.a,ie.home)),o.a.createElement(le,{to:"/chess",onClick:l},o.a.createElement(u.a,ie.chess)),o.a.createElement(le,{to:"/counter",onClick:l},o.a.createElement(u.a,ie.counter)),o.a.createElement(le,{to:"/info",onClick:l},o.a.createElement(u.a,ie.info)),o.a.createElement(le,{to:"/paint",onClick:l},o.a.createElement(u.a,ie.paint)),o.a.createElement(le,{to:"/reminder",onClick:l},o.a.createElement(u.a,ie.reminder))))};function me(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var pe=function(e){Y()(r,e);var n,t=(n=r,function(){var e,t=Q()(n);if(me()){var r=Q()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return H()(this,e)});function r(){var e;q()(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return B()(r,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,c=r.error;return a?n(c,t):t}}]),r}(o.a.Component);pe.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var de=pe;function ve(){var e=a()([""," is not an error."]);return ve=function(){return e},e}function he(){var e=a()(["",""]);return he=function(){return e},e}var be=function(e){var n=e.children,t=Object(c.useCallback)((function(e){if(e instanceof Error)return Object(ne.a)(he(),String(e));throw new TypeError(Object(ne.a)(ve(),String(e)))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(fe,null),o.a.createElement(de,{renderError:t},n))},Ee=function(e){return function(n){return o.a.createElement(be,null,o.a.createElement(e,n))}}},400:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),c=t(10),o=t(306);function l(){var e=a()(["No route matches ","."]);return l=function(){return e},e}n.default=Object(o.a)((function(e){var n=e.location.pathname;throw new Error(Object(c.a)(l(),n))}))}}]);
//# sourceMappingURL=noMatch~21833f8f.ee6e6294.js.map