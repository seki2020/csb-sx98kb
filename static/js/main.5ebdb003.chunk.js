(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{14:function(e,n,o){"use strict";o.r(n);var t=o(0),c=o(2),i=o(4),s=function(e,n){console.log(1),setTimeout((function(){console.log(2),n({isOnline:!0})}),5e3),console.log(3)},l=function(e,n){setTimeout((function(){n({isOnline:!1})}),2e3)};var u=function(e){var n=Object(t.useState)(null),o=Object(i.a)(n,2),c=o[0],u=o[1];return Object(t.useEffect)((function(){function e(e){console.log("handleStatusChange",e),u(e.isOnline)}return console.log("run useEffect"),s("props.friend.id",e),function(){l("props.friend.id",e)}}),[]),console.log("render",c),null===c?"Loading...":c?"Online":"Offline"},r=o(3),f=document.getElementById("root");Object(c.createRoot)(f).render(Object(r.jsx)(u,{}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5ebdb003.chunk.js.map