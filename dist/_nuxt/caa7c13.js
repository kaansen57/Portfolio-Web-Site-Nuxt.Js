(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{261:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("96aebf04",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(261)},263:function(t,e,n){var o=n(31)(!1);o.push([t.i,'@-webkit-keyframes imageFly-data-v-123e093f{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@keyframes imageFly-data-v-123e093f{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@-webkit-keyframes fadeIn-data-v-123e093f{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes fadeIn-data-v-123e093f{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes slideIn-data-v-123e093f{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@keyframes slideIn-data-v-123e093f{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@-webkit-keyframes opacityIn-data-v-123e093f{0%{opacity:0}to{opacity:1}}@keyframes opacityIn-data-v-123e093f{0%{opacity:0}to{opacity:1}}*[data-v-123e093f]{font-family:"Mulish",sans-serif;margin:0;padding:0;box-sizing:border-box}body[data-v-123e093f]{width:100vw;padding:10px 20px 0}.container[data-v-123e093f]{display:flex;flex-direction:column;background:#fff}.btn[data-v-123e093f]{display:block;outline:none;border:2px solid #979797;border-radius:6px;color:#333;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;text-align:center;padding:1rem;text-decoration:none;margin:2rem 0;font-weight:700}.btn-active[data-v-123e093f]{background:#00844e;color:#fff;transition:all .5s ease}.btn-active[data-v-123e093f]:hover{background:#fff;border-color:#00844e;color:#00844e!important}.header[data-v-123e093f]{display:flex;flex-direction:row;justify-content:center;align-items:center;justify-content:space-between;position:-webkit-sticky;position:sticky;top:0;z-index:999;background:hsla(0,0%,100%,.5);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);height:100px;box-shadow:0 4px 0 0 hsla(0,0%,98%,.7)}@media(max-width:650px){.header[data-v-123e093f]{flex-direction:column;height:100%}.header .menu[data-v-123e093f]{position:absolute;left:0;right:0;bottom:0;top:0;text-align:center;background:hsla(0,0%,100%,.9);opacity:1;z-index:-1;visibility:hidden}.header .menu ul[data-v-123e093f]{display:none}.header .menu[data-v-123e093f]:before{content:"";position:absolute;top:-10px;bottom:-10px;left:-20px;right:0;background:#00c675;transform-origin:0 0;transform:skew(-14deg) translateX(-120%);transition:all .275s .1s 0}.header .menu.mobile-open[data-v-123e093f]{opacity:1;z-index:100;visibility:visible;height:100vh}.header .menu.mobile-open[data-v-123e093f]:before{display:block;transform:skew(-10deg) translateX(0)}.header .menu.mobile-open ul[data-v-123e093f]{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;height:50%;transform:skew(-11deg);margin-top:50%}.header .menu.mobile-open ul .li[data-v-123e093f]{color:#fff}.header .logo[data-v-123e093f]{justify-content:center;width:100%;padding:0 1rem;justify-content:space-between;margin:2rem 0}.header .logo[data-v-123e093f],.header .mobile-button[data-v-123e093f]{display:flex;flex-direction:row;align-items:center}.header .mobile-button[data-v-123e093f]{justify-content:center;flex-direction:column;border-radius:3px;border:2px solid #00633b;z-index:999}.header .mobile-button span[data-v-123e093f]{transition:all .3s ease;display:block;border:2px solid #00844e;background:#00633b;width:80%;margin:2px 0}}.header .mobile-button[data-v-123e093f]{width:45px;height:45px;background:#fff}.header .logo[data-v-123e093f]{outline:none}.header .logo a[data-v-123e093f]{text-decoration:none;color:#333;font-size:2rem;font-weight:700}.header .logo a span[data-v-123e093f]{font-family:"Gloria Hallelujah",cursive,sans-serif;color:#00844e}ul[data-v-123e093f]{display:flex;flex-direction:row;justify-content:center;align-items:center;list-style-type:none}ul li[data-v-123e093f]{font-size:16px;font-weight:700;text-transform:uppercase;margin-right:2rem;position:relative}ul li[data-v-123e093f]:before{content:"";position:absolute;border:2px solid #00844e;background:#00844e;width:100%;border-radius:10px;left:0;bottom:-5px;transform:scaleX(0);transition:transform .3s ease-in}ul li[data-v-123e093f]:hover:before{transform:scaleX(1)}ul li a[data-v-123e093f]{text-decoration:none;color:#979797;transition:color .3s ease-in-out}ul li a[data-v-123e093f]:hover{color:#4b4b4b}',""]),t.exports=o},264:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{clicked:!1,menuItems:[{name:"About",url:"/"},{name:"Skılls",url:"/Skills"},{name:"Portfolıo",url:"/Portfolio"},{name:"Blog",url:"/Blog"}]}},methods:{isClicked:function(){return console.log(this.clicked),this.clicked=!this.clicked}}},r=(n(262),n(47)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[t._m(0),t._v(" "),n("a",{staticClass:"mobile-button",class:t.clicked?"mobile-button-open":"",attrs:{href:"#"},on:{click:function(e){return t.isClicked()}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])]),t._v(" "),n("nav",{staticClass:"menu",class:t.clicked?"mobile-open":""},[n("ul",t._l(t.menuItems,(function(e){return n("li",[n("NuxtLink",{staticClass:"li",attrs:{to:e.url}},[t._v(t._s(e.name))])],1)})),0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/"}},[n("span",[t._v(" < KaanSen /> ")])])}],!1,null,"123e093f",null);e.default=component.exports},265:function(t,e,n){var map={"./frontenddaily.png":266,"./pharmavue.png":267,"./photo.png":268,"./portfolio.png":269,"./rentacar.png":270,"./rentacarapi.png":271,"./vueducts.png":272,"./zingalsonkusak.png":273};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=265},266:function(t,e,n){t.exports=n.p+"img/frontenddaily.e204d34.png"},267:function(t,e,n){t.exports=n.p+"img/pharmavue.9240616.png"},268:function(t,e,n){t.exports=n.p+"img/photo.6ad378a.png"},269:function(t,e,n){t.exports=n.p+"img/portfolio.5b6d631.png"},270:function(t,e,n){t.exports=n.p+"img/rentacar.f6e9612.png"},271:function(t,e,n){t.exports=n.p+"img/rentacarapi.31d0420.png"},272:function(t,e,n){t.exports=n.p+"img/vueducts.30bbc04.png"},273:function(t,e,n){t.exports=n.p+"img/zingalsonkusak.544e85c.png"},275:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("edea777c",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(275)},281:function(t,e,n){var o=n(31)(!1);o.push([t.i,'@-webkit-keyframes imageFly-data-v-7727c3b2{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@keyframes imageFly-data-v-7727c3b2{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@-webkit-keyframes fadeIn-data-v-7727c3b2{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes fadeIn-data-v-7727c3b2{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes slideIn-data-v-7727c3b2{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@keyframes slideIn-data-v-7727c3b2{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@-webkit-keyframes opacityIn-data-v-7727c3b2{0%{opacity:0}to{opacity:1}}@keyframes opacityIn-data-v-7727c3b2{0%{opacity:0}to{opacity:1}}*[data-v-7727c3b2]{font-family:"Mulish",sans-serif;margin:0;padding:0;box-sizing:border-box}body[data-v-7727c3b2]{width:100vw;padding:10px 20px 0}.container[data-v-7727c3b2]{display:flex;flex-direction:column;background:#fff}.btn[data-v-7727c3b2]{display:block;outline:none;border:2px solid #979797;border-radius:6px;color:#333;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;text-align:center;padding:1rem;text-decoration:none;margin:2rem 0;font-weight:700}.btn-active[data-v-7727c3b2]{background:#00844e;color:#fff;transition:all .5s ease}.btn-active[data-v-7727c3b2]:hover{background:#fff;border-color:#00844e;color:#00844e!important}.portfolio-title[data-v-7727c3b2]{text-align:center;margin:2rem 0 3rem;text-transform:uppercase}.portfolio-container[data-v-7727c3b2]{-webkit-animation:opacityIn-data-v-7727c3b2 1s;animation:opacityIn-data-v-7727c3b2 1s;display:grid;grid-template-columns:repeat(3,minmax(auto,350px));grid-row-gap:1rem;row-gap:1rem;justify-content:space-evenly;align-items:center;word-break:break-all}@media(max-width:992px){.portfolio-container[data-v-7727c3b2]{grid-template-columns:repeat(2,minmax(auto,350px))}}@media(max-width:768px){.portfolio-container[data-v-7727c3b2]{grid-template-columns:repeat(1,minmax(auto,350px));grid-row-gap:0;row-gap:0}}.portfolio-container .portfolio-content[data-v-7727c3b2]{display:flex;flex-direction:column;width:100%;min-height:-webkit-max-content;min-height:-moz-max-content;min-height:max-content;max-height:550px;border-radius:40px;padding:30px;background:#fff;box-shadow:4px 4px 10px 2px #979797;transition:transform .5s ease;transform:scale(.9);cursor:pointer}@media(max-width:650px){.portfolio-container .portfolio-content[data-v-7727c3b2]{transform:scale(.9)}.portfolio-container .portfolio-content[data-v-7727c3b2]:hover{transform:scale(1)}}.portfolio-container .portfolio-content .content-header[data-v-7727c3b2]{display:flex;height:200px}.portfolio-container .portfolio-content .content-header article h5[data-v-7727c3b2]{font-size:25px}.portfolio-container .portfolio-content .content-header article p[data-v-7727c3b2]{margin:15px 0 25px}.portfolio-container .portfolio-content .button-wrapper[data-v-7727c3b2]{display:flex;flex-direction:row;justify-content:center;align-items:center;justify-content:space-evenly}.portfolio-container .content-img[data-v-7727c3b2]{display:flex;flex-direction:row;justify-content:center;align-items:center;height:250px;position:relative;overflow:hidden}.portfolio-container .content-img img[data-v-7727c3b2]{border-radius:6px;margin-top:25px;width:100%;height:auto;position:absolute;top:0;z-index:-1;transition:all 1s ease}.badge[data-v-7727c3b2]{display:inline-block;margin-right:5px;margin-bottom:5px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:30px;font-size:14px;text-align:center;padding:5px;color:#fff;border-radius:6px;background:#00c675}',""]),t.exports=o},288:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{title:"Portfolio Gallery",portfolioData:[{title:"Portfolio Web Site",content:"Portfolio Web Site with Vue.JS-Nuxt.JS",badge:["vue.js","nuxt.js","html5","css3","sass","scss"],img:"portfolio.png",liveLink:"https://kaansen.netlify.app",githubLink:"https://github.com/kaansen57/Portfolio-Web-Site-Nuxt.Js"},{title:"PharmaVUE Nöbetçi Eczaneler",content:"PharmaVUE is a pharmacies on duty for Turkey",badge:["vuejs","vue3","css3","html5"],img:"pharmavue.png",liveLink:"https://nobetci-eczaneler.netlify.app",githubLink:"https://github.com/kaansen57/nobetci-eczaneler-vue"},{title:"Frontend Daily",content:"Daily Frontend Challange with SCSS",badge:["sass","scss","css3"],img:"frontenddaily.png",liveLink:"https://frontenddaily.netlify.com",githubLink:"https://github.com/kaansen57/FrontendDaily"},{title:"Zingal Son Kuşak",content:"Zingal Son Kuşak Film Web Site",badge:["vue.js","html5","css3","sass","scss"],img:"zingalsonkusak.png",liveLink:"https://zingalsonkusak.com",githubLink:"#"},{title:"VueDucts",content:"A simple product sales application prepared with Vue.js",badge:["vue.js","html5","css3"],img:"vueducts.png",liveLink:"http://vue-products.s3-website.us-east-2.amazonaws.com",githubLink:"https://github.com/kaansen57/VueDucts"},{title:"Rent A Car Frontend",content:"Rent A Car project with Angular 11",badge:["angular","html5","css3"],img:"rentacar.png",liveLink:"#",githubLink:"https://github.com/kaansen57/RentaCar-Angular"},{title:"Rent A Car Backend API",content:"Rent a Car Backend Api (.NET Core 3.1)",badge:[".net core","csharp",".net"],img:"rentacarapi.png",liveLink:"#",githubLink:"https://github.com/kaansen57/RentaCar-Backend"}]}},head:function(){return{title:this.title}}},r=(n(280),n(47)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("Header"),t._v(" "),o("h1",{staticClass:"portfolio-title"},[t._v("My Projects")]),t._v(" "),o("div",{staticClass:"portfolio-container"},t._l(t.portfolioData,(function(e){return o("div",{staticClass:"portfolio-content"},[o("div",{staticClass:"content-header"},[o("article",[o("h5",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.content))]),t._v(" "),t._l(e.badge,(function(e){return o("span",{staticClass:"badge"},[t._v("\n            #"+t._s(e)+"\n          ")])}))],2)]),t._v(" "),o("div",{staticClass:"content-img"},[o("img",{attrs:{src:n(265)("./"+e.img),alt:e.title}})]),t._v(" "),o("div",{staticClass:"button-wrapper"},[o("a",{staticClass:"btn btn-active",attrs:{href:e.liveLink,target:"_blank"}},[t._v("Live Preview")]),t._v(" "),o("a",{staticClass:"btn",attrs:{href:e.githubLink,target:"_blank"}},[t._v("Github")])])])})),0)],1)}),[],!1,null,"7727c3b2",null);e.default=component.exports;installComponents(component,{Header:n(264).default})}}]);