(this.webpackJsonpinventorylistnostorage=this.webpackJsonpinventorylistnostorage||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(7),r=n.n(a),o=(n(13),n(8)),s=n(6),u=n(2),l=n(18),j=(n(14),n(0)),b=[{name:"Milk",qty:"2 gallons",id:Object(l.a)()},{name:"Bread",qty:"2 loaves",id:Object(l.a)()}];function d(){var e=Object(i.useState)(b),t=Object(u.a)(e,2),n=t[0],c=t[1];function a(e,t){var i={name:e.name,qty:t,id:e.id},a=n.map((function(t){return t.id===e.id?Object(o.a)({},i):t}));c((function(e){return Object(s.a)(a)}))}function r(e){c(n.filter((function(t){return t.id!==e})))}return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Wrapper",children:[Object(j.jsx)("h1",{children:"Inventory List"}),Object(j.jsx)(O,{addNewRow:function(e,t){c([].concat(Object(s.a)(n),[{name:e,qty:t,id:Object(l.a)()}]))},className:"InputForm"}),Object(j.jsx)("div",{className:"ListContainer",children:Object(j.jsx)("ul",{children:n.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(p,{oneRow:e,remove:r,update:a})},e.id)}))})})]}),Object(j.jsx)(m,{})]})}function p(e){var t=e.oneRow,n=e.remove,c=e.update,a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.useState)(e),n=Object(u.a)(t,2),c=n[0],a=n[1];return[c,function(){return a(!c)}]}(!1),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(j.jsx)("div",{children:o?Object(j.jsx)(h,{oneRow:t,update:c,toggle:s}):Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[t.name," : ",t.qty]}),Object(j.jsxs)("span",{className:"ButtonGroup",children:[Object(j.jsx)("button",{className:"Button","aria-label":"Delete",onClick:function(){return n(t.id)},children:"Delete"}),Object(j.jsx)("button",{className:"Button","aria-label":"Edit",onClick:s,children:"Edit"})]})]})})}function O(e){var t=e.addNewRow,n=f(""),i=Object(u.a)(n,3),c=i[0],a=i[1],r=i[2],o=f(""),s=Object(u.a)(o,3),l=s[0],b=s[1],d=s[2];return Object(j.jsxs)("form",{className:"InputForm",onSubmit:function(e){e.preventDefault(),t(c,l),r(),d()},children:[Object(j.jsx)("input",{type:"text",value:c,placeholder:"Type new item name",onChange:a,label:"Add New Item",autoFocus:!0}),Object(j.jsx)("input",{type:"text",value:l,placeholder:"Type new quantity",onChange:b,label:"Add New Quantity"}),Object(j.jsx)("button",{type:"submit",children:"Add new item"})]})}function h(e){var t=e.oneRow,n=e.update,i=e.toggle,c=f(t.qty),a=Object(u.a)(c,3),r=a[0],o=a[1],s=a[2];return Object(j.jsxs)("form",{className:"InputForm",onSubmit:function(e){e.preventDefault(),n(t,r),s(),i()},children:[t.name,Object(j.jsx)("input",{type:"text",value:r,onChange:o,label:"Update quantity",autoFocus:!0}),"Press Enter to Update"]})}function f(e){var t=Object(i.useState)(e),n=Object(u.a)(t,2),c=n[0],a=n[1];return[c,function(e){return a(e.target.value)},function(){return a("")}]}function m(){return Object(j.jsxs)("p",{className:"Footer",children:["Simple Inventory List by John Phillips on Febuary 16, 2021. Source at"," ",Object(j.jsx)("a",{href:"profphillips.github.com/InventoryListNoStorage/",children:"profphillips.github.com/InventoryListNoStorage/."}),"Live page at"," ",Object(j.jsx)("a",{href:"profphillips.github.io/InventoryListNoStorage/",children:"profphillips.github.io/InventoryListNoStorage/"}),"."]})}function v(){return Object(j.jsx)("div",{children:Object(j.jsx)(d,{})})}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.2f89ac5b.chunk.js.map