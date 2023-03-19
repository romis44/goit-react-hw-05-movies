"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[93],{4093:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,a,c=t(9439),i=t(2791),s=t(1087),o=t(7689),u=t(168),l=t(6444),p=l.ZP.h2(r||(r=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  color: green;\n"]))),f=l.ZP.li(a||(a=(0,u.Z)(["\n  font-weight: 700;\n"]))),h=t(4390),d=t(184);function g(e){var n,t,r=e.text,a=(0,o.s0)(),c=null!==(n=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";return(0,d.jsx)("button",{onClick:function(){return a(c)},children:(0,d.jsx)("span",{children:r})})}var v=t(4118);function x(e){var n,t=e.movie;return t&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{text:"Go back"}),(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):v,alt:t.original_title,width:"300",height:"300"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{children:[t.original_title," (",t.release_date.slice(0,4),")"]}),(0,d.jsxs)("h2",{children:["User Scores: ",Math.round(t.popularity),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:t.overview}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:null===(n=t.genres)||void 0===n?void 0:n.map((function(e){var n=e.id,t=e.name;return(0,d.jsx)("li",{children:t},n)}))})]})]})]})}var m=t(1537);function A(){var e=(0,i.useState)(null),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,i.useState)(!1),u=(0,c.Z)(a,2),l=u[0],g=u[1],v=(0,o.UO)().movieId;(0,i.useEffect)((function(){g(!0),(0,h.TP)(v).then(r).catch((function(e){return console.log(e)})).finally(g(!1))}),[v]);var A=(0,o.TH)();return(0,d.jsxs)("main",{children:[l&&(0,d.jsx)(m.Z,{}),(0,d.jsx)(x,{movie:t}),(0,d.jsx)(p,{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)(f,{children:(0,d.jsx)(s.rU,{state:{from:A},to:"cast",children:"Cast"})}),(0,d.jsx)(f,{children:(0,d.jsx)(s.rU,{state:{from:A},to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(o.j3,{})]})}},4390:function(e,n,t){t.d(n,{JN:function(){return u},TP:function(){return p},gH:function(){return l},tx:function(){return h},zv:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243),s="https://api.themoviedb.org/3",o="a2700da0d8f509f67de6165a96b841be",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US&"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4118:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=93.24a4bd0d.chunk.js.map