(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(23),n=a.n(c),s=a(9),i=a(5),b=(a(28),a(29),a(30),a(0)),l=a(2),r=a(14),d=a.n(r),j=a(4),o=function(e){var t=e.tabs,a=e.selectedTab,c=e.handleSelected;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{"data-cy":"Tab",className:d()({"is-active":(null===a||void 0===a?void 0:a.id)===e.id}),children:Object(j.jsx)(s.b,{to:"#/",onClick:function(){return c(e)},children:e.title})},e.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){var e=Object(b.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(b.useState)("page-1"),r=Object(i.a)(n,2),m=r[0],x=r[1],u=function(e){x(e)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.b,{to:"/",className:d()("navbar-item",{"is-active":"page-1"===m}),onClick:function(){return u("page-1")},children:"Home"},"page-1"),Object(j.jsx)(s.b,{to:"/tabs",className:d()("navbar-item",{"is-active":"page-2"===m}),onClick:function(){return u("page-2")},children:"Tabs"},"page-2")]})})}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)("h1",{className:"title",children:"Home page"})}),Object(j.jsx)(l.a,{path:"/tabs",element:Object(j.jsx)(o,{tabs:h,selectedTab:a,handleSelected:function(e){c(e)}})})]})})})]})};n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.75e3bd2e.chunk.js.map