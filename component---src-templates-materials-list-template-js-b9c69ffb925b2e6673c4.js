(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("iSRb"),c=a.n(r),o=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:c.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:c.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?i.a.createElement("h1",{className:c.a.author__title},i.a.createElement(l.Link,{className:c.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:c.a.author__title},i.a.createElement(l.Link,{className:c.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:c.a.author__subtitle},t.bio))},s=a("7Qib"),m=a("euHg"),u=a.n(m),_=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:u.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),p=a.n(d),h=function(e){var t=e.contacts;return i.a.createElement("div",{className:p.a.contacts},i.a.createElement("ul",{className:p.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:p.a["contacts__list-item"],key:e},i.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(_,{name:e,icon:Object(s.b)(e)}))):null}))))},E=a("Nrk+"),b=a.n(E),f=function(e){var t=e.copyright;return i.a.createElement("div",{className:b.a.copyright},t)},g=a("je8k"),k=a.n(g),v=function(e){var t=e.menu;return i.a.createElement("nav",{className:k.a.menu},i.a.createElement("ul",{className:k.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))}))))},N=a("SySy"),y=a.n(N),x=a("gGy4"),w=function(e){var t=e.isIndex,a=Object(x.c)(),n=a.author,l=a.copyright,r=a.menu;return i.a.createElement("div",{className:y.a.sidebar},i.a.createElement("div",{className:y.a.sidebar__inner},i.a.createElement(o,{author:n,isIndex:t}),i.a.createElement(v,{menu:r}),i.a.createElement(h,{contacts:n.contacts}),i.a.createElement(f,{copyright:l})))}},"4BPo":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("/d1K"),c=a("Zttt"),o=a("RXmK"),s=a("gGy4"),m=a("ZxoY"),u=a.n(m);t.default=function(){var e=Object(s.c)(),t=e.title,a=e.subtitle,n=Object(s.b)();return i.a.createElement(c.a,{title:"Writing Material - "+t,description:a},i.a.createElement(r.a,null),i.a.createElement(o.a,{title:"Materials"},i.a.createElement("ul",null,n.map((function(e){return i.a.createElement("li",{key:e.node.id},e.node.frontmatter.isWritten?i.a.createElement("div",null,i.a.createElement("span",{className:u.a["is-written"]},e.node.frontmatter.title)," (",i.a.createElement(l.Link,{to:e.node.frontmatter.postPath},"Move to post"),")"):i.a.createElement(l.Link,{to:"/materials/"+e.node.frontmatter.slug},e.node.frontmatter.title))})))))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),r=a.n(l),c=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},t&&i.a.createElement("h1",{className:r.a.page__title},t),i.a.createElement("div",{className:r.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},ZxoY:function(e,t,a){e.exports={"is-written":"materials-list-template-module--is-written--2yY78"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-templates-materials-list-template-js-b9c69ffb925b2e6673c4.js.map