;/*FB_PKG_DELIM*/

__d("GroupsCometSaleComposerDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7203215969747494"}),null);
__d("GroupsCometSaleComposerDialogQuery$Parameters",["GroupsCometSaleComposerDialogQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometSaleComposerDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometSaleComposerDialogQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("GroupsCometSaleComposerDialog.entrypoint",["GroupsCometSaleComposerDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.listingId;a=a.originGroupId;return{queries:{composerQueryReference:{parameters:c("GroupsCometSaleComposerDialogQuery$Parameters"),variables:{delivery_types:["IN_PERSON"],listingId:b,origin_group_id:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometSaleComposerDialog.react").__setRef("GroupsCometSaleComposerDialog.entrypoint")};g["default"]=a}),98);
__d("GSUALoggingUtils",[],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,d,e,f){if(b===!0)return"group_mall_featured_card";switch(a){case"homepage_stream":return"newsfeed";case"group":if(d==="GROUP_ANNOUNCEMENTS_FEED")return"group_mall_featured_tab";return f!==null?f==="DISCUSSION"?"group_mall_discussion":"group_mall_bsg_tab":(b=e)!=null?b:"group_mall_bsg_tab";case"groups_tab":return"groups_tab";case"group_serp":return"group_search";case"search_results_page":if(c==="group_posts"||c==="groups_home")return"group_tab_serp";return c==="top"||c==="posts"?"global_search_module_result":"group_mall_topics_feed";case"group_permalink":return"group_permalink";default:return"unknown"}}g.storyRenderLocationToSurface=a}),98);
__d("CometGSUALoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({group_id:"",referral_code:"unknown",referral_surface:"unknown",surface:"unknown"});g["default"]=b}),98);
__d("CometMediaViewerFilmstrip.react",["fbt","ix","CometBackgroundImage.react","CometPressable.react","CometThrottle","FDSImage.react","Locale","TetraIcon.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;var m=b.useEffect,n=b.useRef,o=b.useState,p={imageInner:{height:"x5yr21d",objectFit:"x19kjcj4",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",maxWidth:"x193iq5w",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",transitionDuration:"xu6gjpd",transitionProperty:"x11xpdln",transitionTimingFunction:"x1r7x56h",whiteSpace:"xuxw1ft",$$css:!0},thumbnail:{cursor:"x1ypdohk",$$css:!0},thumbnailContainer:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",display:"x1rg5ohu",flexShrink:"x2lah0s",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},thumbnailNonActive:{opacity:"xti2d7y",":hover_opacity":"x5z6fxw",$$css:!0},thumbnailNonActiveDarken:{filter:"x1vra34",":hover_filter":"x19oicha",$$css:!0},videoIcon:{alignItems:"x6s0dn4",display:"x78zum5",height:"x3igimt",justifyContent:"xl56j7k",position:"x10l6tqk",width:"x1qrby5j",$$css:!0}},q={2:{marginStart:"x12mruv9",marginLeft:null,marginRight:null,marginEnd:"xfs2ol5",$$css:!0},6:{marginStart:"x1mnrxsn",marginLeft:null,marginRight:null,marginEnd:"x1w0mnb",$$css:!0}},r={36:{width:"x14qfxbe",$$css:!0},40:{width:"x100vrsf",$$css:!0}},s={36:{height:"xc9qbxq",$$css:!0},40:{height:"x1vqgdyp",$$css:!0}};function t(a){var b=a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?{backgroundColor:a.image.backgroundColor}:{},e=a.image.mediaType!=="video"?a.image.uri:a.image.thumbnailUri,f=a.thumbnailMargin,g=a.thumbnailSize,k=a.thumbnailUseDarken;k=k?p.thumbnailNonActiveDarken:p.thumbnailNonActive;var m="comet-media-viewer-filmstrip-thubmnail-"+a.index;return l.jsx("div",{className:(j||(j=c("stylex")))([p.thumbnailContainer,s[g],r[g],q[f]]),"data-testid":void 0,children:l.jsx(c("CometPressable.react"),{display:"inline",label:h._("__JHASH__4fCl582nKTG__JHASH__",[h._param("index",a.index)]),onPress:a.onClick,overlayDisabled:!0,children:l.jsxs("div",{className:j(p.thumbnail,s[g],r[g],a.active!==!0&&k),style:b,children:[a.image.mediaType==="video"?l.jsx("div",{className:"x6s0dn4 x78zum5 x3igimt xl56j7k x10l6tqk x1qrby5j",children:l.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("507224"),12)})}):null,a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?l.jsx(c("FDSImage.react"),{src:e,xstyle:p.imageInner}):l.jsx(c("CometBackgroundImage.react"),{src:e})]})})})}t.displayName=t.name+" [from "+f.id+"]";function a(a){var b=o(0),e=b[0],f=b[1],g=n(null),h=n(null),i=n(null);b=a.thumbnailMargin;var k=b===void 0?6:b;b=a.thumbnailSize;var q=b===void 0?36:b;b=a.thumbnailUseDarken;var r=b===void 0?!1:b,u=q+k*2;m(function(){function b(){if(g.current!=null){var b=g.current,c=b.offsetWidth;b=b.scrollWidth;var d=i.current;if(b===c)return;b=-e/u;var h=Math.floor((c+-e)/u),j=b+Math.floor((h-b)/2);if(d!=null){if(a.activeIndex>d&&(a.activeIndex<j||h===a.images.length)){i.current=a.activeIndex;return}if(a.activeIndex<d&&(a.activeIndex>j||b===0)){i.current=a.activeIndex;return}}j=e-(a.activeIndex-((h=d)!=null?h:0))*u;j=Math.min(0,j);j=Math.max(Math.floor(c-a.images.length*u),j);i.current=a.activeIndex;f(j)}}b();h.current!=null&&window.removeEventListener("resize",h.current);b=c("CometThrottle")(b,100);h.current=b;window.addEventListener("resize",b);return function(){h.current!=null&&window.removeEventListener("resize",h.current)}},[a.images,a.activeIndex,e,u]);return a.images.length<2?null:l.jsx("div",{className:(j||(j=c("stylex")))([p.root,s[q]]),ref:g,style:{transform:"translate3d("+(d("Locale").isRTL()?-e:e)+"px, 0, 0)"},children:a.images.map(function(b,c){return l.jsx(t,{active:a.activeIndex===c,image:b,index:c,onClick:function(b){a.onSetImage(c)},thumbnailMargin:k,thumbnailSize:q,thumbnailUseDarken:r},"thumbnail_"+c)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MarketplaceMessageSellerDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6165840280121677"}),null);
__d("MarketplacePDPC2CShippedMakeOfferDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8256560217691014"}),null);
__d("AdsCouponPromotionEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3310");b=d("FalcoLoggerInternal").create("ads_coupon_promotion_events",a);e=b;g["default"]=e}),98);
__d("MarketplacePromotedListingsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1830889");b=d("FalcoLoggerInternal").create("marketplace_promoted_listings",a);e=b;g["default"]=e}),98);
__d("XCometLWIManagementControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/manage/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometLWIMarketplaceListingCreationControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/ad_center/create/listingad/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);