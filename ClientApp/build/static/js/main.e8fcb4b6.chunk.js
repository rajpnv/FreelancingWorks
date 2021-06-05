/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.e8fcb4b6.chunk.js.LICENSE.txt */
(this["webpackJsonplight-bootstrap-dashboard-react"]=this["webpackJsonplight-bootstrap-dashboard-react"]||[]).push([[0],{39:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/reactlogo.55f6660b.png"},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/photo-1431578500526-4d9613015464.0c528dc7.jpeg"},63:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/Photo.bb56683c.jpg"},68:function(e,t,c){"use strict";c.r(t);var a=c(32),r=c(0),n=c.n(r),s=c(18),l=c.n(s),i=c(21),j=c(7),o=(c(53),c(54),c(55),c(56),c(57),c(15)),d=c(78),b=c(73),h=c(80),u=c(74),m=c(40),O=c(81),x=c(79),p=c(41),f=c(1);var g=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useState)(""),i=Object(o.a)(l,2),j=i[0],d=i[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.a,{fluid:!0,children:Object(f.jsxs)(u.a,{children:[Object(f.jsx)(m.a,{md:"8",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(O.a.Header,{children:Object(f.jsx)(O.a.Title,{as:"h4",children:"Add Project Details"})}),Object(f.jsx)(O.a.Body,{children:Object(f.jsxs)(x.a,{children:[Object(f.jsxs)(u.a,{children:[Object(f.jsx)(m.a,{className:"pr-1",md:"8",children:Object(f.jsxs)(x.a.Group,{children:[Object(f.jsx)("label",{children:"Project Name"}),Object(f.jsx)(x.a.Control,{defaultValue:"",placeholder:"Project Name",type:"text",ref:e})]})}),Object(f.jsx)(m.a,{className:"px-1",md:"4",children:Object(f.jsxs)(x.a.Group,{children:[Object(f.jsx)("label",{children:"Duration (in months)"}),Object(f.jsx)(x.a.Control,{defaultValue:"",placeholder:"Duration (in months)",type:"text",ref:t})]})})]}),Object(f.jsxs)(u.a,{children:[Object(f.jsx)(m.a,{className:"pr-1",md:"6",children:Object(f.jsxs)(x.a.Group,{children:[Object(f.jsx)("label",{children:"Client"}),Object(f.jsx)(x.a.Control,{defaultValue:"",placeholder:"Client Name",type:"text",ref:a})]})}),Object(f.jsx)(m.a,{className:"pl-1",md:"6",children:Object(f.jsxs)(x.a.Group,{children:[Object(f.jsx)("label",{children:"Amount"}),Object(f.jsx)(x.a.Control,{defaultValue:"",placeholder:"Amount (per month)",type:"text",ref:n})]})})]}),Object(f.jsx)(u.a,{children:Object(f.jsx)(m.a,{md:"12",children:Object(f.jsxs)(x.a.Group,{children:[Object(f.jsx)("label",{children:"Brief Description about Project"}),Object(f.jsx)(x.a.Control,{cols:"80",defaultValue:"",placeholder:"Here can be your description",rows:"4",as:"textarea",ref:s})]})})}),Object(f.jsx)(p.a,{className:"btn-fill pull-right",type:"button",variant:"info",onClick:function(){var c={projectName:e.current.value,clientName:a.current.value,projectDescription:s.current.value,duration:t.current.value,amount:n.current.value};""!==e.current.value&&""!==a.current.value&&""!==s.current.value&&""!==t.current.value&&n.current.value?fetch("https://localhost:44377/ProjectDetails/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){e&&d("Project Details Inserted Successfully!")})):d("Please fill all the input fields")},children:"Submit"}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{children:Object(f.jsx)("label",{style:{color:"red",fontWeight:"bold"},children:j})}),Object(f.jsx)("div",{className:"clearfix"})]})})]})}),Object(f.jsx)(m.a,{md:"4",children:Object(f.jsxs)(O.a,{className:"card-user",children:[Object(f.jsx)("div",{className:"card-image",children:Object(f.jsx)("img",{alt:"...",src:c(62).default})}),Object(f.jsxs)(O.a.Body,{children:[Object(f.jsxs)("div",{className:"author",children:[Object(f.jsxs)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},children:[Object(f.jsx)("img",{alt:"...",className:"avatar border-gray",src:c(63).default}),Object(f.jsx)("h5",{className:"title",children:"P Naga Venkata Raj"})]}),Object(f.jsx)("p",{className:"description",children:"Freelancer"})]}),Object(f.jsx)("p",{className:"description text-center",children:'"14+ years experienced in Microsoft Technologies"'})]})]})})]})})})},v=c(75);var N=[{path:"/user",name:"My Freelancer Works",icon:"nc-icon nc-circle-09",component:g,layout:"/admin"},{path:"/table",name:"My Works",icon:"nc-icon nc-notes",component:function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("https://localhost:44377/ProjectDetails/",{method:"GET"}).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),console.log(c),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(b.a,{fluid:!0,children:Object(f.jsx)(u.a,{children:Object(f.jsx)(m.a,{md:"12",children:Object(f.jsxs)(O.a,{className:"strpied-tabled-with-hover",children:[Object(f.jsx)(O.a.Header,{children:Object(f.jsx)(O.a.Title,{as:"h4",children:"Project(s) Worked"})}),Object(f.jsx)(O.a.Body,{className:"table-full-width table-responsive px-0",children:Object(f.jsxs)(v.a,{className:"table-hover table-striped",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:"border-1",children:"Project Name"}),Object(f.jsx)("th",{className:"border-1",children:"Client Name"}),Object(f.jsx)("th",{className:"border-0",children:"Project Description"}),Object(f.jsx)("th",{className:"border-0",children:"Duration (in months)"}),Object(f.jsx)("th",{className:"border-0",children:"Amount (per month)"})]})}),Object(f.jsx)("tbody",{children:c.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.projectName}),Object(f.jsx)("td",{children:e.clientName}),Object(f.jsx)("td",{children:e.projectDescription}),Object(f.jsx)("td",{children:e.duration}),Object(f.jsx)("td",{children:e.amount})]})}))})]})})]})})})})})},layout:"/admin"}];var k=function(){var e=Object(j.g)(),t=Object(r.useState)(""),c=Object(o.a)(t,2);return c[0],c[1],Object(f.jsx)(d.a,{style:{background:" #33ff77"},expand:"lg",children:Object(f.jsxs)(b.a,{fluid:!0,children:[Object(f.jsx)("div",{className:"d-flex justify-content-center align-items-center ml-2 ml-lg-0",children:Object(f.jsx)(d.a.Brand,{href:"#home",onClick:function(e){return e.preventDefault()},className:"mr-2",style:{color:"Black",fontWeight:"bold"},children:function(){for(var t=0;t<N.length;t++)if(-1!==e.pathname.indexOf(N[t].layout+N[t].path))return N[t].name;return"Brand"}()})}),Object(f.jsxs)(d.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"mr-2",children:[Object(f.jsx)("span",{className:"navbar-toggler-bar burger-lines"}),Object(f.jsx)("span",{className:"navbar-toggler-bar burger-lines"}),Object(f.jsx)("span",{className:"navbar-toggler-bar burger-lines"})]}),Object(f.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsx)(h.a,{className:"ml-auto",navbar:!0,children:Object(f.jsx)(h.a.Item,{id:"ReportsLink",children:Object(f.jsx)(i.b,{to:"/admin/table"===window.location.pathname?"/admin/user":"/admin/table",children:Object(f.jsx)("span",{className:"no-icon",children:Object(f.jsx)("b",{children:"/admin/table"===window.location.pathname?"Freelancer Works":"Reports"})})})})})})]})})},y=c(44),w=c(45),C=c(48),D=c(47),P=function(e){Object(C.a)(c,e);var t=Object(D.a)(c);function c(){return Object(y.a)(this,c),t.apply(this,arguments)}return Object(w.a)(c,[{key:"render",value:function(){return Object(f.jsx)("footer",{className:"footer px-0 px-lg-3",children:Object(f.jsx)(b.a,{fluid:!0,children:Object(f.jsx)("nav",{children:Object(f.jsxs)("p",{className:"copyright text-center",children:["\xa9 ",(new Date).getFullYear()," ","For freelancing works in MS.Net technologies, please contact ",Object(f.jsx)("b",{children:" +91-9538723983 "})]})})})})}}]),c}(r.Component);c(39);var T=c(77),I=c(76),S=c.p+"static/media/sidebar-1.2ea74e53.jpg",B=c.p+"static/media/sidebar-2.00b17713.jpg",R=c.p+"static/media/sidebar-3.9992d0ce.jpg",E=c.p+"static/media/sidebar-4.b7eb4d1b.jpg";var F=function(e){var t=e.hasImage,c=e.setHasImage,a=e.color,r=e.setColor,n=e.image,s=e.setImage;return Object(f.jsx)("div",{className:"fixed-plugin",children:Object(f.jsxs)(T.a,{children:[Object(f.jsx)(T.a.Toggle,{id:"dropdown-fixed-plugin",variant:"",className:"text-white border-0 opacity-100",children:Object(f.jsx)("i",{className:"fas fa-cogs fa-2x mt-1"})}),Object(f.jsxs)(T.a.Menu,{children:[Object(f.jsxs)("li",{className:"adjustments-line d-flex align-items-center justify-content-between",children:[Object(f.jsx)("p",{children:"Background Image"}),Object(f.jsx)(x.a.Check,{type:"switch",id:"custom-switch-1-image",checked:t,onChange:c})]}),Object(f.jsxs)("li",{className:"adjustments-line mt-3",children:[Object(f.jsx)("p",{children:"Filters"}),Object(f.jsxs)("div",{className:"pull-right",children:[Object(f.jsx)(I.a,{variant:"secondary",className:"black"===a?"active":"",onClick:function(){return r("black")}}),Object(f.jsx)(I.a,{variant:"azure",className:"azure"===a?"active":"",onClick:function(){return r("azure")}}),Object(f.jsx)(I.a,{variant:"green",className:"green"===a?"active":"",onClick:function(){return r("green")}}),Object(f.jsx)(I.a,{variant:"orange",className:"orange"===a?"active":"",onClick:function(){return r("orange")}}),Object(f.jsx)(I.a,{variant:"red",className:"red"===a?"active":"",onClick:function(){return r("red")}}),Object(f.jsx)(I.a,{variant:"purple",className:"purple"===a?"active":"",onClick:function(){return r("purple")}})]}),Object(f.jsx)("div",{className:"clearfix"})]}),Object(f.jsx)("li",{className:"header-title",children:"Sidebar Images"}),Object(f.jsx)("li",{className:n===S?"active":"",children:Object(f.jsx)("a",{className:"img-holder switch-trigger d-block",href:"#pablo",onClick:function(e){e.preventDefault(),s(S)},children:Object(f.jsx)("img",{alt:"...",src:S})})}),Object(f.jsx)("li",{className:n===B?"active":"",children:Object(f.jsx)("a",{className:"img-holder switch-trigger d-block",href:"#pablo",onClick:function(e){e.preventDefault(),s(B)},children:Object(f.jsx)("img",{alt:"...",src:B})})}),Object(f.jsx)("li",{className:n===R?"active":"",children:Object(f.jsx)("a",{className:"img-holder switch-trigger d-block",href:"#pablo",onClick:function(e){e.preventDefault(),s(R)},children:Object(f.jsx)("img",{alt:"...",src:R})})}),Object(f.jsx)("li",{className:n===E?"active":"",children:Object(f.jsx)("a",{className:"img-holder switch-trigger d-block",href:"#pablo",onClick:function(e){e.preventDefault(),s(E)},children:Object(f.jsx)("img",{alt:"...",src:E})})}),Object(f.jsx)("li",{className:"button-container",children:Object(f.jsx)("div",{children:Object(f.jsx)(p.a,{block:!0,className:"btn-fill",href:"http://www.creative-tim.com/product/light-bootstrap-dashboard-react",rel:"noopener noreferrer",target:"_blank",variant:"info",children:"Download, it's free!"})})}),Object(f.jsx)("li",{className:"button-container",children:Object(f.jsx)("div",{children:Object(f.jsx)(p.a,{block:!0,className:"btn-fill",href:"http://www.creative-tim.com/product/light-bootstrap-dashboard-react",rel:"noopener noreferrer",target:"_blank",variant:"default",children:"Checkout docs."})})}),Object(f.jsx)("li",{className:"header-title pro-title text-center",children:"Want more components?"}),Object(f.jsx)("li",{className:"button-container",children:Object(f.jsx)("div",{children:Object(f.jsx)(p.a,{block:!0,className:"btn-fill",href:"http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react",rel:"noopener noreferrer",target:"_blank",variant:"primary",children:"Get The PRO Version!"})})}),Object(f.jsx)("li",{className:"header-title",id:"sharrreTitle",children:"Thank you for sharing!"}),Object(f.jsxs)("li",{className:"button-container mb-4",children:[Object(f.jsxs)(p.a,{className:"btn-social btn-outline btn-round sharrre",id:"twitter",variant:"twitter",children:[Object(f.jsx)("i",{className:"fab fa-twitter"}),"\xb7 256"]}),Object(f.jsxs)(p.a,{className:"btn-social btn-outline btn-round sharrre",id:"facebook",variant:"facebook",children:[Object(f.jsx)("i",{className:"fab fa-facebook-square"}),"\xb7 426"]})]})]})]})})};var W=function(){var e,t=n.a.useState(R),c=Object(o.a)(t,2),r=c[0],s=c[1],l=n.a.useState("black"),i=Object(o.a)(l,2),d=i[0],b=i[1],h=n.a.useState(!0),u=Object(o.a)(h,2),m=u[0],O=u[1],x=Object(j.g)(),p=n.a.useRef(null);return n.a.useEffect((function(){if(document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,p.current.scrollTop=0,window.innerWidth<1280&&-1!==document.documentElement.className.indexOf("nav-open")){document.documentElement.classList.toggle("nav-open");var e=document.getElementById("bodyClick");e.parentNode.removeChild(e)}}),[x]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsxs)("div",{className:"main-panel",ref:p,children:[Object(f.jsx)(k,{}),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)(j.d,{children:(e=N,e.map((function(e,t){return"/admin"===e.layout?Object(f.jsx)(j.b,{path:e.layout+e.path,render:function(t){return Object(f.jsx)(e.component,Object(a.a)({},t))}},t):null})))})}),Object(f.jsx)(P,{})]})}),Object(f.jsx)(F,{hasImage:m,setHasImage:function(){return O(!m)},color:d,setColor:function(e){return b(e)},image:r,setImage:function(e){return s(e)}})]})};l.a.render(Object(f.jsx)(i.a,{children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:"/admin",render:function(e){return Object(f.jsx)(W,Object(a.a)({},e))}}),Object(f.jsx)(j.a,{from:"/",to:"/admin/user"})]})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e8fcb4b6.chunk.js.map