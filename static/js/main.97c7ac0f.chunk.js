(this.webpackJsonpbaristar=this.webpackJsonpbaristar||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),r=(c(10),c(2)),j=(c(11),c(3)),l=c.n(j),d=c(0),o=function(e){var t=Object(n.useState)(0),c=Object(r.a)(t,2),s=(c[0],c[1]),a=Object(n.useState)(0),i=Object(r.a)(a,2),j=i[0],o=i[1];return Object(n.useEffect)((function(){s(0),o(0)}),[e.coffee]),Object(d.jsx)("div",{children:e.show&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:"Grind Setting"}),Object(d.jsxs)("div",{className:"grind",children:[Object(d.jsx)("span",{children:e.coffee.Grind})," ",Object(d.jsx)(l.a,{name:"cog"})]})]}),Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:"Grams of Coffee?"}),Object(d.jsx)("input",{type:"number",value:"",pattern:"[0-9]*",inputMode:"numeric",onChange:function(t){var c=t.target.valueAsNumber;s(c||0),o(c?c*e.coffee.Ratio:0)},className:"coffeeWeight"})]}),Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{children:"Grams of Water:"}),Object(d.jsxs)("div",{className:"water",children:[Object(d.jsx)("span",{children:j})," ",Object(d.jsx)(l.a,{name:"tint"})]})]})]})})};var b=function(){var e=[{Id:1,Name:"Esspresso",Ratio:2,Grind:8},{Id:2,Name:"French Press",Ratio:16,Grind:35},{Id:3,Name:"Pour Over",Ratio:15,Grind:20}],t=Object(n.useState)({Id:0}),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(!1),j=Object(r.a)(i,2),b=j[0],u=j[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header"}),Object(d.jsxs)("main",{children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)(l.a,{name:"coffee"})," Baristar"]}),Object(d.jsxs)("div",{className:"coffeeTypeBox",children:[Object(d.jsx)("label",{children:"Coffee Type"}),Object(d.jsxs)("select",{defaultValue:"0",onChange:function(t){var c=t.target.value;a(e[c]),u(!0)},className:"coffeeType",children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"-- Please Select --"}),e.map((function(e,t){return Object(d.jsx)("option",{value:t,children:e.Name},t)}))]})]}),Object(d.jsx)(o,{show:b,coffee:s})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.97c7ac0f.chunk.js.map