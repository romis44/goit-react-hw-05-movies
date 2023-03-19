"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[528],{7031:function(n,t,e){e.d(t,{Ei:function(){return s},Ui:function(){return i},tG:function(){return p}});var r,a,c,u=e(168),o=e(6444),i=o.ZP.span(r||(r=(0,u.Z)(["\n  font-size: 15px;\n  font-weight: 500;\n  transition-duration: 0.5s;\n"]))),s=o.ZP.img(a||(a=(0,u.Z)(["\n  border-radius: 10px;\n  border: 1px solid green;\n"]))),p=o.ZP.div(c||(c=(0,u.Z)(["\n  width: 300px;\n  height: 450px;\n  display: flex;\n  object-fit: cover;\n"])))},4528:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(9439),a=e(2791),c=e(7689),u=e(4390),o=e(4118),i=e(7031),s=e(184);function p(n){var t=n.cast;return(0,s.jsx)("ul",{children:t&&t.map((function(n){var t=n.id,e=n.name,r=n.profile_path,a=n.character;return(0,s.jsxs)("li",{children:[(0,s.jsx)(i.tG,{children:(0,s.jsx)(i.Ei,{src:r?"https://image.tmdb.org/t/p/original".concat(r):o,alt:e,width:"300",height:"300"})}),(0,s.jsx)("h2",{children:e}),(0,s.jsxs)("p",{children:["Character: ",a]})]},t)}))})}function f(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1],i=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.zv)(i).then((function(n){o(n)})).catch((function(n){return console.log(n)}))}),[i]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(p,{cast:e})})}},4390:function(n,t,e){e.d(t,{JN:function(){return s},TP:function(){return f},gH:function(){return p},tx:function(){return g},zv:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3",i="a2700da0d8f509f67de6165a96b841be",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US&"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4118:function(n){n.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=528.dcc31c4a.chunk.js.map