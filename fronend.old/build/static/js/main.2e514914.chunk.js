(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(15),o=n.n(s),i=n(6),u=n(3),l=n(2),j=n.n(l),p=n(4),d=n(5),h=n(12),b=n(0),f=Object(a.createContext)(),O=function(e){var t=e.children,n=Object(a.useState)((function(){return localStorage.getItem("authTokens")?JSON.parse(localStorage.getItem("authTokens")):null})),r=Object(d.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)((function(){return localStorage.getItem("authTokens")?Object(h.a)(localStorage.getItem("authTokens")):null})),i=Object(d.a)(o,2),l=i[0],O=i[1],m=Object(a.useState)(!0),v=Object(d.a)(m,2),x=v[0],g=v[1],y=Object(u.f)(),w=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loginUser"),t.preventDefault(),e.next=4,fetch("http://localhost:8000/api/token/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value})});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,200===n.status?(s(r),O(Object(h.a)(r.access)),localStorage.setItem("authTokens",JSON.stringify(r)),y("/")):alert("Something went wrong!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("registerUser"),t.preventDefault(),e.next=4,fetch("http://localhost:8000/api/create-user/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.target.username.value,password:t.target.password.value,password2:t.target.password2.value})});case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,200===n.status?y("/login/"):alert("Something went wrong!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){console.log("logoutUser"),s(null),O(null),localStorage.removeItem("authTokens"),y("/login/")},k=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updateToken"),e.next=3,fetch("http://localhost:8000/api/token/refresh/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh:null===c||void 0===c?void 0:c.refresh})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,200===t.status?(s(n),O(Object(h.a)(n.access)),localStorage.setItem("authTokens",JSON.stringify(n))):N(),x&&g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T={user:l,authTokens:c,loginUser:w,logoutUser:N,registerUser:S};return Object(a.useEffect)((function(){x&&k();var e=setInterval((function(){c&&k()}),24e4);return function(){return clearInterval(e)}}),[c,x]),Object(b.jsx)(f.Provider,{value:T,children:x?null:t})},m=function(e){e.key;var t=e.room,n=e.active;return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsx)("div",{className:"room link-active",children:Object(b.jsx)(i.b,{to:String("/"+t.id+"/"),children:t.topic})}):Object(b.jsx)("div",{className:"room",children:Object(b.jsx)(i.b,{to:String("/"+t.id+"/"),children:t.topic})})})},v=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=e.title,c=e.titleId,s=g(e,v);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},s),void 0===n?a.createElement("title",{id:c},"add"):n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var w,S,N=a.forwardRef(y),k=(n.p,function(e){var t=e.roomId,n=Object(a.useContext)(f),r=(n.user,n.authTokens),c=Object(a.useState)([]),s=Object(d.a)(c,2),o=s[0],u=s[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/list-room/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(r.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,u(n),console.log("getRooms ".concat(JSON.stringify(n)));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("joining"),e.next=4,fetch("http://127.0.0.1:8000/api/join-room/".concat(t.target.input.value,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(r.access)}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,n.ok?(c=[a].concat(o),u(c),console.log("dummy ".concat(JSON.stringify(c)))):alert("error: ".concat(a)),t.target.input.value="";case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"side-bar",children:[Object(b.jsx)("h1",{children:"sidebar"}),Object(b.jsxs)("form",{onSubmit:h,className:"join-input",children:[Object(b.jsx)("input",{type:"text",name:"input",placeholder:"enter room id here"}),Object(b.jsx)("input",{className:"pointer",type:"submit",value:"JOIN"})]}),Object(b.jsx)("div",{children:o.map((function(e,n){return e.id==t?Object(b.jsx)(m,{room:e,active:!0},e.id):Object(b.jsx)(m,{room:e,active:!1},e.id)}))}),Object(b.jsx)("div",{className:"create-btn",children:Object(b.jsx)(i.b,{to:"/create-room/",children:Object(b.jsx)(N,{className:"add-btn"})})})]})}),T=n(11),E=n(8),C=n(14),I=["title","titleId"];function D(){return D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function P(e,t){var n=e.title,r=e.titleId,c=J(e,I);return a.createElement("svg",D({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,w||(w=a.createElement("style",{type:"text/css"},"\r\n\t.st0{fill:#FFFFFF;}\r\n")),S||(S=a.createElement("path",{className:"st0",d:"M47.2,21.2l-5.9-1c-0.3-1.2-0.8-2.3-1.4-3.4l3.5-4.9c0.3-0.4,0.2-0.9-0.1-1.3l-3.9-3.9 c-0.3-0.3-0.9-0.4-1.3-0.1l-4.8,3.5c-1.1-0.6-2.2-1.1-3.4-1.4l-1-5.9c-0.1-0.5-0.5-0.8-1-0.8h-5.5c-0.5,0-0.9,0.4-1,0.8l-1,5.9 c-1.2,0.3-2.4,0.8-3.4,1.4L12,6.7c-0.4-0.3-0.9-0.2-1.3,0.1l-3.9,3.9c-0.3,0.3-0.4,0.9-0.1,1.3l3.4,4.9C9.5,17.9,9,19,8.7,20.3 l-5.8,1c-0.5,0.1-0.8,0.5-0.8,1v5.5c0,0.5,0.3,0.9,0.8,1l5.8,1c0.3,1.2,0.8,2.4,1.4,3.5L6.7,38c-0.3,0.4-0.2,0.9,0.1,1.3l3.9,3.9 c0.3,0.3,0.9,0.4,1.3,0.1l4.9-3.4c1.1,0.6,2.2,1.1,3.4,1.4l1,5.9c0.1,0.5,0.5,0.8,1,0.8h5.5c0.5,0,0.9-0.3,1-0.8l1-5.9 c1.2-0.4,2.3-0.8,3.4-1.4l4.9,3.4c0.4,0.3,0.9,0.2,1.3-0.1l3.9-3.9c0.3-0.3,0.4-0.9,0.1-1.3l-3.5-4.9c0.6-1.1,1.1-2.2,1.4-3.4l5.9-1 c0.5-0.1,0.8-0.5,0.8-1v-5.5C48,21.7,47.6,21.3,47.2,21.2z M25,32c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S28.9,32,25,32z"})))}var A,B=a.forwardRef(P),z=(n.p,function(e){var t=e.message,n=e.user,r=e.changeState,c=e.chatSocket,s=e.dict,o=Object(a.useState)(!0),i=Object(d.a)(o,2),u=i[0],l=(i[1],Object(d.a)(r,2)),h=(l[0],l[1],Object(a.useState)(Object(b.jsx)("p",{className:"show-space",children:t.content}))),O=Object(d.a)(h,2),m=O[0],v=O[1],x=Object(a.useState)("EDIT"),g=Object(d.a)(x,2),y=g[0],w=g[1],S=Object(a.useContext)(f).authTokens;Object(a.useEffect)((function(){"p"===m.type&&v(Object(b.jsx)("p",{className:"show-space",children:t.content}))}),[t]);var N=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/delete-message/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(S.access)}});case 3:e.sent.ok&&c.send(JSON.stringify(Object(E.a)(Object(E.a)({},t),{},{method:"DELETE"})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(Object(b.jsx)("form",{onSubmit:I,children:Object(b.jsx)("textarea",{name:"messageContent",defaultValue:m.props.children,onKeyPress:C})})),w("CANCEL"),e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(Object(b.jsx)("p",{className:"show-space",children:t.content})),w("EDIT");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&0==t.shiftKey&&I(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(j.a.mark((function e(n){var r,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,{user:t.user,room:t.room,content:n.target.value};case 3:return r=e.sent,e.next=6,fetch("http://127.0.0.1:8000/api/update-message/".concat(t.id,"/"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(S.access)},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:s=e.sent,a.ok&&(v(Object(b.jsx)("p",{className:"show-space",children:t.content})),w("EDIT"),c.send(JSON.stringify(Object(E.a)(Object(E.a)({},s),{},{method:"EDIT"}))));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u?Object(b.jsxs)("div",{className:"message",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"message-header",children:[Object(b.jsx)("img",{src:""+(null===s||void 0===s?void 0:s.avatar),alt:"avatar"}),Object(b.jsxs)("small",{children:["@",null===s||void 0===s?void 0:s.username," "]}),Object(b.jsxs)("small",{children:["#",null===t||void 0===t?void 0:t.timeago]})]}),Object(b.jsx)("div",{className:"message-content",children:m})]}),Object(b.jsx)("div",{className:"btn",children:(null===n||void 0===n?void 0:n.user_id)===(null===t||void 0===t?void 0:t.user)?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:"EDIT"===y?"edit pointer":"cancel pointer",onClick:"EDIT"===y?k:T,children:y}),Object(b.jsx)("button",{className:"delete pointer",onClick:N,children:"DELETE"})]}):Object(b.jsx)(b.Fragment,{})})]}):Object(b.jsx)("div",{})}),L=function(e){var t,n=e.roomId,r=e.messagesState,c=(e.roomsState,e.changeState),s=e.chatSocket,o=Object(d.a)(r,2),l=o[0],h=o[1],O=Object(d.a)(c,2),m=O[0],v=O[1],x=Object(a.useState)({}),g=Object(d.a)(x,2),y=g[0],w=g[1],S=Object(a.useState)({}),N=Object(d.a)(S,2),k=N[0],I=N[1],D=Object(a.useContext)(f),J=D.user,P=D.authTokens,A=(Object(u.f)(),Object(a.useRef)(null)),L=function(){A.current.scrollIntoView({behavior:"auto"})};Object(a.useEffect)((function(e){_(),G(),L()}),[l]),Object(a.useEffect)((function(){s.onopen=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("open");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.onmessage=function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(t.data);case 2:return n=e.sent,e.next=5,1;case 5:e.sent,console.log("websocket onmessage: ",JSON.stringify(n)),"POST"===n.method?h((function(e){return[].concat(Object(C.a)(e),[n])})):"EDIT"===n.method?h((function(e){var t=e;for(var r in t)if(t[r].id===n.id){t[r]=n;break}return console.log("dummy: ".concat(JSON.stringify(t))),Object(C.a)(t)})):"DELETE"===n.method&&h((function(e){return e.filter((function(e){return e.id!==n.id}))}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),[l]);var _=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/detail-room/".concat(n,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(P.access)}});case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,w(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,{user:J.user_id,room:Number(n),content:t.target.value};case 3:return r=e.sent,e.next=6,fetch("http://127.0.0.1:8000/api/create-message/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(P.access)},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,console.log("commentSubmit: ".concat(JSON.stringify(r))),a.ok?s.send(JSON.stringify(Object(E.a)(Object(E.a)({},c),{},{method:"POST"}))):alert("error ".concat(a.statusText)),t.target.value="",L();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&0==t.shiftKey&&F(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/list-user/".concat(n,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(P.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,I((function(e){var t,n=e,a=Object(T.a)(r);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.id]=c}}catch(s){a.e(s)}finally{a.f()}return n}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===(t=y.participants)||void 0===t?void 0:t.indexOf(J.user_id))>-1?Object(b.jsxs)("div",{className:"chat-body",children:[Object(b.jsxs)("div",{className:"room-header",children:[Object(b.jsx)("h1",{children:null===y||void 0===y?void 0:y.topic}),Object(b.jsx)(i.b,{className:"Link",to:"setting/",children:Object(b.jsx)(B,{className:"setting"})})]}),Object(b.jsxs)("div",{className:"content",children:[null===l||void 0===l?void 0:l.map((function(e,t){return Object(b.jsx)(z,{message:e,user:J,changeState:[m,v],chatSocket:s,dict:k[e.user]},e.id)})),Object(b.jsx)("div",{ref:A})]}),Object(b.jsx)("div",{className:"comment-input",children:Object(b.jsx)("form",{onSubmit:F,children:Object(b.jsx)("textarea",{name:"comment",placeholder:"comment here...",onKeyPress:U})})})]}):Object(b.jsx)("div",{ref:A})},_=function(){return Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsx)(k,{}),Object(b.jsx)("div",{className:"blank-room"})]})},F=function(e){var t=e.roomId,n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],s=r[1],o=Object(a.useContext)(f),i=(o.user,o.authTokens);Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(p.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/list-user/".concat(t,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(i.access)}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log("getParticipants: ".concat(JSON.stringify(r))),s(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"participants-show",children:[Object(b.jsx)("h1",{children:"participants"}),c.map((function(e,t){return Object(b.jsx)("h3",{children:e.username},e.id)}))]})},U=function(e){var t=e.chatSocket,n=Object(a.useState)([]),r=Object(d.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(0),i=Object(d.a)(o,2),l=i[0],h=i[1],O=Object(a.useState)([]),m=Object(d.a)(O,2),v=(m[0],m[1],Object(u.e)().pathname.slice(1,2)),x=Object(a.useContext)(f).authTokens;Object(a.useEffect)((function(){g()}),[l,window.location.pathname]);var g=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("getMessages called"),""!==v){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("http://127.0.0.1:8000/api/list-message/".concat(v,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(x.access)}});case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,s(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"room-page",children:[Object(b.jsx)(k,{roomId:v}),c?Object(b.jsx)(L,{roomId:v,messagesState:[c,s],changeState:[l,h],chatSocket:t}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(F,{roomId:v})]})},G=["title","titleId"];function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,r=e.titleId,c=V(e,G);return a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"chevron-left"):n?a.createElement("title",{id:r},n):null,A||(A=a.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var K=a.forwardRef(M),H=(n.p,function(){var e=Object(a.useContext)(f).loginUser;return Object(b.jsx)("div",{className:"login-page",children:Object(b.jsx)("form",{onSubmit:function(t){e(t)},children:Object(b.jsxs)("div",{className:"login-form",children:[Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password"}),Object(b.jsx)("input",{type:"submit",value:"Login"}),Object(b.jsx)(i.b,{className:"p-under-form",to:"/register/",children:"Didn't have an account? register here"})]})})})}),W=function(){var e=Object(a.useContext)(f),t=(e.loginUser,e.registerUser);return Object(b.jsx)("div",{className:"login-page",children:Object(b.jsx)("form",{onSubmit:function(e){t(e)},children:Object(b.jsxs)("div",{className:"login-form",children:[Object(b.jsx)("input",{type:"text",name:"username",placeholder:"username"}),Object(b.jsx)("input",{type:"password",name:"password",placeholder:"password"}),Object(b.jsx)("input",{type:"password",name:"password2",placeholder:"confirm your password"}),Object(b.jsx)("input",{type:"submit",value:"Login"}),Object(b.jsx)(i.b,{className:"p-under-form",to:"/login/",children:"Alredy have an account? login here"})]})})})},X=function(){var e=Object(a.useContext)(f),t=e.user,n=e.authTokens,r=Object(a.useState)(null),c=Object(d.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(null),h=Object(d.a)(l,2),O=(h[0],h[1],Object(u.f)());Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(p.a)(j.a.mark((function e(){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/get-user/".concat(t.user_id,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(n.access)}});case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,console.log("get_user"),o(a),e.abrupt("return",a.avatar);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.target.avatar.files[0],(a=new FormData).append("first_name",t.target.first_name.value),a.append("last_name",t.target.last_name.value),a.append("address",t.target.address.value),a.append("bio",t.target.bio.value),r&&a.append("avatar",r),console.log("form: "+JSON.stringify(a)),e.next=11,fetch("http://127.0.0.1:8000/api/update-user/",{method:"PATCH",headers:{Authorization:"Bearer "+String(n.access)},body:a});case 11:return c=e.sent,e.next=14,c.json();case 14:s=e.sent,alert(JSON.stringify(s)),O("/");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"nav-bar",children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)(K,{className:"arrow-left"})}),Object(b.jsx)("input",{className:"pointer",type:"submit",value:"Update"})]}),Object(b.jsx)("div",{className:"login-page",children:Object(b.jsx)("form",{onSubmit:function(e){v(e)},children:Object(b.jsxs)("div",{className:"login-form",children:[Object(b.jsx)("img",{src:""+(null===s||void 0===s?void 0:s.avatar),alt:"avatar"}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"Avatar: "}),Object(b.jsx)("input",{type:"file",name:"avatar"})]}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"Username: "}),Object(b.jsx)("p",{children:null===s||void 0===s?void 0:s.username})]}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"First name: "}),Object(b.jsx)("input",{type:"text",name:"first_name",defaultValue:null===s||void 0===s?void 0:s.first_name})]}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"Last name: "}),Object(b.jsx)("input",{type:"text",name:"last_name",defaultValue:null===s||void 0===s?void 0:s.last_name})]}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"Email: "}),Object(b.jsx)("input",{type:"email",name:"address",defaultValue:null===s||void 0===s?void 0:s.address})]}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"Bio: "}),Object(b.jsx)("input",{type:"text",name:"bio",defaultValue:null===s||void 0===s?void 0:s.bio})]})]})})})]})},q=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(u.f)(),s=Object(a.useContext)(f),o=s.authTokens,l=s.user,h=Object(u.e)().pathname.slice(1,2);Object(a.useEffect)((function(){O()}),[]);var O=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/detail-room/".concat(h,"/"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(o.access)}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you wanna leave this room?")){e.next=6;break}return e.next=4,fetch("http://127.0.0.1:8000/api/leave-room/".concat(h,"/"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(o.access)}});case 4:e.sent.ok?c("/"):alert("sth went wrong");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Are you sure you wanna delete this room?")){e.next=10;break}return e.next=5,fetch("http://127.0.0.1:8000/api/delete-room/".concat(h,"/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(o.access)}});case 5:return n=e.sent,e.next=8,n.json();case 8:e.sent,n.ok?c("/"):alert("sth went wrong");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"nav-bar",children:[Object(b.jsx)(i.b,{to:String("/".concat(h,"/")),children:Object(b.jsx)(K,{className:"arrow-left"})}),Object(b.jsxs)("div",{children:[(null===l||void 0===l?void 0:l.user_id)==(null===n||void 0===n?void 0:n.host)?Object(b.jsx)("button",{onClick:function(e){v(e)},children:"Delete Room"}):Object(b.jsx)("div",{}),Object(b.jsx)("button",{onClick:function(e){m(e)},children:"Leave Room"})]})]}),Object(b.jsx)("div",{className:"login-page",children:(null===l||void 0===l?void 0:l.user_id)==(null===n||void 0===n?void 0:n.host)?Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"login-form",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"topic: "}),Object(b.jsx)("input",{type:"text",name:"topic",placeholder:"topic",defaultValue:n.topic})]}),Object(b.jsx)("input",{className:"pointer",type:"submit",value:"Update"})]})}):Object(b.jsx)(b.Fragment,{})})]})},Q=function(){var e=Object(a.useContext)(f),t=e.user,n=e.authTokens,r=Object(u.f)(),c=function(){var e=Object(p.a)(j.a.mark((function e(a){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("http://127.0.0.1:8000/api/create-room/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+String(n.access)},body:JSON.stringify({host:t.user_id,topic:a.target.topic.value,participants:[]})});case 3:return c=e.sent,e.next=6,c.json();case 6:e.sent,c.ok?r("/"):alert("sth went wrong");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"nav-bar",children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)(K,{className:"arrow-left"})})}),Object(b.jsx)("div",{className:"login-page",children:Object(b.jsx)("form",{onSubmit:function(e){c(e)},children:Object(b.jsxs)("div",{className:"login-form",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("label",{children:"host: "}),Object(b.jsxs)("p",{children:[" ",t.username]})]}),Object(b.jsx)("input",{type:"text",name:"topic",placeholder:"topic"}),Object(b.jsx)("input",{className:"pointer",type:"submit",value:"Create"})]})})})]})},Y=function(){var e=Object(a.useContext)(f),t=e.user,n=e.logoutUser;return console.log("user is ",t),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"sub-header",children:Object(b.jsx)("h1",{children:Object(b.jsx)(i.b,{to:"/",className:"Link",children:"ChatApp"})})}),null===t?Object(b.jsx)("div",{className:"sub-header",children:Object(b.jsx)("h1",{children:Object(b.jsx)(i.b,{to:"/login/",className:"Link",children:"Login"})})}):Object(b.jsxs)("div",{className:"sub-header",children:[Object(b.jsx)("h1",{children:Object(b.jsx)(i.b,{to:"/profile/",children:t.username})}),Object(b.jsx)("h1",{children:Object(b.jsx)("button",{onClick:n,className:"Link",children:"Logout"})})]})]})};n(22);var Z=function(){var e=new WebSocket("ws://127.0.0.1:8000/ws/chat/"+window.location.pathname.slice(1,2)+"/");return Object(b.jsx)(i.a,{children:Object(b.jsx)("div",{className:"container dark",children:Object(b.jsxs)(O,{children:[Object(b.jsx)(Y,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(_,{})}),Object(b.jsx)(u.a,{path:"/:id/setting/",element:Object(b.jsx)(q,{})}),Object(b.jsx)(u.a,{path:"/:id/",element:Object(b.jsx)(U,{chatSocket:e})}),Object(b.jsx)(u.a,{path:"/login/",element:Object(b.jsx)(H,{})}),Object(b.jsx)(u.a,{path:"/register/",element:Object(b.jsx)(W,{})}),Object(b.jsx)(u.a,{path:"/profile/",element:Object(b.jsx)(X,{})}),Object(b.jsx)(u.a,{path:"/create-room/",element:Object(b.jsx)(Q,{})})]})]})})})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2e514914.chunk.js.map