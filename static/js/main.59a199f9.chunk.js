(this["webpackJsonpslider-component"]=this["webpackJsonpslider-component"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(5),s=n.n(i),a=n(4),o=n(3),l=n(6),j=n(0),u=function(e){var t=e.children,n=e.width;return Object(j.jsx)("div",{className:"carousel-item",style:{width:n},children:t})},d=function(e){var t=e.children,n=Object(c.useState)(0),i=Object(o.a)(n,2),s=i[0],u=i[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),h=b[0],O=b[1],f=function(e){e<0?e=r.a.Children.count(t)-1:e>=r.a.Children.count(t)&&(e=0),u(e)};Object(c.useEffect)((function(){var e=setInterval((function(){h||f(s+1)}),3e3);return function(){e&&clearInterval(e)}}));var m=Object(l.useSwipeable)({onSwipedLeft:function(){return f(s+1)},onSwipedRight:function(){return f(s-1)}});return Object(j.jsxs)("div",Object(a.a)(Object(a.a)({},m),{},{className:"carousel",onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},children:[Object(j.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*s,"%)")},children:r.a.Children.map(t,(function(e,t){return r.a.cloneElement(e,{width:"100%"})}))}),Object(j.jsxs)("div",{className:"indicators",children:[Object(j.jsx)("button",{onClick:function(){f(s-1)},children:"Prev"}),r.a.Children.map(t,(function(e,t){return Object(j.jsx)("button",{className:"".concat(t===s?"active":""),onClick:function(){f(t)},children:t+1})})),Object(j.jsx)("button",{onClick:function(){f(s+1)},children:"Next"})]})]}))};n(12);function b(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Carasole"}),Object(j.jsxs)(d,{children:[Object(j.jsx)(u,{children:"Item 1"}),Object(j.jsx)(u,{children:"Item 2"}),Object(j.jsx)(u,{children:"Item 3"}),Object(j.jsx)(u,{children:"Item 4"}),Object(j.jsx)(u,{children:"Item 5"}),Object(j.jsx)(u,{children:"Item 6"}),Object(j.jsx)(u,{children:"Item 7"})]})]})}var h=document.getElementById("root");s.a.render(Object(j.jsx)(c.StrictMode,{children:Object(j.jsx)(b,{})}),h)}},[[13,1,2]]]);
//# sourceMappingURL=main.59a199f9.chunk.js.map