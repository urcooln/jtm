;/*FB_PKG_DELIM*/

__d("CometImageCover.react",["BaseImage_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useCallback,k=e.useRef,l=e.useState;d=function(){var a=document.documentElement;return a==null?!0:Boolean("objectFit"in a.style)}();function a(a){a.alt;var b=a.loading,d=a.onError,e=a.onLoad,f=a.src,g=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["alt","loading","onError","onLoad","src","style"]);var h=l(null),m=h[0],n=h[1],o=k();h=j(function(){var a=o.current;if(a==null||!(a instanceof HTMLImageElement)||typeof a.src!=="string")return;n(a.src);e!=null&&e()},[e]);return m!=null?i.jsx("div",{className:"x1rg5ohu x5yr21d xl1xv1r xh8yej3",style:babelHelpers["extends"]({backgroundImage:"url("+m+")",backgroundPosition:"center center",backgroundSize:"cover"},g)}):i.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({},a,{className:"xqtp20y xnalus7",loading:b||void 0,onError:d,onLoad:h,ref:o,src:f,style:g}))}a.displayName=a.name+" [from "+f.id+"]";function b(a){return i.jsx(c("BaseImage_DEPRECATED.react"),babelHelpers["extends"]({className:"x1rg5ohu x5yr21d xl1xv1r xh8yej3"},a))}b.displayName=b.name+" [from "+f.id+"]";e=d?b:a;g["default"]=e}),98);
__d("useThrottledComet",["CometThrottle","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useLayoutEffect,k=b.useRef;function a(a,b){b===void 0&&(b=100);var d=k(a);j(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometThrottle")(function(){var a=arguments;return d.current==null?void 0:d.current.apply(d,a)},b)});i(function(){return function(){e.cancel()}},[]);return e}g["default"]=a}),98);
__d("StoriesCreateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=!1;c=a.createContext(b);g["default"]=c}),98);
__d("StoriesCreateConstants",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a={DEFAULT:{BODY:h._("__JHASH__2dP-S2NXGWo__JHASH__"),CANCEL:h._("__JHASH__iNbID4Of76-__JHASH__"),CONFIRM:h._("__JHASH__2bGTq0Hn_zL__JHASH__"),TITLE:h._("__JHASH__fy6v2Hc0_3x__JHASH__")}};b={SELECTION_TILE_HEIGHT:330,SELECTION_TILE_WIDTH:220,SPACE_BETWEEN_SELECTOR:20};c={FOOTER_HEIGHT:52,HEADER_HEIGHT:16};d={COMET_PUSH_VIEW_HEIGHT:28,CONTAINER_HORIZONTAL_PADDING:24*2,CONTAINER_MAX_WIDTH:940,CONTAINER_VERTICAL_PADDING:32*2,CONTENT_HEADER_HEIGHT:36,CONTENT_HORIZONTAL_PADDING:16*2,CONTENT_VERTICAL_PADDING:16*2,MAX_OVERLAY_WIDTH:472.5,SIDE_PANE_WIDTH:360};e=h._("__JHASH__b-5wJWOv0zU__JHASH__");f={FOOTER_HEIGHT:12,HEADER_HEIGHT:12};h={EDITING:"editing",NONE:"none"};var i={EMOJI:"emoji",LOCATION:"location",POLL:"poll",TAG:"tag"},j={EDITING:"editing",NONE:"none"},k={HORIZONTAL:"horizontal",NONE:"none"},l=26,m=3,n=4,o={FOOTER_HEIGHT:92},p=Object.freeze({BLACK:"rgb(0, 0, 0)",BLUE:"rgb(41, 134, 174)",BROWN:"rgb(112, 41, 41)",CORAL:"rgb(247, 114, 74)",CYAN:"rgb(94, 213, 255)",GOLD:"rgb(241, 196, 58)",GRAY:"rgb(142, 147, 156)",GREEN:"rgb(136, 191, 75)",LIGHT_BLUE:"rgb(202, 237, 248)",LIGHT_GRAY:"rgb(206, 208, 212)",LIGHT_PURPLE:"rgb(220, 211, 239)",MAGENTA:"rgb(251, 62, 160)",MINT:"rgb(185, 252, 203)",NAVY:"rgb(43, 69, 124)",ORANGE:"rgb(244, 146, 58)",PINK:"rgb(249, 203, 209)",PURPLE:"rgb(148, 31, 177)",RED:"rgb(248, 61, 61)",VIOLET:"rgb(88, 59, 154)",WHITE:"rgb(255, 255, 255)",YELLOW:"rgb(248, 226, 76)"}),q={x:.5,y:.5};g.LEAVE_TEXT=a;g.NULL_STATE_DIMENSIONS=b;g.PHOTO_PREVIEW_DIMENSIONS=c;g.PREVIEW_DIMENSIONS=d;g.SATP_PLACEHOLDER=e;g.SATP_PREVIEW_DIMENSIONS=f;g.STICKER_EDITING_MODE=h;g.STICKER_TYPE=i;g.TEXT_OVERLAY_MODE=j;g.OVERLAY_ALIGNMENT_TYPE=k;g.VIDEO_MAX_DURATION=l;g.VIDEO_MIN_DURATION=m;g.VIDEO_MIN_DURATION_FOR_TRIM=n;g.VIDEO_PREVIEW_DIMENSIONS=o;g.COLOR_NAME_TO_RGB=p;g.ORIGIN=q}),98);
__d("ChevronRightFilled12.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsx("path",{fillRule:"nonzero",d:"M454.095 1083.47a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97z"})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("useThrottledImpl",["cr:1708227"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1708227")}),98);
__d("getVendorPrefixedName",["invariant","ExecutionEnvironment","UserAgent","camelize"],(function(a,b,c,d,e,f,g,h){var i,j={},k=["Webkit","ms","Moz","O"],l=new RegExp("^("+k.join("|")+")"),m=(i||(i=c("ExecutionEnvironment"))).canUseDOM?document.createElement("div").style:{};function n(a){for(var b=0;b<k.length;b++){var c=k[b]+a;if(c in m)return c}return null}function o(a){switch(a){case"lineClamp":return c("UserAgent").isEngine("WebKit >= 315.14.2")||c("UserAgent").isEngine("Blink")?"WebkitLineClamp":null;default:return null}}function a(a){var b=c("camelize")(a);if(j[b]===void 0){var d=b.charAt(0).toUpperCase()+b.slice(1);l.test(d)&&h(0,957,a);(i||(i=c("ExecutionEnvironment"))).canUseDOM?j[b]=b in m?b:n(d):j[b]=o(b)}return j[b]}g["default"]=a}),98);
__d("useThrottled",["cr:6101"],(function(a,b,c,d,e,f,g){"use strict";f.exports=b("cr:6101")}),34);
__d("fbjs/lib/ExecutionEnvironment",["ExecutionEnvironment"],(function(a,b,c,d,e,f){"use strict";var g;e.exports=g||b("ExecutionEnvironment")}),null);