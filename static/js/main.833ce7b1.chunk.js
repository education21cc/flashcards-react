(this["webpackJsonpflashcards-react"]=this["webpackJsonpflashcards-react"]||[]).push([[0],{41:function(e,t,n){},47:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r,c=n(2),i=n.n(c),o=n(33),a=n.n(o),l=(n(63),n(9)),s=n(28),u=n(8),d=n(48),f=n.n(d),b=n(39),p=n(49),v=n.n(p),j=n(6);!function(e){e.LEFT="left",e.RIGHT="right"}(r||(r={}));var h=r,O=function(e){return e.touches?e.touches[0]:e},m=function(e,t){return t===h.RIGHT?e:-e},w=function(e,t,n){return Math.abs(e)<n?0:(Math.abs(e)-n)/Math.abs(t-n)},g=n(30),x=n(3),y=function(e){var t=e.wrapperHeight,n=void 0===t?"100%":t,r=e.wrapperWidth,c=void 0===r?"100%":r,i=e.swipeThreshold,o=void 0===i?120:i,a=e.fadeThreshold,l=void 0===a?40:a,s=e.handleOnDragStart,u=(e.onOpacityChange,e.children),d=e.state,f=e.leftIcon,b=e.rightIcon,p=Object(g.useSpring)({immediate:d.pristine||!d.forced&&Math.abs(d.offset)>=o,config:{tension:390,friction:30,restSpeedThreshold:1,restDisplacementThreshold:.01,overshootClamping:!0,lastVelocity:1,mass:.1},from:{offset:0},to:{offset:d.offset,transform:"translateX(".concat(-500,"px) rotate(").concat(4.5,"deg)")}}),v=d.offset,h=Object(j.a)(Object(j.a)({},p),{},{transform:"translateX(".concat(v,"px) rotate(").concat(v/10,"deg)"),height:n,width:c}),O=Object(g.useSpring)({from:{opacity:0},to:{opacity:w(d.offset,o,l)}}).opacity;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(g.animated.div,{onTouchStart:s,onMouseDown:s,style:h,children:[u,Object(x.jsx)(g.animated.div,{style:{opacity:O},className:"overlay",children:v<0?f:b})]})})},E={start:0,offset:0,forced:!1,swiped:!1,moving:!1,pristine:!0,flyout:void 0},S=function(e){var t=Object(c.useState)(E),n=Object(u.a)(t,2),r=n[0],i=n[1],o=Object(c.useRef)(r);o.current=r;var a=e.swipeThreshold,l=void 0===a?120:a,s=e.onDragging,d=e.onDragEnd,f=e.onBeforeSwipe,b=e.onAfterSwipe,p=e.onSwipe,v=e.forceFlyout,w=e.disabled,g=Object(c.useCallback)((function(){i(E)}),[]),S=Object(c.useCallback)((function(){null===b||void 0===b||b(o.current.flyout),g()}),[g,b]),k=Object(c.useCallback)((function(e){null===p||void 0===p||p(e),i(Object(j.a)(Object(j.a)({},o.current),{},{offset:2*m(l,e),moving:!1,swiped:!0,flyout:e}))}),[p,l]),I=Object(c.useCallback)((function(e){f?f((function(t){return k(t||e)}),g,e):k(e)}),[k,g,f]),T=Object(c.useCallback)((function(e){var t=O(e).pageX;w||o.current.swiped||(e.stopPropagation(),i(Object(j.a)(Object(j.a)({},o.current),{},{pristine:!1,moving:!0,start:t})))}),[w]),N=Object(c.useCallback)((function(){!o.current.swiped&&o.current.moving&&(null===d||void 0===d||d(),Math.abs(o.current.offset)>=l?I(o.current.offset>0?h.RIGHT:h.LEFT):g())}),[I,g,d,l]),M=Object(c.useCallback)((function(e){var t=O(e).pageX;if(e.stopPropagation(),!w&&!o.current.swiped&&o.current.moving){var n=function(e,t){return-.75*(e-t)}(o.current.start,t);null===s||void 0===s||s(n),i(Object(j.a)(Object(j.a)({},o.current),{},{offset:n}))}}),[w,s]);return Object(c.useEffect)((function(){return window.addEventListener("touchmove",M),window.addEventListener("mousemove",M),window.addEventListener("touchend",N),window.addEventListener("mouseup",N),function(){window.removeEventListener("touchmove",M),window.removeEventListener("mousemove",M),window.removeEventListener("touchend",N),window.removeEventListener("mouseup",N)}}),[N,M]),Object(c.useEffect)((function(){if(r.flyout){var e=r.flyout===h.LEFT?-120:120,t=setInterval((function(){if(Math.abs(o.current.offset)>600)return clearInterval(t),void S();i(Object(j.a)(Object(j.a)({},o.current),{},{offset:o.current.offset+e}))}),50);return function(){return clearInterval(t)}}}),[S,r.flyout]),Object(c.useEffect)((function(){v&&i(Object(j.a)(Object(j.a)({},o.current),{},{forced:!0,flyout:v}))}),[v]),Object(x.jsx)(y,Object(j.a)({handleOnDragStart:T,state:o.current},e))},k=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function N(e,t){var n=e.title,r=e.titleId,i=T(e,k);return c.createElement("svg",I({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#00AAEA"},d:"M129.9,36.5h-11.4c-3.2,0-5.7,2.6-5.7,5.7v51.4c0,3.2,2.6,5.7,5.7,5.7h11.4V36.5z M16.5,77.2 c-0.6,1.4-1,3-1,4.6v6.2c0,6.3,5.1,11.4,11.4,11.4h31.4l-5.3,26.6c-0.3,1.3-0.1,2.6,0.5,3.8c1.3,2.6,3,4.9,5,7l2.6,2.7l36.6-36.6 c2.2-2.2,3.4-5.1,3.4-8.1V49.9c0-7.4-6-13.4-13.4-13.4H41.6c-4,0-7.8,2.1-9.8,5.5L16.5,77.2z"}))}var M=c.forwardRef(N),L=(n.p,["title","titleId"]);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function R(e,t){var n=e.title,r=e.titleId,i=C(e,L);return c.createElement("svg",H({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,c.createElement("g",{transform:"translate(9)"},c.createElement("path",{style:{fill:"#6EE94A"},d:"M146.6,10.3"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M11.7,113.8h11.4c3.2,0,5.7-2.6,5.7-5.7V56.5c0-3.2-2.6-5.7-5.7-5.7H11.7V113.8z M125.2,73 c0.6-1.4,1-3,1-4.6v-6.2c0-6.3-5.1-11.4-11.4-11.5H83.2l5.3-26.6c0.3-1.3,0.1-2.6-0.5-3.8c-1.3-2.6-3-4.9-5-7l-2.6-2.7L43.7,47.4 c-2.2,2.2-3.4,5.1-3.4,8.1v44.9c0,7.4,6,13.3,13.4,13.3h46.4c4,0,7.8-2.1,9.8-5.6L125.2,73L125.2,73z"})))}var P,A,V=c.forwardRef(R),D=(n.p,n(23)),F=n(56),B=n(83),G=n(55),Z=n(50),X=n.n(Z)()((function(e,t){return{texts:{},getText:function(e){var n=t().texts[e];return z(n)},getTextRaw:function(e){return t().texts[e]}}})),z=function(e){return null===e||void 0===e?void 0:e.split("\n").reduce((function(e,t){return null===e?t:Object(x.jsxs)(x.Fragment,{children:[e,Object(x.jsx)("br",{}),t]})}),null)},_=n(25),J=function(){return function(e){Object(_.a)(e,["textDirective","leafDirective","containerDirective"],(function(e){return e.data=Object(j.a)({hName:e.name,hProperties:e.attributes},e.data),e}))}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(!1),a=Object(u.a)(o,2),l=a[0],s=a[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),b=f[0],p=f[1],v=function(e){console.log("processing voices",e),i(e)},j=Object(c.useCallback)((function(){var e=window.speechSynthesis.getVoices();e.length>0&&v(e)}),[]);Object(c.useEffect)((function(){var e=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.getVoices();v(n)};return b&&(console.log("speechSynthesis",window.speechSynthesis),console.log("onvoiceschanged",window.speechSynthesis.onvoiceschanged),console.log("getVoices",window.speechSynthesis.getVoices()),window.speechSynthesis.addEventListener&&window.speechSynthesis.addEventListener("voiceschanged",e)),function(){window.speechSynthesis.removeEventListener&&window.speechSynthesis.removeEventListener("voiceschanged",e)}}),[b]);var h=function(){s(!1),e()};Object(c.useEffect)((function(){"undefined"!==typeof window&&window.speechSynthesis&&(p(!0),j())}),[j]);var O=function(e){var t=e.voice,n=void 0===t?null:t,r=e.text,c=void 0===r?"":r,i=e.rate,o=void 0===i?1:i,a=e.pitch,l=void 0===a?1:a,u=e.volume,d=void 0===u?1:u;if(b){s(!0);var f=new window.SpeechSynthesisUtterance;f.text=c,f.voice=n,f.onend=h,f.rate=o,f.pitch=l,f.volume=d,window.speechSynthesis.speak(f)}},m=function(){b&&(s(!1),window.speechSynthesis.cancel())};return{supported:b,speak:O,speaking:l,cancel:m,voices:r}},W=function(e){var t=e.children,n=e.lang,r=void 0===n?"en":n,i=U(),o=i.supported,a=i.voices,l=i.speak,s=Object(c.useMemo)((function(){return"string"===typeof t[0]?t[0]:""}),[t]),u=Object(c.useMemo)((function(){var e;return a&&null!==(e=a.find((function(e){return e.lang===r})))&&void 0!==e?e:null}),[r,a]);console.log(u);return Object(x.jsx)("button",{onClick:function(e){o&&l({text:s,voice:u}),e.stopPropagation()},children:"\ud83d\udd0a"})},q=["card","side"],K=function(e){var t=e.card,n=e.side,r=Object(F.a)(e,q),c="card "+(null!==n&&void 0!==n?n:""),i=X();if(t.id){var o=i.getTextRaw("card-".concat(t.id,"-").concat(n))||"";return Object(x.jsx)("div",Object(j.a)(Object(j.a)({},r),{},{className:c,children:Object(x.jsx)(B.a,{remarkPlugins:[G.a,J],components:{voice:W},children:o})}))}return Object(x.jsxs)("div",Object(j.a)(Object(j.a)({},r),{},{className:c,children:["back"===n&&t.text&&Object(x.jsx)("div",{className:"text",children:i.getText(t.text)}),Object(x.jsx)("div",{style:{backgroundImage:"url("+t.image+")"},className:"image"}),"back"===n&&t.subtext1&&Object(x.jsx)("div",{className:"subtext",children:i.getText(t.subtext1)}),"back"===n&&t.subtext2&&Object(x.jsx)("div",{className:"subtext",children:i.getText(t.subtext2)})]}))},Q=(n(41),new D.Howl({src:["sound/card-flip.ogg"]})),Y=new D.Howl({src:["sound/whoosh.ogg"]}),$=Object(c.forwardRef)((function(e,t){var n=e.onSwiped,r=e.card,i=e.onCardLeftScreen,o=e.onFlipped,a=Object(c.useRef)(!1),l=Object(c.useRef)(!1),s=Object(c.useState)(!1),d=Object(u.a)(s,2),f=d[0],b=d[1],p=Object(c.useState)(),j=Object(u.a)(p,2),h=j[0],O=j[1],m=function(){l.current||(Q.play(),l.current=!1,b(!f),o(r,f))};Object(c.useImperativeHandle)(t,(function(){return{flipped:f,flip:m,swipe:function(e){Y.play(),O(e)}}}));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsx)(S,{onSwipe:function(e){Y.play(),a.current=!0,null===n||void 0===n||n(r,e)},fadeThreshold:60,onDragging:function(e){l.current=!0},onDragEnd:function(){setTimeout((function(){l.current=!1}),20)},onAfterSwipe:function(e){O(void 0),b(!1),a.current=!0,null===i||void 0===i||i(r,e)},forceFlyout:h,leftIcon:Object(x.jsx)(M,{}),rightIcon:Object(x.jsx)(V,{}),disabled:!f,children:Object(x.jsxs)(v.a,{isFlipped:f,flipDirection:"horizontal",flipSpeedFrontToBack:a.current?0:void 0,flipSpeedBackToFront:a.current?0:void 0,children:[Object(x.jsx)(K,{onClick:m,side:"front",card:r}),Object(x.jsx)(K,{onClick:m,side:"back",card:r})]})})})})),ee=new D.Howl({src:["sound/whoosh.ogg"]}),te=Object(c.forwardRef)((function(e,t){var n=e.onSwiped,r=e.onCardLeftScreen,i=Object(c.createRef)(),o=Object(c.useState)(),a=Object(u.a)(o,2),l=a[0],s=a[1],d=X();Object(c.useImperativeHandle)(t,(function(){return{swipe:function(e){ee.play(),s(e)}}}));return Object(x.jsx)("div",{ref:i,className:"flash-card-wrapper",children:Object(x.jsx)(S,{onSwipe:function(){ee.play(),null===n||void 0===n||n()},fadeThreshold:60,onAfterSwipe:function(){null===r||void 0===r||r()},forceFlyout:l,children:Object(x.jsxs)("div",{className:"card card-intro",children:[Object(x.jsx)("h2",{children:d.getText("intro-header")}),Object(x.jsx)("div",{className:"intro-description",children:d.getText("intro-description")}),Object(x.jsx)("div",{className:"intro-help-correct",children:Object(x.jsx)("div",{className:"text",children:d.getText("intro-description-correct")})}),Object(x.jsx)("div",{className:"intro-help-wrong",children:Object(x.jsx)("div",{className:"text",children:d.getText("intro-description-wrong")})})]})})})})),ne=(n(71),["title","titleId"]);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ie(e,t){var n=e.title,r=e.titleId,i=ce(e,ne);return c.createElement("svg",re({xmlns:"http://www.w3.org/2000/svg",width:98.501,height:89.935,viewBox:"0 0 98.501 89.935",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,P||(P=c.createElement("defs",null,c.createElement("style",null,".a{fill:none;}.b{fill:#707070;}"))),A||(A=c.createElement("g",{transform:"translate(0 -12.848)"},c.createElement("path",{className:"a",d:"M0,102.783Z"}),c.createElement("path",{className:"b",d:"M18.131,46.6V63.728l29.978,16.36,29.978-16.36V46.6L48.109,62.957ZM48.109,3,1,28.7l47.109,25.7L86.653,33.364V62.957h8.565V28.7Z",transform:"translate(3.283 9.848)"}))))}var oe=c.forwardRef(ie),ae=(n.p,function(e){var t=20+80*e.progress;return Object(x.jsxs)("div",{className:"progress-bar",children:[Object(x.jsx)("div",{className:"track",style:{width:"calc(".concat(t,"%)")}}),Object(x.jsx)(oe,{className:"icon"})]})}),le=["title","titleId"];function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function de(e,t){var n=e.title,r=e.titleId,i=ue(e,le);return c.createElement("svg",se({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M40.2,24.6l3.6-3.6c4.3-4.3,11.3-4.3,15.6,0l58.2,42.2c4.3,4.3,4.3,11.3,0,15.6l-58.2,42.2 c-4.3,4.3-11.3,4.3-15.6,0l-3.2-3.2L40.2,24.6z"}))}var fe,be,pe,ve=c.forwardRef(de),je=(n.p,n(47),function(e){var t=e.onPlay;return Object(x.jsx)("div",{className:"button-bar",children:Object(x.jsx)("button",{className:"button-circle",onClick:t,children:Object(x.jsx)(ve,{})})})}),he=["title","titleId"];function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function we(e,t){var n=e.title,r=e.titleId,i=me(e,he);return c.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg",width:113.556,height:113.556,viewBox:"0 0 113.556 113.556",ref:t,"aria-labelledby":r},i),n?c.createElement("title",{id:r},n):null,fe||(fe=c.createElement("defs",null,c.createElement("style",null,"\n      .a-flip {\n        fill: none;\n      }\n\n      .b-flip {\n        fill: #707070;\n      }\n    "))),be||(be=c.createElement("path",{className:"a-flip",d:"M0,0H113.556V113.556H0Z"})),pe||(pe=c.createElement("path",{className:"b-flip",d:"M59.778,95.63h9.463V86.167H59.778ZM78.7,38.852h9.463V29.389H78.7ZM3,19.926V86.167a9.491,9.491,0,0,0,9.463,9.463H31.389V86.167H12.463V19.926H31.389V10.463H12.463A9.491,9.491,0,0,0,3,19.926Zm75.7-9.463v9.463h9.463A9.491,9.491,0,0,0,78.7,10.463Zm-37.852,94.63h9.463V1H40.852ZM78.7,76.7h9.463V67.241H78.7ZM59.778,19.926h9.463V10.463H59.778ZM78.7,57.778h9.463V48.315H78.7Zm0,37.852a9.491,9.491,0,0,0,9.463-9.463H78.7Z",transform:"translate(11.195 3.732)"})))}var ge,xe,ye,Ee,Se,ke,Ie,Te=c.forwardRef(we),Ne=(n.p,function(e){var t=e.enableLeftAndRight,n=void 0!==t&&t,r=e.onLeftClick,c=e.onFlip,i=e.onRightClick;return Object(x.jsxs)("div",{className:"button-bar",children:[n&&Object(x.jsx)("button",{className:"button-circle",onClick:r,children:Object(x.jsx)(M,{})}),Object(x.jsx)("button",{className:"button-circle button-small",onClick:c,children:Object(x.jsx)(Te,{})}),n&&Object(x.jsx)("button",{className:"button-circle",onClick:i,children:Object(x.jsx)(V,{})})]})}),Me=function(e){var t,n=e.mistakes,r=X(),c=null===(t=r.getTextRaw("outro-description"))||void 0===t?void 0:t.replace("{0}","".concat(n));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsxs)("div",{className:"card card-outro",children:[Object(x.jsx)("h2",{children:r.getText("outro-header")}),Object(x.jsx)("div",{className:"outro-description",children:c})]})})},Le=(n(72),["title","titleId"]);function He(){return(He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ce(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Re(e,t){var n=e.title,r=e.titleId,i=Ce(e,Le);return c.createElement("svg",He({xmlns:"http://www.w3.org/2000/svg",width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t,"aria-labelledby":r},i),ge||(ge=c.createElement("defs",null,c.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}"))),void 0===n?c.createElement("title",{id:r},"Back"):n?c.createElement("title",{id:r},n):null,xe||(xe=c.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65})),ye||(ye=c.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"})),Ee||(Ee=c.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"})),Se||(Se=c.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"})),ke||(ke=c.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02})),Ie||(Ie=c.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11})))}var Pe=c.forwardRef(Re),Ae=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(c.useEffect)((function(){window.getGameData=function(){return window.GAMEDATA};var e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250);return function(){clearInterval(e)}}),[t]),!0===n?null:Object(x.jsx)("div",{className:"close",children:Object(x.jsx)(Pe,{onClick:Ve})})}),Ve=function(){Fe({type:"exit"})};window.setGameData=function(e){Fe({type:"setGameData",data:e})},window.storeGameEvent=function(e){Fe({type:"gameEvent",data:e})};var De,Fe=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};n(73);!function(e){e[e.loading=0]="loading",e[e.intro=2]="intro",e[e.normal=4]="normal",e[e.complete=8]="complete"}(De||(De={}));var Be=new D.Howl({src:["sound/tada.ogg"]}),Ge=function(){var e,t=Object(c.useState)(De.loading),n=Object(u.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(),a=Object(u.a)(o,2),d=a[0],p=a[1],v=Object(c.useState)(),j=Object(u.a)(v,2),O=j[0],m=j[1],w=Object(c.useState)(0),g=Object(u.a)(w,2),y=g[0],E=g[1],S=Object(c.useState)(0),k=Object(u.a)(S,2),I=k[0],T=k[1],N=Object(c.useState)(!1),M=Object(u.a)(N,2),L=M[0],H=M[1],C=f()(),R=Object(c.useRef)(null),P=Object(c.useRef)(null),A=Object(c.useCallback)((function(e){if(p(e),m(null===e||void 0===e?void 0:e.content.sort((function(){return Math.random()-.5}))),m(null===e||void 0===e?void 0:e.content),i(De.intro),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});X.setState({texts:t})}}),[]);Object(c.useEffect)((function(){0}),[A]);var V=function(e,t){H(!0),d&&O&&(t===h.RIGHT?E(1-(O.length-1)/d.content.length):T(I+1))},D=function(e,t){setTimeout(C,20)},F=function(e,t){if(H(!1),O)if(t===h.RIGHT)m(null===O||void 0===O?void 0:O.filter((function(t){return t!==e})));else{var n,r,c=Object(s.a)(O),i=c[0],o=c.slice(1),a=o[o.length-1];window.storeGameEvent({code:"mistake",level:1,additionalInfo:null===(n=a.text)||void 0===n?void 0:n.substring(0,null===(r=a.text)||void 0===r?void 0:r.lastIndexOf("-front"))}),m([].concat(Object(l.a)(o),[i]))}},B=function(e){var t;O&&d&&!L&&(H(!0),null===(t=R.current)||void 0===t||t.swipe(e),e===h.RIGHT?E(1-(O.length-1)/d.content.length):T(I+1))};Object(c.useEffect)((function(){0===(null===O||void 0===O?void 0:O.length)&&r===De.normal&&i(De.complete)}),[null===O||void 0===O?void 0:O.length,r]),Object(c.useEffect)((function(){r===De.complete&&(Be.play(),window.setGameData({levelsCompleted:[{level:1,score:3}]}),Object(b.a)(),setTimeout(b.a,750),setTimeout(b.a,1500))}),[r]);return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(Ae,{gameDataReceived:A}),r===De.loading&&Object(x.jsx)("span",{}),r!==De.loading&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ae,{progress:y}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsx)(Me,{mistakes:I}),null===O||void 0===O?void 0:O.map((function(e,t){var n=null;return(!L||t<O.length-1)&&(n=R),Object(x.jsx)($,{card:e,onSwiped:V,onCardLeftScreen:F,onFlipped:D,ref:n},e.image)})),r===De.intro&&Object(x.jsx)(te,{ref:P,onSwiped:function(){},onCardLeftScreen:function(){i(De.normal)}})]}),r===De.intro&&Object(x.jsx)(je,{onPlay:function(){var e;null===(e=P.current)||void 0===e||e.swipe(h.RIGHT)}}),r===De.normal&&Object(x.jsx)(Ne,{enableLeftAndRight:null===R||void 0===R||null===(e=R.current)||void 0===e?void 0:e.flipped,onLeftClick:function(){return B(h.LEFT)},onFlip:function(){var e;L||null===(e=R.current)||void 0===e||e.flip()},onRightClick:function(){return B(h.RIGHT)}}),r===De.complete&&Object(x.jsx)(je,{onPlay:function(){var e;E(0),T(0),m(null===d||void 0===d||null===(e=d.content)||void 0===e?void 0:e.sort((function(){return Math.random()-.5}))),i(De.intro)}})]})]})},Ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(Ge,{})}),document.getElementById("root")),Ze()}},[[74,1,2]]]);
//# sourceMappingURL=main.833ce7b1.chunk.js.map