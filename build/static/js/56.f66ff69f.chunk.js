(this.webpackJsonpcrema=this.webpackJsonpcrema||[]).push([[56],{1405:function(e,t,n){"use strict";var a=n(5),r=n(148),o=n(0),i=n.n(o),l=n(356),c=n(11),u=n.n(c),d=n(167),s=n(68),m=n(357),f=n(9),p=n(497),y=n(358),b=n(476),E=Object(d.a)((function(e){return{link:{fontSize:14},textTruncate:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},cardHeader:{paddingLeft:20,paddingRight:20,paddingBottom:4,"& .MuiCardHeader-action":{marginTop:0,marginRight:0}}}})),g=function(e){var t=e.title,n=e.titleStyle,o=e.headerStyle,c=e.contentStyle,u=e.action,d=e.actionStyle,g=e.footer,h=e.footerPosition,v=e.footerStyle,j=e.children,O=Object(r.a)(e,["title","titleStyle","headerStyle","contentStyle","action","actionStyle","footer","footerPosition","footerStyle","children"]),x=E();return i.a.createElement(s.a,Object.assign({display:"flex",flexDirection:"column"},O,{clone:!0}),i.a.createElement(l.a,null,t||u?i.a.createElement(m.a,{className:x.cardHeader,style:Object(a.a)({},o),title:i.a.createElement(s.a,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},"object"===typeof t?t:i.a.createElement(s.a,Object.assign({component:"h3",className:x.textTruncate,color:"text.primary",alignSelf:"flex-start",fontWeight:f.b.BOLD,fontSize:16},n),t)),action:"object"===typeof u?u:i.a.createElement(s.a,Object.assign({component:"span",ml:"auto",mt:2,mr:2},d),i.a.createElement(p.a,{href:"#",color:"secondary",component:"button",underline:"none",className:x.link},i.a.createElement(s.a,{component:"span"},u)))}):null,i.a.createElement(y.a,{style:Object(a.a)({paddingLeft:20,paddingRight:20,height:"100%"},c)},j),g?i.a.createElement(b.a,{style:Object(a.a)({paddingLeft:20,paddingRight:20,paddingBottom:16},v)},"object"===typeof g?g:i.a.createElement(s.a,{component:"span",ml:"right"===h?"auto":0},i.a.createElement(p.a,{color:"secondary",component:"button",underline:"none",className:x.link},g))):null))};t.a=g,g.prototype={action:u.a.oneOfType([u.a.string,u.a.object])},g.defaultProps={footerPosition:"left"}},1407:function(e,t,n){"use strict";var a=n(148),r=n(0),o=n.n(r),i=n(5),l=n(1416),c=n(40),u=n(670),d=n.n(u),s=n(1413),m=function(e){var t=e.renderRow,n=e.onEndReached,r=e.data,u=e.animation,m=e.delay,f=void 0===m?0:m,p=e.duration,y=void 0===p?200:p,b=e.containerStyle,E=e.border,g=e.ListFooterComponent,h=e.ListEmptyComponent,v=(e.ItemSeparatorComponent,Object(a.a)(e,["renderRow","onEndReached","data","animation","delay","duration","containerStyle","border","ListFooterComponent","ListEmptyComponent","ItemSeparatorComponent"])),j=Object(c.a)(),O={border:"1px solid ".concat(d.a[300]),backgroundColor:j.palette.background.paper,borderRadius:4,overflow:"hidden"};n||(n=function(){});var x=b;return E&&(x=Object(i.a)(Object(i.a)({},x),O)),Object(l.a)(n,200),o.a.createElement(s.a,Object.assign({style:Object(i.a)({},x)},v,{flex:1,enter:{delay:f,duration:y,animation:u}}),r.length>0?r.map((function(e,n){return t(e,n)})):function(e){return e?o.a.isValidElement(e)?e:o.a.createElement(e,null):null}(h),function(e){return e?o.a.isValidElement(e)?e:o.a.createElement(e,null):null}(g))},f=m;m.defaultProps={border:!1,animation:"transition.slideUpIn",data:[],onEndReached:function(){}};var p=n(167),y=n(68),b=n(458),E=n(11),g=n.n(E),h=n(4),v=Object(p.a)((function(e){return{listFooterRoot:{padding:10,color:e.palette.text.secondary,display:"flex",justifyContent:"center"},listFooterLoaderRoot:{width:"100%",display:"flex",color:e.palette.text.secondary,justifyContent:"center",padding:8,borderTop:"1px solid ".concat(e.palette.grey[200]),boxSizing:"border-box"}}})),j=function(e){var t=e.loading,n=e.footerText,a=v();return t?o.a.createElement(y.a,{className:a.listFooterLoaderRoot},o.a.createElement(b.a,{size:16}),o.a.createElement(y.a,{component:"span",ml:2},"Loading...")):o.a.createElement(y.a,{className:Object(h.default)(a.listFooterRoot,"list-footer")},o.a.createElement(y.a,{component:"p"},n))};j.prototype={loading:g.a.bool,footerText:g.a.string},j.defaultProps={loading:!1};var O=j,x=function(e){var t=e.footerProps,n=Object(a.a)(e,["footerProps"]);return o.a.createElement(f,Object.assign({},n,{ListFooterComponent:t?o.a.createElement(O,{loading:t.loading,footerText:t.footerText}):null}))};t.a=x;x.defaultProps={border:!1,data:[]}},1413:function(e,t,n){"use strict";var a=n(5),r=n(148),o=n(0),i=n.n(o),l=n(420),c=(n(683),{animation:"transition.fadeIn",stagger:50,duration:200,display:null,visibility:"visible",delay:0}),u={animation:"transition.slideUpOut",backwards:150,duration:200,display:null,visibility:"visible",delay:0};function d(e){e.loading;var t=Object(r.a)(e,["loading"]);return i.a.createElement(l.VelocityTransitionGroup,Object.assign({},t,{enter:Object(a.a)(Object(a.a)({},c),t.enter),leave:Object(a.a)(Object(a.a)({},u),t.leave)}))}d.defaultProps={enter:c,leave:u,easing:[.4,0,.2,1],runOnMount:!0,enterHideStyle:{visibility:"visible"},enterShowStyle:{visibility:"hidden"}},t.a=Object(o.memo)(d)},1416:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(1422),o=n.n(r);function i(e,t,n,r,i){void 0===t&&(t=0),void 0===n&&(n=200),void 0===r&&(r={leading:!0}),void 0===i&&(i=!1);var l=Object(a.useMemo)((function(){return function(e,t,n){return e?o()(t,e,n):t}(n,e,r)}),[n,e]),c=Object(a.useRef)(null),u=Object(a.useCallback)((function(){if(null!=c.current){var e=c.current,n=Math.round(e.scrollTop+e.clientHeight);Math.round(e.scrollHeight-t)<=n&&l()}else{var a=document.scrollingElement||document.documentElement,r=Math.round(a.scrollTop+window.innerHeight);Math.round(a.scrollHeight-t)<=r&&l()}}),[t,e,c.current]);return Object(a.useEffect)((function(){var e=c.current;return null!=e?e.addEventListener("scroll",u):window.addEventListener("scroll",u),i&&u(),function(){null!=e?e.removeEventListener("scroll",u):window.removeEventListener("scroll",u)}}),[u,n]),c}},1422:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,f=function(){return u.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=r.test(e);return l||o.test(e)?i(e.slice(2),l?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a,r,o,i,l,c,u=0,d=!1,b=!1,E=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,o=r;return a=r=void 0,u=t,i=e.apply(o,n)}function h(e){return u=e,l=setTimeout(j,t),d?g(e):i}function v(e){var n=e-c;return void 0===c||n>=t||n<0||b&&e-u>=o}function j(){var e=f();if(v(e))return O(e);l=setTimeout(j,function(e){var n=t-(e-c);return b?m(n,o-(e-u)):n}(e))}function O(e){return l=void 0,E&&a?g(e):(a=r=void 0,i)}function x(){var e=f(),n=v(e);if(a=arguments,r=this,c=e,n){if(void 0===l)return h(c);if(b)return l=setTimeout(j,t),g(c)}return void 0===l&&(l=setTimeout(j,t)),i}return t=y(t)||0,p(n)&&(d=!!n.leading,o=(b="maxWait"in n)?s(y(n.maxWait)||0,t):o,E="trailing"in n?!!n.trailing:E),x.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=c=r=l=void 0},x.flush=function(){return void 0===l?i:O(f())},x}}).call(this,n(98))},1461:function(e,t,n){"use strict";var a=n(49);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(69)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},1465:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return s})),n.d(t,"k",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return y}));var a=n(2),r=n(27),o=function(e){return function(t){t({type:a.v}),r.a.get("/api/ecommerce/list",{params:{filterData:e}}).then((function(e){200===e.status?(t({type:a.w}),t({type:a.Q,payload:e.data})):t({type:a.u,payload:"Something went wrong, Please try again!"})})).catch((function(e){t({type:a.u,payload:e.message})}))}},i=function(e){return function(t){t({type:a.v}),r.a.get("/api/ecommerce/get",{params:{id:e}}).then((function(e){200===e.status?(t({type:a.w}),t({type:a.wb,payload:e.data})):t({type:a.u,payload:"Something went wrong, Please try again!"})})).catch((function(e){t({type:a.u,payload:e.message})}))}},l=function(e,t){return function(n){n({type:a.v}),r.a.get("/api/ecommerce/orders",{params:{search:e,page:t}}).then((function(e){200===e.status?(n({type:a.w}),n({type:a.bb,payload:e.data})):n({type:a.u,payload:"Something went wrong, Please try again!"})})).catch((function(e){n({type:a.u,payload:e.message})}))}},c=function(e,t){return function(n){n({type:a.v}),r.a.get("/api/ecommerce/customers",{params:{search:e,page:t}}).then((function(e){200===e.status?(n({type:a.w}),n({type:a.M,payload:e.data})):n({type:a.u,payload:"Something went wrong, Please try again!"})})).catch((function(e){n({type:a.u,payload:e.message})}))}},u=function(){return function(e){e({type:a.v}),e({type:a.w})}},d=function(e){return function(t){t({type:a.xb,payload:e})}},s=function(e){return function(t){t({type:a.qb,payload:e})}},m=function(e){return function(t){t({type:a.Kb,payload:e})}},f=function(e){return function(t){t({type:a.b,payload:e})}},p=function(e){return function(t){t({type:a.wb,payload:e})}},y=function(e){return function(t){t({type:a.ub,payload:e})}}},1685:function(e,t,n){"use strict";var a=n(49);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(69)).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked");t.default=o},1686:function(e,t,n){"use strict";var a=n(49);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(69)).default)(r.default.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonChecked");t.default=o},1887:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1405),i=n(68),l=n(9),c=n(485),u=n(1385),d=n(239);t.a=function(e){var t=e.cartItems,n=Object(u.a)().messages,a=function(e){var t=0;return e.map((function(e){return t+=(+e.mrp-+e.discount)*+e.count,e})),t}(t);return r.a.createElement(d.a,{animation:"transition.slideUpIn",delay:200},r.a.createElement(o.a,{title:r.a.createElement(i.a,{fontSize:16,fontWeight:l.b.BOLD},n["ecommerce.orderSummary"])},r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",fontSize:14,fontWeight:l.b.MEDIUM,mt:2,mb:4},r.a.createElement(i.a,{color:"text.secondary"},"Grand Total: "),r.a.createElement(i.a,null,"$",a)),r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",fontSize:14,fontWeight:l.b.MEDIUM,mb:4},r.a.createElement(i.a,{color:"text.secondary"},"Discount: "),r.a.createElement(i.a,null,"$4")),r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",fontSize:14,fontWeight:l.b.MEDIUM,mb:4},r.a.createElement(i.a,{color:"text.secondary"},"Shipping Charge: "),r.a.createElement(i.a,null,"$4")),r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",fontSize:14,fontWeight:l.b.MEDIUM,mb:4},r.a.createElement(i.a,{color:"text.secondary"},"Estimated Tax: "),r.a.createElement(i.a,null,"$1")),r.a.createElement(c.a,null),r.a.createElement(i.a,{display:"flex",justifyContent:"space-between",fontSize:14,fontWeight:l.b.MEDIUM,my:4},r.a.createElement(i.a,{color:"text.secondary"},"Order Total: "),r.a.createElement(i.a,null,"$",a+1))))}},3149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(68),i=n(359),l=n(29),c=n(1405),u=n(16),d=n(9),s=n(18),m=n(1465),f=n(1887),p=n(23),y=n(1407),b=n(145),E=n(270),g=n(532),h=n(1685),v=n.n(h),j=n(1686),O=n.n(j),x=n(1461),S=n.n(x),w=n(197),C=function(e){var t=e.address,n=e.selectedAddress,a=e.setSelectAddress,i=n.id===t.id;return r.a.createElement(o.a,{onClick:function(){return a(t)},border:1,px:5,py:2,mb:4,className:"item-hover",borderRadius:4,borderColor:"#D9DBE3"},r.a.createElement(o.a,{display:"flex",alignItems:"center",fontSize:14,fontWeight:d.b.MEDIUM},r.a.createElement(g.a,{checked:i,icon:r.a.createElement(v.a,null),checkedIcon:r.a.createElement(O.a,null),color:"primary"}),r.a.createElement(o.a,{mx:3.5},t.name),r.a.createElement(o.a,null,t.mobile),i?r.a.createElement(o.a,{ml:"auto"},r.a.createElement(w.a,{size:"small"},r.a.createElement(S.a,null))):null),r.a.createElement(o.a,{fontSize:14,fontWeight:d.b.REGULAR,ml:14,mt:-2,mb:4},t.addressLine,", ",t.city,", ",t.pin),i?r.a.createElement(o.a,{fontSize:14,fontWeight:d.b.REGULAR,ml:14,mt:1,mb:4},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Deliver Here")):null)},M=function(){var e=Object(a.useState)(b.e[1]),t=Object(p.a)(e,2),n=t[0],o=t[1];return r.a.createElement(y.a,{delay:200,data:b.e,renderRow:function(e){return r.a.createElement(C,{key:e.id,address:e,selectedAddress:n,setSelectAddress:o})}})},D=n(522),L=function(){var e=Object(a.useState)("CARD"),t=Object(p.a)(e,2),n=t[0],i=t[1];return r.a.createElement(c.a,{mt:6,footerStyle:{marginTop:10},title:r.a.createElement(o.a,{fontSize:16,fontWeight:d.b.BOLD},"Payment Info"),footer:r.a.createElement(E.a,{variant:"contained",color:"primary",fullWidth:!0},"Place Order")},r.a.createElement(o.a,null,r.a.createElement(o.a,{onClick:function(){return i("COD")},className:"pointer"},r.a.createElement(g.a,{checked:"COD"===n,icon:r.a.createElement(v.a,null),checkedIcon:r.a.createElement(O.a,null),color:"primary"}),r.a.createElement(o.a,{component:"span",fontSize:14,fontWeight:d.b.MEDIUM},"COD")),"COD"===n?r.a.createElement(o.a,{ml:3,color:"text.secondary"},"Cash on delivery"):null),r.a.createElement(o.a,null,r.a.createElement(o.a,{onClick:function(){return i("CARD")},className:"pointer"},r.a.createElement(g.a,{checked:"CARD"===n,icon:r.a.createElement(v.a,null),checkedIcon:r.a.createElement(O.a,null),color:"primary"}),r.a.createElement(o.a,{component:"span",fontSize:14,fontWeight:d.b.MEDIUM},"CARD")),"CARD"===n?r.a.createElement(o.a,{ml:3,color:"text.secondary"},r.a.createElement(D.a,{margin:"dense",fullWidth:!0,id:"user-name",label:"Full Name",type:"search",variant:"outlined"}),r.a.createElement(D.a,{margin:"dense",fullWidth:!0,id:"card-number",label:"Card Number",type:"search",variant:"outlined"}),r.a.createElement(o.a,{display:"flex"},r.a.createElement(D.a,{margin:"dense",id:"expiry-date",label:"Expiry Date (MM/YY)",type:"search",style:{marginRight:20},variant:"outlined"}),r.a.createElement(D.a,{margin:"dense",id:"card-cvv",label:"CVV",type:"password",variant:"outlined"}))):null),r.a.createElement(o.a,null,r.a.createElement(o.a,{onClick:function(){return i("PAYPAL")},className:"pointer"},r.a.createElement(g.a,{checked:"PAYPAL"===n,icon:r.a.createElement(v.a,null),checkedIcon:r.a.createElement(O.a,null),color:"primary"}),r.a.createElement(o.a,{component:"span",fontSize:14,fontWeight:d.b.MEDIUM},"PAYPAL")),"PAYPAL"===n?r.a.createElement(o.a,{ml:3,color:"text.secondary"},r.a.createElement(D.a,{margin:"dense",fullWidth:!0,id:"paypal-email",label:"PayPal email address",type:"search",variant:"outlined"})):null))},P=n(239);t.default=function(){var e=Object(s.d)(),t=Object(s.e)((function(e){return e.ecommerce})).cartItems;return Object(a.useEffect)((function(){e(Object(m.b)())}),[e]),r.a.createElement(P.a,{animation:"transition.slideUpIn",delay:200},r.a.createElement(o.a,null,r.a.createElement(o.a,{component:"h2",color:"text.primary",fontWeight:d.b.BOLD,mb:6,fontSize:16},r.a.createElement(u.a,{id:"sidebar.ecommerce.checkout"})),r.a.createElement(l.e,null,r.a.createElement(i.a,{item:!0,xs:12,md:8},r.a.createElement(c.a,{title:r.a.createElement(o.a,{fontSize:16,fontWeight:d.b.BOLD},"Delivery Address")},r.a.createElement(M,null))),r.a.createElement(i.a,{item:!0,xs:12,md:4},r.a.createElement(f.a,{cartItems:t}),r.a.createElement(L,null)))))}}}]);
//# sourceMappingURL=56.f66ff69f.chunk.js.map