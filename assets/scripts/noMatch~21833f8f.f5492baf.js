(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{293:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return n.some((function(n){return n===e}))}},a=function(e){return function(n){return void 0===n||e(n)}}},294:function(e,n,t){e.exports={Spacer:"src-components-Nav-classes__Spacer--36ovl",LocaleSelectLabel:"src-components-Nav-classes__LocaleSelectLabel--3h3DV",LocaleSelectInput:"src-components-Nav-classes__LocaleSelectInput--3oNu1",LocaleSelectSelectIcon:"src-components-Nav-classes__LocaleSelectSelectIcon--2AyFk",LocaleSelectInputUnderline:"src-components-Nav-classes__LocaleSelectInputUnderline--2WFrx"}},295:function(e){e.exports=JSON.parse('{"ja":"日本語","en":"English"}')},296:function(e,n,t){"use strict";var r=t(10),a=t.n(r),o=t(0),c=t.n(o),l=t(23),u=t.n(l),i=t(327),s=t(367),m=t(369),d=t(352),f=t(368),v=t(305),p=t.n(v),b=t(49),E=t.n(b),h=t(92),g=t.n(h),S=t(58),j=t(114),O=t(372),N=t(370),C=t(371),L=t(393),k=t(392),M=t(385),y=t(57),w=t(117),I=t(295);var F=t(116),_=t(326),R=Object(_.defineMessages)({languages:{id:"src.components.LocaleSelect.languages",defaultMessage:"Languages"}}),U={selectLocale:F.c},x=Object(S.c)((function(e){return{locale:e.localeSelector.locale}}),U)((function(e){var n,t,r=e.classes,a=e.FormControlProps,l=e.locale,s=e.selectLocale,m=Object(o.useState)(0),d=u()(m,2),f=d[0],v=d[1],p=Object(o.useMemo)(j.a,[]),b=Object(y.a)(),h=Object(o.useMemo)((function(){var e,n,t,r;return null!==(e=null!==(n=null==a?void 0:a.variant)&&void 0!==n?n:null==b?void 0:null===(t=b.props)||void 0===t?void 0:null===(r=t.MuiFormControl)||void 0===r?void 0:r.variant)&&void 0!==e?e:"standard"}),[null==a?void 0:a.variant,null==b?void 0:null===(n=b.props)||void 0===n?void 0:null===(t=n.MuiFormControl)||void 0===t?void 0:t.variant]),S=Object(o.useMemo)((function(){return g()(null==r?void 0:r.root,null==a?void 0:a.className)}),[null==r?void 0:r.root,null==a?void 0:a.className]),F=Object(o.useMemo)((function(){return g()(null==r?void 0:r.label)}),[null==r?void 0:r.label]),_=Object(o.useMemo)((function(){return g()(null==r?void 0:r.input)}),[null==r?void 0:r.input]),U=Object(o.useMemo)((function(){return g()(null==r?void 0:r.selectIcon)}),[null==r?void 0:r.selectIcon]),x=Object(o.useMemo)((function(){return g()(null==r?void 0:r.inputUnderline)}),[null==r?void 0:r.inputUnderline]),P=Object(o.useCallback)((function(e){null!==e&&v(e.offsetWidth)}),[]),W=Object(o.useCallback)((function(e){var n;"string"==typeof(n=e.target.value)&&n in I&&s(e.target.value)}),[]),A=Object(o.useContext)(w.a).availableLocales;return c.a.createElement(N.a,E()({},a,{className:S}),c.a.createElement(L.a,{className:F,ref:P,htmlFor:p},c.a.createElement(i.a,R.languages)),c.a.createElement(M.a,{classes:{icon:U},native:!0,labelWidth:f,value:l,onChange:W,id:p,inputProps:{"data-testid":"localeSelect"},input:{standard:c.a.createElement(C.a,{className:_,classes:{underline:x}}),outlined:c.a.createElement(k.a,{className:_,labelWidth:f}),filled:c.a.createElement(O.a,{className:_})}[h]},null==A?void 0:A.map((function(e,n){return c.a.createElement("option",{key:n,value:e},I[e])}))))})),P=t(42),W=t.n(P),A=t(375),J=t(12),T=t.n(J),D=t(16),V=t.n(D),q=t(18),z=t.n(q),B=t(17),G=t.n(B),H=t(19),K=t.n(H),Q=t(308),X=t(374),Y=t(293),Z=t(11);function $(){var e=a()([""," is not a Material-UI Typography color."]);return $=function(){return e},e}var ee=Object(Y.b)(Object(Y.a)("initial","inherit","primary","secondary","textPrimary","textSecondary","error")),ne=c.a.forwardRef((function(e,n){return c.a.createElement(Q.a,E()({innerRef:n},e))})),te=function(e){function n(){return T()(this,n),z()(this,G()(n).apply(this,arguments))}return K()(n,e),V()(n,[{key:"render",value:function(){var e=this.props,n=e.color,t=W()(e,["color"]);return ee(n)?c.a.createElement(X.a,E()({component:ne,color:n},t)):(console.warn(Object(Z.a)($(),n)),c.a.createElement(X.a,E()({component:ne},t)))}}]),n}(c.a.Component),re=o.forwardRef((function(e,n){var t=e.to,r=(e.button,e.innerRef),a=W()(e,["to","button","innerRef"]),c=o.forwardRef((function(e,n){return o.createElement(te,E()({ref:n,innerRef:r,color:"inherit",underline:"none"},e))}));return o.createElement(A.a,E()({button:!0,component:c,to:t,ref:n},a))})),ae=t(294),oe=t.n(ae),ce=Object(_.defineMessages)({home:{id:"src.components.Nav.home",defaultMessage:"home"},chess:{id:"src.components.Nav.chess",defaultMessage:"chess"},counter:{id:"src.components.Nav.counter",defaultMessage:"counter"},info:{id:"src.components.Nav.info",defaultMessage:"info"},reminder:{id:"src.components.Nav.reminder",defaultMessage:"reminder"}}),le=function(){var e=Object(o.useState)(null),n=u()(e,2),t=n[0],r=n[1],a=Object(o.useCallback)((function(e){r(e.currentTarget)}),[]),l=Object(o.useCallback)((function(){r(null)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{position:"sticky"},c.a.createElement(f.a,null,c.a.createElement(m.a,{edge:"start",color:"inherit",onClick:a},c.a.createElement(p.a,null)),c.a.createElement("div",{className:oe.a.Spacer}),c.a.createElement(x,{classes:{label:oe.a.LocaleSelectLabel,input:oe.a.LocaleSelectInput,selectIcon:oe.a.LocaleSelectSelectIcon,inputUnderline:oe.a.LocaleSelectInputUnderline},FormControlProps:{variant:"filled"}}))),c.a.createElement(d.a,{open:null!==t,anchorEl:t,onClose:l},c.a.createElement(re,{to:"/",onClick:l},c.a.createElement(i.a,ce.home)),c.a.createElement(re,{to:"/chess",onClick:l},c.a.createElement(i.a,ce.chess)),c.a.createElement(re,{to:"/counter",onClick:l},c.a.createElement(i.a,ce.counter)),c.a.createElement(re,{to:"/info",onClick:l},c.a.createElement(i.a,ce.info)),c.a.createElement(re,{to:"/reminder",onClick:l},c.a.createElement(i.a,ce.reminder))))},ue=function(e){function n(){var e,t;T()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=z()(this,(e=G()(n)).call.apply(e,[this].concat(a)))).state={hasError:!1},t}return K()(n,e),V()(n,[{key:"render",value:function(){var e=this.props,n=e.renderError,t=e.children,r=this.state,a=r.hasError,o=r.error;return a?n(o,t):t}}]),n}(c.a.Component);ue.getDerivedStateFromError=function(e){return{hasError:!0,error:e}};var ie=ue;function se(){var e=a()([""," is not an error."]);return se=function(){return e},e}function me(){var e=a()(["",""]);return me=function(){return e},e}t.d(n,"a",(function(){return fe}));var de=function(e){var n=e.children,t=Object(o.useCallback)((function(e){if(e instanceof Error)return Object(Z.a)(me(),String(e));throw new TypeError(Object(Z.a)(se(),String(e)))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null),c.a.createElement(ie,{renderError:t},n))},fe=function(e){return function(n){return c.a.createElement(de,null,c.a.createElement(e,n))}}},379:function(e,n,t){"use strict";t.r(n);var r=t(10),a=t.n(r),o=t(11),c=t(296);function l(){var e=a()(["No route matches ","."]);return l=function(){return e},e}n.default=Object(c.a)((function(e){var n=e.location.pathname;throw new Error(Object(o.a)(l(),n))}))}}]);
//# sourceMappingURL=noMatch~21833f8f.f5492baf.js.map