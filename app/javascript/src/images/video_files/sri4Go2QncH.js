;/*FB_PKG_DELIM*/

__d("MarketplacePDPRightColumnAdsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7293133640732435"}),null);
__d("MarketplacePDPRightColumnAdsQuery$Parameters",["MarketplacePDPRightColumnAdsQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MarketplacePDPRightColumnAdsQuery_facebookRelayOperation"),metadata:{},name:"MarketplacePDPRightColumnAdsQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("MarketplacePDPContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7340444322737992"}),null);
__d("MarketplacePDPContainerQuery$Parameters",["CometUFIReactionsEnableShortName.relayprovider","MarketplacePDPContainerQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("MarketplacePDPContainerQuery_facebookRelayOperation"),metadata:{},name:"MarketplacePDPContainerQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider")}}};e.exports=a}),null);
__d("CometMarketplaceEntryPointsUtils.entrypoint",["gkx"],(function(a,b,c,d,e,f,g){"use strict";e=2147483647;var h=e*100;function a(a,b){var c=100;a=!isNaN(a)&&a!=null?a*c:0;b=!isNaN(b)&&b!=null?b*c:h;return[a,b]}function b(){return!1}function d(){return c("gkx")("23590")}g.getMinMaxPriceRange=a;g.shouldCreateCAIPageInQuery=b;g.shouldShowMultipleAdsInPDP=d}),98);
__d("MarketplacePermalinkRoot.entrypoint",["CometMarketplaceEntryPointsUtils.entrypoint","JSResourceForInteraction","MarketplacePDPContainerQuery$Parameters","MarketplacePDPRightColumnAdsQuery$Parameters","WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e={rootQueryReference:{parameters:c("MarketplacePDPContainerQuery$Parameters"),variables:{feedbackSource:56,feedLocation:"MARKETPLACE_MEGAMALL",referralCode:a.routeParams.referral_code,scale:d("WebPixelRatio").get(),should_show_new_pdp:c("qex")._("821")||!1,targetId:a.routeParams.listing_id,useDefaultActor:!1}}};c("gkx")("23554")&&(e=babelHelpers["extends"]({},e,{pdpAdsQueryReference:{parameters:b("MarketplacePDPRightColumnAdsQuery$Parameters"),variables:{adsRelatedTo:a.routeParams.listing_id,browseContext:"PDP_RELATED_ADS_FEED",count:d("CometMarketplaceEntryPointsUtils.entrypoint").shouldShowMultipleAdsInPDP()?2:1,cursor:""}}}));return{queries:e}},root:c("JSResourceForInteraction")("CometMarketplacePermalinkRoot.react").__setRef("MarketplacePermalinkRoot.entrypoint")};g["default"]=a}),98);
__d("MessengerBlurpleLogoSvg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.cloneElement,k=b.useId,l=b.useMemo;function a(a){var b=a.height;a=a.width;a=(a=a)!=null?a:"80";b=(b=b)!=null?b:"80";var c=k(),d=l(function(){return j(i.jsx("path",{}),{clipRule:"evenodd",d:"M40 .914C17.995.914.937 17.033.937 38.804c0 11.389 4.668 21.23 12.268 28.026a3.12 3.12 0 011.05 2.227l.212 6.95c.068 2.215 2.358 3.658 4.386 2.763l7.753-3.423a3.115 3.115 0 012.087-.153A42.602 42.602 0 0040 76.695c22.005 0 39.063-16.118 39.063-37.89C79.063 17.033 62.005.915 40 .915z",fill:"url(#"+(c+")"),fillRule:"evenodd",suppressHydrationWarning:!0})},[c]),e=l(function(){return j(i.jsx("radialGradient",{}),{children:i.jsxs(i.Fragment,{children:[i.jsx("stop",{stopColor:"#09F"}),i.jsx("stop",{offset:"0.61",stopColor:"#A033FF"}),i.jsx("stop",{offset:"0.935",stopColor:"#FF5280"}),i.jsx("stop",{offset:"1",stopColor:"#FF7061"})]}),cx:"0",cy:"0",gradientTransform:"rotate(-57.092 80.25 24.628) scale(85.1246)",gradientUnits:"userSpaceOnUse",id:c,r:"1",suppressHydrationWarning:!0})},[c]);return i.jsxs("svg",{fill:"none",height:b,viewBox:" 0 0 80 80",width:a,children:[d,i.jsx("path",{clipRule:"evenodd",d:"M16.543 49.886L28.018 31.68a5.86 5.86 0 018.472-1.563l9.127 6.844a2.343 2.343 0 002.823-.008L60.765 27.6c1.645-1.248 3.793.72 2.692 2.467L51.982 48.272a5.86 5.86 0 01-8.472 1.563l-9.127-6.845a2.344 2.344 0 00-2.823.01l-12.325 9.354c-1.646 1.248-3.793-.72-2.692-2.467z",fill:"#fff",fillRule:"evenodd"}),i.jsx("defs",{children:e})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerX.react",["VideoPlayerErrorBoundary.react","VideoPlayerXImpl.react","defaultErrorBoundaryFallback","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=a.doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn;b=b===void 0?!1:b;var d=a.errorBoundaryFallback;a=babelHelpers.objectWithoutPropertiesLoose(a,["doNotRenderErrorBoundaryIUnderstandIMustProvideMyOwn","errorBoundaryFallback"]);a=i.jsx(c("VideoPlayerXImpl.react"),babelHelpers["extends"]({VideoPlayerShakaPerformanceLoggerClass:null},a));return b?a:i.jsx(c("VideoPlayerErrorBoundary.react"),{description:"VideoPlayerX",fallback:(b=d)!=null?b:c("defaultErrorBoundaryFallback"),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useJSON",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useMemo;function a(a,b){return i(function(){return JSON.parse(a,b)},[a,b])}g["default"]=a}),98);
__d("XCometVanityURLControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useLayoutEffect_SAFE_FOR_SSR",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).useLayoutEffect;b=a;g["default"]=b}),98);