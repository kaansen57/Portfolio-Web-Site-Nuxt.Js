(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{257:function(t,e,o){var content=o(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("75e33610",content,!0,{sourceMap:!1})},258:function(t,e,o){"use strict";o(257)},259:function(t,e,o){var n=o(45)(!1);n.push([t.i,'@-webkit-keyframes imageFly-data-v-02f02825{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@keyframes imageFly-data-v-02f02825{0%{transform:translateY(0)}50%{transform:translateY(-5%)}to{transform:translateY(0)}}@-webkit-keyframes fadeIn-data-v-02f02825{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes fadeIn-data-v-02f02825{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes slideIn-data-v-02f02825{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@keyframes slideIn-data-v-02f02825{0%{transform:translateX(-25%)}50%{transform:translateX(15%)}75%{transform:translateX(-10%)}to{transform:translateX(0)}}@-webkit-keyframes opacityIn-data-v-02f02825{0%{opacity:0}to{opacity:1}}@keyframes opacityIn-data-v-02f02825{0%{opacity:0}to{opacity:1}}*[data-v-02f02825]{font-family:"Mulish",sans-serif;margin:0;padding:0;box-sizing:border-box}body[data-v-02f02825]{background:#fff;width:100vw;padding:10px 20px 0}.container[data-v-02f02825]{display:flex;flex-direction:column}.btn[data-v-02f02825]{display:block;outline:none;border:2px solid #979797;border-radius:6px;color:#333;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;text-align:center;padding:1rem;text-decoration:none;margin:2rem 0;font-weight:700}.btn-active[data-v-02f02825]{background:#00844e;color:#fff;transition:all .5s ease}.btn-active[data-v-02f02825]:hover{background:#fff;border-color:#00844e;color:#00844e!important}.header[data-v-02f02825]{display:flex;flex-direction:row;justify-content:center;align-items:center;justify-content:space-between;margin-bottom:2rem;position:-webkit-sticky;position:sticky;top:0;z-index:999;background:hsla(0,0%,100%,.5);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);height:100px;box-shadow:0 4px 0 0 #fafafa}@media(max-width:650px){.header[data-v-02f02825]{flex-direction:column;height:100%}.header .menu[data-v-02f02825]{position:absolute;left:0;right:0;bottom:0;top:0;text-align:center;background:hsla(0,0%,100%,.9);opacity:1;z-index:-1;visibility:hidden}.header .menu ul[data-v-02f02825]{display:none}.header .menu[data-v-02f02825]:before{content:"";position:absolute;top:-10px;bottom:-10px;left:-20px;right:0;background:#00c675;transform-origin:0 0;transform:skew(-14deg) translateX(-120%);transition:all .275s .1s 0}.header .menu.mobile-open[data-v-02f02825]{opacity:1;z-index:100;visibility:visible;height:100vh}.header .menu.mobile-open[data-v-02f02825]:before{display:block;transform:skew(-10deg) translateX(0)}.header .menu.mobile-open ul[data-v-02f02825]{display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:space-evenly;height:50%;transform:skew(-11deg);margin-top:50%}.header .menu.mobile-open ul li a[data-v-02f02825]{color:#fff}.header .logo[data-v-02f02825]{justify-content:center;width:100%;padding:0 1rem;justify-content:space-between;margin-bottom:2rem}.header .logo[data-v-02f02825],.header .mobile-button[data-v-02f02825]{display:flex;flex-direction:row;align-items:center}.header .mobile-button[data-v-02f02825]{justify-content:center;flex-direction:column;border-radius:3px;border:2px solid #00633b;z-index:999}.header .mobile-button span[data-v-02f02825]{transition:all .3s ease;display:block;border:2px solid #00844e;background:#00633b;width:80%;margin:2px 0}}.header .mobile-button[data-v-02f02825]{width:45px;height:45px;background:#fff}.header .logo[data-v-02f02825]{outline:none}.header .logo a[data-v-02f02825]{text-decoration:none;color:#333;font-size:2rem;font-weight:700}.header .logo a span[data-v-02f02825]{font-family:"Gloria Hallelujah",cursive,sans-serif;color:#00844e}ul[data-v-02f02825]{display:flex;flex-direction:row;justify-content:center;align-items:center;list-style-type:none}ul li[data-v-02f02825]{font-size:16px;font-weight:700;text-transform:uppercase;margin-right:2rem;position:relative}ul li[data-v-02f02825]:before{content:"";position:absolute;border:2px solid #00844e;background:#00844e;width:100%;border-radius:10px;left:0;bottom:-5px;transform:scaleX(0);transition:transform .3s ease-in}ul li[data-v-02f02825]:hover:before{transform:scaleX(1)}ul li a[data-v-02f02825]{text-decoration:none;color:#979797;transition:color .3s ease-in-out}ul li a[data-v-02f02825]:hover{color:#4b4b4b}',""]),t.exports=n},260:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{clicked:!1}},methods:{isClicked:function(){return console.log(this.clicked),this.clicked=!this.clicked}}},r=(o(258),o(47)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("div",{staticClass:"logo"},[t._m(0),t._v(" "),o("a",{staticClass:"mobile-button",class:t.clicked?"mobile-button-open":"",attrs:{href:"#"},on:{click:function(e){return t.isClicked()}}},[o("span"),t._v(" "),o("span"),t._v(" "),o("span")])]),t._v(" "),o("nav",{staticClass:"menu",class:t.clicked?"mobile-open":""},[o("ul",[o("li",[o("a",{attrs:{href:"#"}},[o("NuxtLink",{attrs:{to:"/"}},[t._v("About")])],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("NuxtLink",{attrs:{to:"/Skills"}},[t._v("Skılls")])],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("NuxtLink",{attrs:{to:"/Portfolio"}},[t._v("Portfolıo")])],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("NuxtLink",{attrs:{to:"/Blog"}},[t._v("Blog")])],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"/"}},[t._v(" Kaan "),o("span",[t._v("SEN")])])}],!1,null,"02f02825",null);e.default=component.exports},272:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{title:"My Blog Posts"}},head:function(){return{title:this.title}}},r=o(47),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Header")],1)}),[],!1,null,"41f63c89",null);e.default=component.exports;installComponents(component,{Header:o(260).default})}}]);