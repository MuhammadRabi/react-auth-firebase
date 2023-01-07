function sg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function ag(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fi={},lg={get exports(){return fi},set exports(e){fi=e}},ys={},C={},ug={get exports(){return C},set exports(e){C=e}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),cg=Symbol.for("react.portal"),dg=Symbol.for("react.fragment"),fg=Symbol.for("react.strict_mode"),hg=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),vg=Symbol.for("react.suspense"),yg=Symbol.for("react.memo"),wg=Symbol.for("react.lazy"),ic=Symbol.iterator;function _g(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hf=Object.assign,pf={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=Cr.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}var Bl=$l.prototype=new mf;Bl.constructor=$l;hf(Bl,Cr.prototype);Bl.isPureReactComponent=!0;var oc=Array.isArray,gf=Object.prototype.hasOwnProperty,Vl={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)gf.call(t,r)&&!vf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fi,type:e,key:o,ref:s,props:i,_owner:Vl.current}}function Eg(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function Sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sc=/\/+/g;function Js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sg(""+e.key):t.toString(36)}function Eo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Fi:case cg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Js(s,0):r,oc(i)?(n="",e!=null&&(n=e.replace(sc,"$&/")+"/"),Eo(i,t,n,"",function(u){return u})):i!=null&&(Hl(i)&&(i=Eg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",oc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Js(o,a);s+=Eo(o,t,n,l,i)}else if(l=_g(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Js(o,a++),s+=Eo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function to(e,t,n){if(e==null)return e;var r=[],i=0;return Eo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},So={transition:null},kg={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:So,ReactCurrentOwner:Vl};B.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Cr;B.Fragment=dg;B.Profiler=hg;B.PureComponent=$l;B.StrictMode=fg;B.Suspense=vg;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Vl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)gf.call(t,l)&&!vf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fi,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:mg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pg,_context:e},e.Consumer=e};B.createElement=yf;B.createFactory=function(e){var t=yf.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:gg,render:e}};B.isValidElement=Hl;B.lazy=function(e){return{$$typeof:wg,_payload:{_status:-1,_result:e},_init:Ig}};B.memo=function(e,t){return{$$typeof:yg,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(e,t){return De.current.useCallback(e,t)};B.useContext=function(e){return De.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return De.current.useDeferredValue(e)};B.useEffect=function(e,t){return De.current.useEffect(e,t)};B.useId=function(){return De.current.useId()};B.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return De.current.useMemo(e,t)};B.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};B.useRef=function(e){return De.current.useRef(e)};B.useState=function(e){return De.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return De.current.useTransition()};B.version="18.2.0";(function(e){e.exports=B})(ug);const wf=ag(C),Ua=sg({__proto__:null,default:wf},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=C,Cg=Symbol.for("react.element"),Rg=Symbol.for("react.fragment"),Pg=Object.prototype.hasOwnProperty,Dg=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function _f(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Pg.call(t,r)&&!Ag.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Cg,type:e,key:o,ref:s,props:i,_owner:Dg.current}}ys.Fragment=Rg;ys.jsx=_f;ys.jsxs=_f;(function(e){e.exports=ys})(lg);const ws=fi.Fragment,G=fi.jsx,Ge=fi.jsxs;var Fa={},ba={},Og={get exports(){return ba},set exports(e){ba=e}},Ve={},za={},Ng={get exports(){return za},set exports(e){za=e}},Ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,U){var b=T.length;T.push(U);e:for(;0<b;){var ee=b-1>>>1,le=T[ee];if(0<i(le,U))T[ee]=U,T[b]=le,b=ee;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var U=T[0],b=T.pop();if(b!==U){T[0]=b;e:for(var ee=0,le=T.length,Gn=le>>>1;ee<Gn;){var St=2*(ee+1)-1,It=T[St],ct=St+1,$t=T[ct];if(0>i(It,b))ct<le&&0>i($t,It)?(T[ee]=$t,T[ct]=b,ee=ct):(T[ee]=It,T[St]=b,ee=St);else if(ct<le&&0>i($t,b))T[ee]=$t,T[ct]=b,ee=ct;else break e}}return U}function i(T,U){var b=T.sortIndex-U.sortIndex;return b!==0?b:T.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,p=null,c=3,g=!1,w=!1,y=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=T)r(u),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(u)}}function v(T){if(y=!1,m(T),!w)if(n(l)!==null)w=!0,Nr(k);else{var U=n(u);U!==null&&xr(v,U.startTime-T)}}function k(T,U){w=!1,y&&(y=!1,h(O),O=-1),g=!0;var b=c;try{for(m(U),p=n(l);p!==null&&(!(p.expirationTime>U)||T&&!Ue());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,c=p.priorityLevel;var le=ee(p.expirationTime<=U);U=e.unstable_now(),typeof le=="function"?p.callback=le:p===n(l)&&r(l),m(U)}else r(l);p=n(l)}if(p!==null)var Gn=!0;else{var St=n(u);St!==null&&xr(v,St.startTime-U),Gn=!1}return Gn}finally{p=null,c=b,g=!1}}var D=!1,R=null,O=-1,W=5,L=-1;function Ue(){return!(e.unstable_now()-L<W)}function gn(){if(R!==null){var T=e.unstable_now();L=T;var U=!0;try{U=R(!0,T)}finally{U?vn():(D=!1,R=null)}}else D=!1}var vn;if(typeof d=="function")vn=function(){d(gn)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,yn=_e.port2;_e.port1.onmessage=gn,vn=function(){yn.postMessage(null)}}else vn=function(){N(gn,0)};function Nr(T){R=T,D||(D=!0,vn())}function xr(T,U){O=N(function(){T(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Nr(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(c){case 1:case 2:case 3:var U=3;break;default:U=c}var b=c;c=U;try{return T()}finally{c=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,U){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=c;c=T;try{return U()}finally{c=b}},e.unstable_scheduleCallback=function(T,U,b){var ee=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ee+b:ee):b=ee,T){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=b+le,T={id:f++,callback:U,priorityLevel:T,startTime:b,expirationTime:le,sortIndex:-1},b>ee?(T.sortIndex=b,t(u,T),n(l)===null&&T===n(u)&&(y?(h(O),O=-1):y=!0,xr(v,b-ee))):(T.sortIndex=le,t(l,T),w||g||(w=!0,Nr(k))),T},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(T){var U=c;return function(){var b=c;c=U;try{return T.apply(this,arguments)}finally{c=b}}}})(Ef);(function(e){e.exports=Ef})(Ng);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=C,Be=za;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var If=new Set,hi={};function Hn(e,t){wr(e,t),wr(e+"Capture",t)}function wr(e,t){for(hi[e]=t,e=0;e<t.length;e++)If.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ac={},lc={};function Mg(e){return ja.call(lc,e)?!0:ja.call(ac,e)?!1:xg.test(e)?lc[e]=!0:(ac[e]=!0,!1)}function Lg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ug(e,t,n,r){if(t===null||typeof t>"u"||Lg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wl,Kl);we[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wl,Kl);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wl,Kl);we[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,t,n,r){var i=we.hasOwnProperty(t)?we[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ug(t,n,i,r)&&(n=null),r||i===null?Mg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),$a=Symbol.for("react.profiler"),kf=Symbol.for("react.provider"),Tf=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Cf=Symbol.for("react.offscreen"),uc=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Xs;function Gr(e){if(Xs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xs=t&&t[1]||""}return`
`+Xs+e}var Zs=!1;function ea(e,t){if(!e||Zs)return"";Zs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Zs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Fg(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Yn:return"Portal";case $a:return"Profiler";case Ql:return"StrictMode";case Ba:return"Suspense";case Va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tf:return(e.displayName||"Context")+".Consumer";case kf:return(e._context.displayName||"Context")+".Provider";case ql:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yl:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function bg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zg(e){var t=Rf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=zg(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Rf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Df(e,t){t=t.checked,t!=null&&Gl(e,"checked",t,!1)}function Ka(e,t){Df(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ga(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ga(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Qr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Af(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function hc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,Nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jg=["Webkit","ms","Moz","O"];Object.keys(ei).forEach(function(e){jg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ei[t]=ei[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ei.hasOwnProperty(e)&&ei[e]?(""+t).trim():t+"px"}function Mf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $g=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(e,t){if(t){if($g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ja(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,dr=null,fr=null;function pc(e){if(e=ji(e)){if(typeof Za!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ks(t),Za(e.stateNode,e.type,t))}}function Lf(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Uf(){if(dr){var e=dr,t=fr;if(fr=dr=null,pc(e),t)for(e=0;e<t.length;e++)pc(t[e])}}function Ff(e,t){return e(t)}function bf(){}var ta=!1;function zf(e,t,n){if(ta)return e(t,n);ta=!0;try{return Ff(e,t,n)}finally{ta=!1,(dr!==null||fr!==null)&&(bf(),Uf())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var el=!1;if(xt)try{var br={};Object.defineProperty(br,"passive",{get:function(){el=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{el=!1}function Bg(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var ti=!1,bo=null,zo=!1,tl=null,Vg={onError:function(e){ti=!0,bo=e}};function Hg(e,t,n,r,i,o,s,a,l){ti=!1,bo=null,Bg.apply(Vg,arguments)}function Wg(e,t,n,r,i,o,s,a,l){if(Hg.apply(this,arguments),ti){if(ti){var u=bo;ti=!1,bo=null}else throw Error(S(198));zo||(zo=!0,tl=u)}}function Wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mc(e){if(Wn(e)!==e)throw Error(S(188))}function Kg(e){var t=e.alternate;if(!t){if(t=Wn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return mc(i),e;if(o===r)return mc(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function $f(e){return e=Kg(e),e!==null?Bf(e):null}function Bf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bf(e);if(t!==null)return t;e=e.sibling}return null}var Vf=Be.unstable_scheduleCallback,gc=Be.unstable_cancelCallback,Gg=Be.unstable_shouldYield,Qg=Be.unstable_requestPaint,ae=Be.unstable_now,qg=Be.unstable_getCurrentPriorityLevel,Xl=Be.unstable_ImmediatePriority,Hf=Be.unstable_UserBlockingPriority,jo=Be.unstable_NormalPriority,Yg=Be.unstable_LowPriority,Wf=Be.unstable_IdlePriority,_s=null,pt=null;function Jg(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(_s,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:ev,Xg=Math.log,Zg=Math.LN2;function ev(e){return e>>>=0,e===0?32:31-(Xg(e)/Zg|0)|0}var oo=64,so=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=qr(a):(o&=s,o!==0&&(r=qr(o)))}else s=n&~i,s!==0?r=qr(s):o!==0&&(r=qr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),i=1<<n,r|=e[n],t&=~i;return r}function tv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ot(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=tv(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Kf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function na(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function rv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Gf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qf,eu,qf,Yf,Jf,rl=!1,ao=[],en=null,tn=null,nn=null,gi=new Map,vi=new Map,Kt=[],iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vc(e,t){switch(e){case"focusin":case"focusout":en=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(t.pointerId)}}function zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ji(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ov(e,t,n,r,i){switch(t){case"focusin":return en=zr(en,e,t,n,r,i),!0;case"dragenter":return tn=zr(tn,e,t,n,r,i),!0;case"mouseover":return nn=zr(nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return gi.set(o,zr(gi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,vi.set(o,zr(vi.get(o)||null,e,t,n,r,i)),!0}return!1}function Xf(e){var t=Cn(e.target);if(t!==null){var n=Wn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,Jf(e.priority,function(){qf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return t=ji(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function yc(e,t,n){Io(e)&&n.delete(t)}function sv(){rl=!1,en!==null&&Io(en)&&(en=null),tn!==null&&Io(tn)&&(tn=null),nn!==null&&Io(nn)&&(nn=null),gi.forEach(yc),vi.forEach(yc)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,rl||(rl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,sv)))}function yi(e){function t(i){return jr(i,e)}if(0<ao.length){jr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(en!==null&&jr(en,e),tn!==null&&jr(tn,e),nn!==null&&jr(nn,e),gi.forEach(t),vi.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Xf(n),n.blockedOn===null&&Kt.shift()}var hr=zt.ReactCurrentBatchConfig,Bo=!0;function av(e,t,n,r){var i=Q,o=hr.transition;hr.transition=null;try{Q=1,tu(e,t,n,r)}finally{Q=i,hr.transition=o}}function lv(e,t,n,r){var i=Q,o=hr.transition;hr.transition=null;try{Q=4,tu(e,t,n,r)}finally{Q=i,hr.transition=o}}function tu(e,t,n,r){if(Bo){var i=il(e,t,n,r);if(i===null)fa(e,t,r,Vo,n),vc(e,r);else if(ov(i,e,t,n,r))r.stopPropagation();else if(vc(e,r),t&4&&-1<iv.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&Qf(o),o=il(e,t,n,r),o===null&&fa(e,t,r,Vo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fa(e,t,r,null,n)}}var Vo=null;function il(e,t,n,r){if(Vo=null,e=Jl(r),e=Cn(e),e!==null)if(t=Wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Zf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qg()){case Xl:return 1;case Hf:return 4;case jo:case Yg:return 16;case Wf:return 536870912;default:return 16}default:return 16}}var Xt=null,nu=null,ko=null;function eh(){if(ko)return ko;var e,t=nu,n=t.length,r,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ko=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function wc(){return!1}function He(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lo:wc,this.isPropagationStopped=wc,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=He(Rr),zi=oe({},Rr,{view:0,detail:0}),uv=He(zi),ra,ia,$r,Es=oe({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(ra=e.screenX-$r.screenX,ia=e.screenY-$r.screenY):ia=ra=0,$r=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:ia}}),_c=He(Es),cv=oe({},Es,{dataTransfer:0}),dv=He(cv),fv=oe({},zi,{relatedTarget:0}),oa=He(fv),hv=oe({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=He(hv),mv=oe({},Rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gv=He(mv),vv=oe({},Rr,{data:0}),Ec=He(vv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_v[e])?!!t[e]:!1}function iu(){return Ev}var Sv=oe({},zi,{key:function(e){if(e.key){var t=yv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Iv=He(Sv),kv=oe({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=He(kv),Tv=oe({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Cv=He(Tv),Rv=oe({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=He(Rv),Dv=oe({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=He(Dv),Ov=[9,13,27,32],ou=xt&&"CompositionEvent"in window,ni=null;xt&&"documentMode"in document&&(ni=document.documentMode);var Nv=xt&&"TextEvent"in window&&!ni,th=xt&&(!ou||ni&&8<ni&&11>=ni),Ic=String.fromCharCode(32),kc=!1;function nh(e,t){switch(e){case"keyup":return Ov.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function xv(e,t){switch(e){case"compositionend":return rh(t);case"keypress":return t.which!==32?null:(kc=!0,Ic);case"textInput":return e=t.data,e===Ic&&kc?null:e;default:return null}}function Mv(e,t){if(Xn)return e==="compositionend"||!ou&&nh(e,t)?(e=eh(),ko=nu=Xt=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return th&&t.locale!=="ko"?null:t.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lv[e.type]:t==="textarea"}function ih(e,t,n,r){Lf(r),t=Ho(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ri=null,wi=null;function Uv(e){mh(e,0)}function Ss(e){var t=tr(e);if(Pf(t))return e}function Fv(e,t){if(e==="change")return t}var oh=!1;if(xt){var sa;if(xt){var aa="oninput"in document;if(!aa){var Cc=document.createElement("div");Cc.setAttribute("oninput","return;"),aa=typeof Cc.oninput=="function"}sa=aa}else sa=!1;oh=sa&&(!document.documentMode||9<document.documentMode)}function Rc(){ri&&(ri.detachEvent("onpropertychange",sh),wi=ri=null)}function sh(e){if(e.propertyName==="value"&&Ss(wi)){var t=[];ih(t,wi,e,Jl(e)),zf(Uv,t)}}function bv(e,t,n){e==="focusin"?(Rc(),ri=t,wi=n,ri.attachEvent("onpropertychange",sh)):e==="focusout"&&Rc()}function zv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(wi)}function jv(e,t){if(e==="click")return Ss(t)}function $v(e,t){if(e==="input"||e==="change")return Ss(t)}function Bv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Bv;function _i(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!at(e[i],t[i]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,t){var n=Pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pc(n)}}function ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lh(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Vv(e){var t=lh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ah(n.ownerDocument.documentElement,n)){if(r!==null&&su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dc(n,o);var s=Dc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hv=xt&&"documentMode"in document&&11>=document.documentMode,Zn=null,ol=null,ii=null,sl=!1;function Ac(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sl||Zn==null||Zn!==Fo(r)||(r=Zn,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ii&&_i(ii,r)||(ii=r,r=Ho(ol,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},la={},uh={};xt&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Is(e){if(la[e])return la[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uh)return la[e]=t[n];return e}var ch=Is("animationend"),dh=Is("animationiteration"),fh=Is("animationstart"),hh=Is("transitionend"),ph=new Map,Oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){ph.set(e,t),Hn(t,[e])}for(var ua=0;ua<Oc.length;ua++){var ca=Oc[ua],Wv=ca.toLowerCase(),Kv=ca[0].toUpperCase()+ca.slice(1);hn(Wv,"on"+Kv)}hn(ch,"onAnimationEnd");hn(dh,"onAnimationIteration");hn(fh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(hh,"onTransitionEnd");wr("onMouseEnter",["mouseout","mouseover"]);wr("onMouseLeave",["mouseout","mouseover"]);wr("onPointerEnter",["pointerout","pointerover"]);wr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wg(r,t,void 0,e),e.currentTarget=null}function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Nc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Nc(i,a,u),o=l}}}if(zo)throw e=tl,zo=!1,tl=null,e}function X(e,t){var n=t[dl];n===void 0&&(n=t[dl]=new Set);var r=e+"__bubble";n.has(r)||(gh(t,e,2,!1),n.add(r))}function da(e,t,n){var r=0;t&&(r|=4),gh(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[co]){e[co]=!0,If.forEach(function(n){n!=="selectionchange"&&(Gv.has(n)||da(n,!1,e),da(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,da("selectionchange",!1,t))}}function gh(e,t,n,r){switch(Zf(t)){case 1:var i=av;break;case 4:i=lv;break;default:i=tu}n=i.bind(null,t,n,e),i=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Cn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}zf(function(){var u=o,f=Jl(n),p=[];e:{var c=ph.get(e);if(c!==void 0){var g=ru,w=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":g=Iv;break;case"focusin":w="focus",g=oa;break;case"focusout":w="blur",g=oa;break;case"beforeblur":case"afterblur":g=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Cv;break;case ch:case dh:case fh:g=pv;break;case hh:g=Pv;break;case"scroll":g=uv;break;case"wheel":g=Av;break;case"copy":case"cut":case"paste":g=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sc}var y=(t&4)!==0,N=!y&&e==="scroll",h=y?c!==null?c+"Capture":null:c;y=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=mi(d,h),v!=null&&y.push(Si(d,v,m)))),N)break;d=d.return}0<y.length&&(c=new g(c,w,null,n,f),p.push({event:c,listeners:y}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",c&&n!==Xa&&(w=n.relatedTarget||n.fromElement)&&(Cn(w)||w[Mt]))break e;if((g||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Cn(w):null,w!==null&&(N=Wn(w),w!==N||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=_c,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Sc,v="onPointerLeave",h="onPointerEnter",d="pointer"),N=g==null?c:tr(g),m=w==null?c:tr(w),c=new y(v,d+"leave",g,n,f),c.target=N,c.relatedTarget=m,v=null,Cn(f)===u&&(y=new y(h,d+"enter",w,n,f),y.target=m,y.relatedTarget=N,v=y),N=v,g&&w)t:{for(y=g,h=w,d=0,m=y;m;m=qn(m))d++;for(m=0,v=h;v;v=qn(v))m++;for(;0<d-m;)y=qn(y),d--;for(;0<m-d;)h=qn(h),m--;for(;d--;){if(y===h||h!==null&&y===h.alternate)break t;y=qn(y),h=qn(h)}y=null}else y=null;g!==null&&xc(p,c,g,y,!1),w!==null&&N!==null&&xc(p,N,w,y,!0)}}e:{if(c=u?tr(u):window,g=c.nodeName&&c.nodeName.toLowerCase(),g==="select"||g==="input"&&c.type==="file")var k=Fv;else if(Tc(c))if(oh)k=$v;else{k=zv;var D=bv}else(g=c.nodeName)&&g.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(k=jv);if(k&&(k=k(e,u))){ih(p,k,n,f);break e}D&&D(e,c,u),e==="focusout"&&(D=c._wrapperState)&&D.controlled&&c.type==="number"&&Ga(c,"number",c.value)}switch(D=u?tr(u):window,e){case"focusin":(Tc(D)||D.contentEditable==="true")&&(Zn=D,ol=u,ii=null);break;case"focusout":ii=ol=Zn=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,Ac(p,n,f);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Ac(p,n,f)}var R;if(ou)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Xn?nh(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(th&&n.locale!=="ko"&&(Xn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Xn&&(R=eh()):(Xt=f,nu="value"in Xt?Xt.value:Xt.textContent,Xn=!0)),D=Ho(u,O),0<D.length&&(O=new Ec(O,e,null,n,f),p.push({event:O,listeners:D}),R?O.data=R:(R=rh(n),R!==null&&(O.data=R)))),(R=Nv?xv(e,n):Mv(e,n))&&(u=Ho(u,"onBeforeInput"),0<u.length&&(f=new Ec("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=R))}mh(p,t)})}function Si(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=mi(e,n),o!=null&&r.unshift(Si(e,o,i)),o=mi(e,t),o!=null&&r.push(Si(e,o,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=mi(n,o),l!=null&&s.unshift(Si(n,l,a))):i||(l=mi(n,o),l!=null&&s.push(Si(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Qv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(Qv,`
`).replace(qv,"")}function fo(e,t,n){if(t=Mc(t),Mc(e)!==t&&n)throw Error(S(425))}function Wo(){}var al=null,ll=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cl=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(e){return Lc.resolve(null).then(e).catch(Xv)}:cl;function Xv(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);yi(t)}function rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),ht="__reactFiber$"+Pr,Ii="__reactProps$"+Pr,Mt="__reactContainer$"+Pr,dl="__reactEvents$"+Pr,Zv="__reactListeners$"+Pr,ey="__reactHandles$"+Pr;function Cn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[ht])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function ji(e){return e=e[ht]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ks(e){return e[Ii]||null}var fl=[],nr=-1;function pn(e){return{current:e}}function Z(e){0>nr||(e.current=fl[nr],fl[nr]=null,nr--)}function J(e,t){nr++,fl[nr]=e.current,e.current=t}var fn={},Te=pn(fn),xe=pn(!1),Mn=fn;function _r(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Me(e){return e=e.childContextTypes,e!=null}function Ko(){Z(xe),Z(Te)}function Fc(e,t,n){if(Te.current!==fn)throw Error(S(168));J(Te,t),J(xe,n)}function vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,bg(e)||"Unknown",i));return oe({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Mn=Te.current,J(Te,e),J(xe,xe.current),!0}function bc(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=vh(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,Z(xe),Z(Te),J(Te,e)):Z(xe),J(xe,n)}var Ct=null,Ts=!1,pa=!1;function yh(e){Ct===null?Ct=[e]:Ct.push(e)}function ty(e){Ts=!0,yh(e)}function mn(){if(!pa&&Ct!==null){pa=!0;var e=0,t=Q;try{var n=Ct;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Ts=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(e+1)),Vf(Xl,mn),i}finally{Q=t,pa=!1}}return null}var rr=[],ir=0,Qo=null,qo=0,We=[],Ke=0,Ln=null,Rt=1,Pt="";function En(e,t){rr[ir++]=qo,rr[ir++]=Qo,Qo=e,qo=t}function wh(e,t,n){We[Ke++]=Rt,We[Ke++]=Pt,We[Ke++]=Ln,Ln=e;var r=Rt;e=Pt;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var o=32-ot(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rt=1<<32-ot(t)+i|n<<i|r,Pt=o+e}else Rt=1<<o|n<<i|r,Pt=e}function au(e){e.return!==null&&(En(e,1),wh(e,1,0))}function lu(e){for(;e===Qo;)Qo=rr[--ir],rr[ir]=null,qo=rr[--ir],rr[ir]=null;for(;e===Ln;)Ln=We[--Ke],We[Ke]=null,Pt=We[--Ke],We[Ke]=null,Rt=We[--Ke],We[Ke]=null}var je=null,ze=null,ne=!1,it=null;function _h(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ze=rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Rt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ze=null,!0):!1;default:return!1}}function hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(ne){var t=ze;if(t){var n=t;if(!zc(e,t)){if(hl(e))throw Error(S(418));t=rn(n.nextSibling);var r=je;t&&zc(e,t)?_h(r,n):(e.flags=e.flags&-4097|2,ne=!1,je=e)}}else{if(hl(e))throw Error(S(418));e.flags=e.flags&-4097|2,ne=!1,je=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function ho(e){if(e!==je)return!1;if(!ne)return jc(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=ze)){if(hl(e))throw Eh(),Error(S(418));for(;t;)_h(e,t),t=rn(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=je?rn(e.stateNode.nextSibling):null;return!0}function Eh(){for(var e=ze;e;)e=rn(e.nextSibling)}function Er(){ze=je=null,ne=!1}function uu(e){it===null?it=[e]:it.push(e)}var ny=zt.ReactCurrentBatchConfig;function nt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yo=pn(null),Jo=null,or=null,cu=null;function du(){cu=or=Jo=null}function fu(e){var t=Yo.current;Z(Yo),e._currentValue=t}function ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Jo=e,cu=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function Je(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Jo===null)throw Error(S(308));or=e,Jo.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Rn=null;function hu(e){Rn===null?Rn=[e]:Rn.push(e)}function Sh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wt=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ih(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lt(e,n)}return i=r.interleaved,i===null?(t.next=t,hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lt(e,n)}function Co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function $c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var i=e.updateQueue;Wt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,f=u=l=null,a=o;do{var c=a.lane,g=a.eventTime;if((r&c)===c){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(c=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,c);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,c=typeof w=="function"?w.call(g,p,c):w,c==null)break e;p=oe({},p,c);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else g={eventTime:g,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=p):f=f.next=g,s|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fn|=s,e.lanes=s,e.memoizedState=p}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var kh=new Sf.Component().refs;function gl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?Wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=an(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(st(t,e,i,r),Co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=an(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=on(e,o,i),t!==null&&(st(t,e,i,r),Co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=an(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=on(e,i,r),t!==null&&(st(t,e,r,n),Co(t,e,r))}};function Vc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function Th(e,t,n){var r=!1,i=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Je(o):(i=Me(t)?Mn:Te.current,r=t.contextTypes,o=(r=r!=null)?_r(e,i):fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=kh,pu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Je(o):(o=Me(t)?Mn:Te.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),Xo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===kh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wc(e){var t=e._init;return t(e._payload)}function Ch(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=ln(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,m,v){return d===null||d.tag!==6?(d=Ea(m,h.mode,v),d.return=h,d):(d=i(d,m),d.return=h,d)}function l(h,d,m,v){var k=m.type;return k===Jn?f(h,d,m.props.children,v,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&Wc(k)===d.type)?(v=i(d,m.props),v.ref=Br(h,d,m),v.return=h,v):(v=No(m.type,m.key,m.props,null,h.mode,v),v.ref=Br(h,d,m),v.return=h,v)}function u(h,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Sa(m,h.mode,v),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function f(h,d,m,v,k){return d===null||d.tag!==7?(d=Nn(m,h.mode,v,k),d.return=h,d):(d=i(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ea(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case no:return m=No(d.type,d.key,d.props,null,h.mode,m),m.ref=Br(h,null,d),m.return=h,m;case Yn:return d=Sa(d,h.mode,m),d.return=h,d;case Ht:var v=d._init;return p(h,v(d._payload),m)}if(Qr(d)||Fr(d))return d=Nn(d,h.mode,m,null),d.return=h,d;po(h,d)}return null}function c(h,d,m,v){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(h,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return m.key===k?l(h,d,m,v):null;case Yn:return m.key===k?u(h,d,m,v):null;case Ht:return k=m._init,c(h,d,k(m._payload),v)}if(Qr(m)||Fr(m))return k!==null?null:f(h,d,m,v,null);po(h,m)}return null}function g(h,d,m,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,a(d,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case no:return h=h.get(v.key===null?m:v.key)||null,l(d,h,v,k);case Yn:return h=h.get(v.key===null?m:v.key)||null,u(d,h,v,k);case Ht:var D=v._init;return g(h,d,m,D(v._payload),k)}if(Qr(v)||Fr(v))return h=h.get(m)||null,f(d,h,v,k,null);po(d,v)}return null}function w(h,d,m,v){for(var k=null,D=null,R=d,O=d=0,W=null;R!==null&&O<m.length;O++){R.index>O?(W=R,R=null):W=R.sibling;var L=c(h,R,m[O],v);if(L===null){R===null&&(R=W);break}e&&R&&L.alternate===null&&t(h,R),d=o(L,d,O),D===null?k=L:D.sibling=L,D=L,R=W}if(O===m.length)return n(h,R),ne&&En(h,O),k;if(R===null){for(;O<m.length;O++)R=p(h,m[O],v),R!==null&&(d=o(R,d,O),D===null?k=R:D.sibling=R,D=R);return ne&&En(h,O),k}for(R=r(h,R);O<m.length;O++)W=g(R,h,O,m[O],v),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?O:W.key),d=o(W,d,O),D===null?k=W:D.sibling=W,D=W);return e&&R.forEach(function(Ue){return t(h,Ue)}),ne&&En(h,O),k}function y(h,d,m,v){var k=Fr(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var D=k=null,R=d,O=d=0,W=null,L=m.next();R!==null&&!L.done;O++,L=m.next()){R.index>O?(W=R,R=null):W=R.sibling;var Ue=c(h,R,L.value,v);if(Ue===null){R===null&&(R=W);break}e&&R&&Ue.alternate===null&&t(h,R),d=o(Ue,d,O),D===null?k=Ue:D.sibling=Ue,D=Ue,R=W}if(L.done)return n(h,R),ne&&En(h,O),k;if(R===null){for(;!L.done;O++,L=m.next())L=p(h,L.value,v),L!==null&&(d=o(L,d,O),D===null?k=L:D.sibling=L,D=L);return ne&&En(h,O),k}for(R=r(h,R);!L.done;O++,L=m.next())L=g(R,h,O,L.value,v),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?O:L.key),d=o(L,d,O),D===null?k=L:D.sibling=L,D=L);return e&&R.forEach(function(gn){return t(h,gn)}),ne&&En(h,O),k}function N(h,d,m,v){if(typeof m=="object"&&m!==null&&m.type===Jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case no:e:{for(var k=m.key,D=d;D!==null;){if(D.key===k){if(k=m.type,k===Jn){if(D.tag===7){n(h,D.sibling),d=i(D,m.props.children),d.return=h,h=d;break e}}else if(D.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ht&&Wc(k)===D.type){n(h,D.sibling),d=i(D,m.props),d.ref=Br(h,D,m),d.return=h,h=d;break e}n(h,D);break}else t(h,D);D=D.sibling}m.type===Jn?(d=Nn(m.props.children,h.mode,v,m.key),d.return=h,h=d):(v=No(m.type,m.key,m.props,null,h.mode,v),v.ref=Br(h,d,m),v.return=h,h=v)}return s(h);case Yn:e:{for(D=m.key;d!==null;){if(d.key===D)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=Sa(m,h.mode,v),d.return=h,h=d}return s(h);case Ht:return D=m._init,N(h,d,D(m._payload),v)}if(Qr(m))return w(h,d,m,v);if(Fr(m))return y(h,d,m,v);po(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=Ea(m,h.mode,v),d.return=h,h=d),s(h)):n(h,d)}return N}var Sr=Ch(!0),Rh=Ch(!1),$i={},mt=pn($i),ki=pn($i),Ti=pn($i);function Pn(e){if(e===$i)throw Error(S(174));return e}function mu(e,t){switch(J(Ti,t),J(ki,e),J(mt,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qa(t,e)}Z(mt),J(mt,t)}function Ir(){Z(mt),Z(ki),Z(Ti)}function Ph(e){Pn(Ti.current);var t=Pn(mt.current),n=qa(t,e.type);t!==n&&(J(ki,e),J(mt,n))}function gu(e){ki.current===e&&(Z(mt),Z(ki))}var re=pn(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function vu(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var Ro=zt.ReactCurrentDispatcher,ga=zt.ReactCurrentBatchConfig,Un=0,ie=null,de=null,he=null,es=!1,oi=!1,Ci=0,ry=0;function Se(){throw Error(S(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function wu(e,t,n,r,i,o){if(Un=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?ay:ly,e=n(r,i),oi){o=0;do{if(oi=!1,Ci=0,25<=o)throw Error(S(301));o+=1,he=de=null,t.updateQueue=null,Ro.current=uy,e=n(r,i)}while(oi)}if(Ro.current=ts,t=de!==null&&de.next!==null,Un=0,he=de=ie=null,es=!1,t)throw Error(S(300));return e}function _u(){var e=Ci!==0;return Ci=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ie.memoizedState=he=e:he=he.next=e,he}function Xe(){if(de===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ie.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(S(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ie.memoizedState=he=e:he=he.next=e}return he}function Ri(e,t){return typeof t=="function"?t(e):t}function va(e){var t=Xe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Un&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,ie.lanes|=f,Fn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,at(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ya(e){var t=Xe(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);at(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dh(){}function Ah(e,t){var n=ie,r=Xe(),i=t(),o=!at(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,Eu(xh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Pi(9,Nh.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(S(349));Un&30||Oh(n,t,i)}return i}function Oh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nh(e,t,n,r){t.value=n,t.getSnapshot=r,Mh(t)&&Lh(e)}function xh(e,t,n){return n(function(){Mh(t)&&Lh(e)})}function Mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Lh(e){var t=Lt(e,1);t!==null&&st(t,e,1,-1)}function Kc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ri,lastRenderedState:e},t.queue=e,e=e.dispatch=sy.bind(null,ie,e),[t.memoizedState,e]}function Pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uh(){return Xe().memoizedState}function Po(e,t,n,r){var i=ft();ie.flags|=e,i.memoizedState=Pi(1|t,n,void 0,r===void 0?null:r)}function Rs(e,t,n,r){var i=Xe();r=r===void 0?null:r;var o=void 0;if(de!==null){var s=de.memoizedState;if(o=s.destroy,r!==null&&yu(r,s.deps)){i.memoizedState=Pi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Pi(1|t,n,o,r)}function Gc(e,t){return Po(8390656,8,e,t)}function Eu(e,t){return Rs(2048,8,e,t)}function Fh(e,t){return Rs(4,2,e,t)}function bh(e,t){return Rs(4,4,e,t)}function zh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jh(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4,4,zh.bind(null,t,e),n)}function Su(){}function $h(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bh(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vh(e,t,n){return Un&21?(at(n,t)||(n=Kf(),ie.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function iy(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=ga.transition;ga.transition={};try{e(!1),t()}finally{Q=n,ga.transition=r}}function Hh(){return Xe().memoizedState}function oy(e,t,n){var r=an(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wh(e))Kh(t,n);else if(n=Sh(e,t,n,r),n!==null){var i=Pe();st(n,e,r,i),Gh(n,t,r)}}function sy(e,t,n){var r=an(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Kh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,at(a,s)){var l=t.interleaved;l===null?(i.next=i,hu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Sh(e,t,i,r),n!==null&&(i=Pe(),st(n,e,r,i),Gh(n,t,r))}}function Wh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Kh(e,t){oi=es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var ts={readContext:Je,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},ay={readContext:Je,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:Gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oy.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Kc,useDebugValue:Su,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Kc(!1),t=e[0];return e=iy.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=ft();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),pe===null)throw Error(S(349));Un&30||Oh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gc(xh.bind(null,r,o,e),[e]),r.flags|=2048,Pi(9,Nh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=pe.identifierPrefix;if(ne){var n=Pt,r=Rt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ly={readContext:Je,useCallback:$h,useContext:Je,useEffect:Eu,useImperativeHandle:jh,useInsertionEffect:Fh,useLayoutEffect:bh,useMemo:Bh,useReducer:va,useRef:Uh,useState:function(){return va(Ri)},useDebugValue:Su,useDeferredValue:function(e){var t=Xe();return Vh(t,de.memoizedState,e)},useTransition:function(){var e=va(Ri)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Dh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1},uy={readContext:Je,useCallback:$h,useContext:Je,useEffect:Eu,useImperativeHandle:jh,useInsertionEffect:Fh,useLayoutEffect:bh,useMemo:Bh,useReducer:ya,useRef:Uh,useState:function(){return ya(Ri)},useDebugValue:Su,useDeferredValue:function(e){var t=Xe();return de===null?t.memoizedState=e:Vh(t,de.memoizedState,e)},useTransition:function(){var e=ya(Ri)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Dh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1};function kr(e,t){try{var n="",r=t;do n+=Fg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function Qh(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rs||(rs=!0,Pl=r),yl(e,t)},n}function qh(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){yl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yl(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ky.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,on(n,t,1))),n.lanes|=1),e)}var dy=zt.ReactCurrentOwner,Ne=!1;function Re(e,t,n,r){t.child=e===null?Rh(t,null,n,r):Sr(t,e.child,n,r)}function Jc(e,t,n,r,i){n=n.render;var o=t.ref;return pr(t,i),r=wu(e,t,n,r,o,i),n=_u(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ne&&n&&au(t),t.flags|=1,Re(e,t,r,i),t.child)}function Xc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Yh(e,t,o,r,i)):(e=No(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(s,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Yh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return wl(e,t,n,r,i)}function Jh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(ar,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(ar,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(ar,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,J(ar,be),be|=r;return Re(e,t,i,n),t.child}function Xh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,i){var o=Me(n)?Mn:Te.current;return o=_r(t,o),pr(t,i),n=wu(e,t,n,r,o,i),r=_u(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(ne&&r&&au(t),t.flags|=1,Re(e,t,n,i),t.child)}function Zc(e,t,n,r,i){if(Me(n)){var o=!0;Go(t)}else o=!1;if(pr(t,i),t.stateNode===null)Do(e,t),Th(t,n,r),vl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Me(n)?Mn:Te.current,u=_r(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hc(t,s,r,u),Wt=!1;var c=t.memoizedState;s.state=c,Xo(t,r,s,i),l=t.memoizedState,a!==r||c!==l||xe.current||Wt?(typeof f=="function"&&(gl(t,n,f,r),l=t.memoizedState),(a=Wt||Vc(t,n,a,r,c,l,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ih(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:nt(t.type,a),s.props=u,p=t.pendingProps,c=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Je(l):(l=Me(n)?Mn:Te.current,l=_r(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||c!==l)&&Hc(t,s,r,l),Wt=!1,c=t.memoizedState,s.state=c,Xo(t,r,s,i);var w=t.memoizedState;a!==p||c!==w||xe.current||Wt?(typeof g=="function"&&(gl(t,n,g,r),w=t.memoizedState),(u=Wt||Vc(t,n,u,r,c,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,o,i)}function _l(e,t,n,r,i,o){Xh(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&bc(t,n,!1),Ut(e,t,o);r=t.stateNode,dy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Sr(t,e.child,null,o),t.child=Sr(t,null,a,o)):Re(e,t,a,o),t.memoizedState=r.state,i&&bc(t,n,!0),t.child}function Zh(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),mu(e,t.containerInfo)}function ed(e,t,n,r,i){return Er(),uu(i),t.flags|=256,Re(e,t,n,r),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Sl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ep(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),J(re,i&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=As(s,r,0,null),e=Nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Sl(n),t.memoizedState=El,e):Iu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fy(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ln(a,o):(o=Nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Sl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=El,r}return o=e.child,e=o.sibling,r=ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Iu(e,t){return t=As({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,n,r){return r!==null&&uu(r),Sr(t,e.child,null,n),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fy(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(S(422))),mo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=As({mode:"visible",children:r.children},i,0,null),o=Nn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Sr(t,e.child,null,s),t.child.memoizedState=Sl(s),t.memoizedState=El,o);if(!(t.mode&1))return mo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=wa(o,r,void 0),mo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ne||a){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Lt(e,i),st(r,e,i,-1))}return Du(),r=wa(Error(S(421))),mo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ty.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=rn(i.nextSibling),je=t,ne=!0,it=null,e!==null&&(We[Ke++]=Rt,We[Ke++]=Pt,We[Ke++]=Ln,Rt=e.id,Pt=e.overflow,Ln=t),t=Iu(t,r.children),t.flags|=4096,t)}function td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ml(e.return,t,n)}function _a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&td(e,n,t);else if(e.tag===19)td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(J(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,o);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Do(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hy(e,t,n){switch(t.tag){case 3:Zh(t),Er();break;case 5:Ph(t);break;case 1:Me(t.type)&&Go(t);break;case 4:mu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;J(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(J(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?ep(e,t,n):(J(re,re.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);J(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n)}return Ut(e,t,n)}var np,Il,rp,ip;np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};rp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(mt.current);var o=null;switch(n){case"input":i=Wa(e,i),r=Wa(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Qa(e,i),r=Qa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wo)}Ya(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ip=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function py(e,t,n){var r=t.pendingProps;switch(lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Me(t.type)&&Ko(),Ie(t),null;case 3:return r=t.stateNode,Ir(),Z(xe),Z(Te),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Ol(it),it=null))),Il(e,t),Ie(t),null;case 5:gu(t);var i=Pn(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)rp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ie(t),null}if(e=Pn(mt.current),ho(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ht]=t,r[Ii]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Yr.length;i++)X(Yr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":cc(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":fc(r,o),X("invalid",r)}Ya(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&fo(r.textContent,a,e),i=["children",""+a]):hi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":ro(r),dc(r,o,!0);break;case"textarea":ro(r),hc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ht]=t,e[Ii]=r,np(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ja(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Yr.length;i++)X(Yr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":cc(e,r),i=Wa(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),X("invalid",e);break;case"textarea":fc(e,r),i=Qa(e,r),X("invalid",e);break;default:i=r}Ya(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Mf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nf(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pi(e,l):typeof l=="number"&&pi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(hi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&Gl(e,o,l,s))}switch(n){case"input":ro(e),dc(e,r,!1);break;case"textarea":ro(e),hc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)ip(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Pn(Ti.current),Pn(mt.current),ho(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return Ie(t),null;case 13:if(Z(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&ze!==null&&t.mode&1&&!(t.flags&128))Eh(),Er(),t.flags|=98560,o=!1;else if(o=ho(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[ht]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else it!==null&&(Ol(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?fe===0&&(fe=3):Du())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Ir(),Il(e,t),e===null&&Ei(t.stateNode.containerInfo),Ie(t),null;case 10:return fu(t.type._context),Ie(t),null;case 17:return Me(t.type)&&Ko(),Ie(t),null;case 19:if(Z(re),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Vr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Zo(e),s!==null){for(t.flags|=128,Vr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return J(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Tr&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return Ie(t),null}else 2*ae()-o.renderingStartTime>Tr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=re.current,J(re,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function my(e,t){switch(lu(t),t.tag){case 1:return Me(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Z(xe),Z(Te),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(Z(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(re),null;case 4:return Ir(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var go=!1,ke=!1,gy=typeof WeakSet=="function"?WeakSet:Set,P=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function kl(e,t,n){try{n()}catch(r){se(e,t,r)}}var nd=!1;function vy(e,t){if(al=Bo,e=lh(),su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,p=e,c=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)c=p,p=g;for(;;){if(p===e)break t;if(c===n&&++u===i&&(a=s),c===o&&++f===r&&(l=s),(g=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ll={focusedElem:e,selectionRange:n},Bo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,N=w.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:nt(t.type,y),N);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){se(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=nd,nd=!1,w}function si(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&kl(t,n,o)}i=i.next}while(i!==r)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function op(e){var t=e.alternate;t!==null&&(e.alternate=null,op(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Ii],delete t[dl],delete t[Zv],delete t[ey])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sp(e){return e.tag===5||e.tag===3||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(r!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var ge=null,rt=!1;function Bt(e,t,n){for(n=n.child;n!==null;)ap(e,t,n),n=n.sibling}function ap(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(_s,n)}catch{}switch(n.tag){case 5:ke||sr(n,t);case 6:var r=ge,i=rt;ge=null,Bt(e,t,n),ge=r,rt=i,ge!==null&&(rt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(rt?(e=ge,n=n.stateNode,e.nodeType===8?ha(e.parentNode,n):e.nodeType===1&&ha(e,n),yi(e)):ha(ge,n.stateNode));break;case 4:r=ge,i=rt,ge=n.stateNode.containerInfo,rt=!0,Bt(e,t,n),ge=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&kl(n,t,s),i=i.next}while(i!==r)}Bt(e,t,n);break;case 1:if(!ke&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}Bt(e,t,n);break;case 21:Bt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Bt(e,t,n),ke=r):Bt(e,t,n);break;default:Bt(e,t,n)}}function id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gy),t.forEach(function(r){var i=Cy.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ge=a.stateNode,rt=!1;break e;case 3:ge=a.stateNode.containerInfo,rt=!0;break e;case 4:ge=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ge===null)throw Error(S(160));ap(o,s,i),ge=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),dt(e),r&4){try{si(3,e,e.return),Ps(3,e)}catch(y){se(e,e.return,y)}try{si(5,e,e.return)}catch(y){se(e,e.return,y)}}break;case 1:tt(t,e),dt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(tt(t,e),dt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{pi(i,"")}catch(y){se(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Df(i,o),Ja(a,s);var u=Ja(a,o);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?Mf(i,p):f==="dangerouslySetInnerHTML"?Nf(i,p):f==="children"?pi(i,p):Gl(i,f,p,u)}switch(a){case"input":Ka(i,o);break;case"textarea":Af(i,o);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?cr(i,!!o.multiple,g,!1):c!==!!o.multiple&&(o.defaultValue!=null?cr(i,!!o.multiple,o.defaultValue,!0):cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ii]=o}catch(y){se(e,e.return,y)}}break;case 6:if(tt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){se(e,e.return,y)}}break;case 3:if(tt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{yi(t.containerInfo)}catch(y){se(e,e.return,y)}break;case 4:tt(t,e),dt(e);break;case 13:tt(t,e),dt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Cu=ae())),r&4&&id(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||f,tt(t,e),ke=u):tt(t,e),dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(p=P=f;P!==null;){switch(c=P,g=c.child,c.tag){case 0:case 11:case 14:case 15:si(4,c,c.return);break;case 1:sr(c,c.return);var w=c.stateNode;if(typeof w.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){se(r,n,y)}}break;case 5:sr(c,c.return);break;case 22:if(c.memoizedState!==null){sd(p);continue}}g!==null?(g.return=c,P=g):sd(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=xf("display",s))}catch(y){se(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){se(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:tt(t,e),dt(e),r&4&&id(e);break;case 21:break;default:tt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(sp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pi(i,""),r.flags&=-33);var o=rd(e);Rl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=rd(e);Cl(e,a,s);break;default:throw Error(S(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yy(e,t,n){P=e,up(e)}function up(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||go;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ke;a=go;var u=ke;if(go=s,(ke=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?ad(i):l!==null?(l.return=s,P=l):ad(i);for(;o!==null;)P=o,up(o),o=o.sibling;P=i,go=a,ke=u}od(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):od(e)}}function od(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&yi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ke||t.flags&512&&Tl(t)}catch(c){se(t,t.return,c)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function sd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ad(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ps(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){se(t,i,l)}}var o=t.return;try{Tl(t)}catch(l){se(t,o,l)}break;case 5:var s=t.return;try{Tl(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var wy=Math.ceil,ns=zt.ReactCurrentDispatcher,ku=zt.ReactCurrentOwner,qe=zt.ReactCurrentBatchConfig,H=0,pe=null,ce=null,ye=0,be=0,ar=pn(0),fe=0,Di=null,Fn=0,Ds=0,Tu=0,ai=null,Oe=null,Cu=0,Tr=1/0,Tt=null,rs=!1,Pl=null,sn=null,vo=!1,Zt=null,is=0,li=0,Dl=null,Ao=-1,Oo=0;function Pe(){return H&6?ae():Ao!==-1?Ao:Ao=ae()}function an(e){return e.mode&1?H&2&&ye!==0?ye&-ye:ny.transition!==null?(Oo===0&&(Oo=Kf()),Oo):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Zf(e.type)),e):1}function st(e,t,n,r){if(50<li)throw li=0,Dl=null,Error(S(185));bi(e,n,r),(!(H&2)||e!==pe)&&(e===pe&&(!(H&2)&&(Ds|=n),fe===4&&Gt(e,ye)),Le(e,r),n===1&&H===0&&!(t.mode&1)&&(Tr=ae()+500,Ts&&mn()))}function Le(e,t){var n=e.callbackNode;nv(e,t);var r=$o(e,e===pe?ye:0);if(r===0)n!==null&&gc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&gc(n),t===1)e.tag===0?ty(ld.bind(null,e)):yh(ld.bind(null,e)),Jv(function(){!(H&6)&&mn()}),n=null;else{switch(Gf(r)){case 1:n=Xl;break;case 4:n=Hf;break;case 16:n=jo;break;case 536870912:n=Wf;break;default:n=jo}n=vp(n,cp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cp(e,t){if(Ao=-1,Oo=0,H&6)throw Error(S(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=$o(e,e===pe?ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=os(e,r);else{t=r;var i=H;H|=2;var o=fp();(pe!==e||ye!==t)&&(Tt=null,Tr=ae()+500,On(e,t));do try{Sy();break}catch(a){dp(e,a)}while(1);du(),ns.current=o,H=i,ce!==null?t=0:(pe=null,ye=0,t=fe)}if(t!==0){if(t===2&&(i=nl(e),i!==0&&(r=i,t=Al(e,i))),t===1)throw n=Di,On(e,0),Gt(e,r),Le(e,ae()),n;if(t===6)Gt(e,r);else{if(i=e.current.alternate,!(r&30)&&!_y(i)&&(t=os(e,r),t===2&&(o=nl(e),o!==0&&(r=o,t=Al(e,o))),t===1))throw n=Di,On(e,0),Gt(e,r),Le(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Sn(e,Oe,Tt);break;case 3:if(Gt(e,r),(r&130023424)===r&&(t=Cu+500-ae(),10<t)){if($o(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=cl(Sn.bind(null,e,Oe,Tt),t);break}Sn(e,Oe,Tt);break;case 4:if(Gt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wy(r/1960))-r,10<r){e.timeoutHandle=cl(Sn.bind(null,e,Oe,Tt),r);break}Sn(e,Oe,Tt);break;case 5:Sn(e,Oe,Tt);break;default:throw Error(S(329))}}}return Le(e,ae()),e.callbackNode===n?cp.bind(null,e):null}function Al(e,t){var n=ai;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=os(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ol(t)),e}function Ol(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function _y(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!at(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gt(e,t){for(t&=~Tu,t&=~Ds,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function ld(e){if(H&6)throw Error(S(327));mr();var t=$o(e,0);if(!(t&1))return Le(e,ae()),null;var n=os(e,t);if(e.tag!==0&&n===2){var r=nl(e);r!==0&&(t=r,n=Al(e,r))}if(n===1)throw n=Di,On(e,0),Gt(e,t),Le(e,ae()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,Oe,Tt),Le(e,ae()),null}function Ru(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Tr=ae()+500,Ts&&mn())}}function bn(e){Zt!==null&&Zt.tag===0&&!(H&6)&&mr();var t=H;H|=1;var n=qe.transition,r=Q;try{if(qe.transition=null,Q=1,e)return e()}finally{Q=r,qe.transition=n,H=t,!(H&6)&&mn()}}function Pu(){be=ar.current,Z(ar)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yv(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Ir(),Z(xe),Z(Te),vu();break;case 5:gu(r);break;case 4:Ir();break;case 13:Z(re);break;case 19:Z(re);break;case 10:fu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(pe=e,ce=e=ln(e.current,null),ye=be=t,fe=0,Di=null,Tu=Ds=Fn=0,Oe=ai=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rn=null}return e}function dp(e,t){do{var n=ce;try{if(du(),Ro.current=ts,es){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}es=!1}if(Un=0,he=de=ie=null,oi=!1,Ci=0,ku.current=null,n===null||n.return===null){fe=1,Di=t,ce=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var c=f.alternate;c?(f.updateQueue=c.updateQueue,f.memoizedState=c.memoizedState,f.lanes=c.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=qc(s);if(g!==null){g.flags&=-257,Yc(g,s,a,o,t),g.mode&1&&Qc(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(l),t.updateQueue=y}else w.add(l);break e}else{if(!(t&1)){Qc(o,u,t),Du();break e}l=Error(S(426))}}else if(ne&&a.mode&1){var N=qc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Yc(N,s,a,o,t),uu(kr(l,a));break e}}o=l=kr(l,a),fe!==4&&(fe=2),ai===null?ai=[o]:ai.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Qh(o,l,t);$c(o,h);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=qh(o,a,t);$c(o,v);break e}}o=o.return}while(o!==null)}pp(n)}catch(k){t=k,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function fp(){var e=ns.current;return ns.current=ts,e===null?ts:e}function Du(){(fe===0||fe===3||fe===2)&&(fe=4),pe===null||!(Fn&268435455)&&!(Ds&268435455)||Gt(pe,ye)}function os(e,t){var n=H;H|=2;var r=fp();(pe!==e||ye!==t)&&(Tt=null,On(e,t));do try{Ey();break}catch(i){dp(e,i)}while(1);if(du(),H=n,ns.current=r,ce!==null)throw Error(S(261));return pe=null,ye=0,fe}function Ey(){for(;ce!==null;)hp(ce)}function Sy(){for(;ce!==null&&!Gg();)hp(ce)}function hp(e){var t=gp(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?pp(e):ce=t,ku.current=null}function pp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=my(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=py(n,t,be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function Sn(e,t,n){var r=Q,i=qe.transition;try{qe.transition=null,Q=1,Iy(e,t,n,r)}finally{qe.transition=i,Q=r}return null}function Iy(e,t,n,r){do mr();while(Zt!==null);if(H&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rv(e,o),e===pe&&(ce=pe=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,vp(jo,function(){return mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var s=Q;Q=1;var a=H;H|=4,ku.current=null,vy(e,n),lp(n,e),Vv(ll),Bo=!!al,ll=al=null,e.current=n,yy(n),Qg(),H=a,Q=s,qe.transition=o}else e.current=n;if(vo&&(vo=!1,Zt=e,is=i),o=e.pendingLanes,o===0&&(sn=null),Jg(n.stateNode),Le(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rs)throw rs=!1,e=Pl,Pl=null,e;return is&1&&e.tag!==0&&mr(),o=e.pendingLanes,o&1?e===Dl?li++:(li=0,Dl=e):li=0,mn(),null}function mr(){if(Zt!==null){var e=Gf(is),t=qe.transition,n=Q;try{if(qe.transition=null,Q=16>e?16:e,Zt===null)var r=!1;else{if(e=Zt,Zt=null,is=0,H&6)throw Error(S(331));var i=H;for(H|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:si(8,f,o)}var p=f.child;if(p!==null)p.return=f,P=p;else for(;P!==null;){f=P;var c=f.sibling,g=f.return;if(op(f),f===u){P=null;break}if(c!==null){c.return=g,P=c;break}P=g}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:si(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,P=h;break e}P=o.return}}var d=e.current;for(P=d;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=d;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ps(9,a)}}catch(k){se(a,a.return,k)}if(a===s){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(H=i,mn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(_s,e)}catch{}r=!0}return r}finally{Q=n,qe.transition=t}}return!1}function ud(e,t,n){t=kr(n,t),t=Qh(e,t,1),e=on(e,t,1),t=Pe(),e!==null&&(bi(e,1,t),Le(e,t))}function se(e,t,n){if(e.tag===3)ud(e,e,n);else for(;t!==null;){if(t.tag===3){ud(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=kr(n,e),e=qh(t,e,1),t=on(t,e,1),e=Pe(),t!==null&&(bi(t,1,e),Le(t,e));break}}t=t.return}}function ky(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>ae()-Cu?On(e,0):Tu|=n),Le(e,t)}function mp(e,t){t===0&&(e.mode&1?(t=so,so<<=1,!(so&130023424)&&(so=4194304)):t=1);var n=Pe();e=Lt(e,t),e!==null&&(bi(e,t,n),Le(e,n))}function Ty(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mp(e,n)}function Cy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),mp(e,n)}var gp;gp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,hy(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,ne&&t.flags&1048576&&wh(t,qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Do(e,t),e=t.pendingProps;var i=_r(t,Te.current);pr(t,n),i=wu(null,t,r,e,i,n);var o=_u();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pu(t),i.updater=Cs,t.stateNode=i,i._reactInternals=t,vl(t,r,e,n),t=_l(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&au(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Do(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Py(r),e=nt(r,e),i){case 0:t=wl(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=Jc(null,t,r,e,n);break e;case 14:t=Xc(null,t,r,nt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Zc(e,t,r,i,n);case 3:e:{if(Zh(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ih(e,t),Xo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=kr(Error(S(423)),t),t=ed(e,t,r,n,i);break e}else if(r!==i){i=kr(Error(S(424)),t),t=ed(e,t,r,n,i);break e}else for(ze=rn(t.stateNode.containerInfo.firstChild),je=t,ne=!0,it=null,n=Rh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Ut(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Ph(t),e===null&&pl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ul(r,i)?s=null:o!==null&&ul(r,o)&&(t.flags|=32),Xh(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&pl(t),null;case 13:return ep(e,t,n);case 4:return mu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Jc(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,J(Yo,r._currentValue),r._currentValue=s,o!==null)if(at(o.value,s)){if(o.children===i.children&&!xe.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ot(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ml(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ml(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pr(t,n),i=Je(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=nt(r,t.pendingProps),i=nt(r.type,i),Xc(e,t,r,i,n);case 15:return Yh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nt(r,i),Do(e,t),t.tag=1,Me(r)?(e=!0,Go(t)):e=!1,pr(t,n),Th(t,r,i),vl(t,r,i,n),_l(null,t,r,!0,e,n);case 19:return tp(e,t,n);case 22:return Jh(e,t,n)}throw Error(S(156,t.tag))};function vp(e,t){return Vf(e,t)}function Ry(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Ry(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Py(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ql)return 11;if(e===Yl)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function No(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jn:return Nn(n.children,i,o,t);case Ql:s=8,i|=8;break;case $a:return e=Qe(12,n,t,i|2),e.elementType=$a,e.lanes=o,e;case Ba:return e=Qe(13,n,t,i),e.elementType=Ba,e.lanes=o,e;case Va:return e=Qe(19,n,t,i),e.elementType=Va,e.lanes=o,e;case Cf:return As(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kf:s=10;break e;case Tf:s=9;break e;case ql:s=11;break e;case Yl:s=14;break e;case Ht:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Nn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function As(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Cf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ea(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dy(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ou(e,t,n,r,i,o,s,a,l){return e=new Dy(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(o),e}function Ay(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yp(e){if(!e)return fn;e=e._reactInternals;e:{if(Wn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Me(n))return vh(e,n,t)}return t}function wp(e,t,n,r,i,o,s,a,l){return e=Ou(n,r,!0,e,i,o,s,a,l),e.context=yp(null),n=e.current,r=Pe(),i=an(n),o=Ot(r,i),o.callback=t??null,on(n,o,i),e.current.lanes=i,bi(e,i,r),Le(e,r),e}function Os(e,t,n,r){var i=t.current,o=Pe(),s=an(i);return n=yp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=on(i,t,s),e!==null&&(st(e,i,s,o),Co(e,i,s)),s}function ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function Oy(){return null}var _p=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}Ns.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Os(e,t,null,null)};Ns.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Os(null,e,null,null)}),t[Mt]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Xf(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dd(){}function Ny(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ss(s);o.call(u)}}var s=wp(t,r,e,0,null,!1,!1,"",dd);return e._reactRootContainer=s,e[Mt]=s.current,Ei(e.nodeType===8?e.parentNode:e),bn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ss(l);a.call(u)}}var l=Ou(e,0,!1,null,null,!1,!1,"",dd);return e._reactRootContainer=l,e[Mt]=l.current,Ei(e.nodeType===8?e.parentNode:e),bn(function(){Os(t,l,n,r)}),l}function Ms(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ss(s);a.call(l)}}Os(t,s,e,i)}else s=Ny(n,t,e,i,r);return ss(s)}Qf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qr(t.pendingLanes);n!==0&&(Zl(t,n|1),Le(t,ae()),!(H&6)&&(Tr=ae()+500,mn()))}break;case 13:bn(function(){var r=Lt(e,1);if(r!==null){var i=Pe();st(r,e,1,i)}}),Nu(e,1)}};eu=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Pe();st(t,e,134217728,n)}Nu(e,134217728)}};qf=function(e){if(e.tag===13){var t=an(e),n=Lt(e,t);if(n!==null){var r=Pe();st(n,e,t,r)}Nu(e,t)}};Yf=function(){return Q};Jf=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Za=function(e,t,n){switch(t){case"input":if(Ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ks(r);if(!i)throw Error(S(90));Pf(r),Ka(r,i)}}}break;case"textarea":Af(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Ff=Ru;bf=bn;var xy={usingClientEntryPoint:!1,Events:[ji,tr,ks,Lf,Uf,Ru]},Hr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},My={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$f(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{_s=yo.inject(My),pt=yo}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(S(200));return Ay(e,t,null,n)};Ve.createRoot=function(e,t){if(!Mu(e))throw Error(S(299));var n=!1,r="",i=_p;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ou(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new xu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=$f(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return bn(e)};Ve.hydrate=function(e,t,n){if(!xs(t))throw Error(S(200));return Ms(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Mu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=_p;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=wp(t,null,e,1,n??null,i,!1,o,s),e[Mt]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ns(t)};Ve.render=function(e,t,n){if(!xs(t))throw Error(S(200));return Ms(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!xs(e))throw Error(S(40));return e._reactRootContainer?(bn(function(){Ms(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Ru;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xs(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ms(e,t,n,!1,r)};Ve.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ve})(Og);var fd=ba;Fa.createRoot=fd.createRoot,Fa.hydrateRoot=fd.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}var ue;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ue||(ue={}));const hd="popstate";function Ly(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ai("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wt(i)}return Fy(t,n,null,e)}function j(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uy(){return Math.random().toString(36).substr(2,8)}function pd(e){return{usr:e.state,key:e.key}}function Ai(e,t,n,r){return n===void 0&&(n=null),q({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jt(t):t,{state:n,key:t&&t.key||r||Uy()})}function wt(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Oi(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:wt(e);return j(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function Fy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ue.Pop,l=null;function u(){a=ue.Pop,l&&l({action:a,location:c.location})}function f(g,w){a=ue.Push;let y=Ai(c.location,g,w);n&&n(y,g);let N=pd(y),h=c.createHref(y);try{s.pushState(N,"",h)}catch{i.location.assign(h)}o&&l&&l({action:a,location:c.location})}function p(g,w){a=ue.Replace;let y=Ai(c.location,g,w);n&&n(y,g);let N=pd(y),h=c.createHref(y);s.replaceState(N,"",h),o&&l&&l({action:a,location:c.location})}let c={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hd,u),l=g,()=>{i.removeEventListener(hd,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let w=Oi(typeof g=="string"?g:wt(g));return{pathname:w.pathname,search:w.search,hash:w.hash}},push:f,replace:p,go(g){return s.go(g)}};return c}var ve;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ve||(ve={}));function by(e){return e.index===!0}function Ep(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let o=[...t,i],s=typeof r.id=="string"?r.id:o.join("-");return j(r.index!==!0||!r.children,"Cannot specify children on an index route"),j(!n.has(s),'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),n.add(s),by(r)?q({},r,{id:s}):q({},r,{id:s,children:r.children?Ep(r.children,o,n):void 0})})}function Jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jt(t):t,i=kp(r.pathname||"/",n);if(i==null)return null;let o=Sp(e);zy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Qy(o[a],Jy(i));return s}function Sp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(j(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Nt([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(j(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Sp(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ky(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Ip(o.path))i(o,s,l)}),t}function Ip(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Ip(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function zy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jy=/^:\w+$/,$y=3,By=2,Vy=1,Hy=10,Wy=-2,md=e=>e==="*";function Ky(e,t){let n=e.split("/"),r=n.length;return n.some(md)&&(r+=Wy),t&&(r+=By),n.filter(i=>!md(i)).reduce((i,o)=>i+(jy.test(o)?$y:o===""?Vy:Hy),r)}function Gy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Qy(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=qy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=a.route;o.push({params:r,pathname:Nt([i,f.pathname]),pathnameBase:t0(Nt([i,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(i=Nt([i,f.pathnameBase]))}return o}function qy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let c=a[p]||"";s=o.slice(0,o.length-c.length).replace(/(.)\/+$/,"$1")}return u[f]=Xy(a[p]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Yy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Jy(e){try{return decodeURI(e)}catch(t){return Lu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xy(e,t){try{return decodeURIComponent(e)}catch(n){return Lu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function kp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Lu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Zy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jt(e):e;return{pathname:n?n.startsWith("/")?n:e0(n,t):t,search:n0(r),hash:r0(i)}}function e0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ia(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ls(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=jt(e):(i=q({},e),j(!i.pathname||!i.pathname.includes("?"),Ia("?","pathname","search",i)),j(!i.pathname||!i.pathname.includes("#"),Ia("#","pathname","hash",i)),j(!i.search||!i.search.includes("#"),Ia("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let p=t.length-1;if(s.startsWith("..")){let c=s.split("/");for(;c[0]==="..";)c.shift(),p-=1;i.pathname=c.join("/")}a=p>=0?t[p]:"/"}let l=Zy(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Nt=e=>e.join("/").replace(/\/\/+/g,"/"),t0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class gd extends Error{}class i0{constructor(t){this.pendingKeys=new Set,this.subscriber=void 0,j(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((i,o)=>n=o),this.controller=new AbortController;let r=()=>n(new gd("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(t).reduce((i,o)=>{let[s,a]=o;return Object.assign(i,{[s]:this.trackPromise(s,a)})},{})}trackPromise(t,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){if(this.controller.signal.aborted&&r instanceof gd)return this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const o=this.subscriber;return r?(Object.defineProperty(t,"_error",{get:()=>r}),o&&o(!1),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),o&&o(!1),i)}subscribe(t){this.subscriber=t}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let t=this.subscriber;t&&t(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(o=>{t.removeEventListener("abort",r),(o||this.done)&&i(o)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return j(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:s0(i)})},{})}}function o0(e){return e instanceof Promise&&e._tracked===!0}function s0(e){if(!o0(e))return e;if(e._error)throw e._error;return e._data}class Us{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Tp(e){return e instanceof Us}const Cp=["post","put","patch","delete"],a0=new Set(Cp),l0=["get",...Cp],u0=new Set(l0),c0=new Set([301,302,303,307,308]),d0=new Set([307,308]),ka={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},f0={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},h0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p0=!h0;function m0(e){j(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Ep(e.routes),n=null,r=new Set,i=null,o=null,s=null,a=e.hydrationData!=null,l=Jr(t,e.history.location,e.basename),u=null;if(l==null){let _=kn(404,{pathname:e.history.location.pathname}),{matches:E,route:I}=Sd(t);l=E,u={[I.id]:_}}let f=!l.some(_=>_.route.loader)||e.hydrationData!=null,p,c={historyAction:e.history.action,location:e.history.location,matches:l,initialized:f,navigation:ka,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||u,fetchers:new Map},g=ue.Pop,w=!1,y,N=!1,h=!1,d=[],m=[],v=new Map,k=0,D=-1,R=new Map,O=new Set,W=new Map,L=new Map;function Ue(){return n=e.history.listen(_=>{let{action:E,location:I}=_;return T(E,I)}),c.initialized||T(ue.Pop,c.location),p}function gn(){n&&n(),r.clear(),y&&y.abort(),c.fetchers.forEach((_,E)=>Qs(E))}function vn(_){return r.add(_),()=>r.delete(_)}function _e(_){c=q({},c,_),r.forEach(E=>E(c))}function yn(_,E){var I;let x=c.actionData!=null&&c.navigation.formMethod!=null&&Tn(c.navigation.formMethod)&&c.navigation.state==="loading"&&((I=_.state)==null?void 0:I._isRedirect)!==!0,A;E.actionData?Object.keys(E.actionData).length>0?A=E.actionData:A=null:x?A=c.actionData:A=null;let z=E.loaderData?Ed(c.loaderData,E.loaderData,E.matches||[],E.errors):c.loaderData;_e(q({},E,{actionData:A,loaderData:z,historyAction:g,location:_,initialized:!0,navigation:ka,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:nc(_,E.matches||c.matches),preventScrollReset:w})),N||g===ue.Pop||(g===ue.Push?e.history.push(_,_.state):g===ue.Replace&&e.history.replace(_,_.state)),g=ue.Pop,w=!1,N=!1,h=!1,d=[],m=[]}async function Nr(_,E){if(typeof _=="number"){e.history.go(_);return}let{path:I,submission:x,error:A}=vd(_,E),z=Ai(c.location,I,E&&E.state);z=q({},z,e.history.encodeLocation(z));let $=E&&E.replace!=null?E.replace:void 0,V=ue.Push;$===!0?V=ue.Replace:$===!1||x!=null&&Tn(x.formMethod)&&x.formAction===c.location.pathname+c.location.search&&(V=ue.Replace);let F=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0;return await T(V,z,{submission:x,pendingError:A,preventScrollReset:F,replace:E&&E.replace})}function xr(){if($t(),_e({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){T(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}T(g||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function T(_,E,I){y&&y.abort(),y=null,g=_,N=(I&&I.startUninterruptedRevalidation)===!0,ng(c.location,c.matches),w=(I&&I.preventScrollReset)===!0;let x=I&&I.overrideNavigation,A=Jr(t,E,e.basename);if(!A){let te=kn(404,{pathname:E.pathname}),{matches:Ze,route:et}=Sd(t);qs(),yn(E,{matches:Ze,loaderData:{},errors:{[et.id]:te}});return}if(_0(c.location,E)){yn(E,{matches:A});return}y=new AbortController;let z=Kr(E,y.signal,I&&I.submission),$,V;if(I&&I.pendingError)V={[lr(A).route.id]:I.pendingError};else if(I&&I.submission&&Tn(I.submission.formMethod)){let te=await U(z,E,I.submission,A,{replace:I.replace});if(te.shortCircuited)return;$=te.pendingActionData,V=te.pendingActionError,x=q({state:"loading",location:E},I.submission),z=new Request(z.url,{signal:z.signal})}let{shortCircuited:F,loaderData:me,errors:K}=await b(z,E,A,x,I&&I.submission,I&&I.replace,$,V);F||(y=null,yn(E,q({matches:A},$?{actionData:$}:{},{loaderData:me,errors:K})))}async function U(_,E,I,x,A){$t();let z=q({state:"submitting",location:E},I);_e({navigation:z});let $,V=Cd(x,E);if(!V.route.action)$={type:ve.error,error:kn(405,{method:_.method,pathname:E.pathname,routeId:V.route.id})};else if($=await Wr("action",_,V,x,p.basename),_.signal.aborted)return{shortCircuited:!0};if(gr($)){let F;return A&&A.replace!=null?F=A.replace:F=$.location===c.location.pathname+c.location.search,await It(c,$,{submission:I,replace:F}),{shortCircuited:!0}}if(ui($)){let F=lr(x,V.route.id);return(A&&A.replace)!==!0&&(g=ue.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:$.error}}}if(Dn($))throw new Error("defer() is not supported in actions");return{pendingActionData:{[V.route.id]:$.data}}}async function b(_,E,I,x,A,z,$,V){let F=x;F||(F=q({state:"loading",location:E,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},A));let me=A||(F.formMethod&&F.formAction&&F.formData&&F.formEncType?{formMethod:F.formMethod,formAction:F.formAction,formData:F.formData,formEncType:F.formEncType}:void 0),[K,te]=yd(c,I,me,E,h,d,m,$,V,W);if(qs(Ee=>!(I&&I.some(Fe=>Fe.route.id===Ee))||K&&K.some(Fe=>Fe.route.id===Ee)),K.length===0&&te.length===0)return yn(E,q({matches:I,loaderData:{},errors:V||null},$?{actionData:$}:{})),{shortCircuited:!0};if(!N){te.forEach(Fe=>{let[wn]=Fe,Lr=c.fetchers.get(wn),Ur={state:"loading",data:Lr&&Lr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(wn,Ur)});let Ee=$||c.actionData;_e(q({navigation:F},Ee?Object.keys(Ee).length===0?{actionData:null}:{actionData:Ee}:{},te.length>0?{fetchers:new Map(c.fetchers)}:{}))}D=++k,te.forEach(Ee=>{let[Fe]=Ee;return v.set(Fe,y)});let{results:Ze,loaderResults:et,fetcherResults:Mr}=await ct(c.matches,I,K,te,_);if(_.signal.aborted)return{shortCircuited:!0};te.forEach(Ee=>{let[Fe]=Ee;return v.delete(Fe)});let Zi=Id(Ze);if(Zi)return await It(c,Zi,{replace:z}),{shortCircuited:!0};let{loaderData:eo,errors:Qn}=_d(c,I,K,et,V,te,Mr,L);L.forEach((Ee,Fe)=>{Ee.subscribe(wn=>{(wn||Ee.done)&&L.delete(Fe)})}),eg();let Ys=tc(D);return q({loaderData:eo,errors:Qn},Ys||te.length>0?{fetchers:new Map(c.fetchers)}:{})}function ee(_){return c.fetchers.get(_)||f0}function le(_,E,I,x){if(p0)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");v.has(_)&&Xi(_);let A=Jr(t,I,e.basename);if(!A){Gs(_,E,kn(404,{pathname:I}));return}let{path:z,submission:$}=vd(I,x,!0),V=Cd(A,z);if($&&Tn($.formMethod)){Gn(_,E,z,V,A,$);return}W.set(_,[z,V,A]),St(_,E,z,V,A,$)}async function Gn(_,E,I,x,A,z){if($t(),W.delete(_),!x.route.action){let kt=kn(405,{method:z.formMethod,pathname:I,routeId:E});Gs(_,E,kt);return}let $=c.fetchers.get(_),V=q({state:"submitting"},z,{data:$&&$.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(_,V),_e({fetchers:new Map(c.fetchers)});let F=new AbortController,me=Kr(I,F.signal,z);v.set(_,F);let K=await Wr("action",me,x,A,p.basename);if(me.signal.aborted){v.get(_)===F&&v.delete(_);return}if(gr(K)){v.delete(_),O.add(_);let kt=q({state:"loading"},z,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(_,kt),_e({fetchers:new Map(c.fetchers)}),It(c,K,{isFetchActionRedirect:!0})}if(ui(K)){Gs(_,E,K.error);return}Dn(K)&&j(!1,"defer() is not supported in actions");let te=c.navigation.location||c.location,Ze=Kr(te,F.signal),et=c.navigation.state!=="idle"?Jr(t,c.navigation.location,e.basename):c.matches;j(et,"Didn't find any matches after fetcher action");let Mr=++k;R.set(_,Mr);let Zi=q({state:"loading",data:K.data},z,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(_,Zi);let[eo,Qn]=yd(c,et,z,te,h,d,m,{[x.route.id]:K.data},void 0,W);Qn.filter(kt=>{let[_n]=kt;return _n!==_}).forEach(kt=>{let[_n]=kt,rc=c.fetchers.get(_n),og={state:"loading",data:rc&&rc.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(_n,og),v.set(_n,F)}),_e({fetchers:new Map(c.fetchers)});let{results:Ys,loaderResults:Ee,fetcherResults:Fe}=await ct(c.matches,et,eo,Qn,Ze);if(F.signal.aborted)return;R.delete(_),v.delete(_),Qn.forEach(kt=>{let[_n]=kt;return v.delete(_n)});let wn=Id(Ys);if(wn)return It(c,wn);let{loaderData:Lr,errors:Ur}=_d(c,c.matches,eo,Ee,void 0,Qn,Fe,L),rg={state:"idle",data:K.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(_,rg);let ig=tc(Mr);c.navigation.state==="loading"&&Mr>D?(j(g,"Expected pending action"),y&&y.abort(),yn(c.navigation.location,{matches:et,loaderData:Lr,errors:Ur,fetchers:new Map(c.fetchers)})):(_e(q({errors:Ur,loaderData:Ed(c.loaderData,Lr,et,Ur)},ig?{fetchers:new Map(c.fetchers)}:{})),h=!1)}async function St(_,E,I,x,A,z){let $=c.fetchers.get(_),V=q({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},z,{data:$&&$.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(_,V),_e({fetchers:new Map(c.fetchers)});let F=new AbortController,me=Kr(I,F.signal);v.set(_,F);let K=await Wr("loader",me,x,A,p.basename);if(Dn(K)&&(K=await Ap(K,me.signal,!0)||K),v.get(_)===F&&v.delete(_),me.signal.aborted)return;if(gr(K)){await It(c,K);return}if(ui(K)){let Ze=lr(c.matches,E);c.fetchers.delete(_),_e({fetchers:new Map(c.fetchers),errors:{[Ze.route.id]:K.error}});return}j(!Dn(K),"Unhandled fetcher deferred data");let te={state:"idle",data:K.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(_,te),_e({fetchers:new Map(c.fetchers)})}async function It(_,E,I){var x;let{submission:A,replace:z,isFetchActionRedirect:$}=I===void 0?{}:I;E.revalidate&&(h=!0);let V=Ai(_.location,E.location,q({_isRedirect:!0},$?{_isFetchActionRedirect:!0}:{}));if(j(V,"Expected a location on the redirect navigation"),typeof((x=window)==null?void 0:x.location)<"u"){let et=Oi(E.location).origin;if(window.location.origin!==et){z?window.location.replace(E.location):window.location.assign(E.location);return}}y=null;let F=z===!0?ue.Replace:ue.Push,{formMethod:me,formAction:K,formEncType:te,formData:Ze}=_.navigation;!A&&me&&K&&Ze&&te&&(A={formMethod:me,formAction:K,formEncType:te,formData:Ze}),d0.has(E.status)&&A&&Tn(A.formMethod)?await T(F,V,{submission:q({},A,{formAction:E.location})}):await T(F,V,{overrideNavigation:{state:"loading",location:V,formMethod:A?A.formMethod:void 0,formAction:A?A.formAction:void 0,formEncType:A?A.formEncType:void 0,formData:A?A.formData:void 0}})}async function ct(_,E,I,x,A){let z=await Promise.all([...I.map(F=>Wr("loader",A,F,E,p.basename)),...x.map(F=>{let[,me,K,te]=F;return Wr("loader",Kr(me,A.signal),K,te,p.basename)})]),$=z.slice(0,I.length),V=z.slice(I.length);return await Promise.all([kd(_,I,$,A.signal,!1,c.loaderData),kd(_,x.map(F=>{let[,,me]=F;return me}),V,A.signal,!0)]),{results:z,loaderResults:$,fetcherResults:V}}function $t(){h=!0,d.push(...qs()),W.forEach((_,E)=>{v.has(E)&&(m.push(E),Xi(E))})}function Gs(_,E,I){let x=lr(c.matches,E);Qs(_),_e({errors:{[x.route.id]:I},fetchers:new Map(c.fetchers)})}function Qs(_){v.has(_)&&Xi(_),W.delete(_),R.delete(_),O.delete(_),c.fetchers.delete(_)}function Xi(_){let E=v.get(_);j(E,"Expected fetch controller: "+_),E.abort(),v.delete(_)}function ec(_){for(let E of _){let x={state:"idle",data:ee(E).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(E,x)}}function eg(){let _=[];for(let E of O){let I=c.fetchers.get(E);j(I,"Expected fetcher: "+E),I.state==="loading"&&(O.delete(E),_.push(E))}ec(_)}function tc(_){let E=[];for(let[I,x]of R)if(x<_){let A=c.fetchers.get(I);j(A,"Expected fetcher: "+I),A.state==="loading"&&(Xi(I),R.delete(I),E.push(I))}return ec(E),E.length>0}function qs(_){let E=[];return L.forEach((I,x)=>{(!_||_(x))&&(I.cancel(),E.push(x),L.delete(x))}),E}function tg(_,E,I){if(i=_,s=E,o=I||(x=>x.key),!a&&c.navigation===ka){a=!0;let x=nc(c.location,c.matches);x!=null&&_e({restoreScrollPosition:x})}return()=>{i=null,s=null,o=null}}function ng(_,E){if(i&&o&&s){let I=E.map(A=>Td(A,c.loaderData)),x=o(_,I)||_.key;i[x]=s()}}function nc(_,E){if(i&&o&&s){let I=E.map(z=>Td(z,c.loaderData)),x=o(_,I)||_.key,A=i[x];if(typeof A=="number")return A}return null}return p={get basename(){return e.basename},get state(){return c},get routes(){return t},initialize:Ue,subscribe:vn,enableScrollRestoration:tg,navigate:Nr,fetch:le,revalidate:xr,createHref:_=>e.history.createHref(_),encodeLocation:_=>e.history.encodeLocation(_),getFetcher:ee,deleteFetcher:Qs,dispose:gn,_internalFetchControllers:v,_internalActiveDeferreds:L},p}function g0(e){return e!=null&&"formData"in e}function vd(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:wt(e);if(!t||!g0(t))return{path:r};if(t.formMethod&&!S0(t.formMethod))return{path:r,error:kn(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:Dp(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},Tn(i.formMethod)))return{path:r,submission:i};let o=jt(r);try{let s=Pp(t.formData);n&&o.search&&Op(o.search)&&s.append("index",""),o.search="?"+s}catch{return{path:r,error:kn(400)}}return{path:wt(o),submission:i}}function v0(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function yd(e,t,n,r,i,o,s,a,l,u){let f=l?Object.values(l)[0]:a?Object.values(a)[0]:void 0,p=l?Object.keys(l)[0]:void 0,g=v0(t,p).filter((y,N)=>y.route.loader!=null&&(y0(e.loaderData,e.matches[N],y)||o.some(h=>h===y.route.id)||wd(e.location,e.matches[N],n,r,y,i,f))),w=[];return u&&u.forEach((y,N)=>{let[h,d,m]=y;s.includes(N)?w.push([N,h,d,m]):i&&wd(h,d,n,h,d,i,f)&&w.push([N,h,d,m])}),[g,w]}function y0(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Rp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function wd(e,t,n,r,i,o,s){let a=Oi(e),l=t.params,u=Oi(r),f=i.params,p=Rp(t,i)||a.toString()===u.toString()||a.search!==u.search||o;if(i.route.shouldRevalidate){let c=i.route.shouldRevalidate(q({currentUrl:a,currentParams:l,nextUrl:u,nextParams:f},n,{actionResult:s,defaultShouldRevalidate:p}));if(typeof c=="boolean")return c}return p}async function Wr(e,t,n,r,i,o,s,a){i===void 0&&(i="/"),o===void 0&&(o=!1),s===void 0&&(s=!1);let l,u,f,p=new Promise((g,w)=>f=w),c=()=>f();t.signal.addEventListener("abort",c);try{let g=n.route[e];j(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),u=await Promise.race([g({request:t,params:n.params,context:a}),p]),j(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){l=ve.error,u=g}finally{t.signal.removeEventListener("abort",c)}if(E0(u)){let g=u.status;if(c0.has(g)){let N=u.headers.get("Location");if(j(N,"Redirects returned/thrown from loaders/actions must have a Location header"),!(/^[a-z+]+:\/\//i.test(N)||N.startsWith("//"))){let d=r.slice(0,r.indexOf(n)+1),m=Ls(d).map(k=>k.pathnameBase),v=Uu(N,m,new URL(t.url).pathname);if(j(wt(v),"Unable to resolve redirect location: "+N),i){let k=v.pathname;v.pathname=k==="/"?i:Nt([i,k])}N=wt(v)}if(o)throw u.headers.set("Location",N),u;return{type:ve.redirect,status:g,location:N,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(s)throw{type:l||ve.data,response:u};let w,y=u.headers.get("Content-Type");return y&&/\bapplication\/json\b/.test(y)?w=await u.json():w=await u.text(),l===ve.error?{type:l,error:new Us(g,u.statusText,w),headers:u.headers}:{type:ve.data,data:w,statusCode:u.status,headers:u.headers}}return l===ve.error?{type:l,error:u}:u instanceof i0?{type:ve.deferred,deferredData:u}:{type:ve.data,data:u}}function Kr(e,t,n){let r=Oi(Dp(e)).toString(),i={signal:t};if(n&&Tn(n.formMethod)){let{formMethod:o,formEncType:s,formData:a}=n;i.method=o.toUpperCase(),i.body=s==="application/x-www-form-urlencoded"?Pp(a):a}return new Request(r,i)}function Pp(e){let t=new URLSearchParams;for(let[n,r]of e.entries())j(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),t.append(n,r);return t}function w0(e,t,n,r,i){let o={},s=null,a,l=!1,u={};return n.forEach((f,p)=>{let c=t[p].route.id;if(j(!gr(f),"Cannot handle redirect results in processLoaderData"),ui(f)){let g=lr(e,c),w=f.error;r&&(w=Object.values(r)[0],r=void 0),s=s||{},s[g.route.id]==null&&(s[g.route.id]=w),o[c]=void 0,l||(l=!0,a=Tp(f.error)?f.error.status:500),f.headers&&(u[c]=f.headers)}else Dn(f)?(i&&i.set(c,f.deferredData),o[c]=f.deferredData.data):(o[c]=f.data,f.statusCode!=null&&f.statusCode!==200&&!l&&(a=f.statusCode),f.headers&&(u[c]=f.headers))}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function _d(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=w0(t,n,r,i,a);for(let f=0;f<o.length;f++){let[p,,c]=o[f];j(s!==void 0&&s[f]!==void 0,"Did not find corresponding fetcher result");let g=s[f];if(ui(g)){let w=lr(e.matches,c.route.id);u&&u[w.route.id]||(u=q({},u,{[w.route.id]:g.error})),e.fetchers.delete(p)}else{if(gr(g))throw new Error("Unhandled fetcher revalidation redirect");if(Dn(g))throw new Error("Unhandled fetcher deferred data");{let w={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(p,w)}}}return{loaderData:l,errors:u}}function Ed(e,t,n,r){let i=q({},t);for(let o of n){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function lr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Sd(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function kn(e,t){let{pathname:n,routeId:r,method:i}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s="Cannot submit binary form data using GET"):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Us(e||500,o,new Error(s),!0)}function Id(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(gr(n))return n}}function Dp(e){let t=typeof e=="string"?jt(e):e;return wt(q({},t,{hash:""}))}function _0(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Dn(e){return e.type===ve.deferred}function ui(e){return e.type===ve.error}function gr(e){return(e&&e.type)===ve.redirect}function E0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function S0(e){return u0.has(e)}function Tn(e){return a0.has(e)}async function kd(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s],u=e.find(p=>p.route.id===l.route.id),f=u!=null&&!Rp(u,l)&&(o&&o[l.route.id])!==void 0;Dn(a)&&(i||f)&&await Ap(a,r,i).then(p=>{p&&(n[s]=p||n[s])})}}async function Ap(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ve.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ve.error,error:i}}return{type:ve.data,data:e.deferredData.data}}}function Op(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Td(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Cd(e,t){let n=typeof t=="string"?jt(t).search:t.search;if(e[e.length-1].route.index&&Op(n||""))return e[e.length-1];let r=Ls(e);return r[r.length-1]}/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}function I0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const k0=typeof Object.is=="function"?Object.is:I0,{useState:T0,useEffect:C0,useLayoutEffect:R0,useDebugValue:P0}=Ua;function D0(e,t,n){const r=t(),[{inst:i},o]=T0({inst:{value:r,getSnapshot:t}});return R0(()=>{i.value=r,i.getSnapshot=t,Ta(i)&&o({inst:i})},[e,r,t]),C0(()=>(Ta(i)&&o({inst:i}),e(()=>{Ta(i)&&o({inst:i})})),[e]),P0(r),r}function Ta(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!k0(n,r)}catch{return!0}}function A0(e,t,n){return t()}const O0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N0=!O0,x0=N0?A0:D0,M0="useSyncExternalStore"in Ua?(e=>e.useSyncExternalStore)(Ua):x0,L0=C.createContext(null),Np=C.createContext(null),Fu=C.createContext(null),Fs=C.createContext(null),bs=C.createContext(null),Dr=C.createContext({outlet:null,matches:[]}),xp=C.createContext(null);function U0(e,t){let{relative:n}=t===void 0?{}:t;Bi()||j(!1);let{basename:r,navigator:i}=C.useContext(Fs),{hash:o,pathname:s,search:a}=Mp(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Nt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Bi(){return C.useContext(bs)!=null}function zs(){return Bi()||j(!1),C.useContext(bs).location}function js(){Bi()||j(!1);let{basename:e,navigator:t}=C.useContext(Fs),{matches:n}=C.useContext(Dr),{pathname:r}=zs(),i=JSON.stringify(Ls(n).map(a=>a.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Uu(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Nt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}function Mp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Dr),{pathname:i}=zs(),o=JSON.stringify(Ls(r).map(s=>s.pathnameBase));return C.useMemo(()=>Uu(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function F0(e,t){Bi()||j(!1);let{navigator:n}=C.useContext(Fs),r=C.useContext(Fu),{matches:i}=C.useContext(Dr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=zs(),u;if(t){var f;let y=typeof t=="string"?jt(t):t;a==="/"||(f=y.pathname)!=null&&f.startsWith(a)||j(!1),u=y}else u=l;let p=u.pathname||"/",c=a==="/"?p:p.slice(a.length)||"/",g=Jr(e,{pathname:c}),w=$0(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Nt([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Nt([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&w?C.createElement(bs.Provider,{value:{location:as({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ue.Pop}},w):w}function b0(){let e=W0(),t=Tp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unhandled Thrown Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:o},"errorElement")," props on ",C.createElement("code",{style:o},"<Route>")))}class z0 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Dr.Provider,{value:this.props.routeContext},C.createElement(xp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j0(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(L0);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),C.createElement(Dr.Provider,{value:t},r)}function $0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||j(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||C.createElement(b0,null):null,f=t.concat(r.slice(0,a+1)),p=()=>C.createElement(j0,{match:s,routeContext:{outlet:o,matches:f}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?C.createElement(z0,{location:n.location,component:u,error:l,children:p(),routeContext:{outlet:null,matches:f}}):p()},null)}var Rd;(function(e){e.UseRevalidator="useRevalidator"})(Rd||(Rd={}));var ls;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ls||(ls={}));function B0(e){let t=C.useContext(Fu);return t||j(!1),t}function V0(e){let t=C.useContext(Dr);return t||j(!1),t}function H0(e){let t=V0(),n=t.matches[t.matches.length-1];return n.route.id||j(!1),n.route.id}function W0(){var e;let t=C.useContext(xp),n=B0(ls.UseRouteError),r=H0(ls.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function K0(e){let{fallbackElement:t,router:n}=e,r=M0(n.subscribe,()=>n.state,()=>n.state),i=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:s=>n.navigate(s),push:(s,a,l)=>n.navigate(s,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(s,a,l)=>n.navigate(s,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),o=n.basename||"/";return C.createElement(Np.Provider,{value:{router:n,navigator:i,static:!1,basename:o}},C.createElement(Fu.Provider,{value:r},C.createElement(Q0,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?C.createElement(q0,null):t)))}function G0(e){j(!1)}function Q0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ue.Pop,navigator:o,static:s=!1}=e;Bi()&&j(!1);let a=t.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=jt(r));let{pathname:u="/",search:f="",hash:p="",state:c=null,key:g="default"}=r,w=C.useMemo(()=>{let y=kp(u,a);return y==null?null:{pathname:y,search:f,hash:p,state:c,key:g}},[a,u,f,p,c,g]);return w==null?null:C.createElement(Fs.Provider,{value:l},C.createElement(bs.Provider,{children:n,value:{location:w,navigationType:i}}))}function q0(e){let{children:t,location:n}=e,r=C.useContext(Np),i=r&&!t?r.router.routes:Nl(t);return F0(i,n)}var Pd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Pd||(Pd={}));new Promise(()=>{});function Nl(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,Nl(r.props.children,t));return}r.type!==G0&&j(!1),!r.props.index||!r.props.children||j(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=Nl(r.props.children,o)),n.push(s)}),n}function Lp(e){return e.map(t=>{let n=as({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=Lp(n.children)),n})}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}function Y0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function J0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X0(e,t){return e.button===0&&(!t||t==="_self")&&!J0(e)}const Z0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ew(e,t){return m0({basename:t==null?void 0:t.basename,history:Ly({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||tw(),routes:Lp(e)}).initialize()}function tw(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=us({},t,{errors:nw(t.errors)})),t}function nw(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Us(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const rw=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f}=t,p=Y0(t,Z0),c=U0(u,{relative:i}),g=iw(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function w(y){r&&r(y),y.defaultPrevented||g(y)}return C.createElement("a",us({},p,{href:c,onClick:o?r:w,ref:n,target:l}))});var Dd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Dd||(Dd={}));var Ad;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ad||(Ad={}));function iw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=js(),l=zs(),u=Mp(e,{relative:s});return C.useCallback(f=>{if(X0(f,n)){f.preventDefault();let p=r!==void 0?r:wt(l)===wt(u);a(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ow=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,p=(o&3)<<4|a>>4;let c=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(c=64)),r.push(n[f],n[p],n[c],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Up(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ow(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||p==null)throw Error();const c=o<<2|a>>4;if(r.push(c),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},sw=function(e){const t=Up(e);return Fp.encodeByteArray(t,!0)},bp=function(e){return sw(e).replace(/\./g,"")},zp=function(e){try{return Fp.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function jp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uw(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $p(){try{return typeof indexedDB=="object"}catch{return!1}}function Bp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function cw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function dw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=()=>dw().__FIREBASE_DEFAULTS__,hw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},pw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zp(e[1]);return t&&JSON.parse(t)},bu=()=>{try{return fw()||hw()||pw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},mw=e=>{var t,n;return(n=(t=bu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gw=()=>{var e;return(e=bu())===null||e===void 0?void 0:e.config},Vp=e=>{var t;return(t=bu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="FirebaseError";class Et extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=yw,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kn.prototype.create)}}class Kn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?ww(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Et(i,a,r)}}function ww(e,t){return e.replace(_w,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const _w=/\{\$([^}]+)}/g;function Ew(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ni(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Od(o)&&Od(s)){if(!Ni(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Od(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Xr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Zr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Sw(e,t){const n=new Iw(e,t);return n.subscribe.bind(n)}class Iw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ca(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=1e3,Cw=2,Rw=4*60*60*1e3,Pw=.5;function Nd(e,t=Tw,n=Cw){const r=t*Math.pow(n,e),i=Math.round(Pw*r*(Math.random()-.5)*2);return Math.min(Rw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return e&&e._delegate?e._delegate:e}class _t{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new vw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ow(t))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=In){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=In){return this.instances.has(t)}getOptions(t=In){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Aw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=In){return this.component?this.component.multipleInstances?t:In:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Aw(e){return e===In?void 0:e}function Ow(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Dw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const xw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Mw=Y.INFO,Lw={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Uw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Lw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zu{constructor(t){this.name=t,this._logLevel=Mw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Fw=(e,t)=>t.some(n=>e instanceof n);let xd,Md;function bw(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hp=new WeakMap,xl=new WeakMap,Wp=new WeakMap,Ra=new WeakMap,ju=new WeakMap;function jw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(un(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Hp.set(n,e)}).catch(()=>{}),ju.set(t,e),t}function $w(e){if(xl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});xl.set(e,t)}let Ml={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Bw(e){Ml=e(Ml)}function Vw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pa(this),t,...n);return Wp.set(r,t.sort?t.sort():[t]),un(r)}:zw().includes(e)?function(...t){return e.apply(Pa(this),t),un(Hp.get(this))}:function(...t){return un(e.apply(Pa(this),t))}}function Hw(e){return typeof e=="function"?Vw(e):(e instanceof IDBTransaction&&$w(e),Fw(e,bw())?new Proxy(e,Ml):e)}function un(e){if(e instanceof IDBRequest)return jw(e);if(Ra.has(e))return Ra.get(e);const t=Hw(e);return t!==e&&(Ra.set(e,t),ju.set(t,e)),t}const Pa=e=>ju.get(e);function Kp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=un(s);return r&&s.addEventListener("upgradeneeded",l=>{r(un(s.result),l.oldVersion,l.newVersion,un(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ww=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],Da=new Map;function Ld(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Da.get(t))return Da.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ww.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Da.set(t,o),o}Bw(e=>({...e,get:(t,n,r)=>Ld(t,n)||e.get(t,n,r),has:(t,n)=>!!Ld(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ll="@firebase/app",Ud="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new zu("@firebase/app"),qw="@firebase/app-compat",Yw="@firebase/analytics-compat",Jw="@firebase/analytics",Xw="@firebase/app-check-compat",Zw="@firebase/app-check",e_="@firebase/auth",t_="@firebase/auth-compat",n_="@firebase/database",r_="@firebase/database-compat",i_="@firebase/functions",o_="@firebase/functions-compat",s_="@firebase/installations",a_="@firebase/installations-compat",l_="@firebase/messaging",u_="@firebase/messaging-compat",c_="@firebase/performance",d_="@firebase/performance-compat",f_="@firebase/remote-config",h_="@firebase/remote-config-compat",p_="@firebase/storage",m_="@firebase/storage-compat",g_="@firebase/firestore",v_="@firebase/firestore-compat",y_="firebase",w_="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="[DEFAULT]",__={[Ll]:"fire-core",[qw]:"fire-core-compat",[Jw]:"fire-analytics",[Yw]:"fire-analytics-compat",[Zw]:"fire-app-check",[Xw]:"fire-app-check-compat",[e_]:"fire-auth",[t_]:"fire-auth-compat",[n_]:"fire-rtdb",[r_]:"fire-rtdb-compat",[i_]:"fire-fn",[o_]:"fire-fn-compat",[s_]:"fire-iid",[a_]:"fire-iid-compat",[l_]:"fire-fcm",[u_]:"fire-fcm-compat",[c_]:"fire-perf",[d_]:"fire-perf-compat",[f_]:"fire-rc",[h_]:"fire-rc-compat",[p_]:"fire-gcs",[m_]:"fire-gcs-compat",[g_]:"fire-fst",[v_]:"fire-fst-compat","fire-js":"fire-js",[y_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Map,Fl=new Map;function E_(e,t){try{e.container.addComponent(t)}catch(n){zn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ft(e){const t=e.name;if(Fl.has(t))return zn.debug(`There were multiple attempts to register component ${t}.`),!1;Fl.set(t,e);for(const n of cs.values())E_(n,e);return!0}function Ar(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new Kn("app","Firebase",S_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=w_;function Gp(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ul,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=gw()),!n)throw cn.create("no-options");const o=cs.get(i);if(o){if(Ni(n,o.options)&&Ni(r,o.config))return o;throw cn.create("duplicate-app",{appName:i})}const s=new Nw(i);for(const l of Fl.values())s.addComponent(l);const a=new I_(n,r,s);return cs.set(i,a),a}function Qp(e=Ul){const t=cs.get(e);if(!t&&e===Ul)return Gp();if(!t)throw cn.create("no-app",{appName:e});return t}function gt(e,t,n){var r;let i=(r=__[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zn.warn(a.join(" "));return}Ft(new _t(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebase-heartbeat-database",T_=1,xi="firebase-heartbeat-store";let Aa=null;function qp(){return Aa||(Aa=Kp(k_,T_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xi)}}}).catch(e=>{throw cn.create("idb-open",{originalErrorMessage:e.message})})),Aa}async function C_(e){try{return(await qp()).transaction(xi).objectStore(xi).get(Yp(e))}catch(t){if(t instanceof Et)zn.warn(t.message);else{const n=cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zn.warn(n.message)}}}async function Fd(e,t){try{const r=(await qp()).transaction(xi,"readwrite");return await r.objectStore(xi).put(t,Yp(e)),r.done}catch(n){if(n instanceof Et)zn.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Yp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=1024,P_=30*24*60*60*1e3;class D_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new O_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=P_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bd(),{heartbeatsToSend:n,unsentEntries:r}=A_(this._heartbeatsCache.heartbeats),i=bp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bd(){return new Date().toISOString().substring(0,10)}function A_(e,t=R_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),zd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class O_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $p()?Bp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await C_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function zd(e){return bp(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(e){Ft(new _t("platform-logger",t=>new Gw(t),"PRIVATE")),Ft(new _t("heartbeat",t=>new D_(t),"PRIVATE")),gt(Ll,Ud,e),gt(Ll,Ud,"esm2017"),gt("fire-js","")}N_("");function $u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Jp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x_=Jp,Xp=new Kn("auth","Firebase",Jp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new zu("@firebase/auth");function xo(e,...t){jd.logLevel<=Y.ERROR&&jd.error(`Auth (${$s}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e,...t){throw Bu(e,...t)}function vt(e,...t){return Bu(e,...t)}function M_(e,t,n){const r=Object.assign(Object.assign({},x_()),{[t]:n});return new Kn("auth","Firebase",r).create(t,{appName:e.name})}function Bu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xp.create(e,...t)}function M(e,t,...n){if(!e)throw Bu(t,...n)}function Dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xo(t),new Error(t)}function bt(e,t){e||Dt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map;function At(e){bt(e instanceof Function,"Expected a class definition");let t=$d.get(e);return t?(bt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$d.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(e,t){const n=Ar(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ni(o,t??{}))return i;lt(i,"already-initialized")}return n.initialize({options:t})}function U_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function F_(){return Bd()==="http:"||Bd()==="https:"}function Bd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F_()||jp()||"connection"in navigator)?navigator.onLine:!0}function z_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n){this.shortDelay=t,this.longDelay=n,bt(n>t,"Short delay should be less than long delay!"),this.isMobile=aw()||lw()}get(){return b_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(e,t){bt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=new Hi(3e4,6e4);function Wi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ki(e,t,n,r,i={}){return em(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Vi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zp.fetch()(tm(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function em(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},j_),t);try{const i=new B_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw wo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw wo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw wo(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw M_(e,f,u);lt(e,f)}}catch(i){if(i instanceof Et)throw i;lt(e,"network-request-failed")}}async function Gi(e,t,n,r,i={}){const o=await Ki(e,t,n,r,i);return"mfaPendingCredential"in o&&lt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function tm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Vu(e.config,i):`${e.config.apiScheme}://${i}`}class B_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),$_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(e,t){return Ki(e,"POST","/v1/accounts:delete",t)}async function H_(e,t){return Ki(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function W_(e,t=!1){const n=ut(e),r=await n.getIdToken(t),i=Hu(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ci(Oa(i.auth_time)),issuedAtTime:ci(Oa(i.iat)),expirationTime:ci(Oa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Oa(e){return Number(e)*1e3}function Hu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=zp(n);return i?JSON.parse(i):(xo("Failed to decode base64 JWT payload"),null)}catch(i){return xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function K_(e){const t=Hu(e);return M(t,"internal-error"),M(typeof t.exp<"u","internal-error"),M(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Et&&G_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function G_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ci(this.lastLoginAt),this.creationTime=ci(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Mi(e,H_(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?J_(o.providerUserInfo):[],a=Y_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new nm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function q_(e){const t=ut(e);await ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Y_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function J_(e){return e.map(t=>{var{providerId:n}=t,r=$u(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,t){const n=await em(e,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=tm(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){M(t.idToken,"internal-error"),M(typeof t.idToken<"u","internal-error"),M(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):K_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return M(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await X_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Li;return r&&(M(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(M(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e,t){M(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class xn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=$u(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new nm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Mi(this,this.stsTokenManager.getToken(this.auth,t));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return W_(this,t)}reload(){return q_(this)}_assign(t){this!==t&&(M(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Mi(this,V_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:m,emailVerified:v,isAnonymous:k,providerData:D,stsTokenManager:R}=n;M(m&&R,t,"internal-error");const O=Li.fromJSON(this.name,R);M(typeof m=="string",t,"internal-error"),Vt(p,t.name),Vt(c,t.name),M(typeof v=="boolean",t,"internal-error"),M(typeof k=="boolean",t,"internal-error"),Vt(g,t.name),Vt(w,t.name),Vt(y,t.name),Vt(N,t.name),Vt(h,t.name),Vt(d,t.name);const W=new xn({uid:m,auth:t,email:c,emailVerified:v,displayName:p,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:O,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&(W.providerData=D.map(L=>Object.assign({},L))),N&&(W._redirectEventId=N),W}static async _fromIdTokenResponse(t,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const o=new xn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ds(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}rm.type="NONE";const Vd=rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t,n){return`firebase:${e}:${t}:${n}`}class vr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Mo(this.userKey,i.apiKey,o),this.fullPersistenceKey=Mo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new vr(At(Vd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||At(Vd);const s=Mo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const p=xn._fromJSON(t,f);u!==o&&(a=p),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new vr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new vr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(im(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lm(t))return"Blackberry";if(um(t))return"Webos";if(Wu(t))return"Safari";if((t.includes("chrome/")||om(t))&&!t.includes("edge/"))return"Chrome";if(am(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function im(e=Ce()){return/firefox\//i.test(e)}function Wu(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function om(e=Ce()){return/crios\//i.test(e)}function sm(e=Ce()){return/iemobile/i.test(e)}function am(e=Ce()){return/android/i.test(e)}function lm(e=Ce()){return/blackberry/i.test(e)}function um(e=Ce()){return/webos/i.test(e)}function Bs(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Z_(e=Ce()){var t;return Bs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function e1(){return uw()&&document.documentMode===10}function cm(e=Ce()){return Bs(e)||am(e)||um(e)||lm(e)||/windows phone/i.test(e)||sm(e)}function t1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e,t=[]){let n;switch(e){case"Browser":n=Hd(Ce());break;case"Worker":n=`${Hd(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.beforeStateQueue=new n1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=z_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ut(t):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&M(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(At(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Kn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&At(t)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await vr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return M(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Qi(e){return ut(e)}class Wd{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sw(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function i1(e,t,n){const r=Qi(e);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=fm(t),{host:s,port:a}=o1(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||s1()}function fm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function o1(e){const t=fm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Kd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Kd(s)}}}function Kd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function s1(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(t){return Dt("not implemented")}_linkToIdToken(t,n){return Dt("not implemented")}_getReauthenticationResolver(t){return Dt("not implemented")}}async function a1(e,t){return Ki(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(e,t){return Gi(e,"POST","/v1/accounts:signInWithPassword",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(e,t){return Gi(e,"POST","/v1/accounts:signInWithEmailLink",Wi(e,t))}async function c1(e,t){return Gi(e,"POST","/v1/accounts:signInWithEmailLink",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Ku{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ui(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ui(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return l1(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return u1(t,{email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return a1(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c1(t,{idToken:n,email:this._email,oobCode:this._password});default:lt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(e,t){return Gi(e,"POST","/v1/accounts:signInWithIdp",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="http://localhost";class jn extends Ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=$u(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new jn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return yr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,yr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,yr(t,n)}buildRequest(){const t={requestUri:d1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Vi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h1(e){const t=Xr(Zr(e)).link,n=t?Xr(Zr(t)).deep_link_id:null,r=Xr(Zr(e)).deep_link_id;return(r?Xr(Zr(r)).link:null)||r||n||t||e}class Gu{constructor(t){var n,r,i,o,s,a;const l=Xr(Zr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=f1((i=l.mode)!==null&&i!==void 0?i:null);M(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=h1(t);try{return new Gu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.providerId=Or.PROVIDER_ID}static credential(t,n){return Ui._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Gu.parseLink(n);return M(r,"argument-error"),Ui._fromEmailAndCode(t,r.code,r.tenantId)}}Or.PROVIDER_ID="password";Or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends hm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends qi{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends qi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends qi{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends qi{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(e,t){return Gi(e,"POST","/v1/accounts:signUp",Wi(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await xn._fromIdTokenResponse(t,r,i),s=Gd(r);return new $n({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Gd(r);return new $n({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Gd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Et{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fs.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new fs(t,n,r,i)}}function pm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?fs._fromErrorAndOperation(e,o,t,r):o})}async function m1(e,t,n=!1){const r=await Mi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $n._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Mi(e,pm(r,i,t,e),n);M(o.idToken,r,"internal-error");const s=Hu(o.idToken);M(s,r,"internal-error");const{sub:a}=s;return M(e.uid===a,r,"user-mismatch"),$n._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(e,t,n=!1){const r="signIn",i=await pm(e,r,t),o=await $n._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function v1(e,t){return mm(Qi(e),t)}async function y1(e,t,n){const r=Qi(e),i=await p1(r,{returnSecureToken:!0,email:t,password:n}),o=await $n._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function w1(e,t,n){return v1(ut(e),Or.credential(t,n))}function _1(e,t,n,r){return ut(e).onIdTokenChanged(t,n,r)}function E1(e,t,n){return ut(e).beforeAuthStateChanged(t,n)}function S1(e,t,n,r){return ut(e).onAuthStateChanged(t,n,r)}function I1(e){return ut(e).signOut()}const hs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hs,"1"),this.storage.removeItem(hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){const e=Ce();return Wu(e)||Bs(e)}const T1=1e3,C1=10;class vm extends gm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k1()&&t1(),this.fallbackToPolling=cm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);e1()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,C1):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},T1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}vm.type="LOCAL";const R1=vm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym extends gm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ym.type="SESSION";const wm=ym;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await P1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Qu("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const c=p;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(c.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function A1(e){yt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function O1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function x1(){return _m()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="firebaseLocalStorageDb",M1=1,ps="firebaseLocalStorage",Sm="fbase_key";class Yi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hs(e,t){return e.transaction([ps],t?"readwrite":"readonly").objectStore(ps)}function L1(){const e=indexedDB.deleteDatabase(Em);return new Yi(e).toPromise()}function zl(){const e=indexedDB.open(Em,M1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ps,{keyPath:Sm})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ps)?t(r):(r.close(),await L1(),t(await zl()))})})}async function Qd(e,t,n){const r=Hs(e,!0).put({[Sm]:t,value:n});return new Yi(r).toPromise()}async function U1(e,t){const n=Hs(e,!1).get(t),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function qd(e,t){const n=Hs(e,!0).delete(t);return new Yi(n).toPromise()}const F1=800,b1=3;class Im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>b1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vs._getInstance(x1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await O1(),!this.activeServiceWorker)return;this.sender=new D1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||N1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zl();return await Qd(t,hs,"1"),await qd(t,hs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qd(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>U1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qd(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Hs(i,!1).getAll();return new Yi(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Im.type="LOCAL";const z1=Im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function $1(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=vt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",j1().appendChild(r)})}function B1(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(e,t){return t?At(t):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends Ku{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return yr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return yr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return yr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function H1(e){return mm(e.auth,new qu(e),e.bypassAuthState)}function W1(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),g1(n,new qu(e),e.bypassAuthState)}async function K1(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),m1(n,new qu(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return H1;case"linkViaPopup":case"linkViaRedirect":return K1;case"reauthViaPopup":case"reauthViaRedirect":return W1;default:lt(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Hi(2e3,1e4);class ur extends km{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return M(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=Qu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,G1.get())};t()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1="pendingRedirect",Lo=new Map;class q1 extends km{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Lo.get(this.auth._key());if(!t){try{const r=await Y1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Lo.set(this.auth._key(),t)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y1(e,t){const n=Z1(t),r=X1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function J1(e,t){Lo.set(e._key(),t)}function X1(e){return At(e._redirectPersistence)}function Z1(e){return Mo(Q1,e.config.apiKey,e.name)}async function eE(e,t,n=!1){const r=Qi(e),i=V1(r,t),s=await new q1(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=10*60*1e3;class nE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Tm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(t))}saveEventToCache(t){this.cachedEventUids.add(Yd(t)),this.lastProcessedEventTime=Date.now()}}function Yd(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Tm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(e,t={}){return Ki(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sE=/^https?/;async function aE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await iE(e);for(const n of t)try{if(lE(n))return}catch{}lt(e,"unauthorized-domain")}function lE(e){const t=bl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!sE.test(n))return!1;if(oE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Hi(3e4,6e4);function Jd(){const e=yt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cE(e){return new Promise((t,n)=>{var r,i,o;function s(){Jd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jd(),n(vt(e,"network-request-failed"))},timeout:uE.get()})}if(!((i=(r=yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=yt().gapi)===null||o===void 0)&&o.load)s();else{const a=B1("iframefcb");return yt()[a]=()=>{gapi.load?s():n(vt(e,"network-request-failed"))},$1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Uo=null,t})}let Uo=null;function dE(e){return Uo=Uo||cE(e),Uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new Hi(5e3,15e3),hE="__/auth/iframe",pE="emulator/auth/iframe",mE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vE(e){const t=e.config;M(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vu(t,pE):`https://${e.config.authDomain}/${hE}`,r={apiKey:t.apiKey,appName:e.name,v:$s},i=gE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Vi(r).slice(1)}`}async function yE(e){const t=await dE(e),n=yt().gapi;return M(n,e,"internal-error"),t.open({where:document.body,url:vE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=vt(e,"network-request-failed"),a=yt().setTimeout(()=>{o(s)},fE.get());function l(){yt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_E=500,EE=600,SE="_blank",IE="http://localhost";class Xd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kE(e,t,n,r=_E,i=EE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ce().toLowerCase();n&&(a=om(u)?SE:n),im(u)&&(t=t||IE,l.scrollbars="yes");const f=Object.entries(l).reduce((c,[g,w])=>`${c}${g}=${w},`,"");if(Z_(u)&&a!=="_self")return TE(t||"",a),new Xd(null);const p=window.open(t||"",a,f);M(p,e,"popup-blocked");try{p.focus()}catch{}return new Xd(p)}function TE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="__/auth/handler",RE="emulator/auth/handler";function Zd(e,t,n,r,i,o){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(t instanceof hm){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ew(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof qi){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${PE(e)}?${Vi(a).slice(1)}`}function PE({config:e}){return e.emulator?Vu(e,RE):`https://${e.authDomain}/${CE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="webStorageSupport";class DE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wm,this._completeRedirectFn=eE,this._overrideRedirectResult=J1}async _openPopup(t,n,r,i){var o;bt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Zd(t,n,r,bl(),i);return kE(t,s,Qu())}async _openRedirect(t,n,r,i){return await this._originValidation(t),A1(Zd(t,n,r,bl(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(bt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await yE(t),r=new nE(t);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Na,{type:Na},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Na];s!==void 0&&n(!!s),lt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return cm()||Wu()||Bs()}}const AE=DE;var ef="@firebase/auth",tf="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xE(e){Ft(new _t("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{M(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),M(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dm(e)},f=new r1(a,l,u);return U_(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ft(new _t("auth-internal",t=>{const n=Qi(t.getProvider("auth").getImmediate());return(r=>new OE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(ef,tf,NE(e)),gt(ef,tf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=5*60,LE=Vp("authIdTokenMaxAge")||ME;let nf=null;const UE=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LE)return;const i=n==null?void 0:n.token;nf!==i&&(nf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FE(e=Qp()){const t=Ar(e,"auth");if(t.isInitialized())return t.getImmediate();const n=L_(e,{popupRedirectResolver:AE,persistence:[z1,R1,wm]}),r=Vp("authTokenSyncURL");if(r){const o=UE(r);E1(n,o,()=>o(n.currentUser)),_1(n,s=>o(s))}const i=mw("auth");return i&&i1(n,`http://${i}`),n}xE("Browser");var bE="firebase",zE="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(bE,zE,"app");const Cm="@firebase/installations",Yu="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=1e4,Pm=`w:${Yu}`,Dm="FIS_v2",jE="https://firebaseinstallations.googleapis.com/v1",$E=60*60*1e3,BE="installations",VE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bn=new Kn(BE,VE,HE);function Am(e){return e instanceof Et&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om({projectId:e}){return`${jE}/projects/${e}/installations`}function Nm(e){return{token:e.token,requestStatus:2,expiresIn:KE(e.expiresIn),creationTime:Date.now()}}async function xm(e,t){const r=(await t.json()).error;return Bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function WE(e,{refreshToken:t}){const n=Mm(e);return n.append("Authorization",GE(t)),n}async function Lm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function KE(e){return Number(e.replace("s","000"))}function GE(e){return`${Dm} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Om(e),i=Mm(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Dm,appId:e.appId,sdkVersion:Pm},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Lm(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Nm(u.authToken)}}else throw await xm("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=/^[cdef][\w-]{21}$/,jl="";function JE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=XE(e);return YE.test(n)?n:jl}catch{return jl}}function XE(e){return qE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Map;function bm(e,t){const n=Ws(e);zm(n,t),ZE(n,t)}function zm(e,t){const n=Fm.get(e);if(n)for(const r of n)r(t)}function ZE(e,t){const n=eS();n&&n.postMessage({key:e,fid:t}),tS()}let An=null;function eS(){return!An&&"BroadcastChannel"in self&&(An=new BroadcastChannel("[Firebase] FID Change"),An.onmessage=e=>{zm(e.data.key,e.data.fid)}),An}function tS(){Fm.size===0&&An&&(An.close(),An=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="firebase-installations-database",rS=1,Vn="firebase-installations-store";let xa=null;function Ju(){return xa||(xa=Kp(nS,rS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Vn)}}})),xa}async function ms(e,t){const n=Ws(e),i=(await Ju()).transaction(Vn,"readwrite"),o=i.objectStore(Vn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&bm(e,t.fid),t}async function jm(e){const t=Ws(e),r=(await Ju()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(t),await r.done}async function Ks(e,t){const n=Ws(e),i=(await Ju()).transaction(Vn,"readwrite"),o=i.objectStore(Vn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&bm(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(e){let t;const n=await Ks(e.appConfig,r=>{const i=iS(r),o=oS(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===jl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function iS(e){const t=e||{fid:JE(),registrationStatus:0};return $m(t)}function oS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=sS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:aS(e)}:{installationEntry:t}}async function sS(e,t){try{const n=await QE(e,t);return ms(e.appConfig,n)}catch(n){throw Am(n)&&n.customData.serverCode===409?await jm(e.appConfig):await ms(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function aS(e){let t=await rf(e.appConfig);for(;t.registrationStatus===1;)await Um(100),t=await rf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Xu(e);return r||n}return t}function rf(e){return Ks(e,t=>{if(!t)throw Bn.create("installation-not-found");return $m(t)})}function $m(e){return lS(e)?{fid:e.fid,registrationStatus:0}:e}function lS(e){return e.registrationStatus===1&&e.registrationTime+Rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS({appConfig:e,heartbeatServiceProvider:t},n){const r=cS(e,n),i=WE(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Pm,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Lm(()=>fetch(r,a));if(l.ok){const u=await l.json();return Nm(u)}else throw await xm("Generate Auth Token",l)}function cS(e,{fid:t}){return`${Om(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(e,t=!1){let n;const r=await Ks(e.appConfig,o=>{if(!Bm(o))throw Bn.create("not-registered");const s=o.authToken;if(!t&&hS(s))return o;if(s.requestStatus===1)return n=dS(e,t),o;{if(!navigator.onLine)throw Bn.create("app-offline");const a=mS(o);return n=fS(e,a),a}});return n?await n:r.authToken}async function dS(e,t){let n=await of(e.appConfig);for(;n.authToken.requestStatus===1;)await Um(100),n=await of(e.appConfig);const r=n.authToken;return r.requestStatus===0?Zu(e,t):r}function of(e){return Ks(e,t=>{if(!Bm(t))throw Bn.create("not-registered");const n=t.authToken;return gS(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function fS(e,t){try{const n=await uS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ms(e.appConfig,r),n}catch(n){if(Am(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ms(e.appConfig,r)}throw n}}function Bm(e){return e!==void 0&&e.registrationStatus===2}function hS(e){return e.requestStatus===2&&!pS(e)}function pS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+$E}function mS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function gS(e){return e.requestStatus===1&&e.requestTime+Rm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(e){const t=e,{installationEntry:n,registrationPromise:r}=await Xu(t);return r?r.catch(console.error):Zu(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(e,t=!1){const n=e;return await wS(n),(await Zu(n,t)).token}async function wS(e){const{registrationPromise:t}=await Xu(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(e){if(!e||!e.options)throw Ma("App Configuration");if(!e.name)throw Ma("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ma(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ma(e){return Bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="installations",ES="installations-internal",SS=e=>{const t=e.getProvider("app").getImmediate(),n=_S(t),r=Ar(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IS=e=>{const t=e.getProvider("app").getImmediate(),n=Ar(t,Vm).getImmediate();return{getId:()=>vS(n),getToken:i=>yS(n,i)}};function kS(){Ft(new _t(Vm,SS,"PUBLIC")),Ft(new _t(ES,IS,"PRIVATE"))}kS();gt(Cm,Yu);gt(Cm,Yu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="analytics",TS="firebase_id",CS="origin",RS=60*1e3,PS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new zu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function DS(e,t){const n=document.createElement("script");n.src=`${Hm}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function AS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function OS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Wm(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){$e.error(a)}e("config",i,o)}async function NS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Wm(n);for(const l of s){const u=a.find(p=>p.measurementId===l),f=u&&t[u.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){$e.error(o)}}function xS(e,t,n,r){async function i(o,s,a){try{o==="event"?await NS(e,t,n,s,a):o==="config"?await OS(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){$e.error(l)}}return i}function MS(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=xS(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function LS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Hm)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ye=new Kn("analytics","Analytics",US);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=30,bS=1e3;class zS{constructor(t={},n=bS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Km=new zS;function jS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $S(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:jS(r)},o=PS.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ye.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function BS(e,t=Km,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ye.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ye.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new WS;return setTimeout(async()=>{a.abort()},n!==void 0?n:RS),Gm({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Gm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Km){var o;const{appId:s,measurementId:a}=e;try{await VS(r,t)}catch(l){if(a)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await $S(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!HS(u)){if(i.deleteThrottleMetadata(s),a)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?Nd(n,i.intervalMillis,FS):Nd(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),$e.debug(`Calling attemptFetch again in ${f} millis`),Gm(e,p,r,i)}}function VS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ye.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function HS(e){if(!(e instanceof Et)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class WS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function KS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(){if($p())try{await Bp()}catch(e){return $e.warn(Ye.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return $e.warn(Ye.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function QS(e,t,n,r,i,o,s){var a;const l=BS(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>$e.error(g)),t.push(l);const u=GS().then(g=>{if(g)return r.getId()}),[f,p]=await Promise.all([l,u]);LS(o)||DS(o,f.measurementId),i("js",new Date);const c=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return c[CS]="firebase",c.update=!0,p!=null&&(c[TS]=p),i("config",f.measurementId,c),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(t){this.app=t}_delete(){return delete di[this.app.options.appId],Promise.resolve()}}let di={},sf=[];const af={};let La="dataLayer",YS="gtag",lf,Qm,uf=!1;function JS(){const e=[];if(jp()&&e.push("This is a browser extension environment."),cw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ye.create("invalid-analytics-context",{errorInfo:t});$e.warn(n.message)}}function XS(e,t,n){JS();const r=e.options.appId;if(!r)throw Ye.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ye.create("no-api-key");if(di[r]!=null)throw Ye.create("already-exists",{id:r});if(!uf){AS(La);const{wrappedGtag:o,gtagCore:s}=MS(di,sf,af,La,YS);Qm=o,lf=s,uf=!0}return di[r]=QS(e,sf,af,t,lf,La,n),new qS(e)}function ZS(e=Qp()){e=ut(e);const t=Ar(e,gs);return t.isInitialized()?t.getImmediate():eI(e)}function eI(e,t={}){const n=Ar(e,gs);if(n.isInitialized()){const i=n.getImmediate();if(Ni(t,n.getOptions()))return i;throw Ye.create("already-initialized")}return n.initialize({options:t})}function tI(e,t,n,r){e=ut(e),KS(Qm,di[e.app.options.appId],t,n,r).catch(i=>$e.error(i))}const cf="@firebase/analytics",df="0.9.0";function nI(){Ft(new _t(gs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return XS(r,i,n)},"PUBLIC")),Ft(new _t("analytics-internal",e,"PRIVATE")),gt(cf,df),gt(cf,df,"esm2017");function e(t){try{const n=t.getProvider(gs).getImmediate();return{logEvent:(r,i,o)=>tI(n,r,i,o)}}catch(n){throw Ye.create("interop-component-reg-failed",{reason:n})}}}nI();const rI={apiKey:"AIzaSyCMVugA5Nmlf_TDgtajo71Q41aMoyLDVNc",authDomain:"auth-vite-01.firebaseapp.com",projectId:"auth-vite-01",storageBucket:"auth-vite-01.appspot.com",messagingSenderId:"670025355266",appId:"1:670025355266:web:59dc4cd0525de493a0d71b",measurementId:"G-WMBCL43ZW8"},qm=Gp(rI),_o=FE(qm);ZS(qm);const Ym=C.createContext(),iI=({children:e})=>{const[t,n]=C.useState({email:"",password:""}),[r,i]=C.useState({}),o=(l,u)=>y1(_o,l,u),s=(l,u)=>w1(_o,l,u),a=()=>I1(_o);return C.useEffect(()=>{const l=S1(_o,u=>{i(u)});return()=>{l()}}),G(Ym.Provider,{value:{register:o,logIn:s,logOut:a,user:r,inputs:t,setInputs:n},children:e})},Ji=()=>C.useContext(Ym),oI=()=>{const{logOut:e}=Ji(),t=js();return G("button",{className:"generic-btn absolute top-4 right-4",onClick:async r=>{try{await e(),t("/")}catch(i){console.log(i.message)}},children:"sign out"})},sI=()=>{const{user:e}=Ji();return Ge(ws,{children:[Ge("section",{className:"my-5 flex flex-col mx-auto w-96 space-y-2",children:[Ge("h2",{children:["welcome ",e&&e.email,"!"]}),Ge("span",{children:["account created at: ",e&&e.metadata.creationTime]}),Ge("span",{children:["last sign in: ",e&&e.metadata.lastSignInTime]})]}),G(oI,{})]})},Jm=({children:e,handleSubmit:t,title:n})=>Ge("form",{className:"bg-gray-100 mt-14 rounded-sm w-[450px] mx-auto flex flex-col space-y-2 p-5 shadow-xl",onSubmit:t,children:[G("h2",{className:"text-4xl font-medium capitalize mt-1 mb-4 text-center",children:n}),e]}),vs=({inputType:e})=>{const t=i=>{const{name:o,value:s}=i.target;r(a=>({...a,[o]:s}))},{inputs:n,setInputs:r}=Ji();return Ge(ws,{children:[G("label",{htmlFor:e,className:"text-emerald-700 ",children:e}),G("input",{className:"px-4 py-2 rounded-sm focus:ring-1 focus:outline-none focus:ring-emerald-700 duration-300",value:n.inputType,onChange:t,name:e,type:e,placeholder:`please enter your ${e} here`})]})},Xm=({msg:e,title:t,linksTo:n})=>Ge("p",{className:"text-center",children:[e," ",G(rw,{to:n,className:"font-bold",children:t})]}),Zm=({welcomMsg:e})=>G("section",{className:" mt-12",children:G("p",{className:"text-emerald-700 text-6xl capitalize text-center font-bold",children:e})}),aI=()=>G("div",{className:"flex justify-around",children:G("button",{className:"generic-btn",children:"Register"})}),lI=()=>{const{register:e}=Ji(),t=js();return Ge(ws,{children:[G(Zm,{welcomMsg:"sign up a new account!"}),Ge(Jm,{handleSubmit:async r=>{r.preventDefault();try{await e(email,password),t("/user")}catch(i){console.log(i.message)}},title:"register",children:[G(vs,{inputType:"email"}),G(vs,{inputType:"password"}),G(aI,{}),G(Xm,{title:"sign in!",linksTo:"/",msg:"do you already have an account?"})]})]})},uI=()=>G("div",{className:"flex justify-around",children:G("button",{className:"generic-btn",children:"log in"})}),cI=()=>{const{logIn:e,inputs:t}=Ji(),[n,r]=C.useState(!1),i=js();return Ge(ws,{children:[G(Zm,{welcomMsg:"firebase Authentication!"}),Ge(Jm,{handleSubmit:async s=>{s.preventDefault();try{await e(t.email,t.password),i("/user")}catch{r(!0)}},title:"log in",children:[n&&G("p",{children:"please enter correct values"}),G(vs,{inputType:"email"}),G(vs,{inputType:"password"}),G(uI,{}),G(Xm,{title:"sign up!",linksTo:"/signUp",msg:"don't have an account yet?"})]})]})},dI=ew([{path:"/",element:G(cI,{})},{path:"/signup",element:G(lI,{})},{path:"/user",element:G(sI,{})}]),fI=()=>G(K0,{router:dI});Fa.createRoot(document.getElementById("root")).render(G(wf.StrictMode,{children:G(iI,{children:G(fI,{})})}));
