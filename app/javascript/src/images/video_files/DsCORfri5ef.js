;/*FB_PKG_DELIM*/

__d("CometTahoeRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="25362202796727107"}),null);
__d("CometTahoeRootQuery$Parameters",["CometTahoeRootQuery_facebookRelayOperation","CometUFIReactionsEnableShortName.relayprovider","StoriesLWRVariant.relayprovider","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometTahoeRootQuery_facebookRelayOperation"),metadata:{},name:"CometTahoeRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"),__relay_internal__pv__CometUFIReactionsEnableShortNamerelayprovider:b("CometUFIReactionsEnableShortName.relayprovider"),__relay_internal__pv__StoriesLWRVariantrelayprovider:b("StoriesLWRVariant.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomeNewPermalinkHeroUnitQuery$Parameters",["CometVideoHomeNewPermalinkHeroUnitQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeNewPermalinkHeroUnitQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeNewPermalinkHeroUnitQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomePlaylistRootQuery$Parameters",["StoriesRing.relayprovider","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7723566780998626",metadata:{},name:"CometVideoHomePlaylistRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomeRHCRootQuery$Parameters",["CometVideoHomeRHCRootQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeRHCRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeRHCRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("validateChainingCaller",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("validateChannelEntryPoint",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("CometTahoeRoot.entrypoint",["CometTahoeRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","validateChainingCaller","validateChannelEntryPoint"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.story_token,e=a.passthroughProps,f=(e==null?void 0:e.playerOrigin)!=null?String(e==null?void 0:e.playerOrigin):void 0,g=(e==null?void 0:e.playerSuborigin)!=null?String(e==null?void 0:e.playerSuborigin):void 0,h=c("gkx")("23157"),i=(e==null?void 0:e.channelID)!=null?String(e==null?void 0:e.channelID):null,j=c("validateChainingCaller")(e==null?void 0:e.caller),k=c("validateChannelEntryPoint")(e==null?void 0:e.channelEntryPoint),l=null;(e==null?void 0:e.searchKeyword)!=null&&(l=JSON.stringify({searchKeyword:e==null?void 0:e.searchKeyword}));var m=(e==null?void 0:e.chainingCursor)!=null?String(e==null?void 0:e.chainingCursor):null;e=(e==null?void 0:e.chainingSeedVideoId)!=null?String(e==null?void 0:e.chainingSeedVideoId):null;e={caller:(j=j)!=null?j:"TAHOE",chainingCursor:m,chainingSeedVideoId:e,channelEntryPoint:(j=k)!=null?j:"TAHOE",channelID:(m=i)!=null?m:"",feedbackSource:41,feedLocation:"TAHOE",focusCommentID:null,isCrawler:h,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:d("WebPixelRatio").get(),streamChainingSection:!1,useDefaultActor:!1,videoChainingContext:l};k=babelHelpers["extends"]({},e,{playerOrigin:f,playerSuborigin:g});j={tahoeRootQueryReference:{parameters:c("CometTahoeRootQuery$Parameters"),variables:babelHelpers["extends"]({},k,{videoID:b})}};return{extraProps:{t:a.routeProps.t},queries:j}},root:c("JSResourceForInteraction")("CometTahoeRoot.react").__setRef("CometTahoeRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeFeedRootEntrypoint.entrypoint",["CometVideoHomeFeedEntryPointVariables","CometVideoHomeFeedRootQuery$Parameters","CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var d,e=a.caller==="WWW_PERMALINK";return{queries:{feedRootQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("CometVideoHomeFeedRootQuery$Parameters"),variables:babelHelpers["extends"]({},c("CometVideoHomeFeedEntryPointVariables"),{aggregatedVIDs:(d=a.aggregatedVIDs)!=null?d:[],caller:a.caller,isRelatedVideosQueryDeferred:e,triggerData:{injected_video_id:a.injectedVideoID}})},surfaceHighlightsQueryReference:{parameters:b("CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRootEntrypoint.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkHeroUnit.entrypoint",["CometVideoHomeNewPermalinkHeroUnitQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","validateChainingCaller"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e=c("gkx")("23157"),f=a.passthroughProps;f=c("validateChainingCaller")(f==null?void 0:f.caller);f={caller:(f=f)!=null?f:"TAHOE",entityNumber:5,feedbackSource:41,feedLocation:"TAHOE",focusCommentID:a.routeProps.focuscommentid,isCrawler:e,isLoggedOut:c("gkx")("22809"),privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_home",scale:d("WebPixelRatio").get(),useDefaultActor:!1,videoID:(f=a.routeProps.v)!=null?f:"",videoIDStr:String((e=a.routeProps.v)!=null?e:"")};return{queries:{injectedFeedUnitQueryReference:{parameters:b("CometVideoHomeNewPermalinkHeroUnitQuery$Parameters"),variables:f}}}},root:c("JSResourceForInteraction")("CometVideoHomeNewPermalinkHeroUnit.react").__setRef("CometVideoHomeNewPermalinkHeroUnit.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeRHCRoot.entrypoint",["CometVideoHomeRHCRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c;return{queries:{rhcRootQueryReference:{parameters:b("CometVideoHomeRHCRootQuery$Parameters"),variables:{isInNPC:(c=a.isInNPC)!=null?c:!1,scale:d("WebPixelRatio").get(),videoId:(c=a.videoId)!=null?c:""}}}}},root:c("JSResourceForInteraction")("CometVideoHomeRHCRoot.react").__setRef("CometVideoHomeRHCRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeNewPermalinkRoot.entrypoint",["CometVideoHomeFeedRootEntrypoint.entrypoint","CometVideoHomeNewPermalinkHeroUnit.entrypoint","CometVideoHomeRHCRoot.entrypoint","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c,e=0;return{entryPoints:{feedRootNestedEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("CometVideoHomeFeedRootEntrypoint.entrypoint"),entryPointParams:{aggregatedVIDs:(c=a.routeProps.aggregatedVIDs)!=null?c:[],caller:"WWW_PERMALINK",injectedVideoID:a.routeProps.v}}),injectedFeedUnitNestedEntryPoint:a.routeProps.v!=null?d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("CometVideoHomeNewPermalinkHeroUnit.entrypoint"),entryPointParams:a}):null,rhcNestedEntryPoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("CometVideoHomeRHCRoot.entrypoint"),entryPointParams:{isInNPC:!0,videoId:String(a.routeProps.v)}})},extraProps:{externalLogID:a.routeProps.externalLogID,ft:a.routeProps.ft,hideNpcOverviewComments:a.routeProps.hideNpcOverviewComments,injectedVideoID:a.routeProps.v,isFacebookReferrer:a.routeProps.isFacebookReferrer,isFullPageLoad:a.routeProps.isFullPageLoad,nuxedPageID:a.routeProps.nuxedPageID,nuxedPageName:a.routeProps.nuxedPageName,offsetPosition:e,showHashtagPillsSidePane:a.routeProps.showHashtagPillsSidePane,showHashtagVideosRHCSection:a.routeProps.showHashtagVideosRHCSection,showMovieTrailersRHCSection:a.routeProps.showMovieTrailersRHCSection,showNpcLongerPreview:a.routeProps.showNpcLongerPreview,showNpcPlayerPills:a.routeProps.showNpcPlayerPills,showTVMoviesRHCSection:a.routeProps.showTVMoviesRHCSection,t:a.routeProps.t,upstreamPlayerSource:a.routeProps.upstreamPlayerSource,useCommentsAsDefaultPill:a.routeProps.useCommentsAsDefaultPill,viewportTrackingConfig:a.routeProps.viewportTrackingConfig}}},root:c("JSResourceForInteraction")("CometVideoHomeNewPermalinkRoot.react").__setRef("CometVideoHomeNewPermalinkRoot.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomePlaylistRoot.entrypoint",["CometVideoHomePlaylistRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomePlaylistRoot.react").__setRef("CometVideoHomePlaylistRoot.entrypoint"),function(a){a={id:a.routeProps.id};return{queries:{playlistRootQueryReference:{parameters:b("CometVideoHomePlaylistRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),trigger_data:a}}}}});g["default"]=a}),98);