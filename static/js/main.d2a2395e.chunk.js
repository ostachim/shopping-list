(this.webpackJsonpshoppinglist=this.webpackJsonpshoppinglist||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(2),s=n(1),i=n.n(s),j=n(22),a=n.n(j),r=n(8),l=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"/nowalista",children:"Nowa lista"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"/aktywnelisty",children:"Aktyne listy"})}),Object(c.jsx)("li",{children:Object(c.jsx)(r.b,{to:"/historia",children:"Historia zakup\xf3w"})})]})})},o=n(3),b=n(16),u=n(10),h=n(15),O=n(14),d=function(){var t=Object(s.useState)([]),e=Object(u.a)(t,2),n=e[0],i=e[1],j=Object(s.useState)(""),a=Object(u.a)(j,2),r=a[0],l=a[1],o=Object(s.useState)(!1),d=Object(u.a)(o,2),x=d[0],p=d[1],m=n.map((function(t,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("li",{id:e,style:t.inBasket?{textDecoration:"line-through"}:null,children:t.name}),Object(c.jsxs)("div",{className:"icons",children:[Object(c.jsx)(O.a,{className:"buttonIcon",onClick:function(){t.inBasket=!t.inBasket,p(!x)},children:"w koszyku"}),Object(c.jsx)(h.a,{className:"buttonIcon",onClick:function(){return function(t){var e=Object(b.a)(n),c=e.findIndex((function(e,n){return t===n}));e.splice(c,1),i(Object(b.a)(e))}(e)},children:"usu\u0144"})]})]})}));return Object(c.jsxs)("div",{className:"newList",children:[Object(c.jsx)("h1",{children:"Lista zakup\xf3w"}),Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{type:"text",value:r,onChange:function(t){return l(t.target.value)}}),Object(c.jsx)("button",{onClick:function(){var t=r;i([].concat(Object(b.a)(n),[{name:t,inBasket:!1}])),l("")},children:"Dodaj"})]}),Object(c.jsx)("div",{className:"shoppingList",children:Object(c.jsx)("ul",{children:m})})]})},x=function(){return Object(c.jsx)("h1",{children:"Active Lists"})},p=function(){return Object(c.jsx)("h1",{children:"Lists history"})},m=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{component:d,path:"/nowalista"}),Object(c.jsx)(o.a,{component:x,path:"/aktywnelisty"}),Object(c.jsx)(o.a,{component:p,path:"/historia"})]})})};n(34);var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(r.a,{basename:"/shopping-list",children:[Object(c.jsx)(l,{}),Object(c.jsx)(m,{})]})})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d2a2395e.chunk.js.map