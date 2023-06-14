(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{3454:function(e,n,r){"use strict";var t,o;e.exports=(null==(t=r.g.process)?void 0:t.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(7663)},9685:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rooms/[name]",function(){return r(414)}])},3972:function(e,n,r){"use strict";r.d(n,{a:function(){return s}});var t=r(5893),o=r(7294),i=r(7311),u=r(5591),c=function(e){var n=e.logLevel;(0,u.Ub)(null!=n?n:"debug");var r=(0,i.fZ)();o.useEffect(function(){return window.__lk_room=r,function(){window.__lk_room=void 0}})},s=function(e){return c({logLevel:e.logLevel}),(0,t.jsx)(t.Fragment,{})}},414:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(5893),o=r(7311),i=r(5591),u=r(9008),c=r.n(u),s=r(1163),a=r(7294),l=r(3972);function f(e,n,r,t,o,i,u){try{var c=e[i](u),s=c.value}catch(a){r(a);return}c.done?n(s):Promise.resolve(s).then(t,o)}var d=r(655),h=r(3454),v=function(){var e=(0,s.useRouter)(),n=e.query.name,r=(0,a.useState)(void 0),i=r[0],u=r[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"LiveKit Meet"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("main",{"data-lk-theme":"default",children:n&&!Array.isArray(n)&&i?(0,t.jsx)(p,{roomName:n,userChoices:i,onLeave:function(){e.push("/")}}):(0,t.jsx)("div",{style:{display:"grid",placeItems:"center",height:"100%"},children:(0,t.jsx)(o.tt,{onError:function(e){return console.log("error while setting up prejoin",e)},defaults:{username:"",videoEnabled:!0,audioEnabled:!0},onSubmit:function(e){console.log("Joining with: ",e),u(e)}})})})]})},p=function(e){var n,r,u,c,v=e.roomName,p=e.userChoices,m=e.onLeave,g=(0,o.dQ)(h.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT,v,{userInfo:{identity:p.username,name:p.username}}),y=(0,s.useRouter)().query,w=y.region,x=y.hq,_=(u=(r=(0,a.useState)())[0],c=r[1],(0,a.useEffect)(function(){var e,n,r="/api/url";w&&(r+="?region=".concat(w)),fetch(r).then((e=function(e){var n;return(0,d.__generator)(this,function(r){switch(r.label){case 0:if(!e.ok)return[3,2];return[4,e.json()];case 1:return n=r.sent(),console.log(n),c(n.url),[3,3];case 2:throw Error("Error fetching server url, check server logs");case 3:return[2]}})},n=function(){var n=this,r=arguments;return new Promise(function(t,o){var i=e.apply(n,r);function u(e){f(i,t,o,u,c,"next",e)}function c(e){f(i,t,o,u,c,"throw",e)}u(void 0)})},function(e){return n.apply(this,arguments)}))}),u),T=(0,a.useMemo)(function(){var e,n;return{videoCaptureDefaults:{deviceId:null!==(e=p.videoDeviceId)&&void 0!==e?e:void 0,resolution:"true"===x?i.OM.h2160:i.OM.h720},publishDefaults:{videoSimulcastLayers:"true"===x?[i.OM.h1080,i.OM.h720]:[i.OM.h540,i.OM.h216]},audioCaptureDefaults:{deviceId:null!==(n=p.audioDeviceId)&&void 0!==n?n:void 0},adaptiveStream:{pixelDensity:"screen"},dynacast:!0}},[p,x]);return(0,t.jsx)(t.Fragment,{children:_&&(0,t.jsxs)(o.IC,{token:g,serverUrl:_,options:T,video:p.videoEnabled,audio:p.audioEnabled,onDisconnected:m,children:[(0,t.jsx)(o.zc,{chatMessageFormatter:o.x3}),(0,t.jsx)(l.a,{logLevel:i.in.info})]})})}},7663:function(e){!function(){var n={229:function(e){var n,r,t,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(r){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var s=[],a=!1,l=-1;function f(){a&&t&&(a=!1,t.length?s=t.concat(s):l=-1,s.length&&d())}function d(){if(!a){var e=c(f);a=!0;for(var n=s.length;n;){for(t=s,s=[];++l<n;)t&&t[l].run();l=-1,n=s.length}t=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(n){return r.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function v(){}o.nextTick=function(e){var n=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];s.push(new h(e,n)),1!==s.length||a||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},u=!0;try{n[e](i,i.exports,t),u=!1}finally{u&&delete r[e]}return i.exports}t.ab="//";var o=t(229);e.exports=o}()}},function(e){e.O(0,[970,226,616,774,888,179],function(){return e(e.s=9685)}),_N_E=e.O()}]);