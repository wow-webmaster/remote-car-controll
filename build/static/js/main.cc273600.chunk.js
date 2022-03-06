(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{164:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(673),a=n(1),i=function(){return Promise.all([n.e(12),n.e(5)]).then(n.bind(null,683)).then((function(e){return e.default}))};function c(e){var t=e.children;return Object(a.jsx)(r.a,{strict:!0,features:i,children:t})}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(3),a=n(26),i=n(7),c=n(85),o=n(1),s=Object(i.a)("header")((function(e){var t=e.theme;return Object(r.a)({top:0,left:0,lineHeight:0,width:"100%",position:"absolute",padding:t.spacing(3,3,0)},t.breakpoints.up("sm"),{padding:t.spacing(5,5,0)})}));function l(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s,{children:Object(o.jsx)(c.a,{disabledLink:!0})}),Object(o.jsx)(a.b,{})]})}},168:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return w}));var r=function(e){return{duration:(null===e||void 0===e?void 0:e.durationIn)||.64,ease:(null===e||void 0===e?void 0:e.easeIn)||[.43,.13,.23,.96]}},a=function(e){return{duration:(null===e||void 0===e?void 0:e.durationOut)||.48,ease:(null===e||void 0===e?void 0:e.easeOut)||[.43,.13,.23,.96]}},i=n(6),c=function(e){var t=null===e||void 0===e?void 0:e.durationIn,n=null===e||void 0===e?void 0:e.durationOut,c=null===e||void 0===e?void 0:e.easeIn,o=null===e||void 0===e?void 0:e.easeOut;return{in:{initial:{},animate:{scale:[.3,1.1,.9,1.03,.97,1],opacity:[0,1,1,1,1,1],transition:r({durationIn:t,easeIn:c})},exit:{scale:[.9,1.1,.3],opacity:[1,1,0]}},inUp:{initial:{},animate:{y:[720,-24,12,-4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:Object(i.a)({},r({durationIn:t,easeIn:c}))},exit:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:a({durationOut:n,easeOut:o})}},inDown:{initial:{},animate:{y:[-720,24,-12,4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:r({durationIn:t,easeIn:c})},exit:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:a({durationOut:n,easeOut:o})}},inLeft:{initial:{},animate:{x:[-720,24,-12,4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:r({durationIn:t,easeIn:c})},exit:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0],transition:a({durationOut:n,easeOut:o})}},inRight:{initial:{},animate:{x:[720,-24,12,-4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:r({durationIn:t,easeIn:c})},exit:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0],transition:a({durationOut:n,easeOut:o})}},out:{animate:{scale:[.9,1.1,.3],opacity:[1,1,0]}},outUp:{animate:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outDown:{animate:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outLeft:{animate:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0]}},outRight:{animate:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0]}}}},o=function(e){return{animate:{transition:{staggerChildren:(null===e||void 0===e?void 0:e.staggerIn)||.05,delayChildren:(null===e||void 0===e?void 0:e.staggerIn)||.05}},exit:{transition:{staggerChildren:(null===e||void 0===e?void 0:e.staggerIn)||.05,staggerDirection:-1}}}},s=n(28),l=(n(732),n(721)),u=(n(735),n(94)),b=(n(743),n(1));var d=n(0);n(47),n(747);var j=n(11),h=n.n(j),O=n(748),f=["children","size"],p=Object(d.forwardRef)((function(e,t){var n=e.children,r=e.size,a=void 0===r?"medium":r,c=Object(s.a)(e,f);return Object(b.jsx)(y,{size:a,children:Object(b.jsx)(O.a,Object(i.a)(Object(i.a)({size:a,ref:t},c),{},{children:n}))})}));p.propTypes={children:h.a.node.isRequired,color:h.a.oneOf(["inherit","default","primary","secondary","info","success","warning","error"]),size:h.a.oneOf(["small","medium","large"])};var m=p,g={hover:{scale:1.1},tap:{scale:.95}},v={hover:{scale:1.09},tap:{scale:.97}},x={hover:{scale:1.08},tap:{scale:.99}};function y(e){var t=e.size,n=e.children,r="small"===t,a="large"===t;return Object(b.jsx)(u.a,{component:l.a.div,whileTap:"tap",whileHover:"hover",variants:r&&g||a&&x||v,sx:{display:"inline-flex"},children:n})}n(18),n(740),n(380);var k=["animate","action","children"];function w(e){var t=e.animate,n=e.action,r=void 0!==n&&n,a=e.children,c=Object(s.a)(e,k);return r?Object(b.jsx)(u.a,Object(i.a)(Object(i.a)({component:l.a.div,initial:!1,animate:t?"animate":"exit",variants:o()},c),{},{children:a})):Object(b.jsx)(u.a,Object(i.a)(Object(i.a)({component:l.a.div,initial:"initial",animate:"animate",exit:"exit",variants:o()},c),{},{children:a}))}n(166)},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(5),a=n(18),i=n(6),c=n(4),o=n.n(c),s=n(0),l=(n(660),n(419),n(87),n(84)),u=n(377),b=(n(199),function(e){if(!e)return!1;var t=Object(u.a)(e),n=Date.now()/1e3;return t.exp>n}),d=function(e){e?(localStorage.setItem("accessToken",e),l.a.defaults.headers.common.Authorization="Bearer ".concat(e)):(localStorage.removeItem("accessToken"),delete l.a.defaults.headers.common.Authorization)},j=n(1),h={isAuthenticated:!1,isInitialized:!1,user:null},O={INITIALIZE:function(e,t){var n=t.payload,r=n.isAuthenticated,a=n.user;return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:r,isInitialized:!0,user:a})},OTPFINAL:function(e,t){var n=t.payload.final;return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,isInitialized:!0,final:n,user:null})},LOGINED:function(e,t){var n=t.payload.user;return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!0,user:n})},LOGOUT:function(e){return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,final:null,user:null})}},f=function(e,t){return O[t.type]?O[t.type](e,t):e},p=Object(s.createContext)(Object(i.a)(Object(i.a)({},h),{},{method:"jwt",login:function(){return Promise.resolve()},logout:function(){return Promise.resolve()}}));function m(e){var t=e.children,n=Object(s.useReducer)(f,h),c=Object(a.a)(n,2),u=c[0],O=c[1];Object(s.useEffect)((function(){var e=function(){var e=Object(r.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t=window.localStorage.getItem("accessToken"))||!b(t)){e.next=11;break}return d(t),e.next=6,l.a.get("/api/auth/my-account");case 6:n=e.sent,r=n.data.user,O({type:"INITIALIZE",payload:{isAuthenticated:!0,user:r}}),e.next=12;break;case 11:O({type:"INITIALIZE",payload:{isAuthenticated:!1,user:null}});case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),O({type:"INITIALIZE",payload:{isAuthenticated:!1,user:null}});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(){var e=Object(r.a)(o.a.mark((function e(t,n){var r,a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=window.phoneNumber,e.next=4,l.a.post("/api/auth/verifyOtp",{phoneNumber:r,otp:t});case 4:if(a=e.sent,!a.data.success){e.next=13;break}return e.next=9,l.a.post("/api/auth/register",{phoneNumber:r});case 9:200===(i=e.sent).status&&(c=i.data,s=c.token,u=c.user,d(s),O({type:"LOGINED",payload:{user:u}}),n({success:!0})),e.next=14;break;case 13:n({success:!1,err:"unmathed otpcode"});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),n({success:!1,err:"otp response err"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(o.a.mark((function e(t){var n,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("/api/auth/login",{phoneNumber:t});case 2:if(n=e.sent,r=n.data,a=r.token,i=r.user,a){e.next=13;break}return e.prev=5,window.phoneNumber=t,e.abrupt("return",!0);case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",!1);case 13:return d(a),O({type:"LOGINED",payload:{user:i}}),e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(null),O({type:"LOGOUT"})}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(p.Provider,{value:Object(i.a)(Object(i.a)({},u),{},{method:"jwt",login:g,logout:v,otpVerify:m}),children:[" ",t," "]})}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f}));n(19);var r=n(6),a=n(28),i=n(32),c=n(752),o=(n(729),n(677),n(1));function s(e){var t=e.children,n=e.onSubmit,a=e.methods;return Object(o.jsx)(i.b,Object(r.a)(Object(r.a)({},a),{},{children:Object(o.jsx)("form",{onSubmit:n,children:t})}))}var l=n(753),u=["name"];function b(e){var t=e.name,n=Object(a.a)(e,u),s=Object(i.g)().control;return Object(o.jsx)(c.a,Object(r.a)({control:Object(o.jsx)(i.a,{name:t,control:s,render:function(e){var t=e.field;return Object(o.jsx)(l.a,Object(r.a)(Object(r.a)({},t),{},{checked:t.value}))}})},n))}var d=n(723),j=["name","children"];function h(e){var t=e.name,n=e.children,c=Object(a.a)(e,j),s=Object(i.g)().control;return Object(o.jsx)(i.a,{name:t,control:s,render:function(e){var t=e.field,a=e.fieldState.error;return Object(o.jsx)(d.a,Object(r.a)(Object(r.a)(Object(r.a)({},t),{},{select:!0,fullWidth:!0,SelectProps:{native:!0},error:!!a,helperText:null===a||void 0===a?void 0:a.message},c),{},{children:n}))}})}var O=["name"];function f(e){var t=e.name,n=Object(a.a)(e,O),c=Object(i.g)().control;return Object(o.jsx)(i.a,{name:t,control:c,render:function(e){var t=e.field,a=e.fieldState.error;return Object(o.jsx)(d.a,Object(r.a)(Object(r.a)({},t),{},{fullWidth:!0,error:!!a,helperText:null===a||void 0===a?void 0:a.message},n))}})}n(719),n(725),n(756)},255:function(e,t,n){"use strict";var r=n(6),a=n(28),i=n(11),c=n.n(i),o=n(174),s=n(0),l=n(94),u=n(1),b=["children","title","meta"],d=Object(s.forwardRef)((function(e,t){var n=e.children,i=e.title,c=void 0===i?"":i,s=e.meta,d=Object(a.a)(e,b);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(o.a,{children:[Object(u.jsx)("title",{children:c}),s]}),Object(u.jsx)(l.a,Object(r.a)(Object(r.a)({ref:t},d),{},{children:n}))]})}));d.propTypes={children:c.a.node.isRequired,title:c.a.string,meta:c.a.node},t.a=d},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),a=n(41),i=n(47),c=n(94),o=n(1);function s(e){var t=e.disabledLink,n=void 0!==t&&t,s=e.sx,l=e.color,u=Object(i.a)(),b=(u.palette.primary.light,void 0!==l?l:u.palette.grey[50048]),d=(u.palette.primary.dark,Object(o.jsx)(c.a,{sx:Object(r.a)({width:"inherit",height:"inherit"},s),children:Object(o.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 220.000000 180.000000",preserveAspectRatio:"xMidYMid meet",children:Object(o.jsx)("g",{transform:"translate(0.000000,229.000000) scale(0.100000,-0.100000)",fill:b,stroke:"none",children:Object(o.jsx)("path",{d:"M714 1820 c-29 -4 -58 -11 -65 -16 -43 -25 -89 -69 -158 -150 l-78\n-91 -11 30 -11 30 -72 -6 c-149 -13 -160 -82 -18 -121 32 -10 59 -19 59 -21 0\n-2 -20 -13 -44 -25 -55 -26 -121 -96 -149 -158 -20 -43 -22 -66 -25 -272 -4\n-253 -1 -282 34 -317 17 -17 24 -35 24 -64 0 -29 7 -47 25 -64 21 -22 33 -25\n93 -25 86 0 111 16 119 78 l6 42 658 0 659 0 0 -25 c0 -33 25 -81 45 -89 9 -3\n47 -6 84 -6 83 0 111 22 111 87 0 32 7 48 30 73 l31 33 -3 256 c-3 244 -4 258\n-26 303 -30 60 -89 121 -147 151 l-46 23 58 18 c77 24 103 41 103 70 0 28 -27\n43 -101 54 -66 10 -99 1 -99 -28 0 -11 -3 -20 -8 -20 -4 0 -44 42 -88 93 -100\n115 -148 149 -223 158 -74 10 -702 9 -767 -1z m787 -60 c40 -11 127 -97 213\n-209 l50 -64 -49 6 c-211 29 -962 34 -1174 7 -46 -6 -86 -8 -89 -5 -12 12 180\n235 222 257 12 6 59 15 106 19 120 11 677 3 721 -11z m-147 -321 c28 -22 96\n-136 96 -161 0 -9 -7 -19 -16 -22 -9 -3 -161 -6 -339 -6 -378 0 -367 -3 -319\n87 16 30 43 71 60 89 l31 34 230 0 c217 0 232 -1 257 -21z m-952 -208 c84 -23\n159 -48 176 -61 32 -24 47 -59 32 -74 -4 -4 -90 -7 -189 -4 -216 5 -221 7\n-221 99 0 45 4 60 18 68 24 14 21 15 184 -28z m1596 9 c17 -34 8 -98 -18 -124\n-19 -20 -33 -21 -205 -24 -171 -4 -185 -3 -192 14 -5 13 4 27 35 54 36 29 65\n41 185 72 78 20 151 36 162 35 11 -1 25 -13 33 -27z m-1352 -288 c13 -8 84\n-146 84 -162 0 -11 -129 -14 -146 -2 -17 12 -103 156 -98 164 6 10 145 10 160\n0z m834 -9 c0 -10 -17 -49 -38 -88 l-37 -70 -295 -2 c-162 -2 -300 0 -306 5\n-13 8 -84 146 -84 162 0 7 127 10 380 10 355 0 380 -1 380 -17z m240 7 c0 -13\n-89 -153 -104 -162 -16 -11 -134 -10 -141 2 -6 10 48 124 73 153 12 13 31 17\n94 17 45 0 78 -4 78 -10z"})})})}));return n?Object(o.jsx)(o.Fragment,{children:d}):Object(o.jsx)(a.b,{to:"/",children:d})}},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(26),a=n(712),i=n(85),c=n(6),o=n(3),s=n(7),l=n(47),u=n(749),b=n(750),d=n(751),j=n(742),h=n(18),O=n(0);var f=n(72),p=n(664);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";return{top:"to top",right:"to right",bottom:"to bottom",left:"to left"}[e]}function g(e){return{bgBlur:function(t){var n=(null===t||void 0===t?void 0:t.color)||(null===e||void 0===e?void 0:e.palette.background.default)||"#000000",r=(null===t||void 0===t?void 0:t.blur)||6,a=(null===t||void 0===t?void 0:t.opacity)||.8;return{backdropFilter:"blur(".concat(r,"px)"),WebkitBackdropFilter:"blur(".concat(r,"px)"),backgroundColor:Object(p.a)(n,a)}},bgGradient:function(e){var t=m(null===e||void 0===e?void 0:e.direction),n=(null===e||void 0===e?void 0:e.startColor)||"".concat(Object(p.a)("#000000",0)," 0%"),r=(null===e||void 0===e?void 0:e.endColor)||"#000000 75%";return{background:"linear-gradient(".concat(t,", ").concat(n,", ").concat(r,");")}},bgImage:function(t){var n=(null===t||void 0===t?void 0:t.url)||"https://minimal-assets-api.vercel.app/assets/images/bg_gradient.jpg",r=m(null===t||void 0===t?void 0:t.direction),a=(null===t||void 0===t?void 0:t.startColor)||Object(p.a)((null===e||void 0===e?void 0:e.palette.grey[900])||"#000000",.88),i=(null===t||void 0===t?void 0:t.endColor)||Object(p.a)((null===e||void 0===e?void 0:e.palette.grey[900])||"#000000",.88);return{background:"linear-gradient(".concat(r,", ").concat(a,", ").concat(i,"), url(").concat(n,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}}}var v=n(87),x=(n(721),n(41)),y=n(741),k=n(727),w=n(94),F=(n(676),n(734),n(744),n(745),n(746),n(77)),I=n(1);Object(s.a)(y.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.subtitle2),{},{color:t.palette.text.primary,marginRight:t.spacing(5),transition:t.transitions.create("opacity",{duration:t.transitions.duration.shorter}),"&:hover":{opacity:.48,textDecoration:"none"}})})),Object(s.a)(k.a)((function(e){var t=e.theme;return Object(c.a)(Object(c.a)({},t.typography.body2),{},{padding:0,marginTop:t.spacing(3),color:t.palette.text.secondary,transition:t.transitions.create("color"),"&:hover":{color:t.palette.text.primary}})}));var S=n(5),z=n(4),C=n.n(z),T=n(160),A=n(736),E=n(718),H=n(730),R=n(62),B=n(164),D=n(346),L=n(168),N=[{label:"Home",linkTo:"/"},{label:"Device Manage",linkTo:"/admin/device-manage"}],W=[{label:"Home",linkTo:"/"}];function P(){var e=Object(r.f)(),t=Object(O.useState)(W),n=Object(h.a)(t,2),i=n[0],o=n[1],s=Object(R.a)(),l=s.user,u=s.logout,b=Object(B.a)(),d=Object(T.b)().enqueueSnackbar,f=Object(O.useState)(null),m=Object(h.a)(f,2),g=m[0],v=m[1],y=function(){v(null)},k=function(){var t=Object(S.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u();case 3:e("/auth/login",{replace:!0}),b.current&&y(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),d("Unable to logout!",{variant:"error"});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){l&&"admin"===l.role&&o(N)}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(L.a,{onClick:function(e){v(e.currentTarget)},sx:Object(c.a)({p:0},g&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return Object(p.a)(e.palette.grey[900],.1)}}}),children:[Object(I.jsx)(F.a,{icon:"eva:people-fill",width:{sx:20,md:30},height:{sx:20,md:30}})," "]}),Object(I.jsxs)(D.a,{open:Boolean(g),anchorEl:g,onClose:y,sx:{p:0,mt:1.5,ml:.75,"& .MuiMenuItem-root":{typography:"body2",borderRadius:.75}},children:[Object(I.jsxs)(w.a,{sx:{my:1.5,px:2.5},children:[Object(I.jsxs)(j.a,{variant:"subtitle2",noWrap:!0,children:[" ",null===l||void 0===l?void 0:l.phoneNumber]}),Object(I.jsx)(A.a,{label:null===l||void 0===l?void 0:l.status,size:"small"})]}),Object(I.jsx)(E.a,{sx:{borderStyle:"dashed"}}),Object(I.jsxs)(a.a,{sx:{p:1},children:[" ",i.map((function(e){return Object(I.jsxs)(H.a,{to:e.linkTo,component:x.b,onClick:y,children:[" ",e.label," "]},e.label)}))]}),Object(I.jsx)(E.a,{sx:{borderStyle:"dashed"}}),Object(I.jsx)(H.a,{onClick:k,sx:{m:1},children:"Logout"})," "]})]})}var M=Object(s.a)(u.a)((function(e){var t=e.theme;return Object(o.a)({height:v.a.MOBILE_HEIGHT,transition:t.transitions.create(["height","background-color"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter})},t.breakpoints.up("md"),{height:v.a.MAIN_DESKTOP_HEIGHT})}));Object(s.a)("div")((function(e){e.theme;return{left:0,right:0,bottom:0,height:24,zIndex:-1,margin:"auto",borderRadius:"50%",position:"absolute",width:"calc(100% - 48px)"}}));function G(){var e=function(e){var t=Object(O.useState)(!1),n=Object(h.a)(t,2),r=n[0],a=n[1],i=e||100;return Object(O.useEffect)((function(){return window.onscroll=function(){window.pageYOffset>i?a(!0):a(!1)},function(){window.onscroll=null}}),[i]),r}(v.a.MAIN_DESKTOP_HEIGHT),t=Object(l.a)(),n=(Object(r.e)().pathname,Object(R.a)().user);Object(f.a)("up","md");return Object(I.jsx)(b.a,{sx:{boxShadow:0,bgcolor:"transparent"},children:Object(I.jsx)(M,{disableGutters:!0,sx:Object(c.a)({},e&&Object(c.a)(Object(c.a)({},g(t).bgBlur()),{},{height:{md:v.a.MAIN_DESKTOP_HEIGHT-16}})),children:Object(I.jsx)(d.a,{children:Object(I.jsxs)(a.a,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(I.jsx)(i.a,{}),Object(I.jsx)(j.a,{children:null===n||void 0===n?void 0:n.phoneNumber}),Object(I.jsx)(P,{})]})})})})}function _(){Object(r.e)().pathname;return Object(I.jsxs)(a.a,{sx:{minHeight:1},children:[Object(I.jsx)(G,{}),Object(I.jsx)(r.b,{})]})}},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(28),a=n(3),i=n(6),c=n(7),o=n(676),s=n(1),l=["children","arrow","disabledArrow","sx"],u=Object(c.a)("span")((function(e){var t=e.arrow,n=e.theme,r="solid 1px ".concat(n.palette.grey[900]),c={borderRadius:"0 0 3px 0",top:-6,borderBottom:r,borderRight:r},o={borderRadius:"3px 0 0 0",bottom:-6,borderTop:r,borderLeft:r},s={borderRadius:"0 3px 0 0",left:-6,borderTop:r,borderRight:r},l={borderRadius:"0 0 0 3px",right:-6,borderBottom:r,borderLeft:r};return Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)(Object(a.a)({},n.breakpoints.up("sm"),{zIndex:1,width:12,height:12,content:"''",position:"absolute",transform:"rotate(-135deg)",backgroundColor:n.palette.background.defalut}),"top-left"===t&&Object(i.a)(Object(i.a)({},c),{},{left:20})),"top-center"===t&&Object(i.a)(Object(i.a)({},c),{},{left:0,right:0,margin:"auto"})),"top-right"===t&&Object(i.a)(Object(i.a)({},c),{},{right:20})),"bottom-left"===t&&Object(i.a)(Object(i.a)({},o),{},{left:20})),"bottom-center"===t&&Object(i.a)(Object(i.a)({},o),{},{left:0,right:0,margin:"auto"})),"bottom-right"===t&&Object(i.a)(Object(i.a)({},o),{},{right:20})),"left-top"===t&&Object(i.a)(Object(i.a)({},s),{},{top:20})),"left-center"===t&&Object(i.a)(Object(i.a)({},s),{},{top:0,bottom:0,margin:"auto"})),"left-bottom"===t&&Object(i.a)(Object(i.a)({},s),{},{bottom:20})),"right-top"===t&&Object(i.a)(Object(i.a)({},l),{},{top:20})),"right-center"===t&&Object(i.a)(Object(i.a)({},l),{},{top:0,bottom:0,margin:"auto"})),"right-bottom"===t&&Object(i.a)(Object(i.a)({},l),{},{bottom:20}))}));function b(e){var t=e.children,n=e.arrow,a=void 0===n?"top-right":n,c=e.disabledArrow,b=e.sx,d=Object(r.a)(e,l);return Object(s.jsxs)(o.a,Object(i.a)(Object(i.a)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:Object(i.a)({p:1,width:200,overflow:"inherit",backgroundColor:"primary.dark"},b)}},d),{},{children:[!c&&Object(s.jsx)(u,{arrow:a}),t]}))}},394:function(e,t,n){"use strict";n(6),n(28),n(251),n(94),n(1)},440:function(e,t){},442:function(e,t){},457:function(e,t){},459:function(e,t){},487:function(e,t){},489:function(e,t){},490:function(e,t){},495:function(e,t){},497:function(e,t){},503:function(e,t){},505:function(e,t){},524:function(e,t){},536:function(e,t){},539:function(e,t){},62:function(e,t,n){"use strict";var r=n(0),a=n(191);t.a=function(){var e=Object(r.useContext)(a.a);if(!e)throw new Error("Auth context must be use inside AuthProvider");return e}},659:function(e,t,n){"use strict";n.r(t);n(408),n(409),n(410),n(411);var r=n(63),a=n.n(r),i=n(41),c=n(174),o=n(191),s=n(6),l=n(18),u=n(0),b=n(72),d=n(1),j={collapseClick:!1,collapseHover:!1,onToggleCollapse:function(){},onHoverEnter:function(){},onHoverLeave:function(){}},h=Object(u.createContext)(j);function O(e){var t=e.children,n=Object(b.a)("up","lg"),r=Object(u.useState)({click:!1,hover:!1}),a=Object(l.a)(r,2),i=a[0],c=a[1];Object(u.useEffect)((function(){n||c({click:!1,hover:!1})}),[n]);return Object(d.jsx)(h.Provider,{value:{isCollapse:i.click&&!i.hover,collapseClick:i.click,collapseHover:i.hover,onToggleCollapse:function(){c(Object(s.a)(Object(s.a)({},i),{},{click:!i.click}))},onHoverEnter:function(){i.click&&c(Object(s.a)(Object(s.a)({},i),{},{hover:!0}))},onHoverLeave:function(){c(Object(s.a)(Object(s.a)({},i),{},{hover:!1}))}},children:t})}var f=n(26),p=n(265),m=n(167),g=n(28),v=n(721),x=n(7),y=n(664),k=n(94),w=n(85),F=["isDashboard"],I=Object(x.a)("div")((function(e){return{right:0,bottom:0,zIndex:99999,width:"100%",height:"100%",position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.theme.palette.background.default}}));function S(e){var t=e.isDashboard,n=Object(g.a)(e,F);return Object(d.jsx)(d.Fragment,{children:!t&&Object(d.jsxs)(I,Object(s.a)(Object(s.a)({},n),{},{children:[Object(d.jsx)(v.a.div,{initial:{rotateY:0},animate:{rotateY:360},transition:{duration:2,ease:"easeInOut",repeatDelay:1,repeat:1/0},children:Object(d.jsx)(w.a,{disabledLink:!0,sx:{width:64,height:64}})}),Object(d.jsx)(k.a,{component:v.a.div,animate:{scale:[1.2,1,1,1.2,1.2],rotate:[270,0,0,270,270],opacity:[.25,1,1,1,.25],borderRadius:["25%","25%","50%","50%","25%"]},transition:{ease:"linear",duration:3.2,repeat:1/0},sx:{width:100,height:100,borderRadius:"25%",position:"absolute",border:function(e){return"solid 3px ".concat(Object(y.a)(e.palette.primary.dark,.24))}}}),Object(d.jsx)(k.a,{component:v.a.div,animate:{scale:[1,1.2,1.2,1,1],rotate:[0,270,270,0,0],opacity:[1,.25,.25,.25,1],borderRadius:["25%","25%","50%","50%","25%"]},transition:{ease:"linear",duration:3.2,repeat:1/0},sx:{width:120,height:120,borderRadius:"25%",position:"absolute",border:function(e){return"solid 8px ".concat(Object(y.a)(e.palette.primary.dark,.24))}}})]}))})}var z=n(62);function C(e){var t=e.children;return Object(z.a)().isAuthenticated?Object(d.jsx)(f.a,{to:"/home"}):Object(d.jsx)(d.Fragment,{children:t})}n(661);function T(e){var t=e.children,n=Object(z.a)(),r=n.isAuthenticated,a=n.isInitialized,i=Object(f.e)().pathname,c=Object(u.useState)(null),o=Object(l.a)(c,2),s=o[0],b=o[1];return a?r?s&&i!==s?(b(null),Object(d.jsx)(f.a,{to:s})):Object(d.jsx)(d.Fragment,{children:t}):(i!==s&&b(i),Object(d.jsx)(f.a,{to:"/auth/login"})):Object(d.jsx)(S,{})}var A=function(e){return function(t){return Object(d.jsx)(u.Suspense,{fallback:Object(d.jsx)(S,{}),children:Object(d.jsx)(e,Object(s.a)({},t))})}};function E(){return Object(f.i)([{path:"auth",children:[{path:"login",element:Object(d.jsx)(C,{children:Object(d.jsx)(H,{})})},{path:"verify",element:Object(d.jsxs)(C,{children:[" ",Object(d.jsx)(R,{})]})}]},{path:"",children:[{element:Object(d.jsxs)(T,{children:["  ",Object(d.jsx)(B,{})," "]}),index:!0},{path:"home",element:Object(d.jsxs)(T,{children:["  ",Object(d.jsx)(B,{})," "]})}]},{path:"admin",element:Object(d.jsx)(p.a,{}),children:[{path:"device/:id",element:Object(d.jsx)(L,{})},{path:"device-manage",element:Object(d.jsx)(D,{})},{path:"user-manage",element:Object(d.jsx)(N,{})}]},{path:"*",element:Object(d.jsx)(m.a,{}),children:[{path:"404",element:Object(d.jsx)(W,{})},{path:"*",element:Object(d.jsx)(f.a,{to:"/404",replace:!0})}]},{path:"*",element:Object(d.jsx)(f.a,{to:"/404",replace:!0})}])}var H=A(Object(u.lazy)((function(){return Promise.resolve().then(n.bind(null,661))}))),R=A(Object(u.lazy)((function(){return n.e(11).then(n.bind(null,941))}))),B=A(Object(u.lazy)((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,938))}))),D=A(Object(u.lazy)((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,936))}))),L=A(Object(u.lazy)((function(){return n.e(8).then(n.bind(null,931))}))),N=A(Object(u.lazy)((function(){return n.e(10).then(n.bind(null,932))}))),W=A(Object(u.lazy)((function(){return n.e(7).then(n.bind(null,935))}))),P=n(720),M=n(386),G=n(658),_=n(739);function Y(e,t){return"linear-gradient(to bottom, ".concat(e,", ").concat(t,")")}var U={lighter:"#a9d1ef",light:"#1d4864",main:"#113B5C",dark:"#081c2b",darker:"#040e16"},X={lighter:"#D0F2FF",light:"#74CAFF",main:"#1890FF",dark:"#0C53B7",darker:"#04297A"},q={lighter:"#E9FCD4",light:"#AAF27F",main:"#54D62C",dark:"#229A16",darker:"#08660D"},K={lighter:"#FFF7CD",light:"#FFE16A",main:"#FFC107",dark:"#B78103",darker:"#7A4F01"},Z={lighter:"#FFE7D9",light:"#FFA48D",main:"#FF4842",dark:"#B72136",darker:"#7A0C2E"},V={0:"#FFFFFF",100:"#CCE6FF",200:"#99CEFF",300:"#66B5FF",400:"#339CFF",500:"#38B1FF",600:"#0069CC",700:"#004F99",800:"#003566",900:"#061C2A",5008:Object(y.a)("#38B1FF",.08),50012:Object(y.a)("#38B1FF",.12),50016:Object(y.a)("#38B1FF",.16),50024:Object(y.a)("#38B1FF",.24),50032:Object(y.a)("#38B1FF",.32),50048:Object(y.a)("#38B1FF",.48),50056:Object(y.a)("#38B1FF",.56),50080:Object(y.a)("#38B1FF",.8)},J={primary:Y(U.light,U.main),info:Y(X.light,X.main),success:Y(q.light,q.main),warning:Y(K.light,K.main),error:Y(Z.light,Z.main)},Q={common:{black:"#000",white:"#f0f0f0"},primary:Object(s.a)(Object(s.a)({},U),{},{contrastText:"#f0f0f0"}),secondary:Object(s.a)(Object(s.a)({},{lighter:"#D6E4FF",light:"#84A9FF",main:"#3366FF",dark:"#1939B7",darker:"#091A7A"}),{},{contrastText:"#f0f0f0"}),info:Object(s.a)(Object(s.a)({},X),{},{contrastText:"#f0f0f0"}),success:Object(s.a)(Object(s.a)({},q),{},{contrastText:V[800]}),warning:Object(s.a)(Object(s.a)({},K),{},{contrastText:V[800]}),error:Object(s.a)(Object(s.a)({},Z),{},{contrastText:"#f0f0f0"}),grey:V,gradients:J,divider:V[50024],action:{hover:V[5008],selected:V[50016],disabled:V[50080],disabledBackground:V[50024],focus:V[50024],hoverOpacity:.08,disabledOpacity:.48}},$={dark:Object(s.a)(Object(s.a)({},Q),{},{mode:"dark",text:{primary:"#f0f0f0",secondary:"#f0f0f0",disabled:V[600]},background:{paper:V[50024],default:V[900],neutral:V[50016]},action:Object(s.a)({active:V[500]},Q.action)})},ee=(n(19),n(47));function te(e){return"".concat(e/16,"rem")}function ne(e){var t=e.sm,n=e.md,r=e.lg;return{"@media (min-width:600px)":{fontSize:te(t)},"@media (min-width:900px)":{fontSize:te(n)},"@media (min-width:1200px)":{fontSize:te(r)}}}var re={fontFamily:"Public Sans, sans-serif",fontWeightRegular:400,fontWeightMedium:600,fontWeightBold:700,h1:Object(s.a)({fontWeight:700,lineHeight:1.25,fontSize:te(40),letterSpacing:2},ne({sm:52,md:58,lg:64})),h2:Object(s.a)({fontWeight:700,lineHeight:64/48,fontSize:te(32)},ne({sm:40,md:44,lg:48})),h3:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:te(24)},ne({sm:26,md:30,lg:32})),h4:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:te(20)},ne({sm:20,md:24,lg:24})),h5:Object(s.a)({fontWeight:700,lineHeight:1.5,fontSize:te(18)},ne({sm:19,md:20,lg:20})),h6:Object(s.a)({fontWeight:700,lineHeight:28/18,fontSize:te(17)},ne({sm:18,md:18,lg:18})),subtitle1:{fontWeight:600,lineHeight:1.5,fontSize:te(16)},subtitle2:{fontWeight:600,lineHeight:22/14,fontSize:te(14)},body1:{lineHeight:1.5,fontSize:te(16)},body2:{lineHeight:22/14,fontSize:te(14)},caption:{lineHeight:1.5,fontSize:te(12)},overline:{fontWeight:700,lineHeight:1.5,fontSize:te(12),textTransform:"uppercase"},button:{fontWeight:700,lineHeight:24/14,fontSize:te(14),textTransform:"capitalize"}},ae={values:{xs:0,sm:600,md:900,lg:1200,xl:1536}};function ie(e){var t=e.children,n=Object(u.useMemo)((function(){return{palette:$.dark,typography:re,breakpoints:ae,shape:{borderRadius:8}}})),r=Object(M.a)(n);return Object(d.jsx)(G.a,{injectFirst:!0,children:Object(d.jsxs)(_.a,{theme:r,children:[Object(d.jsx)(P.a,{}),t]})})}var ce=n(3),oe=n(160),se=n(674),le=n(77),ue=n(168);function be(){var e=Object(ee.a)(),t="light"===e.palette.mode;return Object(d.jsx)(se.a,{styles:{"#root":{"& .SnackbarContent-root":Object(ce.a)({width:"100%",padding:e.spacing(1),margin:e.spacing(.25,0),borderRadius:e.shape.borderRadius,color:e.palette.grey[t?0:800],backgroundColor:e.palette.grey[t?900:0],"&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo":{color:e.palette.text.primary,backgroundColor:e.palette.background.paper}},e.breakpoints.up("md"),{minWidth:240}),"& .SnackbarItem-message":{padding:"0 !important",fontWeight:e.typography.fontWeightMedium},"& .SnackbarItem-action":{marginRight:0,color:e.palette.action.active,"& svg":{width:20,height:20}}}}})}function de(e){var t=e.children,n=Object(u.useRef)(null),r=function(e){return function(){n.current.closeSnackbar(e)}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(be,{}),Object(d.jsx)(oe.a,{ref:n,dense:!0,maxSnack:5,preventDuplicate:!0,autoHideDuration:3e3,variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},iconVariant:{info:Object(d.jsx)(je,{icon:"eva:info-fill",color:"info"}),success:Object(d.jsx)(je,{icon:"eva:checkmark-circle-2-fill",color:"success"}),warning:Object(d.jsx)(je,{icon:"eva:alert-triangle-fill",color:"warning"}),error:Object(d.jsx)(je,{icon:"eva:alert-circle-fill",color:"error"})},action:function(e){return Object(d.jsx)(ue.a,{size:"small",onClick:r(e),sx:{p:.5},children:Object(d.jsx)(le.a,{icon:"eva:close-fill"})})},children:t})]})}function je(e){var t=e.icon,n=e.color;return Object(d.jsx)(k.a,{component:"span",sx:{mr:1.5,width:40,height:40,display:"flex",borderRadius:1.5,alignItems:"center",justifyContent:"center",color:"".concat(n,".main"),bgcolor:function(e){return Object(y.a)(e.palette[n].main,.16)}},children:Object(d.jsx)(le.a,{icon:t,width:24,height:24})})}var he=n(166);function Oe(){return Object(d.jsxs)(ie,{children:[" "," "," ",Object(d.jsxs)(de,{children:[Object(d.jsxs)(he.a,{children:[" "," "," ",Object(d.jsx)(E,{})]})," "]})," "," "," "]})}a.a.render(Object(d.jsx)(o.b,{children:Object(d.jsx)(c.b,{children:Object(d.jsx)(O,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(Oe,{})})})})}),document.getElementById("root"))},661:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(7),a=n(751),i=n(742),c=n(94),o=(n(394),n(62)),s=n(72),l=n(255),u=(n(85),n(5)),b=n(4),d=n.n(b),j=n(234),h=n(32),O=n(266),f=n(712),p=n(726),m=n(731),g=n(26),v=n(164),x=n(239),y=n(1);function k(){var e=Object(o.a)().login,t=Object(g.f)(),n=Object(v.a)(),r=j.a().shape({phoneNumber:j.b().required("Phone Number is required")}),a=Object(h.f)({resolver:Object(O.a)(r),defaultValues:{phoneNumber:"",remember:!0}}),i=a.reset,c=a.setError,s=a.handleSubmit,l=a.formState,b=l.errors,k=l.isSubmitting,w=function(){var r=Object(u.a)(d.a.mark((function r(a){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e(a.phoneNumber);case 3:r.sent&&t("/auth/verify"),r.next=12;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0,"is erro"),i(),n.current&&c("afterSubmit","verification server error");case 12:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(x.a,{methods:a,onSubmit:s(w),children:Object(y.jsxs)(f.a,{spacing:3,children:[" ",!!b.afterSubmit&&Object(y.jsxs)(p.a,{severity:"error",children:[" ",b.afterSubmit.message," "]})," ",Object(y.jsx)(x.d,{name:"phoneNumber",label:"phoneNumber"}),Object(y.jsxs)(m.a,{fullWidth:!0,size:"large",sx:{bgcolor:"grey.50016",border:"1px solid",borderColor:"grey.50048"},type:"submit",variant:"contained",loading:k,children:["\u041d\u044d\u0432\u0442\u0440\u044d\u0445"," "]})," "]})})," ",Object(y.jsx)("div",{id:"recaptcha-container"})]})}var w=n(257),F=n(167),I=Object(r.a)("div")((function(e){e.theme;return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",alignContent:"space-between",gap:3}}));function S(){Object(o.a)().method,Object(s.a)("up","sm"),Object(s.a)("up","md");return Object(y.jsxs)(l.a,{title:"Login",children:[Object(y.jsx)(F.a,{}),Object(y.jsx)(a.a,{maxWidth:"xl",children:Object(y.jsxs)(I,{children:[Object(y.jsx)(i.a,{variant:"h3",gutterBottom:!0,textAlign:"center",children:"\u0411\u0430\u0442\u0430\u043b\u0433\u0430\u0430\u0436\u0443\u0443\u043b\u0430\u0445"}),Object(y.jsx)(c.a,{width:"50%",sx:{mx:"auto",mb:3,mt:-3},children:Object(y.jsx)(w.a,{})}),Object(y.jsx)(i.a,{paragraph:!0,textAlign:"center",children:"\u0443\u0442\u0430\u0441\u043d\u044b \u0434\u0443\u0433\u0430\u0430\u0440\u0430\u0430 \u043e\u0440\u0443\u0443\u043b\u0430\u0430\u0434 \u0431\u0430\u0442\u0430\u043b\u0433\u0430\u0430\u0436\u0443\u0443\u043b\u0430\u0445 \u043a\u043e\u0434 \u0445\u04af\u043b\u044d\u044d\u043d \u0430\u0432\u043d\u0430 \u0443\u0443"}),Object(y.jsx)(c.a,{width:"80%",mx:"auto",my:3,children:Object(y.jsx)(k,{})})]})})]})}},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(47),a=n(195);function i(e,t,n,i){var c=Object(r.a)(),o=Object(a.a)(c.breakpoints.up(t)),s=Object(a.a)(c.breakpoints.down(t)),l=Object(a.a)(c.breakpoints.between(n,i)),u=Object(a.a)(c.breakpoints.only(t));return"up"===e?o:"down"===e?s:"between"===e?l:"only"===e?u:null}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(6),a=n(28),i=n(379),c=n(94),o=n(1),s=["icon","sx"];function l(e){var t=e.icon,n=e.sx,l=Object(a.a)(e,s);return Object(o.jsx)(c.a,Object(r.a)({component:i.a,icon:t,sx:Object(r.a)({},n)},l))}},84:function(e,t,n){"use strict";var r=n(376),a=n.n(r),i=n(87),c=a.a.create({baseURL:i.b});c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e.response&&e.response.data||"Something went wrong")})),t.a=c},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6),a=n(41),i=n(47),c=n(94),o=n(1);function s(e){var t=e.disabledLink,n=void 0!==t&&t,s=e.sx,l=Object(i.a)(),u=(l.palette.primary.light,l.palette.primary.main,l.palette.primary.dark,Object(o.jsx)(c.a,{sx:Object(r.a)({width:30,height:40},s),children:Object(o.jsx)("img",{width:"100%",height:"100%",src:"/logo/logo.png",alt:"logo"})}));return n?Object(o.jsxs)(o.Fragment,{children:[" ",u," "]}):Object(o.jsxs)(a.b,{to:"/home",children:[" ",u," "]})}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="http://45.76.188.38:5000",a={MOBILE_HEIGHT:50,MAIN_DESKTOP_HEIGHT:70}}},[[659,1,2]]]);
//# sourceMappingURL=main.cc273600.chunk.js.map