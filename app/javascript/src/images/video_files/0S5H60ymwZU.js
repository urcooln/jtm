;/*FB_PKG_DELIM*/

__d("GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7471407192902278"}),null);
__d("GroupsCometRequestToParticipateFromChatDialogQuery$Parameters",["GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometRequestToParticipateFromChatDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometRequestToParticipateFromChatDialogQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("useGroupsCometMemberCount_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"showOnlyCount"},{defaultValue:"COMPRESSED",kind:"LocalArgument",name:"type"}],kind:"Fragment",metadata:null,name:"useGroupsCometMemberCount_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:[{kind:"Variable",name:"show_only_count",variableName:"showOnlyCount"},{kind:"Variable",name:"type",variableName:"type"}],kind:"ScalarField",name:"formatted_count_text",storageKey:null}],storageKey:null},action:"THROW",path:"group_member_profiles"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5236204216436092"}),null);
__d("GroupsCometCancelForumParticipationRequestDialogQuery$Parameters",["GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometCancelForumParticipationRequestDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometCancelForumParticipationRequestDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometColorWrapper_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometColorWrapper_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_canSeeExpandedColor",fragmentName:"GroupsCometColorExpandedWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_cannot_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_cannotSeeExpandedColor",fragmentName:"GroupsCometColorDefaultWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometMoreActionMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7633568263362350"}),null);
__d("GroupsCometMoreActionMenuQuery$Parameters",["GroupsCometMoreActionMenuQuery_facebookRelayOperation","VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometMoreActionMenuQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometMoreActionMenuQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__VideoPlayerRelayReplaceDashManifestWithPlaylistrelayprovider:b("VideoPlayerRelayReplaceDashManifestWithPlaylist.relayprovider")}}};e.exports=a}),null);
__d("useNuxOnce_nux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useNuxOnce_nux",selections:[{alias:null,args:null,kind:"ScalarField",name:"nux_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"should_show",storageKey:null}],type:"DefaultNUX",abstractKey:null};e.exports=a}),null);
__d("GroupsCometRequestToParticipateFromChatDialog.entrypoint",["GroupsCometRequestToParticipateFromChatDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{myQueryReference:{parameters:c("GroupsCometRequestToParticipateFromChatDialogQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometRequestToParticipateFromChatDialog.react").__setRef("GroupsCometRequestToParticipateFromChatDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometRequestToParticipateFromChatDialogFbts",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__MkzA14JUv0k__JHASH__");g.RequestToParticipateDialogTitle=a}),98);
__d("useGroupsCometRequestToPartcipateFromChatEntryPointDialog",["CometCardedDialogLoadingStateLegacy.react","GroupsCometRequestToParticipateFromChatDialog.entrypoint","GroupsCometRequestToParticipateFromChatDialogFbts","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.groupID;return c("useCometEntryPointDialog")(c("GroupsCometRequestToParticipateFromChatDialog.entrypoint"),{groupID:a},void 0,function(a){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("GroupsCometRequestToParticipateFromChatDialogFbts").RequestToParticipateDialogTitle,withCloseButton:!0})})}g["default"]=a}),98);
__d("GroupsCometMoreActionMenu.entrypoint",["GroupsCometMoreActionMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:b("GroupsCometMoreActionMenuQuery$Parameters"),variables:{groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometMoreActionMenu.react").__setRef("GroupsCometMoreActionMenu.entrypoint")};g["default"]=a}),98);
__d("GroupsCometJoinButtonWithMenu.react",["fbt","ix","CometEntryPointPopoverTrigger.react","GroupsCometMoreActionMenu.entrypoint","TetraButtonGroup.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react");function a(a){var b=a.disableSecondaryButton,e=b===void 0?!1:b;b=a.groupID;var f=a.primaryButtonConfig;return k.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"middle",entryPointParams:{groupID:b},otherProps:{},popoverEntryPoint:c("GroupsCometMoreActionMenu.entrypoint"),preloadTrigger:"button",children:function(a,b,g,j,l,m){return k.jsx(c("TetraButtonGroup.react"),{paddingHorizontal:0,primary:f,secondaryIcon:{disabled:e,icon:d("fbicon")._(i("484386"),16),label:h._("__JHASH__vsPR1PMxOLr__JHASH__"),onHoverIn:j,onHoverOut:l,onPress:b,onPressIn:m,ref:a}})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometJoinedButton.react",["fbt","ix","GroupsCometJoinButtonWithMenu.react","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=j||d("react");function a(a){var b=a.groupID,e=a.groupURL,f=a.hasIcon,g=f===void 0?!0:f;f=a.isCommunity;f=f===void 0?!1:f;var j=a.joinedButtonText,l=a.onFooter;l=l===void 0?!1:l;var m=a.onPressJoined,n=a.openInNewTab,o=a.reduceEmphasis,p=a.source,q=a.useShortenedCTA;q=q===void 0?!1:q;a=a.withMenu;a=a===void 0?!1:a;var r={icon:q?d("fbicon")._(i("647440"),16):void 0,label:q?h._("__JHASH__NEDiHySZPHn__JHASH__"):f?h._("__JHASH__9HfU8OhABSw__JHASH__"):h._("__JHASH__fkv2GLk3eK7__JHASH__"),linkProps:{target:n?"_blank":void 0,url:e},onPress:m,reduceEmphasis:o||!l,type:l?"secondary":"primary"},s=babelHelpers["extends"]({},r,{icon:d("fbicon")._(i("1009563"),16),label:h._("__JHASH__RQa55B9NdZK__JHASH__"),size:"large",type:"secondary"});if(a)return k.jsx(c("GroupsCometJoinButtonWithMenu.react"),{groupID:b,primaryButtonConfig:r});q=function(){if(j!=null){r.linkProps;var a=babelHelpers.objectWithoutPropertiesLoose(r,["linkProps"]);return babelHelpers["extends"]({},a,{icon:g?d("fbicon")._(i("1009563"),16):void 0,label:j})}switch(p){case"COMET_EVENTS_MEET_YOUR_HOSTS":return s;default:return r}};f=q();return k.jsx(c("TetraButton.react"),babelHelpers["extends"]({},f))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometCannotRequestButton.react",["fbt","GroupsCometJoinButtonWithMenu.react","TetraButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=a.groupID;a=a.withMenu;var d={disabled:!0,label:h._("__JHASH__G9aZ0LrCHT6__JHASH__"),type:"secondary"};return a?j.jsx(c("GroupsCometJoinButtonWithMenu.react"),{groupID:b,primaryButtonConfig:d}):j.jsx(c("TetraButton.react"),babelHelpers["extends"]({},d))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometMemberCount",["CometRelay","useGroupsCometMemberCount_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){a=a.group$key;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupsCometMemberCount_group.graphql"),a);return(a=a.group_member_profiles.formatted_count_text)!=null?a:null}g["default"]=a}),98);
__d("GroupsCometEntityMenuEmbeddedContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("GroupsCometCancelForumParticipationRequestDialog.entrypoint",["GroupsCometCancelForumParticipationRequestDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{myQueryReference:{parameters:c("GroupsCometCancelForumParticipationRequestDialogQuery$Parameters"),variables:{groupID:a}}}}},root:c("JSResourceForInteraction")("GroupsCometCancelForumParticipationRequestDialog.react").__setRef("GroupsCometCancelForumParticipationRequestDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometCancelForumParticipationRequestDialogFbts",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__CmHi9B7qvSB__JHASH__");g.CancelForumParticipationRequestDialogTitle=a}),98);
__d("useGroupsCometCancelForumParticipationRequestEntryPointDialog",["CometCardedDialogLoadingStateLegacy.react","GroupsCometCancelForumParticipationRequestDialog.entrypoint","GroupsCometCancelForumParticipationRequestDialogFbts","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){a=a.groupID;return c("useCometEntryPointDialog")(c("GroupsCometCancelForumParticipationRequestDialog.entrypoint"),{groupID:a},void 0,function(a){return i.jsx(c("CometCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("GroupsCometCancelForumParticipationRequestDialogFbts").CancelForumParticipationRequestDialogTitle,withCloseButton:!0})})}g["default"]=a}),98);
__d("GroupsCometColorWrapper.react",["CometRelay","GroupsCometColorWrapper_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react");function a(a){var c=a.children,e=a.group,f=a.isDefaultColorApplied;f=f===void 0?!0:f;var g=a.preventWebWashFlexProperty;g=g===void 0?!1:g;var i=a.properties;a=a.testid;e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometColorWrapper_group.graphql"),e);if((e==null?void 0:e.if_viewer_can_see_expanded_color)!=null)return j.jsx(d("CometRelay").MatchContainer,{match:e==null?void 0:e.if_viewer_can_see_expanded_color,props:{children:c,preventWebWashFlexProperty:g,properties:i,testid:a}});return(e==null?void 0:e.if_viewer_cannot_see_expanded_color)&&f?j.jsx(d("CometRelay").MatchContainer,{match:e.if_viewer_cannot_see_expanded_color,props:{children:c,testid:a}}):c}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometPersistentJoinedStatusAvailabilityContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("useNuxOnce",["CometLogImpressionFBNuxMutation","RelayHooks","react","useNuxOnce_nux.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;c=i||d("react");var j=c.useCallback,k=c.useRef;function a(a){var c=d("RelayHooks").useRelayEnvironment();a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useNuxOnce_nux.graphql"),a);var e=a==null?void 0:a.nux_id,f=(a==null?void 0:a.should_show)===!0&&e!=null,g=k(!1);a=j(function(){!g.current&&e!=null&&f&&(g.current=!0,d("CometLogImpressionFBNuxMutation").commit(c,e))},[c,e,f,g]);return[f,a]}g["default"]=a}),98);
__d("XCometGroupAboutControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/about/",Object.freeze({accept_recruiting_group_rules:!1,maybe_open_membership_questions:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupFeedRankingSetting",[],(function(a,b,c,d,e,f){a=Object.freeze({CHRONOLOGICAL:"CHRONOLOGICAL",RECENT_ACTIVITY:"RECENT_ACTIVITY",TOP_POSTS:"TOP_POSTS",MOST_POPULAR:"MOST_POPULAR",TOP_LISTINGS:"TOP_LISTINGS",RECENT_LISTING_ACTIVITY:"RECENT_LISTING_ACTIVITY",NEARBY_LISTINGS:"NEARBY_LISTINGS",CHRONOLOGICAL_LISTINGS:"CHRONOLOGICAL_LISTINGS",PHOTO_POSTS:"PHOTO_POSTS",VIDEO_POSTS:"VIDEO_POSTS",MEDIA_POSTS:"MEDIA_POSTS"});f["default"]=a}),66);
__d("useIdorvanity",["CometRouteParams","CometRouteURL"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteParams").useRouteParams(),b=a.group_idorvanity,c=a.id;a=a.idorvanity;var e=d("CometRouteURL").useRouteURLPath();if(typeof a==="string")return a;else if(c!=null&&String(c)!==""&&!h.includes(e))return String(c);else if(typeof b==="string")return b;return null}var h=["/profile.php"];g["default"]=a}),98);
__d("usePreviousSurfaceForGroupLogging",["useRoutePassthroughProps","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useRoutePassthroughProps")(),b=c("useRouteReferrer")();switch(a==null?void 0:a.ref){case"community_panel":return"community_panel";case"feed_story":case"actor_hovercard":if((b==null?void 0:b.tracePolicy)==="comet.groups.feed")return"groups_targeted_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"newsfeed";else if((b==null?void 0:b.tracePolicy)==="comet.profile.collection.groups")return"timeline";else return"unknown";case"your_groups":return"other";case"groups_card":if((b==null?void 0:b.tracePolicy)==="comet.groups.discover")return"groups_discover_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"gysj";else return"unknown";case"notification":return"notification";case"bookmark":return"bookmarks";default:return"unknown"}}g["default"]=a}),98);