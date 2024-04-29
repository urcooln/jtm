;/*FB_PKG_DELIM*/

__d("CometRadioGroupListContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({name:void 0,onValueChange:void 0,value:void 0});g["default"]=b}),98);
__d("XPlatReactNestedPressableContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("BaseRadio.react",["BaseFocusRing.react","BaseInput.react","BaseView.react","XPlatReactNestedPressableContext","mergeRefs","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useEffect,l=b.useMemo,m=b.useRef,n={radio:{cursor:"x1ypdohk",height:"x5yr21d",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",opacity:"x1w3u9th",outline:"x1a2a7pz",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x10l6tqk",start:"x17qophe",left:null,right:null,top:"x13vifvy",width:"xh8yej3",$$css:!0},wrapper:{position:"x1n2onr6",$$css:!0}};function a(a,b){var d=a.children,e=a.indeterminate,f=e===void 0?!1:e,g=a.onClick,h=a.onValueChange;e=a.suppressFocusRing;var o=a.testid,p=a.xstyle,q=babelHelpers.objectWithoutPropertiesLoose(a,["children","indeterminate","onClick","onValueChange","suppressFocusRing","testid","xstyle"]),r=j(c("XPlatReactNestedPressableContext")),s=m(null);k(function(){s.current!=null&&(s.current.indeterminate=f)},[f]);var t=l(function(){return c("mergeRefs")(b,s)},[b]);return i.jsx(c("BaseFocusRing.react"),{suppressFocusRing:e,children:function(a){return i.jsxs(c("BaseView.react"),{testid:void 0,xstyle:[n.wrapper,a,p],children:[d,i.jsx(c("BaseInput.react"),babelHelpers["extends"]({},q,{"aria-checked":f?"mixed":(a=q.checked)!=null?a:!1,onClick:r?void 0:g,onValueChange:r?void 0:h,ref:t,type:"radio",xstyle:n.radio}))]})}})}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(i.forwardRef(a));g["default"]=e}),98);
__d("useCometPressableEventHandlers",["ExecutionEnvironment","XPlatReactNestedPressableContext","emptyObject","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useLayoutEffect,o=b.useRef,p=b.useState,q=new Set();(h||(h=c("ExecutionEnvironment"))).canUseDOM&&document.addEventListener("mousedown",function(){q.forEach(function(a){return a()})},!0);var r=function(a){q.add(a);return function(){q["delete"](a)}},s=new Set();(h||(h=c("ExecutionEnvironment"))).canUseDOM&&document.addEventListener("keydown",function(a){switch(a.key){case"ArrowUp":case"ArrowRight":case"ArrowDown":case"ArrowLeft":case"Tab":case"Enter":case" ":case"Escape":s.forEach(function(a){return a()})}},!0);var t=function(a){s.add(a);return function(){s["delete"](a)}},u=(h||(h=c("ExecutionEnvironment"))).canUseDOM?null:!0;function v(){u==null&&(u=!window.matchMedia("(pointer: coarse)").matches);return u}var w=0,x=1;function a(a){var b=a.clickOnSpace,d=b===void 0?!1:b;b=a.disabled;b=b===void 0?!1:b;var e=a.onFocusChange,f=a.onFocusIn,g=a.onFocusOut,h=a.onFocusVisibleChange,i=a.onHoverChange,q=a.onHoverIn,s=a.onHoverOut,u=a.onPress,y=a.onPressChange,z=a.onPressIn,A=a.onPressOut;a=a.testOnly_pressed;var B=a===void 0?!1:a;a=l(c("XPlatReactNestedPressableContext"));var C=o(w),D=p(!1),E=D[0],F=D[1];D=p(b);var G=D[0];D=D[1];var H=p(B),I=H[0],J=H[1];H=p(!1);var K=H[0],L=H[1];H=p(!1);var M=H[0],N=H[1];H=p(!1);var O=H[0],P=H[1];m(function(){var a=r(function(){C.current=w}),b=t(function(){C.current=x});return function(){a(),b()}},[]);var Q=k(function(a){J(a),y&&y(a)},[y]),R=k(function(a){L(a),e&&e(a),(C.current===x||!a&&M)&&(N(a),h&&h(a))},[e,h,M]),S=k(function(a){P(a),i&&i(a)},[i]);H=p(B);var T=H[0],U=H[1];n(function(){B!==T&&(Q(B),U(B))},[T,Q,B]);H=o(null);var V=k(function(a){R(!0),f&&f(a)},[f,R]),W=k(function(a){K&&(R(!1),g&&g(a))},[K,g,R]),X=k(function(a){if(!v())return;E&&(Q(!0),!I&&z&&z(a));S(!0);q&&q(a)},[E,q,z,I,S,Q]),Y=k(function(a){I&&(Q(!1),A&&A(a)),O&&(S(!1),s&&s(a))},[O,s,A,I,S,Q]),Z=k(function(a){F(!0),Q(!0),z&&z(a)},[z,Q]),aa=k(function(a){F(!1),I&&(Q(!1),A&&A(a))},[A,I,Q]),ba=k(function(a){F(!1),I&&(Q(!1),A&&A(a))},[A,I,Q]),$=o(!1),ca=k(function(a){$.current=a.touches.length===1,Q($.current),$.current&&z!=null&&z(a)},[z,Q]),da=k(function(a){$.current=!1,I&&(Q(!1),A&&A(a))},[A,I,Q]),ea=k(function(a){I&&(Q(!1),$.current&&a.touches.length===1&&(A&&A(a)))},[A,I,Q]);m(function(){if(E&&!O){var a=function(){F(!1)};document.addEventListener("mouseup",a,{capture:!0,passive:!0});return function(){document.removeEventListener("mouseup",a,{capture:!0,passive:!0})}}return function(){}},[a,E,Q,O]);var fa=k(function(a){var b=a.target;u!=null&&b instanceof HTMLElement&&b.tagName==="LABEL"&&a.preventDefault();F(!1);u&&u(a)},[u]),ga=k(function(a){a.key==="Enter"&&(u&&u(a)),a.key===" "&&d&&(u&&u(a))},[d,u]);b!==G&&(b&&(Q(!1),R(!1),S(!1)),D(b));G=b?c("emptyObject"):{onBlur:W,onClick:fa,onDragStart:ba,onFocus:V,onKeyDown:ga,onMouseDown:Z,onMouseEnter:X,onMouseLeave:Y,onMouseUp:aa,onTouchEnd:ea,onTouchMove:da,onTouchStart:ca};D=k(function(a){a=a.children;return j.jsx(c("XPlatReactNestedPressableContext").Provider,{value:!0,children:a})},[]);return[H,a,{disabled:b,focused:K,focusVisible:M,hovered:O,pressed:I},G,D]}g["default"]=a}),98);
__d("CometListCellRadioAddOn.react",["ix","BaseRadio.react","CometIcon.react","CometListCellContext","CometPressableOverlay.react","CometRadioGroupListContext","fbicon","react","useCometPressableEventHandlers"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useContext,m={radio:{display:"x78zum5",$$css:!0}};function a(a,b){var e=a["aria-label"],f=a["aria-labelledby"],g=a.checked;g=g===void 0?!1:g;var i=a.checkedIcon,n=a.color,o=a.disabled;o=o===void 0?!1:o;var p=a.icon,q=a.name,r=a.onValueChange,s=a.testid;s=a.value;a=babelHelpers.objectWithoutPropertiesLoose(a,["aria-label","aria-labelledby","checked","checkedIcon","color","disabled","icon","name","onValueChange","testid","value"]);i=(i=i)!=null?i:d("fbicon")._(h("621399"),20);p=(p=p)!=null?p:d("fbicon")._(h("545517"),20);var t=l(c("CometListCellContext"));t=t.disabled;var u=l(c("CometRadioGroupListContext")),v=u.name,w=u.onValueChange;u=u.value;t=(t=t)!=null?t:o;o=c("useCometPressableEventHandlers")({disabled:t});o[0];o[1];var x=o[2],y=x.focusVisible,z=x.hovered;x=x.pressed;o[3];q=(o=q)!=null?o:v;v=(o=s)!=null?o:u;var A=(s=r)!=null?s:w;o=k(function(a){A&&A(a.target.value)},[A]);return j.jsxs(c("BaseRadio.react"),babelHelpers["extends"]({},a,{"aria-label":e,"aria-labelledby":f,checked:g,disabled:t,name:q,onChange:o,ref:b,testid:void 0,value:v,xstyle:m.radio,children:[j.jsx(c("CometIcon.react"),{color:t===!0?"disabled":g===!0?(u=n)!=null?u:"highlight":"secondary",disabled:t,icon:g?i:p}),j.jsx(c("CometPressableOverlay.react"),{focusVisible:y,hovered:z,offset:8,pressed:x,radius:"50%"})]}))}a.displayName=a.name+" [from "+f.id+"]";e=j.forwardRef(a);g["default"]=e}),98);