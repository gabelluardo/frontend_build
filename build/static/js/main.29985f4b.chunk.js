(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,n,t){"use strict";var o,a=t(170),i=t.n(a),r={setup:function(){var e;e="3000"===window.location.port?"5000":window.location.port,(o=i()("http://"+document.domain+":"+e)).on("connection",function(){})},giveData:function(e){o.emit("give_json",e)},getHistory:function(e){o.emit("history_request"),o.on("history_response",function(n){return e(n)})},getWeather:function(e){o.on("weather_response",function(n){return e(JSON.parse(n))})},getData:function(e){o.on("data_response",function(n){return e(JSON.parse(n))})},requestData:function(){o.emit("data_request")},getState:function(e){o.emit("state_request"),o.on("state_response",function(n){return e(JSON.parse(n))})},getSettings:function(e){o.emit("settings_request"),o.on("settings_response",function(n){return e(JSON.parse(n))})},saveSettings:function(e){o.emit("save_setting",e)}};n.a=r},171:function(e,n,t){e.exports=t(281)},253:function(e,n,t){},256:function(e,n,t){},277:function(e,n){},281:function(e,n,t){"use strict";t.r(n);t(172),t(202),t(203),t(232),t(236),t(238);!function(){if("function"===typeof window.CustomEvent)return!1;function e(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),t}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o=t(1),a=t.n(o),i=t(101),r=t.n(i),c=(t(253),t(95)),u=t(96),s=t(98),l=t(97),m=t(99),d=t(285),f=t(286),p=t(283),w=t(64),g=t.n(w),v=(t(256),t(103)),h=function(){return a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},b=g()({loader:function(){return Promise.all([t.e(6),t.e(41)]).then(t.bind(null,529))},loading:h}),E=g()({loader:function(){return Promise.all([t.e(9),t.e(45)]).then(t.bind(null,494))},loading:h}),y=g()({loader:function(){return Promise.all([t.e(10),t.e(46)]).then(t.bind(null,495))},loading:h}),_=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){v.a.setup()}},{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,{exact:!0,path:"/404",name:"Page 404",component:E}),a.a.createElement(p.a,{exact:!0,path:"/500",name:"Page 500",component:y}),a.a.createElement(p.a,{path:"/",name:"Home",component:b})))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,4,5]]]);
//# sourceMappingURL=main.29985f4b.chunk.js.map