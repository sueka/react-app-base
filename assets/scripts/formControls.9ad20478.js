(self.webpackChunkreact_app_prototype=self.webpackChunkreact_app_prototype||[]).push([[7],{92680:function(e,t,n){"use strict";var r=n(95318),l=n(20862);t.Z=void 0;var o=l(n(67294)),a=(0,r(n(2108)).default)(o.createElement("path",{d:"M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}),"FilterNone");t.Z=a},65031:function(e,t,n){"use strict";var r=n(95318),l=n(20862);t.Z=void 0;var o=l(n(67294)),a=(0,r(n(2108)).default)(o.createElement("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}),"Mic");t.Z=a},34428:function(e,t,n){"use strict";var r=n(95318),l=n(20862);t.Z=void 0;var o=l(n(67294)),a=(0,r(n(2108)).default)(o.createElement("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}),"MicNone");t.Z=a},48850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return pe}});var r=n(63038),l=n.n(r),o=n(22122),a=n(81253),c=n(67294),i=(n(45697),n(86010)),s=n(22318),u=n(14670),d=n(15736),f=c.forwardRef((function(e,t){var n=e.children,r=e.classes,l=e.className,u=e.component,f=void 0===u?"div":u,p=e.disablePointerEvents,m=void 0!==p&&p,v=e.disableTypography,b=void 0!==v&&v,g=e.position,E=e.variant,h=(0,a.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=(0,d.Y)()||{},C=E;return E&&y.variant,y&&!C&&(C=y.variant),c.createElement(d.Z.Provider,{value:null},c.createElement(f,(0,o.Z)({className:(0,i.Z)(r.root,l,m&&r.disablePointerEvents,y.hiddenLabel&&r.hiddenLabel,"filled"===C&&r.filled,{start:r.positionStart,end:r.positionEnd}[g],"dense"===y.margin&&r.marginDense),ref:t},h),"string"!=typeof n||b?n:c.createElement(s.Z,{color:"textSecondary"},n)))})),p=(0,u.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(f),m=n(62822),v=n(50998),b=n(95757),g=n(8286),E=n(41120),h=n(64593),y=n(31753),C=n(97127),Z=n(72152),A=n(59713),w=n.n(A),k=n(67154),S=n.n(k),x=n(6479),F=n.n(x),R=n(17812),M=n(6447),D=n(92680),U=n(20640),B=n.n(U),P=n(94433),L=n(17109),O=n(85315),T=(0,O.vU)({textCopied:{id:"src.lib.components.CopyTextButton.textCopied",defaultMessage:"Text copied."},copyText:{id:"src.lib.components.CopyTextButton.copyText",defaultMessage:"Copy text"}});function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=function(e){var t=e.style,n=F()(e,["style"]);if(void 0===t)return c.createElement(D.Z,S()({style:{transform:"scaleY(-1)"}},n));var r=t.transform,l=F()(t,["transform"]);if(void 0!==r)throw new Error;return c.createElement(D.Z,S()({style:N({transform:"scaleY(-1)"},l)},n))},I=function(e){var t=e.inputFor,n=(0,y.Z)().formatMessage,r=(0,P.Ds)().enqueueSnackbar,o=(0,c.useCallback)((function(){(0,L.s)(t.current),""!==t.current.value&&(B()(t.current.value),r(c.createElement(C.Z,T.textCopied)))}),[r,t]),a=(0,c.useState)(!0),i=l()(a,2),s=i[0],u=i[1];return(0,c.useEffect)((function(){u(null===t.current||""===t.current.value||t.current.disabled)})),s?c.createElement(R.Z,{onClick:o,disabled:!0},c.createElement(H,null)):c.createElement(M.ZP,{title:n(T.copyText)},c.createElement(R.Z,{onClick:o},c.createElement(H,null)))},W=n(282),j=n(96019),z=n(94184),V=n.n(z),Y=n(93379),q=n.n(Y),$=n(76376),X={insert:"head",singleton:!1},G=(q()($.Z,X),$.Z.locals||{}),J=(0,O.vU)({browse:{id:"src.lib.components.FileUpload.browse",defaultMessage:"Browse…"},noFileSelected:{id:"src.lib.components.FileUpload.noFileSelected",defaultMessage:"No file selected."},nFilesSelected:{id:"src.lib.components.FileUpload.nFilesSelected",defaultMessage:"{ n } files selected."}}),K=function(e){var t=e.className,n=e.disabled,r=e.multiple,o=e.onClick,a=e.onChange,i=e.buttonLabel,s=void 0===i?c.createElement(C.Z,J.browse):i,u=e.renderResultMessage,d=void 0===u?function(e){if(null===e||0===e.length)return c.createElement(C.Z,J.noFileSelected);switch(e.length){case 1:return e[0].name;default:return c.createElement(C.Z,S()({},J.nFilesSelected,{values:{n:e.length}}))}}:u,f=e.classes,p=e.component,m=void 0===p?j.Z:p,v=e.ButtonProps,b=F()(e,["className","disabled","multiple","onClick","onChange","buttonLabel","renderResultMessage","classes","component","ButtonProps"]),g=(0,c.useState)(null),E=l()(g,2),h=E[0],y=E[1],Z=(0,c.useMemo)((function(){return V()(t,null==f?void 0:f.root,G.FileUpload)}),[t,null==f?void 0:f.root]),A=(0,c.useMemo)((function(){return V()(null==f?void 0:f.button,G.Button,null==v?void 0:v.className)}),[null==f?void 0:f.button,null==v?void 0:v.className]),w=(0,c.useMemo)((function(){return d(h)}),[d,h]),k=(0,c.useRef)(null),x=(0,c.useCallback)((function(e){null==a||a(e),y(null!==e.target.files?Array.from(e.target.files):e.target.files)}),[a]),R=(0,c.useCallback)((function(){(0,L.s)(k.current),k.current.dispatchEvent(new MouseEvent("click"))}),[k]),M=(0,c.useCallback)((function(e){null==o||o(e),e.isDefaultPrevented()||R(e)}),[o,R]);return c.createElement(m,{className:Z},c.createElement(W.Z,S()({disabled:n,onClick:M},v,{className:A}),s),w,c.createElement("input",S()({className:G.Input,type:"file",disabled:n,multiple:r,onChange:x,ref:k},b)))},Q=n(13258),ee=n(65031),te=n(34428),ne=n(276),re=(0,O.vU)({typeWithYourVoice:{id:"src.lib.components.MicSwitch.typeWithYourVoice",defaultMessage:"Type with your voice…"},stop:{id:"src.lib.components.MicSwitch.stop",defaultMessage:"Stop"},speechRecognitionErrorOccurred:{id:"src.lib.components.MicSwitch.speechRecognitionErrorOccurred",defaultMessage:"Speech recognition error occurred: { error }"}}),le=function(e){var t=e.inputFor,n=e.onResult,r=e.fallback,o=(0,y.Z)().formatMessage,a=(0,ne.v9)((function(e){return e.localeSelector.locale})),i=(0,c.useState)(!1),s=l()(i,2),u=s[0],d=s[1],f=(0,c.useMemo)((function(){return"SpeechRecognition"in globalThis?new SpeechRecognition:null}),[]),p=(0,c.useMemo)((function(){return o(u?re.stop:re.typeWithYourVoice)}),[u,o]),m=(0,P.Ds)().enqueueSnackbar,v=(0,c.useCallback)((function(){d(!0)}),[]),b=(0,c.useCallback)((function(){d(!1)}),[]),g=(0,c.useCallback)((function(e){m(c.createElement(C.Z,S()({},re.speechRecognitionErrorOccurred,{values:{error:e.error}})),{variant:"error"})}),[m]),E=(0,c.useCallback)((function(e){n(e,Array.from(e.results).map((function(e){return e[0].transcript})).join(""))}),[n]);(0,c.useEffect)((function(){if(null!==f)return f.continuous=!0,f.interimResults=!0,f.maxAlternatives=1,f.addEventListener("start",v),f.addEventListener("end",b),f.addEventListener("error",g),f.addEventListener("result",E),function(){f.removeEventListener("start",v),f.removeEventListener("end",b),f.removeEventListener("error",g),f.removeEventListener("result",E)}}),[f,v,b,g,E]),(0,c.useEffect)((function(){null!==f&&(f.stop(),f.lang=a)}),[f,a]);var h=(0,c.useCallback)((function(e,t){null!==f&&(d(t),t?f.start():f.stop())}),[f]),Z=(0,c.useState)(!0),A=l()(Z,2),w=A[0],k=A[1];return(0,c.useEffect)((function(){k(null===t.current||t.current.disabled)})),(0,c.useEffect)((function(){null!==f&&w&&f.abort()}),[w,f]),null===f&&void 0!==r?r:c.createElement(M.ZP,{title:p},c.createElement(Q.Z,{disabled:w,color:"default",icon:c.createElement(te.Z,null),checkedIcon:c.createElement(ee.Z,null),checked:u,onChange:h}))},oe=n(75778),ae=n(88001),ce=(0,O.vU)({formControls:{id:"src.components.App.FormControlsPage.formControls",defaultMessage:"Form controls"}}),ie=function(){var e=(0,c.useState)(""),t=l()(e,2),n=t[0],r=t[1],o=(0,c.useRef)(null),a=(0,c.useCallback)((function(e){r(e.target.value)}),[]);return c.createElement(g.Z,{label:"label",value:n,onChange:a,inputRef:o,InputProps:{endAdornment:c.createElement(p,{position:"end"},c.createElement(I,{inputFor:o}))}})},se=function(){var e,t,n,r,o=(0,c.useContext)(oe.Z).dir,a=(0,c.useState)(""),i=l()(a,2),s=i[0],u=i[1],d=(0,c.useRef)(null),f=(0,c.useCallback)((function(e){u(e.target.value)}),[]),m=(0,c.useCallback)((function(e,t){if(null!==d.current)switch(u(t),d.current.scrollTop=d.current.scrollHeight-d.current.offsetHeight,o){case"ltr":d.current.scrollLeft=d.current.scrollWidth-d.current.offsetWidth;break;case"rtl":d.current.scrollLeft=-(d.current.scrollWidth-d.current.offsetWidth)}}),[o,d.current,null===(e=d.current)||void 0===e?void 0:e.scrollWidth,null===(t=d.current)||void 0===t?void 0:t.scrollHeight,null===(n=d.current)||void 0===n?void 0:n.offsetWidth,null===(r=d.current)||void 0===r?void 0:r.offsetHeight]);return c.createElement(g.Z,{label:"label",value:s,onChange:f,inputRef:d,InputProps:{endAdornment:c.createElement(p,{position:"end"},c.createElement(le,{inputFor:d,onResult:m,fallback:null}))}})},ue=function(){var e,t,n,r,o=(0,c.useContext)(oe.Z).dir,a=(0,c.useState)(""),i=l()(a,2),s=i[0],u=i[1],d=(0,c.useRef)(null),f=(0,c.useCallback)((function(e){u(e.target.value)}),[]),m=(0,c.useCallback)((function(e,t){if(null!==d.current)switch(u(t),d.current.scrollTop=d.current.scrollHeight-d.current.offsetHeight,o){case"ltr":d.current.scrollLeft=d.current.scrollWidth-d.current.offsetWidth;break;case"rtl":d.current.scrollLeft=-(d.current.scrollWidth-d.current.offsetWidth)}}),[o,d.current,null===(e=d.current)||void 0===e?void 0:e.scrollWidth,null===(t=d.current)||void 0===t?void 0:t.scrollHeight,null===(n=d.current)||void 0===n?void 0:n.offsetWidth,null===(r=d.current)||void 0===r?void 0:r.offsetHeight]);return c.createElement(g.Z,{label:"label",value:s,onChange:f,inputRef:d,InputProps:{endAdornment:c.createElement(p,{position:"end"},c.createElement(le,{inputFor:d,onResult:m,fallback:null}),c.createElement(I,{inputFor:d}))}})},de=(0,E.Z)({Image:{maxWidth:function(e){var t=e.width;return null!==t?t/2:void 0},maxHeight:function(e){var t=e.height;return null!==t?t/2:void 0}}}),fe=function(e){var t=e.file,n=(0,c.useState)(null),r=l()(n,2),o=r[0],a=r[1],i=(0,c.useMemo)((function(){return new FileReader}),[]),s=(0,ae.Z)(),u=s.width,d=s.height,f=de({width:u,height:d}),p=(0,c.useCallback)((function(e){var t;if(null!=(null===(t=e.target)||void 0===t?void 0:t.result)){if(e.target.result instanceof ArrayBuffer)throw new Error;a(e.target.result)}}),[]);return(0,c.useEffect)((function(){return i.addEventListener("load",p),function(){i.removeEventListener("load",p)}}),[i,p]),(0,c.useEffect)((function(){i.readAsDataURL(t)}),[t,i]),c.createElement("img",{src:null!=o?o:void 0,className:f.Image})},pe=(0,Z.D)((function(){var e=(0,y.Z)().formatMessage,t=(0,c.useCallback)((function(e){return null===e||0===e.length?c.createElement(C.Z,J.noFileSelected):Array.from(e).map((function(e,t){return c.createElement(fe,{key:t,file:e})}))}),[]);return c.createElement(c.Fragment,null,c.createElement(h.Z,{title:e(ce.formControls)}),c.createElement(m.Z,null,c.createElement(v.Z,null,c.createElement(b.Z,null,c.createElement(K,{accept:"image/*",multiple:!0,renderResultMessage:t}))),c.createElement(v.Z,null,c.createElement(b.Z,null,c.createElement(ie,null))),c.createElement(v.Z,null,c.createElement(b.Z,null,c.createElement(se,null))),c.createElement(v.Z,null,c.createElement(b.Z,null,c.createElement(ue,null)))))}))},20640:function(e,t,n){"use strict";var r=n(11742),l={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,c,i,s,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),c=document.createRange(),i=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=l[t.format]||l.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),i.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(c):i.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},76376:function(e,t,n){"use strict";var r=n(94015),l=n.n(r),o=n(23645),a=n.n(o)()(l());a.push([e.id,".src-lib-components-FileUpload-classes__FileUpload--89hPZ {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.src-lib-components-FileUpload-classes__Button--3uZU-.src-lib-components-FileUpload-classes__Button--3uZU- {\n  text-transform: none;\n  cursor: unset;\n}\n\n.src-lib-components-FileUpload-classes__Input--b4BE6 {\n  display: none;\n}\n","",{version:3,sources:["webpack://./src/lib/components/FileUpload/classes.css"],names:[],mappings:"AAAA;EACE,qBAAqB,EAAE,mBAAmB;EAC1C,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,aAAa;AACf;;AAEA;EACE,aAAa;AACf",sourcesContent:[".FileUpload {\n  display: inline-block; /* TODO: polyfill */\n  display: inline flow-root;\n  cursor: pointer;\n}\n\n.Button.Button {\n  text-transform: none;\n  cursor: unset;\n}\n\n.Input {\n  display: none;\n}\n"],sourceRoot:""}]),a.locals={FileUpload:"src-lib-components-FileUpload-classes__FileUpload--89hPZ",Button:"src-lib-components-FileUpload-classes__Button--3uZU-",Input:"src-lib-components-FileUpload-classes__Input--b4BE6"},t.Z=a},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=formControls.9ad20478.js.map