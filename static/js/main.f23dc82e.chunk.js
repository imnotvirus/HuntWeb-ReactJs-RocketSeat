(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),i=a(9),u=a(6),s=a(7),l=a.n(s),p=a(35),d=a(11),m=a(12),f=a(13),h=a(15),v=a(14),E=a(16),g=a(32),b=a.n(g).a.create({baseURL:"https://rocketseat-node.herokuapp.com/api"}),w=(a(59),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],productInfo:{},page:1},a.loadProducts=Object(d.a)(l.a.mark(function e(){var t,n,r,c,o,i=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.next=3,b.get("/products?page=".concat(t));case 3:n=e.sent,r=n.data,c=r.docs,o=Object(p.a)(r,["docs"]),a.setState({products:c,productInfo:o,page:t});case 6:case"end":return e.stop()}},e)})),a.prevPage=function(){var e=a.state.page;if(1!==e){var t=e-1;a.loadProducts(t)}},a.nextPage=function(){var e=a.state,t=e.page;if(t!==e.productInfo.pages){var n=t+1;a.loadProducts(n)}},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.page,n=e.productInfo;return r.a.createElement("div",{className:"product-list"},t.map(function(e){return r.a.createElement("article",{key:e._id},r.a.createElement("strong",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(i.b,{to:"/products/".concat(e._id)},"Ler mais"))}),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===a,onClick:this.prevPage},"Anterior"),r.a.createElement("button",{disabled:a===n.pages,onClick:this.nextPage},"proximo")))}}]),t}(n.Component)),k=(a(64),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={product:{}},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,b.get("/products/".concat(t));case 3:a=e.sent,this.setState({product:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",{className:"product-info"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:e.url},e.url)))}}]),t}(n.Component)),j=function(){return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:w}),r.a.createElement(u.a,{path:"/products/:id",component:k})))},O=(a(65),a(66),function(){return r.a.createElement("header",{id:"main-header"},r.a.createElement("a",{href:"/"},"JSHunt"))}),y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.f23dc82e.chunk.js.map