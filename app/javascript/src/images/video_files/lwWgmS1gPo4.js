;/*FB_PKG_DELIM*/

__d("CometFriendsFeedResharesDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7281399878618896"}),null);
__d("CometFriendsFeedResharesDialogQuery$Parameters",["CometFriendsFeedResharesDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFriendsFeedResharesDialogQuery_facebookRelayOperation"),metadata:{},name:"CometFriendsFeedResharesDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometGroupResharesDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="25062617676715413"}),null);
__d("CometGroupResharesDialogQuery$Parameters",["CometGroupResharesDialogQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometGroupResharesDialogQuery_facebookRelayOperation"),metadata:{},name:"CometGroupResharesDialogQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("useCometResharesCanSummarize_link_preview.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometResharesCanSummarize_link_preview",selections:[{alias:null,args:[{kind:"Literal",name:"supported",value:"C8Y52"}],concreteType:null,kind:"LinkedField",name:"summary_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:'summary_renderer(supported:"C8Y52")'}],type:"LinkPreviewRoot",abstractKey:null};e.exports=a}),null);
__d("FeedShareActionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("604");b=d("FalcoLoggerInternal").create("feed_share_action",a);e=b;g["default"]=e}),98);
__d("useGroupsCometSharePostEventsClickCallback",["FeedShareActionFalcoEvent","react","useShareLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useCallback;function a(a){var b=a.shareType==null?"":a.shareType,d=c("useShareLogger")(),e=d.onOpenSharesheetButtonClicked;return i(function(){c("FeedShareActionFalcoEvent").log(function(){return{entry_point:a.shareEntryPoint,share_source_feed_type:a.shareSourceFeedType,share_type:b,shareable_id:a.shareableID}}),e({entry_point:a.shareEntryPoint,shareable_entity_fbid:a.shareableID,sharing_component_name:"ufi_share_button"})},[e,a.shareEntryPoint,a.shareableID,a.shareSourceFeedType,b])}g["default"]=a}),98);
__d("CometFriendsFeedResharesDialog.entrypoint",["CometFriendsFeedResharesDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.storyData;a=a.url;return{extraProps:{storyData:c,url:a},queries:{resharesQueryReference:{parameters:b("CometFriendsFeedResharesDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),url:a}}}}},root:c("JSResourceForInteraction")("CometFriendsFeedResharesDialog.react").__setRef("CometFriendsFeedResharesDialog.entrypoint")};g["default"]=a}),98);
__d("CometGroupResharesDialog.entrypoint",["CometGroupResharesDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.adminGroupOnly,e=a.feedLocation,f=a.initialQueryString,g=a.routeProps,h=a.shareableID,i=a.storyData;a=a.url;return{extraProps:{adminGroupOnly:c,feedLocation:e,initialQueryString:f,shareableID:(e=h)!=null?e:g==null?void 0:g.postID,storyData:i,url:(f=a)!=null?f:g==null?void 0:g.url},queries:{resharesQueryReference:{parameters:b("CometGroupResharesDialogQuery$Parameters"),variables:{adminGroupOnly:c,hasLinkedGroups:!0,isCommerce:(e=i==null?void 0:i.isCommerce)!=null?e:!1,scale:d("WebPixelRatio").get(),shareableID:(f=h)!=null?f:g==null?void 0:g.postID,url:(c=a)!=null?c:g==null?void 0:g.url}}}}},root:c("JSResourceForInteraction")("CometGroupResharesDialog.react").__setRef("CometGroupResharesDialog.entrypoint")};e=a;g["default"]=e}),98);
__d("useCometFeedToGroupReshareV2",["CometGroupResharesDialog.entrypoint","react","useCometEntryPointDialog","useUnifiedShareSheetLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useRef;function a(a){var b=a.adminGroupOnly,d=a.feedLocation,e=a.initialQueryString,f=a.shareableID,g=a.storyData;a=a.url;b={adminGroupOnly:b,feedLocation:d,initialQueryString:e,shareableID:f,storyData:g,url:a};e=c("useUnifiedShareSheetLogger")();var h=e.onShareOptionSelected;g=i(null);a=c("useCometEntryPointDialog")(c("CometGroupResharesDialog.entrypoint"),b);var j=a[0];function k(){j({}),h({entry_point:d,shareable_entity_fbid:f,sharing_action_audience:"private",sharing_action_destination:"groups",sharing_component_name:"share_in_groups"})}return{onClick:k,triggerRef:g}}g["default"]=a}),98);
__d("useCometResharesCanSummarize",["CometRelay","useCometResharesCanSummarize_link_preview.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.linkPreview;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometResharesCanSummarize_link_preview.graphql"),a);return((a=a.summary_renderer)==null?void 0:a.__typename)!=null}g["default"]=a}),98);
__d("useCometResharesToasts",["fbt","ix","SilenceableErrorMessageUtils","TetraIcon.react","cometPushToast","fbicon","react","useCometRouterDispatcher","useNullthrowsViolation","useToasterStateManager"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||(j=d("react")),l=j.useCallback,m="CometStoriesReshareToast";function a(a){var b=c("useToasterStateManager")(),e=c("useNullthrowsViolation")(c("useCometRouterDispatcher")()),f=l(function(f){var g=k.jsx(c("TetraIcon.react"),{color:"positive",icon:d("fbicon")._(i("498146"),20),size:20}),j=f!=null?{label:h._("__JHASH__SB5t9wP-DlC__JHASH__"),onPress:function(){e.go(f,{})}}:void 0;d("cometPushToast").cometPushToast({action:j,icon:g,message:a,testid:m},void 0,b)},[b,e,a]),g=l(function(a,c,e){if(a!=null){a=d("SilenceableErrorMessageUtils").getMetadataFromError(a);if(d("SilenceableErrorMessageUtils").shouldHideErrorMessage(a))return}a=c!=null?d("cometPushToast").cometPushToast:d("cometPushToast").cometPushErrorToast;a({icon:c,message:e?h._("__JHASH__Gg9tHFaojpv__JHASH__"):h._("__JHASH__QKJj6FsLHJQ__JHASH__"),onPress:function(b){function a(){return b.apply(this,arguments)}a.toString=function(){return b.toString()};return a}(function(){e&&e()}),testid:m},void 0,b)},[b]),j=l(function(){d("cometPushToast").cometPushToast({message:h._("__JHASH__lvbk0C0HrxQ__JHASH__"),testid:m},void 0,b)},[b]);return{showErrorToast:g,showPostingToast:j,showSuccessToast:f}}g["default"]=a}),98);
__d("CometExternalShareTracking",[],(function(a,b,c,d,e,f){"use strict";var g="https://wa.me",h="text";function a(a){if(a!=null){var b=new URL(g);b.searchParams.append(h,a);return b.toString()}}f.getWhatsAppShareURL=a}),66);