function E(t){window.enmity.plugins.registerPlugin(t)}function T(t){window.enmity.plugins.installPlugin(t)}function _(t,o){return window.enmity.modules.getModule(t,o)}function c(...t){return window.enmity.modules.getByProps(...t)}function v(t){return window.enmity.patcher.create(t)}window.enmity.modules.common;var F="Message Logger",M="1.3.6",A="Read the name..",N=[{name:"cupiditys",id:"686310058124247056"}],b="#ff0069",C="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/NoDelete.js",p={name:F,version:M,description:A,authors:N,color:b,sourceUrl:C};function l(t){return window.enmity.assets.getIDByName(t)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const u=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const P=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const h=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var L=({pluginUrl:t})=>u.createElement(h,{label:"Update Plugin",trailing:h.Arrow,onPress(){console.log(t),T(`${t}?${Math.floor(1001*Math.random())}.js`)}});const w=v("NoDelete"),a=_(t=>void 0!==t.open&&void 0!==t.close&&!t.openLazy&&!t.startDrag&&!t.init&&!t.openReplay&&!t.openChannelCallPopout),U={...p,patches:[],onStart(){let t=0,o=()=>{try{t++;let n=c("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),m=c("getMessage","getMessages"),i=c("getChannel","getDMFromUserId");for(let s of(console.log(`NoDelete delayed start attempt ${t}/3.`),a.open({content:`NoDelete start attempt ${t}/3.`,source:l("debug")}),["MESSAGE_UPDATE","MESSAGE_DELETE"]))try{n.dispatch({type:s,message:{}})}catch(r){console.log("[NoDelete Dispatch Error]",r)}let d=n._actionHandlers._orderedActionHandlers.MESSAGE_DELETE.find(t=>"MessageStore"===t.name),g=n._actionHandlers._orderedActionHandlers.MESSAGE_UPDATE.find(t=>"MessageStore"===t.name);w.before(d,"actionHandler",(t,o)=>{let s=m.getMessage(o[0].channelId,o[0].id);if(o[0]={},!(null!=s&&s.editedTimestamp)||(null==s?void 0:s.editedTimestamp._isValid)){let r={type:"MESSAGE_UPDATE",message:{...s,edited_timestamp:"invalid_timestamp",content:s.content+" `[deleted]`",guild_id:i.getChannel(s.channel_id).guild_id},log_edit:!1};n.dispatch(r)}}),w.before(g,"actionHandler",(t,o)=>{var n,i;try{if(!1==o[0].log_edit)return;let s=m.getMessage(o[0].message.channel_id,o[0].message.id);if(!(null!=(i=null==(n=o[0])?void 0:n.message)&&i.content))return;try{if(!o[0].edited_timestamp._isValid)return}catch{}o[0].message.content=s.content+" `[edited]`\n"+o[0].message.content;return}catch(r){console.log("[NoDelete Error]",r)}}),console.log("NoDelete delayed start successful."),a.open({content:"NoDelete delayed start successful.",source:l("Check")})}catch(y){console.log("[NoDelete Plugin Error]",y),t<3?(console.warn(`NoDelete failed to start. Trying again in ${t}0s.`),a.open({content:`NoDelete failed to start trying again in ${t}0s.`,source:l("ic_message_retry")}),setTimeout(o,1e4*t)):(console.error("NoDelete failed to start. Giving up."),a.open({content:"NoDelete failed to start. Giving up.",source:l("Small")}))}};setTimeout(()=>{o()},300)},onStop(){w.unpatchAll()},getSettingsPanel:({settings:t})=>u.createElement(P,{settings:t},u.createElement(L,{pluginUrl:p.sourceUrl}))};E(U);