"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[528],{4528:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(9439),a=e(2791),c=e(7689),u=e(4390),i=e(184);function o(t){var n=t.cast;return(0,i.jsx)("ul",{children:n&&n.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:r&&"https://image.tmdb.org/t/p/original".concat(r),alt:e,width:"300",height:"300"}),(0,i.jsx)("h2",{children:e}),(0,i.jsxs)("p",{children:["Character: ",a]})]},n)}))})}function s(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.zv)(f).then((function(t){s(t)})).catch((function(t){return console.log(t)}))}),[f]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{cast:e})})}},4390:function(t,n,e){e.d(n,{JN:function(){return s},TP:function(){return p},gH:function(){return f},tx:function(){return v},zv:function(){return h}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",o="a2700da0d8f509f67de6165a96b841be",s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US&"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=528.d22e3aa5.chunk.js.map