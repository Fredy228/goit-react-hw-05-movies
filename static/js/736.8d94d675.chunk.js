"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,r){r.r(t),r.d(t,{default:function(){return b}});var e,a,c,u,i=r(439),o=r(791),p=r(689),s=r(768),f=r(168),d=r(444),x=d.ZP.ul(e||(e=(0,f.Z)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n    grid-gap: 16px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),h=d.ZP.li(a||(a=(0,f.Z)(["\n    border-radius: 2px;\n    padding-bottom: 10px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),g=d.ZP.img(c||(c=(0,f.Z)(["\n    display: block;\n    width: 100%;\n    height: 400px;\n    object-fit: cover;\n"]))),l=d.ZP.p(u||(u=(0,f.Z)(["\n    font-size: 16px;\n    padding: 10px 0 0 10px;\n    margin: 0;\n"]))),m=r(647),v=r(184),b=function(){var n=(0,p.UO)().movieId,t=(0,o.useState)([]),r=(0,i.Z)(t,2),e=r[0],a=r[1],c=(0,o.useRef)(!1);if((0,o.useEffect)((function(){c.current=!0,s.au(n).then((function(n){a(n.cast)})).then((function(){c.current=!1})).catch((function(n){console.log(n),c.current=!1}))}),[n]),!c.current)return(0,v.jsx)(x,{children:e.map((function(n){var t=n.profile_path,r=n.name,e=n.character,a=n.cast_id,c=t?"".concat(s.zh).concat(t):s.YS;return(0,v.jsxs)(h,{children:[(0,v.jsx)(g,{src:c,loading:"lazy"}),(0,v.jsx)(l,{children:r}),(0,v.jsxs)(l,{children:["Character: ",e]})]},a)}))});m.g}},768:function(n,t,r){r.d(t,{CJ:function(){return f},V0:function(){return d},YS:function(){return s},au:function(){return h},fh:function(){return x},q5:function(){return g},zh:function(){return p}});var e=r(861),a=r(757),c=r.n(a),u=r(912),i="1e08b8d990c5fa2af74f683ca643ea53",o="https://api.themoviedb.org/3/",p="https://image.tmdb.org/t/p/w500",s="https://i.ibb.co/cLM23Z5/default-card-img.jpg",f=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return r=n.sent,console.log(r.data),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.8d94d675.chunk.js.map