"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[634],{951:function(n,t,r){r.d(t,{Dx:function(){return l},aV:function(){return f},ck:function(){return p},fL:function(){return d}});var e,c,a,u,i=r(168),o=r(444),s=r(87),f=o.ZP.ul(e||(e=(0,i.Z)(["\n    list-style: none;\n    padding: 0;\n    max-width: 800px;\n    margin: 0 auto;\n"]))),p=o.ZP.li(c||(c=(0,i.Z)(["\n    padding: 5px;\n    border-radius: 5px;\n    transition: background-color 100ms linear;\n    :hover {\n        background-color: #E8D2A6;\n    }\n"]))),d=(0,o.ZP)(s.rU)(a||(a=(0,i.Z)(["\n    color: black;\n    text-transform: capitalize;\n\n"]))),l=o.ZP.h2(u||(u=(0,i.Z)(["\n    font-size: 24px;\n    text-align: center;\n"])))},768:function(n,t,r){r.d(t,{CJ:function(){return p},V0:function(){return d},YS:function(){return f},au:function(){return h},fh:function(){return l},q5:function(){return v},zh:function(){return s}});var e=r(861),c=r(757),a=r.n(c),u=r(912),i="1e08b8d990c5fa2af74f683ca643ea53",o="https://api.themoviedb.org/3/",s="https://image.tmdb.org/t/p/w500",f="https://i.ibb.co/cLM23Z5/default-card-img.jpg",p=function(){var n=(0,e.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return r=n.sent,console.log(r.data),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},634:function(n,t,r){r.r(t),r.d(t,{default:function(){return f}});var e=r(439),c=r(951),a=r(184),u=function(n){var t=n.listFilms;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Dx,{children:"Tranding today"}),(0,a.jsx)(c.aV,{children:t.map((function(n,t){return(0,a.jsxs)(c.ck,{children:[t+1," ",(0,a.jsx)(c.fL,{to:"movies/".concat(n.id),children:n.title})]},n.id)}))})]})},i=r(647),o=r(791),s=r(768),f=function(){var n=(0,o.useState)([]),t=(0,e.Z)(n,2),r=t[0],c=t[1],f=(0,o.useRef)(!0);return(0,o.useEffect)((function(){f.current=!0,s.CJ().then((function(n){return c(n.results)})).then((function(){f.current=!1})).catch((function(n){console.log(n),f.current=!1}))}),[]),f.current?(0,a.jsx)(i.g,{}):(0,a.jsx)(u,{listFilms:r})}}}]);
//# sourceMappingURL=634.b8290079.chunk.js.map