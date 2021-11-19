(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{40806:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-server-details",function(){return n(61977)}])},61977:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(85893),i=n(67294),a=n(17256),s=n(54907),o=n(56266),c=n(71577),l=n(1413),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},f=n(42135),d=function(e,t){return i.createElement(f.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:u}))};d.displayName="RedoOutlined";var m=i.forwardRef(d),h=n(57132),v=n(19363),y=n(50197),p=n(35159),g=n(57553),x=n(25964),w=n(28520),j=n.n(w),b=n(75443),k=n(58827),P=n(83200),N=n(78464);function C(e,t,n,r,i,a,s){try{var o=e[a](s),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,i)}function S(){var e,t=(0,i.useContext)(g.k).setMessage,n=(0,i.useState)(null),s=n[0],o=n[1],l=null,u=function(){o(null),l=null,clearTimeout(l)},f=(e=j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((0,P.kg)(P.Jk)),e.prev=1,e.next=4,(0,k.rQ)(k.UJ);case 4:t(""),o((0,P.kg)(P.zv)),l=setTimeout(u,x.sI),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),o((0,P.kg)(P.Un,"There was an error: ".concat(e.t0))),l=setTimeout(u,x.sI);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){C(a,r,i,s,o,"next",e)}function o(e){C(a,r,i,s,o,"throw",e)}s(void 0)}))});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,r.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,r.jsx)(b.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:f,okText:"Yes",cancelText:"No",children:(0,r.jsx)(c.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,r.jsx)("p",{children:(0,r.jsx)(N.Z,{status:s})})]})}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Z(e,t,n[t])}))}return e}var O=s.Z.Panel;function _(){var e=(0,i.useState)(null),t=e[0],n=e[1],a=(0,i.useContext)(p.aC),l=(0,i.useContext)(g.k).setMessage,u=(a||{}).serverConfig,f=u.streamKey,d=u.ffmpegPath,w=u.rtmpServerPort,j=u.webServerPort,b=u.yp,k=(0,i.useState)(!1),P=k[0],N=k[1],C=3e3;if((0,i.useEffect)((function(){n({streamKey:f,ffmpegPath:d,rtmpServerPort:w,webServerPort:j})}),[u]),!t)return null;var _=function(e){var r=e.fieldName,i=e.value;n(T({},t,Z({},r,i)))},E=function(){l("Updating server settings requires a restart of your Owncast server.")};return(0,r.jsxs)("div",{className:"edit-server-details-container",children:[(0,r.jsx)("div",{className:"field-container field-streamkey-container",children:(0,r.jsxs)("div",{className:"left-side",children:[(0,r.jsx)(y.ZP,T({fieldName:"streamKey"},x.Ri,{value:t.streamKey,initialValue:f,type:v.A8,onChange:_,onSubmit:function(){l("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")}})),(0,r.jsxs)("div",{className:"streamkey-actions",children:[(0,r.jsx)(o.Z,{title:"Generate a stream key",children:(0,r.jsx)(c.Z,{icon:(0,r.jsx)(m,{}),size:"small",onClick:function(){for(var e="",t=0;t<3;t+=1)e+=Math.random().toString(36).substring(2);_({fieldName:"streamKey",value:e})}})}),(0,r.jsx)(o.Z,{className:"copy-tooltip",title:P?"Copied!":"Copy to clipboard",children:(0,r.jsx)(c.Z,{icon:(0,r.jsx)(h.Z,{}),size:"small",onClick:function(){navigator.clipboard.writeText(t.streamKey).then((function(){N(!0),setTimeout((function(){return N(!1)}),C)}))}})})]})]})}),(0,r.jsx)(y.ZP,T({fieldName:"ffmpegPath"},x.KB,{value:t.ffmpegPath,initialValue:d,onChange:_,onSubmit:function(){a.online&&l("The updated ffmpeg path will be used when starting your next live stream.")}})),(0,r.jsx)(y.ZP,T({fieldName:"webServerPort"},x.rE,{value:t.webServerPort,initialValue:j,type:v.mG,onChange:_,onSubmit:E})),(0,r.jsx)(y.ZP,T({fieldName:"rtmpServerPort"},x.lT,{value:t.rtmpServerPort,initialValue:w,type:v.mG,onChange:_,onSubmit:E})),b.enabled&&(0,r.jsx)(s.Z,{className:"advanced-settings",children:(0,r.jsx)(O,{header:"Advanced Settings",children:(0,r.jsx)(S,{})},"1")})]})}var E=a.Z.Title;function K(){return(0,r.jsxs)("div",{className:"config-server-details-form",children:[(0,r.jsx)(E,{children:"Server Settings"}),(0,r.jsx)("p",{className:"description",children:"You should change your stream key from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,r.jsx)("div",{className:"form-module config-server-details-container",children:(0,r.jsx)(_,{})})]})}}},function(e){e.O(0,[578,774,888,179],(function(){return t=40806,e(e.s=t);var t}));var t=e.O();_N_E=t}]);