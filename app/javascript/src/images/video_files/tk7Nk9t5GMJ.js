;/*FB_PKG_DELIM*/

__d("VideoBlurBackgroundContainer_video.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"VideoBlurBackgroundContainer_video",selections:[{alias:null,args:null,concreteType:"VideoThumbnail",kind:"LinkedField",name:"preferred_thumbnail",plural:!1,selections:[{alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"image_preview_payload",storageKey:null}],storageKey:null}],type:"Video",abstractKey:null};e.exports=a}),null);
__d("CometBlurryImagePreview.react",["getComputedStyle","react","useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useId,l=b.useLayoutEffect,m=b.useRef,n=b.useState;function a(a){var b=a.alt,d=a.blur,e=a.height,f=a.previewData,g=a.width,i=babelHelpers.objectWithoutPropertiesLoose(a,["alt","blur","height","previewData","width"]);a=(a=a.style)!=null?a:{};var o=a.height,p=a.width;d=(a=d)!=null?a:1.2;a=k();var q=c("useSetAttributeRef")("id",a),r="url(#"+a+")",s=c("useSetAttributeRef")("filter",r),t=k(),u=m(null),v=n(e!==void 0||o!==void 0||g!==void 0||p!==void 0),w=v[0],x=v[1];l(function(){var a=u.current;if(!(a instanceof SVGSVGElement))return;if(e!==void 0||o!==void 0||g!==void 0||p!==void 0){x(!0);return}var b=a.style.display,d=(h||(h=c("getComputedStyle")))(a);a.style.display="none";x(d!=null&&(d.height!==f.height+"px"||d.width!==f.width+"px"));a.style.display=b},[e,f.height,f.width,o,p,g]);return j.jsxs("svg",babelHelpers["extends"]({},i,{"aria-labelledby":b!=null?t:null,height:(v=e)!=null?v:w?void 0:f.height,preserveAspectRatio:"none",ref:u,role:"img",viewBox:"0 0 "+f.width+" "+f.height,width:(i=g)!=null?i:w?void 0:f.width,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[b!=null&&j.jsx("title",{id:t,children:b}),j.jsxs("filter",{colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",id:a,ref:q,suppressHydrationWarning:!0,children:[j.jsx("feGaussianBlur",{edgeMode:"duplicate",stdDeviation:d}),j.jsx("feComponentTransfer",{children:j.jsx("feFuncA",{tableValues:"1 1",type:"discrete"})})]}),j.jsx("image",{filter:r,height:f.height,ref:s,suppressHydrationWarning:!0,width:f.width,x:"0",xlinkHref:f.dataURI,y:"0"})]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesSuspensePauseContextProvider.react",["StoriesSuspensePauseContext","react","useStoriesSuspensePause"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function a(a){a=a.children;var b=c("useStoriesSuspensePause")(),d=b[0],e=b[1];b=j(function(){return{isPaused:d,setPause:e}},[d,e]);return i.jsx(c("StoriesSuspensePauseContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("getPreviewDataFromImagePreviewPayload",["FBLogger","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h="data:image/jpeg;base64,",i=160,j=162,k=42;function l(a,b){b===void 0&&(b=0);a=atob(a);if(a.length<=3)throw c("unrecoverableViolation")("The preview payload was "+a.length+" byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.","comet_infra");var d=new Uint8Array(a.length+b);for(var e=0;e<a.length;e++)d[b+e]=a.charCodeAt(e);return d}var m;function n(){m==null&&(m=l("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA=="));return m}function a(a){var b=n();try{a=l(a,b.length-3);var d=a[b.length-1],e=a[b.length-3],f=a[b.length-2];if(d>k)throw c("unrecoverableViolation")("Tried to decode a payload whose height was "+d+". The maximum "+("is "+k+"."),"comet_infra");if(f>k)throw c("unrecoverableViolation")("Tried to decode a payload whose width was "+f+". The maximum "+("is "+k+"."),"comet_infra");a.set(b,0);a[i]=d;a[j]=f;b=btoa(String.fromCharCode.apply(null,a));return{dataURI:""+h+b,height:d,width:f,version:e}}catch(b){a=c("FBLogger")("images_infra");b instanceof Error&&a.catching(b);a.warn("Failed to decode a preview image payload. Falling back with a blank image.");return null}}g["default"]=a}),98);
__d("VideoBlurBackgroundContainer.react",["CometBlurryImagePreview.react","CometRelay","FDSImage.react","VideoBlurBackgroundContainer_video.graphql","getPreviewDataFromImagePreviewPayload","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=j||d("react"),l={blurryImage:{filter:"x1hedwgd",transform:"x4zgh4k",$$css:!0},image:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,height:"x5yr21d",opacity:"xti2d7y",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},lightBackgroundInLightMode:{backgroundColor:"x2bj2ny",$$css:!0},root:{backgroundColor:"xal61yo",height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};e=k.forwardRef(a);function a(a,e){var f,g=a.children,j=a.lightBackgroundInLightMode,m=a.video;a=a.xstyle;m=d("CometRelay").useFragment(h!==void 0?h:h=b("VideoBlurBackgroundContainer_video.graphql"),m);f=(f=m.preferred_thumbnail)==null?void 0:f.image_preview_payload;var n;if(f!=null){f=c("getPreviewDataFromImagePreviewPayload")(f);f!=null&&(n=k.jsx(c("CometBlurryImagePreview.react"),{className:"x1ey2m1c x9f619 xds687c x5yr21d xti2d7y x10l6tqk x17qophe x13vifvy xh8yej3 x1ja2u2z",previewData:f}))}f=(f=m.preferred_thumbnail)==null?void 0:(m=f.image)==null?void 0:m.uri;n==null&&f!=null&&(n=k.jsx(c("FDSImage.react"),{src:f,xstyle:[l.blurryImage,l.image]}));return k.jsxs("div",{className:(i||(i=c("stylex")))(l.root,a,j===!0&&l.lightBackgroundInLightMode),ref:e,children:[n,g]})}a.displayName=a.name+" [from "+f.id+"]";a=e;g["default"]=a}),98);
__d("CometWatchAndScrollTriggerContextProvider",["CometWatchAndScrollTriggerContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useContext,k=b.useMemo,l=b.useState;function a(a){a=a.children;var b=j(c("CometWatchAndScrollTriggerContext")),d=l(b.isControlShown),e=d[0],f=d[1];d=l(b.isTriggerDisabled);var g=d[0],h=d[1];b=k(function(){return{isControlShown:e,isTriggerDisabled:g,setIsControlShown:f,setIsTriggerDisabled:h}},[e,g]);return i.jsx(c("CometWatchAndScrollTriggerContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);