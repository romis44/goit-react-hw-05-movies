"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[367],{367:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),c=n(87),i=n(689),s=n(390),u=n(184);function o(e){var t,n,r=e.text,a=(0,i.s0)(),c=null!==(t=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/";return(0,u.jsx)("button",{onClick:function(){return a(c)},children:(0,u.jsx)("span",{children:r})})}function l(e){var t,n=e.movie;return n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{text:"Go back"}),(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.poster_path),alt:n.original_title,width:"300",height:"300"}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[n.original_title," (",n.release_date.slice(0,4),")"]}),(0,u.jsxs)("h2",{children:["User Scores: ",Math.round(n.popularity),"%"]}),(0,u.jsx)("h2",{children:"Overview"}),(0,u.jsx)("p",{children:n.overview}),(0,u.jsx)("h2",{children:"Genres"}),(0,u.jsx)("p",{children:null===(t=n.genres)||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name;return(0,u.jsx)("li",{children:n},t)}))})]})]})]})}var d=n(537);function f(){var e=(0,a.useState)(null),t=(0,r.Z)(e,2),n=t[0],o=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),h=p[0],v=p[1],x=(0,i.UO)().movieId;(0,a.useEffect)((function(){v(!0),(0,s.TP)(x).then(o).catch((function(e){return console.log(e)})).finally(v(!1))}),[x]);var m=(0,i.TH)().state.from;return(0,u.jsxs)("main",{children:[h&&(0,u.jsx)(d.Z,{}),(0,u.jsx)(l,{movie:n}),(0,u.jsx)("h2",{style:{textAlign:"center"},children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{state:{from:m},to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{state:{from:m},to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]})}},390:function(e,t,n){n.d(t,{JN:function(){return o},TP:function(){return d},gH:function(){return l},tx:function(){return p},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org/3",u="a2700da0d8f509f67de6165a96b841be",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US&"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=367.2d272a66.chunk.js.map