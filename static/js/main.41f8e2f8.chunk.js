(this["webpackJsonpflashcards-react"]=this["webpackJsonpflashcards-react"]||[]).push([[0],{42:function(e,t,n){},48:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n.n(c),i=n(33),o=n.n(i),l=(n(63),n(9)),s=n(29),u=n(8),d=n(49),f=n.n(d),b=n(40),p=n(50),v=n.n(p),j=n(6);!function(e){e.LEFT="left",e.RIGHT="right"}(r||(r={}));var h=r,O=function(e){return e.touches?e.touches[0]:e},m=function(e,t){return t===h.RIGHT?e:-e},w=function(e,t,n){return Math.abs(e)<n?0:(Math.abs(e)-n)/Math.abs(t-n)},g=n(31),x=n(3),y=function(e){var t=e.wrapperHeight,n=void 0===t?"100%":t,r=e.wrapperWidth,c=void 0===r?"100%":r,a=e.swipeThreshold,i=void 0===a?120:a,o=e.fadeThreshold,l=void 0===o?40:o,s=e.handleOnDragStart,u=(e.onOpacityChange,e.children),d=e.state,f=e.leftIcon,b=e.rightIcon,p=Object(g.useSpring)({immediate:d.pristine||!d.forced&&Math.abs(d.offset)>=i,config:{tension:390,friction:30,restSpeedThreshold:1,restDisplacementThreshold:.01,overshootClamping:!0,lastVelocity:1,mass:.1},from:{offset:0},to:{offset:d.offset,transform:"translateX(".concat(-500,"px) rotate(").concat(4.5,"deg)")}}),v=d.offset,h=Object(j.a)(Object(j.a)({},p),{},{transform:"translateX(".concat(v,"px) rotate(").concat(v/10,"deg)"),height:n,width:c}),O=Object(g.useSpring)({from:{opacity:0},to:{opacity:w(d.offset,i,l)}}).opacity;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.animated.div,{onTouchStart:s,onMouseDown:s,style:h,children:[u,Object(x.jsx)(g.animated.div,{style:{opacity:O},className:"overlay",children:v<0?f:b})]})})},E={start:0,offset:0,forced:!1,swiped:!1,moving:!1,pristine:!0,flyout:void 0},k=function(e){var t=Object(c.useState)(E),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useRef)(r);i.current=r;var o=e.swipeThreshold,l=void 0===o?120:o,s=e.onDragging,d=e.onDragEnd,f=e.onBeforeSwipe,b=e.onAfterSwipe,p=e.onSwipe,v=e.forceFlyout,w=e.disabled,g=Object(c.useCallback)((function(){a(E)}),[]),k=Object(c.useCallback)((function(){null===b||void 0===b||b(i.current.flyout),g()}),[g,b]),S=Object(c.useCallback)((function(e){null===p||void 0===p||p(e),a(Object(j.a)(Object(j.a)({},i.current),{},{offset:2*m(l,e),moving:!1,swiped:!0,flyout:e}))}),[p,l]),I=Object(c.useCallback)((function(e){f?f((function(t){return S(t||e)}),g,e):S(e)}),[S,g,f]),T=Object(c.useCallback)((function(e){var t=O(e).pageX;w||i.current.swiped||(e.stopPropagation(),a(Object(j.a)(Object(j.a)({},i.current),{},{pristine:!1,moving:!0,start:t})))}),[w]),N=Object(c.useCallback)((function(){!i.current.swiped&&i.current.moving&&(null===d||void 0===d||d(),Math.abs(i.current.offset)>=l?I(i.current.offset>0?h.RIGHT:h.LEFT):g())}),[I,g,d,l]),M=Object(c.useCallback)((function(e){var t=O(e).pageX;if(e.stopPropagation(),!w&&!i.current.swiped&&i.current.moving){var n=function(e,t){return-.75*(e-t)}(i.current.start,t);null===s||void 0===s||s(n),a(Object(j.a)(Object(j.a)({},i.current),{},{offset:n}))}}),[w,s]);return Object(c.useEffect)((function(){return window.addEventListener("touchmove",M),window.addEventListener("mousemove",M),window.addEventListener("touchend",N),window.addEventListener("mouseup",N),function(){window.removeEventListener("touchmove",M),window.removeEventListener("mousemove",M),window.removeEventListener("touchend",N),window.removeEventListener("mouseup",N)}}),[N,M]),Object(c.useEffect)((function(){if(r.flyout){var e=r.flyout===h.LEFT?-120:120,t=setInterval((function(){if(Math.abs(i.current.offset)>600)return clearInterval(t),void k();a(Object(j.a)(Object(j.a)({},i.current),{},{offset:i.current.offset+e}))}),50);return function(){return clearInterval(t)}}}),[k,r.flyout]),Object(c.useEffect)((function(){v&&a(Object(j.a)(Object(j.a)({},i.current),{},{forced:!0,flyout:v}))}),[v]),Object(x.jsx)(y,Object(j.a)({handleOnDragStart:T,state:i.current},e))},S=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function N(e,t){var n=e.title,r=e.titleId,a=T(e,S);return c.createElement("svg",I({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#00AAEA"},d:"M129.9,36.5h-11.4c-3.2,0-5.7,2.6-5.7,5.7v51.4c0,3.2,2.6,5.7,5.7,5.7h11.4V36.5z M16.5,77.2 c-0.6,1.4-1,3-1,4.6v6.2c0,6.3,5.1,11.4,11.4,11.4h31.4l-5.3,26.6c-0.3,1.3-0.1,2.6,0.5,3.8c1.3,2.6,3,4.9,5,7l2.6,2.7l36.6-36.6 c2.2-2.2,3.4-5.1,3.4-8.1V49.9c0-7.4-6-13.4-13.4-13.4H41.6c-4,0-7.8,2.1-9.8,5.5L16.5,77.2z"}))}var M=c.forwardRef(N),L=(n.p,["title","titleId"]);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function R(e,t){var n=e.title,r=e.titleId,a=C(e,L);return c.createElement("svg",H({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",{transform:"translate(9)"},c.createElement("path",{style:{fill:"#6EE94A"},d:"M146.6,10.3"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M11.7,113.8h11.4c3.2,0,5.7-2.6,5.7-5.7V56.5c0-3.2-2.6-5.7-5.7-5.7H11.7V113.8z M125.2,73 c0.6-1.4,1-3,1-4.6v-6.2c0-6.3-5.1-11.4-11.4-11.5H83.2l5.3-26.6c0.3-1.3,0.1-2.6-0.5-3.8c-1.3-2.6-3-4.9-5-7l-2.6-2.7L43.7,47.4 c-2.2,2.2-3.4,5.1-3.4,8.1v44.9c0,7.4,6,13.3,13.4,13.3h46.4c4,0,7.8-2.1,9.8-5.6L125.2,73L125.2,73z"})))}var P,A,D=c.forwardRef(R),V=(n.p,n(18)),F=n(56),B=n(83),G=n(55),Z=n(38),X=n.n(Z),z=X()((function(e,t){return{texts:{},getText:function(e){var n=t().texts[e];return _(n)},getTextRaw:function(e){return t().texts[e]}}})),_=function(e){return null===e||void 0===e?void 0:e.split("\n").reduce((function(e,t){return null===e?t:Object(x.jsxs)(x.Fragment,{children:[e,Object(x.jsx)("br",{}),t]})}),null)},J=n(26),U=function(){return function(e){Object(J.a)(e,["textDirective","leafDirective","containerDirective"],(function(e){return e.data=Object(j.a)({hName:e.name,hProperties:e.attributes},e.data),e}))}},W=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],s=o[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),b=f[0],p=f[1],v=function(e){a(e)},j=Object(c.useCallback)((function(){var e=window.speechSynthesis.getVoices();e.length>0&&v(e)}),[]),h=Object(c.useMemo)((function(){var t;return r&&null!==(t=r.find((function(t){return t.lang===e})))&&void 0!==t?t:null}),[e,r]);Object(c.useEffect)((function(){var e=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.getVoices();v(n)};return b&&window.speechSynthesis.addEventListener&&window.speechSynthesis.addEventListener("voiceschanged",e),function(){window.speechSynthesis.removeEventListener&&window.speechSynthesis.removeEventListener("voiceschanged",e)}}),[b]);var O=function(){s(!1)};Object(c.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(p(!0),j())}),[j]);return{supported:b,speak:function(e){var t=e.text,n=void 0===t?"":t,r=e.rate,c=void 0===r?1:r,a=e.pitch,i=void 0===a?1:a,o=e.volume,l=void 0===o?1:o;if(b){s(!0);var u=new window.SpeechSynthesisUtterance;u.text=n,u.voice=h,u.onend=O,u.rate=c,u.pitch=i,u.volume=l,window.speechSynthesis.speak(u)}},speaking:l,cancel:function(){b&&(s(!1),window.speechSynthesis.cancel())},voices:r}},q=n(17),K=n.n(q),Q=n(24),Y=n(5),$=X()((function(e,t){return{sounds:{},getSound:function(e){return t().sounds[e]},setSound:function(n,r){var c=t().sounds;e({sounds:Object(j.a)(Object(j.a)({},c),{},Object(Y.a)({},n,r))})}}})),ee=function(){var e=$(),t=e.getSound,n=e.setSound;return{speak:Object(c.useCallback)(function(){var e=Object(Q.a)(K.a.mark((function e(r){var c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(c=t(r))||(c=new V.Howl({src:[r]}),n(r,c)),c&&c.play();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n])}},te=function(e){var t=W(e),n=ee();return{speak:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.supported?t.speak({text:e}):n.speak(r)},cancel:function(){}}},ne=function(e){var t=e.children,n=e.fallback,r=e.lang,a=te(void 0===r?"en-US":r).speak,i=Object(c.useMemo)((function(){return"string"===typeof t[0]?t[0]:""}),[t]);return Object(x.jsx)("button",{onClick:function(e){a(i,n),e.stopPropagation()},children:"\ud83d\udd0a"})},re=["card","side"],ce=function(e){var t=e.card,n=e.side,r=Object(F.a)(e,re),c="card "+(null!==n&&void 0!==n?n:""),a=z();if(t.id){var i=a.getTextRaw("card-".concat(t.id,"-").concat(n))||"";return Object(x.jsx)("div",Object(j.a)(Object(j.a)({},r),{},{className:c,children:Object(x.jsx)(B.a,{remarkPlugins:[G.a,U],components:{voice:ne},children:i})}))}return Object(x.jsxs)("div",Object(j.a)(Object(j.a)({},r),{},{className:c,children:["back"===n&&t.text&&Object(x.jsx)("div",{className:"text",children:a.getText(t.text)}),Object(x.jsx)("div",{style:{backgroundImage:"url("+t.image+")"},className:"image"}),"back"===n&&t.subtext1&&Object(x.jsx)("div",{className:"subtext",children:a.getText(t.subtext1)}),"back"===n&&t.subtext2&&Object(x.jsx)("div",{className:"subtext",children:a.getText(t.subtext2)})]}))},ae=(n(42),new V.Howl({src:["sound/card-flip.ogg"]})),ie=new V.Howl({src:["sound/whoosh.ogg"]}),oe=Object(c.forwardRef)((function(e,t){var n=e.onSwiped,r=e.card,a=e.onCardLeftScreen,i=e.onFlipped,o=Object(c.useRef)(!1),l=Object(c.useRef)(!1),s=Object(c.useState)(!1),d=Object(u.a)(s,2),f=d[0],b=d[1],p=Object(c.useState)(),j=Object(u.a)(p,2),h=j[0],O=j[1],m=function(){l.current||(ae.play(),l.current=!1,b(!f),i(r,f))};Object(c.useImperativeHandle)(t,(function(){return{flipped:f,flip:m,swipe:function(e){ie.play(),O(e)}}}));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsx)(k,{onSwipe:function(e){ie.play(),o.current=!0,null===n||void 0===n||n(r,e)},fadeThreshold:60,onDragging:function(e){l.current=!0},onDragEnd:function(){setTimeout((function(){l.current=!1}),20)},onAfterSwipe:function(e){O(void 0),b(!1),o.current=!0,null===a||void 0===a||a(r,e)},forceFlyout:h,leftIcon:Object(x.jsx)(M,{}),rightIcon:Object(x.jsx)(D,{}),disabled:!f,children:Object(x.jsxs)(v.a,{isFlipped:f,flipDirection:"horizontal",flipSpeedFrontToBack:o.current?0:void 0,flipSpeedBackToFront:o.current?0:void 0,children:[Object(x.jsx)(ce,{onClick:m,side:"front",card:r}),Object(x.jsx)(ce,{onClick:m,side:"back",card:r})]})})})})),le=new V.Howl({src:["sound/whoosh.ogg"]}),se=Object(c.forwardRef)((function(e,t){var n=e.onSwiped,r=e.onCardLeftScreen,a=Object(c.createRef)(),i=Object(c.useState)(),o=Object(u.a)(i,2),l=o[0],s=o[1],d=z();Object(c.useImperativeHandle)(t,(function(){return{swipe:function(e){le.play(),s(e)}}}));return Object(x.jsx)("div",{ref:a,className:"flash-card-wrapper",children:Object(x.jsx)(k,{onSwipe:function(){le.play(),null===n||void 0===n||n()},fadeThreshold:60,onAfterSwipe:function(){null===r||void 0===r||r()},forceFlyout:l,children:Object(x.jsxs)("div",{className:"card card-intro",children:[Object(x.jsx)("h2",{children:d.getText("intro-header")}),Object(x.jsx)("div",{className:"intro-description",children:d.getText("intro-description")}),Object(x.jsx)("div",{className:"intro-help-correct",children:Object(x.jsx)("div",{className:"text",children:d.getText("intro-description-correct")})}),Object(x.jsx)("div",{className:"intro-help-wrong",children:Object(x.jsx)("div",{className:"text",children:d.getText("intro-description-wrong")})})]})})})})),ue=(n(71),["title","titleId"]);function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function be(e,t){var n=e.title,r=e.titleId,a=fe(e,ue);return c.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",width:98.501,height:89.935,viewBox:"0 0 98.501 89.935",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,P||(P=c.createElement("defs",null,c.createElement("style",null,".a{fill:none;}.b{fill:#707070;}"))),A||(A=c.createElement("g",{transform:"translate(0 -12.848)"},c.createElement("path",{className:"a",d:"M0,102.783Z"}),c.createElement("path",{className:"b",d:"M18.131,46.6V63.728l29.978,16.36,29.978-16.36V46.6L48.109,62.957ZM48.109,3,1,28.7l47.109,25.7L86.653,33.364V62.957h8.565V28.7Z",transform:"translate(3.283 9.848)"}))))}var pe=c.forwardRef(be),ve=(n.p,function(e){var t=20+80*e.progress;return Object(x.jsxs)("div",{className:"progress-bar",children:[Object(x.jsx)("div",{className:"track",style:{width:"calc(".concat(t,"%)")}}),Object(x.jsx)(pe,{className:"icon"})]})}),je=["title","titleId"];function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function me(e,t){var n=e.title,r=e.titleId,a=Oe(e,je);return c.createElement("svg",he({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M40.2,24.6l3.6-3.6c4.3-4.3,11.3-4.3,15.6,0l58.2,42.2c4.3,4.3,4.3,11.3,0,15.6l-58.2,42.2 c-4.3,4.3-11.3,4.3-15.6,0l-3.2-3.2L40.2,24.6z"}))}var we,ge,xe,ye=c.forwardRef(me),Ee=(n.p,n(48),function(e){var t=e.onPlay;return Object(x.jsx)("div",{className:"button-bar",children:Object(x.jsx)("button",{className:"button-circle",onClick:t,children:Object(x.jsx)(ye,{})})})}),ke=["title","titleId"];function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Te(e,t){var n=e.title,r=e.titleId,a=Ie(e,ke);return c.createElement("svg",Se({xmlns:"http://www.w3.org/2000/svg",width:113.556,height:113.556,viewBox:"0 0 113.556 113.556",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,we||(we=c.createElement("defs",null,c.createElement("style",null,"\n      .a-flip {\n        fill: none;\n      }\n\n      .b-flip {\n        fill: #707070;\n      }\n    "))),ge||(ge=c.createElement("path",{className:"a-flip",d:"M0,0H113.556V113.556H0Z"})),xe||(xe=c.createElement("path",{className:"b-flip",d:"M59.778,95.63h9.463V86.167H59.778ZM78.7,38.852h9.463V29.389H78.7ZM3,19.926V86.167a9.491,9.491,0,0,0,9.463,9.463H31.389V86.167H12.463V19.926H31.389V10.463H12.463A9.491,9.491,0,0,0,3,19.926Zm75.7-9.463v9.463h9.463A9.491,9.491,0,0,0,78.7,10.463Zm-37.852,94.63h9.463V1H40.852ZM78.7,76.7h9.463V67.241H78.7ZM59.778,19.926h9.463V10.463H59.778ZM78.7,57.778h9.463V48.315H78.7Zm0,37.852a9.491,9.491,0,0,0,9.463-9.463H78.7Z",transform:"translate(11.195 3.732)"})))}var Ne,Me,Le,He,Ce,Re,Pe,Ae=c.forwardRef(Te),De=(n.p,function(e){var t=e.enableLeftAndRight,n=void 0!==t&&t,r=e.onLeftClick,c=e.onFlip,a=e.onRightClick;return Object(x.jsxs)("div",{className:"button-bar",children:[n&&Object(x.jsx)("button",{className:"button-circle",onClick:r,children:Object(x.jsx)(M,{})}),Object(x.jsx)("button",{className:"button-circle button-small",onClick:c,children:Object(x.jsx)(Ae,{})}),n&&Object(x.jsx)("button",{className:"button-circle",onClick:a,children:Object(x.jsx)(D,{})})]})}),Ve=function(e){var t,n=e.mistakes,r=z(),c=null===(t=r.getTextRaw("outro-description"))||void 0===t?void 0:t.replace("{0}","".concat(n));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsxs)("div",{className:"card card-outro",children:[Object(x.jsx)("h2",{children:r.getText("outro-header")}),Object(x.jsx)("div",{className:"outro-description",children:c})]})})},Fe=(n(72),["title","titleId"]);function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ge(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ze(e,t){var n=e.title,r=e.titleId,a=Ge(e,Fe);return c.createElement("svg",Be({xmlns:"http://www.w3.org/2000/svg",width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t,"aria-labelledby":r},a),Ne||(Ne=c.createElement("defs",null,c.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}"))),void 0===n?c.createElement("title",{id:r},"Back"):n?c.createElement("title",{id:r},n):null,Me||(Me=c.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65})),Le||(Le=c.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"})),He||(He=c.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"})),Ce||(Ce=c.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"})),Re||(Re=c.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02})),Pe||(Pe=c.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11})))}var Xe=c.forwardRef(Ze),ze=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(c.useEffect)((function(){window.getGameData=function(){return window.GAMEDATA};var e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250);return function(){clearInterval(e)}}),[t]),!0===n?null:Object(x.jsx)("div",{className:"close",children:Object(x.jsx)(Xe,{onClick:_e})})}),_e=function(){Ue({type:"exit"})};window.setGameData=function(e){Ue({type:"setGameData",data:e})},window.storeGameEvent=function(e){Ue({type:"gameEvent",data:e})};var Je,Ue=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};n(73);!function(e){e[e.loading=0]="loading",e[e.intro=2]="intro",e[e.normal=4]="normal",e[e.complete=8]="complete"}(Je||(Je={}));var We=new V.Howl({src:["sound/tada.ogg"]}),qe=function(){var e,t=Object(c.useState)(Je.loading),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(),o=Object(u.a)(i,2),d=o[0],p=o[1],v=Object(c.useState)(),j=Object(u.a)(v,2),O=j[0],m=j[1],w=Object(c.useState)(0),g=Object(u.a)(w,2),y=g[0],E=g[1],k=Object(c.useState)(0),S=Object(u.a)(k,2),I=S[0],T=S[1],N=Object(c.useState)(!1),M=Object(u.a)(N,2),L=M[0],H=M[1],C=f()(),R=Object(c.useRef)(null),P=Object(c.useRef)(null),A=Object(c.useCallback)((function(e){if(p(e),m(null===e||void 0===e?void 0:e.content.sort((function(){return Math.random()-.5}))),m(null===e||void 0===e?void 0:e.content),a(Je.intro),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});z.setState({texts:t})}}),[]);Object(c.useEffect)((function(){0}),[A]);var D=function(e,t){H(!0),d&&O&&(t===h.RIGHT?E(1-(O.length-1)/d.content.length):T(I+1))},V=function(e,t){setTimeout(C,20)},F=function(e,t){if(H(!1),O)if(t===h.RIGHT)m(null===O||void 0===O?void 0:O.filter((function(t){return t!==e})));else{var n,r,c=Object(s.a)(O),a=c[0],i=c.slice(1),o=i[i.length-1];window.storeGameEvent({code:"mistake",level:1,additionalInfo:null===(n=o.text)||void 0===n?void 0:n.substring(0,null===(r=o.text)||void 0===r?void 0:r.lastIndexOf("-front"))}),m([].concat(Object(l.a)(i),[a]))}},B=function(e){var t;O&&d&&!L&&(H(!0),null===(t=R.current)||void 0===t||t.swipe(e),e===h.RIGHT?E(1-(O.length-1)/d.content.length):T(I+1))};Object(c.useEffect)((function(){0===(null===O||void 0===O?void 0:O.length)&&r===Je.normal&&a(Je.complete)}),[null===O||void 0===O?void 0:O.length,r]),Object(c.useEffect)((function(){r===Je.complete&&(We.play(),window.setGameData({levelsCompleted:[{level:1,score:3}]}),Object(b.a)(),setTimeout(b.a,750),setTimeout(b.a,1500))}),[r]);return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(ze,{gameDataReceived:A}),r===Je.loading&&Object(x.jsx)("span",{}),r!==Je.loading&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ve,{progress:y}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsx)(Ve,{mistakes:I}),null===O||void 0===O?void 0:O.map((function(e,t){var n=null;return(!L||t<O.length-1)&&(n=R),Object(x.jsx)(oe,{card:e,onSwiped:D,onCardLeftScreen:F,onFlipped:V,ref:n},e.image)})),r===Je.intro&&Object(x.jsx)(se,{ref:P,onSwiped:function(){},onCardLeftScreen:function(){a(Je.normal)}})]}),r===Je.intro&&Object(x.jsx)(Ee,{onPlay:function(){var e;null===(e=P.current)||void 0===e||e.swipe(h.RIGHT)}}),r===Je.normal&&Object(x.jsx)(De,{enableLeftAndRight:null===R||void 0===R||null===(e=R.current)||void 0===e?void 0:e.flipped,onLeftClick:function(){return B(h.LEFT)},onFlip:function(){var e;L||null===(e=R.current)||void 0===e||e.flip()},onRightClick:function(){return B(h.RIGHT)}}),r===Je.complete&&Object(x.jsx)(Ee,{onPlay:function(){var e;E(0),T(0),m(null===d||void 0===d||null===(e=d.content)||void 0===e?void 0:e.sort((function(){return Math.random()-.5}))),a(Je.intro)}})]})]})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(qe,{})}),document.getElementById("root")),Ke()}},[[74,1,2]]]);
//# sourceMappingURL=main.41f8e2f8.chunk.js.map