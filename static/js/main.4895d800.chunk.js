(this["webpackJsonpflashcards-react"]=this["webpackJsonpflashcards-react"]||[]).push([[0],{29:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),l=n(21),i=n.n(l),o=(n(44),n(11)),s=n(36),u=n(3),f=n(37),d=n.n(f),b=n(27),p=n(38),v=n.n(p),j=n(6);!function(e){e.LEFT="left",e.RIGHT="right"}(r||(r={}));var h=r,O=function(e){return e.touches?e.touches[0]:e},m=function(e,t){return t===h.RIGHT?e:-e},g=function(e,t,n){return Math.abs(e)<n?0:(Math.abs(e)-n)/Math.abs(t-n)},w=n(18),x=n(2),y=function(e){var t=e.wrapperHeight,n=void 0===t?"100%":t,r=e.wrapperWidth,c=void 0===r?"100%":r,a=e.swipeThreshold,l=void 0===a?120:a,i=e.fadeThreshold,o=void 0===i?40:i,s=e.handleOnDragStart,u=(e.onOpacityChange,e.children),f=e.state,d=e.leftIcon,b=e.rightIcon,p=Object(w.useSpring)({immediate:f.pristine||!f.forced&&Math.abs(f.offset)>=l,config:{tension:390,friction:30,restSpeedThreshold:1,restDisplacementThreshold:.01,overshootClamping:!0,lastVelocity:1,mass:.1},from:{offset:0},to:{offset:f.offset,transform:"translateX(".concat(-500,"px) rotate(").concat(4.5,"deg)")}}),v=f.offset,h=Object(j.a)(Object(j.a)({},p),{},{transform:"translateX(".concat(v,"px) rotate(").concat(v/10,"deg)"),height:n,width:c}),O=Object(w.useSpring)({from:{opacity:0},to:{opacity:g(f.offset,l,o)}}).opacity;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(w.animated.div,{onTouchStart:s,onMouseDown:s,style:h,children:[u,Object(x.jsx)(w.animated.div,{style:{opacity:O},className:"overlay",children:v<0?d:b})]})})},E={start:0,offset:0,forced:!1,swiped:!1,moving:!1,pristine:!0,flyout:void 0},k=function(e){var t=Object(c.useState)(E),n=Object(u.a)(t,2),r=n[0],a=n[1],l=Object(c.useRef)(r);l.current=r;var i=e.swipeThreshold,o=void 0===i?120:i,s=e.onDragging,f=e.onDragEnd,d=e.onBeforeSwipe,b=e.onAfterSwipe,p=e.onSwipe,v=e.forceFlyout,g=e.disabled,w=Object(c.useCallback)((function(){a(E)}),[]),k=Object(c.useCallback)((function(){null===b||void 0===b||b(l.current.flyout),w()}),[w,b]),S=Object(c.useCallback)((function(e){null===p||void 0===p||p(e),a(Object(j.a)(Object(j.a)({},l.current),{},{offset:2*m(o,e),moving:!1,swiped:!0,flyout:e}))}),[p,o]),I=Object(c.useCallback)((function(e){d?d((function(t){return S(t||e)}),w,e):S(e)}),[S,w,d]),N=Object(c.useCallback)((function(e){var t=O(e).pageX;g||l.current.swiped||(e.stopPropagation(),a(Object(j.a)(Object(j.a)({},l.current),{},{pristine:!1,moving:!0,start:t})))}),[g]),T=Object(c.useCallback)((function(){if(!l.current.swiped&&l.current.moving)if(null===f||void 0===f||f(),Math.abs(l.current.offset)>=o)I(l.current.offset>0?h.RIGHT:h.LEFT);else;}),[I,f,o]),M=Object(c.useCallback)((function(e){var t=O(e).pageX;if(e.stopPropagation(),!g&&!l.current.swiped&&l.current.moving){var n=function(e,t){return-.75*(e-t)}(l.current.start,t);null===s||void 0===s||s(n),a(Object(j.a)(Object(j.a)({},l.current),{},{offset:n}))}}),[g,s]);return Object(c.useEffect)((function(){return window.addEventListener("touchmove",M),window.addEventListener("mousemove",M),window.addEventListener("touchend",T),window.addEventListener("mouseup",T),function(){window.removeEventListener("touchmove",M),window.removeEventListener("mousemove",M),window.removeEventListener("touchend",T),window.removeEventListener("mouseup",T)}}),[T,M]),Object(c.useEffect)((function(){if(r.flyout){var e=r.flyout===h.LEFT?-120:120,t=setInterval((function(){if(Math.abs(l.current.offset)>600)return clearInterval(t),void k();a(Object(j.a)(Object(j.a)({},l.current),{},{offset:l.current.offset+e}))}),50);return function(){return clearInterval(t)}}}),[k,r.flyout]),Object(c.useEffect)((function(){v&&a(Object(j.a)(Object(j.a)({},l.current),{},{forced:!0,flyout:v}))}),[v]),Object(x.jsx)(y,Object(j.a)({handleOnDragStart:N,state:l.current},e))},S=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function T(e,t){var n=e.title,r=e.titleId,a=N(e,S);return c.createElement("svg",I({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#00AAEA"},d:"M129.9,36.5h-11.4c-3.2,0-5.7,2.6-5.7,5.7v51.4c0,3.2,2.6,5.7,5.7,5.7h11.4V36.5z M16.5,77.2 c-0.6,1.4-1,3-1,4.6v6.2c0,6.3,5.1,11.4,11.4,11.4h31.4l-5.3,26.6c-0.3,1.3-0.1,2.6,0.5,3.8c1.3,2.6,3,4.9,5,7l2.6,2.7l36.6-36.6 c2.2-2.2,3.4-5.1,3.4-8.1V49.9c0-7.4-6-13.4-13.4-13.4H41.6c-4,0-7.8,2.1-9.8,5.5L16.5,77.2z"}))}var M=c.forwardRef(T),H=(n.p,["title","titleId"]);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function C(e,t){var n=e.title,r=e.titleId,a=R(e,H);return c.createElement("svg",L({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",{transform:"translate(9)"},c.createElement("path",{style:{fill:"#6EE94A"},d:"M146.6,10.3"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M11.7,113.8h11.4c3.2,0,5.7-2.6,5.7-5.7V56.5c0-3.2-2.6-5.7-5.7-5.7H11.7V113.8z M125.2,73 c0.6-1.4,1-3,1-4.6v-6.2c0-6.3-5.1-11.4-11.4-11.5H83.2l5.3-26.6c0.3-1.3,0.1-2.6-0.5-3.8c-1.3-2.6-3-4.9-5-7l-2.6-2.7L43.7,47.4 c-2.2,2.2-3.4,5.1-3.4,8.1v44.9c0,7.4,6,13.3,13.4,13.3h46.4c4,0,7.8-2.1,9.8-5.6L125.2,73L125.2,73z"})))}var A,P,F=c.forwardRef(C),V=(n.p,n(14)),D=(n(29),n(39)),B=n.n(D)()((function(e,t){return{texts:{},getText:function(e){var n=t().texts[e];return G(n)},getTextRaw:function(e){return t().texts[e]}}})),G=function(e){return null===e||void 0===e?void 0:e.split("\n").reduce((function(e,t){return null===e?t:Object(x.jsxs)(x.Fragment,{children:[e,Object(x.jsx)("br",{}),t]})}),null)},Z=new V.Howl({src:["sound/card-flip.ogg"]}),X=new V.Howl({src:["sound/whoosh.ogg"]}),z=Object(c.forwardRef)((function(e,t){var n,r=e.onSwiped,a=e.card,l=e.onCardLeftScreen,i=e.onFlipped,o=Object(c.useRef)(!1),s=Object(c.useRef)(!1),f=Object(c.useState)(!1),d=Object(u.a)(f,2),b=d[0],p=d[1],j=Object(c.useState)(),h=Object(u.a)(j,2),O=h[0],m=h[1],g=B(),w=function(){s.current||(Z.play(),p(!b),i(a,b))};Object(c.useImperativeHandle)(t,(function(){return{flipped:b,flip:w,swipe:function(e){X.play(),m(e)}}}));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsx)(k,{onSwipe:function(e){X.play(),o.current=!0,null===r||void 0===r||r(a,e)},fadeThreshold:60,onDragging:function(e){s.current=!0},onDragEnd:function(){setTimeout((function(){s.current=!1}),20)},onAfterSwipe:function(e){m(void 0),p(!1),o.current=!0,null===l||void 0===l||l(a,e)},forceFlyout:O,leftIcon:Object(x.jsx)(M,{}),rightIcon:Object(x.jsx)(F,{}),disabled:!b,children:Object(x.jsxs)(v.a,{isFlipped:b,flipDirection:"horizontal",flipSpeedFrontToBack:o.current?0:void 0,flipSpeedBackToFront:o.current?0:void 0,children:[Object(x.jsx)("div",{className:"card front",onClick:w,children:Object(x.jsx)("div",{style:{backgroundImage:"url("+a.image+")"},className:"image"})}),Object(x.jsxs)("div",{className:"card back",onClick:w,children:[Object(x.jsx)("div",{className:"text",children:g.getText(null!==(n=a.text)&&void 0!==n?n:"")}),Object(x.jsx)("div",{style:{backgroundImage:"url("+a.image+")"},className:"image"}),a.subtext1&&Object(x.jsx)("div",{className:"subtext",children:g.getText(a.subtext1)}),a.subtext2&&Object(x.jsx)("div",{className:"subtext",children:g.getText(a.subtext2)})]})]})})})})),_=new V.Howl({src:["sound/whoosh.ogg"]}),J=Object(c.forwardRef)((function(e,t){var n=e.onSwiped,r=e.onCardLeftScreen,a=Object(c.createRef)(),l=Object(c.useState)(),i=Object(u.a)(l,2),o=i[0],s=i[1],f=B();Object(c.useImperativeHandle)(t,(function(){return{swipe:function(e){_.play(),s(e)}}}));return Object(x.jsx)("div",{ref:a,className:"flash-card-wrapper",children:Object(x.jsx)(k,{onSwipe:function(){_.play(),null===n||void 0===n||n()},fadeThreshold:60,onAfterSwipe:function(){null===r||void 0===r||r()},forceFlyout:o,children:Object(x.jsxs)("div",{className:"card card-intro",children:[Object(x.jsx)("h2",{children:f.getText("intro-header")}),Object(x.jsx)("div",{className:"intro-description",children:f.getText("intro-description")}),Object(x.jsx)("div",{className:"intro-help-correct",children:Object(x.jsx)("div",{className:"text",children:f.getText("intro-description-correct")})}),Object(x.jsx)("div",{className:"intro-help-wrong",children:Object(x.jsx)("div",{className:"text",children:f.getText("intro-description-wrong")})})]})})})})),W=(n(48),["title","titleId"]);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Q(e,t){var n=e.title,r=e.titleId,a=K(e,W);return c.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:98.501,height:89.935,viewBox:"0 0 98.501 89.935",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,A||(A=c.createElement("defs",null,c.createElement("style",null,".a{fill:none;}.b{fill:#707070;}"))),P||(P=c.createElement("g",{transform:"translate(0 -12.848)"},c.createElement("path",{className:"a",d:"M0,102.783Z"}),c.createElement("path",{className:"b",d:"M18.131,46.6V63.728l29.978,16.36,29.978-16.36V46.6L48.109,62.957ZM48.109,3,1,28.7l47.109,25.7L86.653,33.364V62.957h8.565V28.7Z",transform:"translate(3.283 9.848)"}))))}var U=c.forwardRef(Q),Y=(n.p,function(e){var t=20+80*e.progress;return Object(x.jsxs)("div",{className:"progress-bar",children:[Object(x.jsx)("div",{className:"track",style:{width:"calc(".concat(t,"%)")}}),Object(x.jsx)(U,{className:"icon"})]})}),$=["title","titleId"];function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ne(e,t){var n=e.title,r=e.titleId,a=te(e,$);return c.createElement("svg",ee({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"145px",height:"145px",viewBox:"0 0 145 145",style:{enableBackground:"new 0 0 145 145"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("path",{style:{fill:"#00AAEA"},d:"M15.1,5.6"}),c.createElement("path",{style:{fill:"#6EE94A"},d:"M40.2,24.6l3.6-3.6c4.3-4.3,11.3-4.3,15.6,0l58.2,42.2c4.3,4.3,4.3,11.3,0,15.6l-58.2,42.2 c-4.3,4.3-11.3,4.3-15.6,0l-3.2-3.2L40.2,24.6z"}))}var re,ce,ae,le=c.forwardRef(ne),ie=(n.p,n(35),function(e){var t=e.onPlay;return Object(x.jsx)("div",{className:"button-bar",children:Object(x.jsx)("button",{className:"button-circle",onClick:t,children:Object(x.jsx)(le,{})})})}),oe=["title","titleId"];function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function fe(e,t){var n=e.title,r=e.titleId,a=ue(e,oe);return c.createElement("svg",se({xmlns:"http://www.w3.org/2000/svg",width:113.556,height:113.556,viewBox:"0 0 113.556 113.556",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,re||(re=c.createElement("defs",null,c.createElement("style",null,"\n      .a-flip {\n        fill: none;\n      }\n\n      .b-flip {\n        fill: #707070;\n      }\n    "))),ce||(ce=c.createElement("path",{className:"a-flip",d:"M0,0H113.556V113.556H0Z"})),ae||(ae=c.createElement("path",{className:"b-flip",d:"M59.778,95.63h9.463V86.167H59.778ZM78.7,38.852h9.463V29.389H78.7ZM3,19.926V86.167a9.491,9.491,0,0,0,9.463,9.463H31.389V86.167H12.463V19.926H31.389V10.463H12.463A9.491,9.491,0,0,0,3,19.926Zm75.7-9.463v9.463h9.463A9.491,9.491,0,0,0,78.7,10.463Zm-37.852,94.63h9.463V1H40.852ZM78.7,76.7h9.463V67.241H78.7ZM59.778,19.926h9.463V10.463H59.778ZM78.7,57.778h9.463V48.315H78.7Zm0,37.852a9.491,9.491,0,0,0,9.463-9.463H78.7Z",transform:"translate(11.195 3.732)"})))}var de,be,pe,ve,je,he,Oe,me=c.forwardRef(fe),ge=(n.p,function(e){var t=e.enableLeftAndRight,n=void 0!==t&&t,r=e.onLeftClick,c=e.onFlip,a=e.onRightClick;return Object(x.jsxs)("div",{className:"button-bar",children:[n&&Object(x.jsx)("button",{className:"button-circle",onClick:r,children:Object(x.jsx)(M,{})}),Object(x.jsx)("button",{className:"button-circle button-small",onClick:c,children:Object(x.jsx)(me,{})}),n&&Object(x.jsx)("button",{className:"button-circle",onClick:a,children:Object(x.jsx)(F,{})})]})}),we=function(e){var t,n=e.mistakes,r=B(),c=null===(t=r.getTextRaw("outro-description"))||void 0===t?void 0:t.replace("{0}","".concat(n));return Object(x.jsx)("div",{className:"flash-card-wrapper",children:Object(x.jsxs)("div",{className:"card card-outro",children:[Object(x.jsx)("h2",{children:r.getText("outro-header")}),Object(x.jsx)("div",{className:"outro-description",children:c})]})})},xe=(n(49),["title","titleId"]);function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ke(e,t){var n=e.title,r=e.titleId,a=Ee(e,xe);return c.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t,"aria-labelledby":r},a),de||(de=c.createElement("defs",null,c.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}"))),void 0===n?c.createElement("title",{id:r},"Back"):n?c.createElement("title",{id:r},n):null,be||(be=c.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65})),pe||(pe=c.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"})),ve||(ve=c.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"})),je||(je=c.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"})),he||(he=c.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02})),Oe||(Oe=c.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11})))}var Se=c.forwardRef(ke),Ie=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(c.useEffect)((function(){window.getGameData=function(){return window.GAMEDATA};var e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250);return function(){clearInterval(e)}}),[t]),!0===n?null:Object(x.jsx)("div",{className:"close",children:Object(x.jsx)(Se,{onClick:Ne})})}),Ne=function(){Me({type:"exit"})};window.setGameData=function(e){Me({type:"setGameData",data:e})},window.storeGameEvent=function(e){Me({type:"gameEvent",data:e})};var Te,Me=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};n(50);!function(e){e[e.loading=0]="loading",e[e.intro=2]="intro",e[e.normal=4]="normal",e[e.complete=8]="complete"}(Te||(Te={}));var He=new V.Howl({src:["sound/tada.ogg"]}),Le=function(){var e,t=Object(c.useState)(Te.loading),n=Object(u.a)(t,2),r=n[0],a=n[1],l=Object(c.useState)(),i=Object(u.a)(l,2),f=i[0],p=i[1],v=Object(c.useState)(),j=Object(u.a)(v,2),O=j[0],m=j[1],g=Object(c.useState)(0),w=Object(u.a)(g,2),y=w[0],E=w[1],k=Object(c.useState)(0),S=Object(u.a)(k,2),I=S[0],N=S[1],T=Object(c.useState)(!1),M=Object(u.a)(T,2),H=M[0],L=M[1],R=d()(),C=Object(c.useRef)(null),A=Object(c.useRef)(null),P=Object(c.useCallback)((function(e){var t;if(p(e),m(null===e||void 0===e||null===(t=e.content)||void 0===t?void 0:t.sort((function(){return Math.random()-.5}))),a(Te.intro),e.translations){var n=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});B.setState({texts:n})}}),[]);Object(c.useEffect)((function(){0}),[P]);var F=function(e,t){L(!0),f&&O&&(t===h.RIGHT?E(1-(O.length-1)/f.content.length):N(I+1))},V=function(e,t){setTimeout(R,20)},D=function(e,t){if(L(!1),O)if(t===h.RIGHT)m(null===O||void 0===O?void 0:O.filter((function(t){return t!==e})));else{var n,r,c=Object(s.a)(O),a=c[0],l=c.slice(1),i=l[l.length-1];window.storeGameEvent({code:"mistake",level:1,additionalInfo:null===(n=i.text)||void 0===n?void 0:n.substring(0,null===(r=i.text)||void 0===r?void 0:r.lastIndexOf("-text"))}),m([].concat(Object(o.a)(l),[a]))}},G=function(e){var t;O&&f&&!H&&(L(!0),null===(t=C.current)||void 0===t||t.swipe(e),e===h.RIGHT?E(1-(O.length-1)/f.content.length):N(I+1))};Object(c.useEffect)((function(){0===(null===O||void 0===O?void 0:O.length)&&r===Te.normal&&a(Te.complete)}),[null===O||void 0===O?void 0:O.length,r]),Object(c.useEffect)((function(){r===Te.complete&&(He.play(),window.setGameData({levelsCompleted:[{level:1,score:3}]}),Object(b.a)(),setTimeout(b.a,750),setTimeout(b.a,1500))}),[r]);return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(Ie,{gameDataReceived:P}),r===Te.loading&&Object(x.jsx)("span",{}),r!==Te.loading&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Y,{progress:y}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsx)(we,{mistakes:I}),null===O||void 0===O?void 0:O.map((function(e,t){var n=null;return(!H||t<O.length-1)&&(n=C),Object(x.jsx)(z,{card:e,onSwiped:F,onCardLeftScreen:D,onFlipped:V,ref:n},e.image)})),r===Te.intro&&Object(x.jsx)(J,{ref:A,onSwiped:function(){},onCardLeftScreen:function(){a(Te.normal)}})]}),r===Te.intro&&Object(x.jsx)(ie,{onPlay:function(){var e;null===(e=A.current)||void 0===e||e.swipe(h.RIGHT)}}),r===Te.normal&&Object(x.jsx)(ge,{enableLeftAndRight:null===C||void 0===C||null===(e=C.current)||void 0===e?void 0:e.flipped,onLeftClick:function(){return G(h.LEFT)},onFlip:function(){var e;H||null===(e=C.current)||void 0===e||e.flip()},onRightClick:function(){return G(h.RIGHT)}}),r===Te.complete&&Object(x.jsx)(ie,{onPlay:function(){var e;E(0),N(0),m(null===f||void 0===f||null===(e=f.content)||void 0===e?void 0:e.sort((function(){return Math.random()-.5}))),a(Te.intro)}})]})]})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),a(e),l(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(Le,{})}),document.getElementById("root")),Re()}},[[51,1,2]]]);
//# sourceMappingURL=main.4895d800.chunk.js.map