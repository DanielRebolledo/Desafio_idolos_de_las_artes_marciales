(function(){"use strict";var e={3010:function(e,t,r){var n=r(8935),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/peleadores"}},[e._v("Peleadores")]),e._v(" | "),r("router-link",{attrs:{to:"/buscador"}},[e._v("Buscador")])],1),r("router-view")],1)},a=[],i={data:()=>({})},u=i,l=r(1001),s=(0,l.Z)(u,o,a,!1,null,null,null),c=s.exports,d=r(2809),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Home")])},f=[],h={},v=h,m=(0,l.Z)(v,p,f,!1,null,null,null),_=m.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Buscador de peleadores")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.idBuscar,expression:"idBuscar"}],attrs:{type:"text",required:"",minlength:"3",maxlength:"3"},domProps:{value:e.idBuscar},on:{input:function(t){t.target.composing||(e.idBuscar=t.target.value)}}}),r("button",{attrs:{type:"submit"}},[e._v("Buscar")])])])},g=[],x={data:()=>({idBuscar:""}),methods:{handleSubmit(){this.$router.push(`/peleadores/${this.idBuscar}`)}}},y=x,w=(0,l.Z)(y,b,g,!1,null,null,null),Z=w.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Listado de peleadores")]),r("ul",e._l(e.peleadores,(function(t){return r("li",{key:t.id},[r("router-link",{attrs:{to:"/peleadores/"+t.id}},[e._v(e._s(t.nombre))])],1)})),0)])},E=[],O={data:()=>({peleadores:[]}),created(){fetch("/peleadores.json").then((e=>e.json())).then((e=>{this.peleadores=e}))}},j=O,k=(0,l.Z)(j,$,E,!1,null,null,null),B=k.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"margin-top":"48px"}},[e.peleador?r("div",[r("h2",[e._v("Nombre: "+e._s(e.peleador.nombre))]),r("h4",[e._v("Id: "+e._s(e.$route.params.id))]),r("img",{attrs:{src:e.peleador.imgSrc,alt:"",width:"400px",height:"400px"}})]):e._e(),e.peleador?e._e():r("div",[r("h1",[e._v("No se pudo encontrar el peleador")])])])},S=[],T={data:()=>({peleador:{nombre:"",imgSrc:""}}),created(){fetch("/peleadores.json").then((e=>e.json())).then((e=>{this.peleador=e.find((e=>e.id===this.$route.params.id))||null}))}},A=T,H=(0,l.Z)(A,P,S,!1,null,null,null),C=H.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Esta página no existe")]),r("img",{attrs:{src:"https://c.tenor.com/TywY4EYSTZEAAAAC/ha-ha-the-simpsons.gif",alt:"Ha, Ha"}})])}],Y={},q=Y,F=(0,l.Z)(q,N,D,!1,null,null,null),I=F.exports;n.Z.use(d.Z);const L=[{path:"/",name:"home",component:_},{path:"/buscador",name:"Buscador",component:Z},{path:"/peleadores",name:"Peleadores",component:B},{path:"/peleadores/:id",name:"Peleador",component:C},{path:"*",component:I}],M=new d.Z({mode:"history",base:"/Desafio_idolos_de_las_artes_marciales/",routes:L});var z=M;n.Z.config.productionTip=!1,new n.Z({router:z,render:e=>e(c)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],u=n[1],l=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var c=l(r)}for(t&&t(n);s<i.length;s++)a=i[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkidolos_artes_marciales"]=self["webpackChunkidolos_artes_marciales"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3010)}));n=r.O(n)})();
//# sourceMappingURL=app.63a491f0.js.map