if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>a(e,r),l={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"cd2cbd4b574c256832a7db5f2ff667fe"},{url:"archives/2022/03/index.html",revision:"cf898c6269b64360059f8760595ef562"},{url:"archives/2022/05/index.html",revision:"425ccfc291d30b23fe953f337b7991d4"},{url:"archives/2022/index.html",revision:"f5af5c8d41da27ecbdd3d104a090c3b3"},{url:"archives/index.html",revision:"393deeeef2fe3ef874015f73d05b992d"},{url:"baidu_verify_code-l7Baw38I2G.html",revision:"03e73a2b4bec2d8da1c41d5236d4b192"},{url:"categories/Hexo教程/index.html",revision:"9c9a476eec975cbb599abfcf6b43dd0f"},{url:"categories/index.html",revision:"89640e3782d35a0639c4e77220a78267"},{url:"categories/Python教程/index.html",revision:"0b1c25e269a0347b4036e92f9b652da3"},{url:"categories/教程/index.html",revision:"b1b0028b177ccc2fe73623c4ac84259c"},{url:"categories/白嫖万法/index.html",revision:"23909495eaa2708b82b94a048e10dec7"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"4ca8a94d1575cc4f4e851e63211a7e06"},{url:"friend-links-policy/index.html",revision:"f2cfb468590fe7f9d6562928c7bfcb5a"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"237c4ea0fe193a2ea7b031bd4c326a31"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"47e91c8efc78e796225f57e3b50d75c4"},{url:"music/index.html",revision:"f44af0d0c2f0aa18d7e5b0160e26adc7"},{url:"p/15511.html",revision:"4995d2d901ae525b3ca5524ddcad8afa"},{url:"p/33392.html",revision:"79cb35f9e9f85af73eecf977a3cca0e6"},{url:"p/39585.html",revision:"e7275e4a11f0a2135ab0bdc5cfebde2d"},{url:"p/45082.html",revision:"9f7c4925f083750a84b24aba03ec6f16"},{url:"p/49350.html",revision:"47047cf8bfa09545218307b6c2514f98"},{url:"p/55791.html",revision:"1fa9ef364d45af00f27e06d670043542"},{url:"p/8071.html",revision:"5eea2996b952313d29ea10fb6c45ccab"},{url:"sw.js",revision:"3fa24c29efba75fe2f6775ecefe34e9b"},{url:"tags/docsify/index.html",revision:"5ab665e2bc376fea327e6cf217f80af3"},{url:"tags/FastAPI/index.html",revision:"eff9c3497ba41fe722e99204b17d11b1"},{url:"tags/Fluid/index.html",revision:"e802d329fe2f3d1725b31e8299ee94bb"},{url:"tags/Hexo/index.html",revision:"df67535ea2c009fdd353fbf0bdbc21d5"},{url:"tags/index.html",revision:"1c39aa0419252a4948f2a6d8865e23fe"},{url:"tags/pyinstaller/index.html",revision:"ef7bf483fbefd55038a60dfeccb0f95f"},{url:"tags/Python/index.html",revision:"7d23bcaca2180421dc9f1d16c38323a0"},{url:"tags/Vercel/index.html",revision:"3b174026b629f07977a42b1a4570cc96"},{url:"tags/建站/index.html",revision:"8d75b74707d4858a50a5ca722f1bf86d"},{url:"tags/静态博客/index.html",revision:"d1907bdaae01c9555ad19bb55d9430bc"},{url:"tags/静态站点/index.html",revision:"5cd14035b555069bfedb33913099d9c4"},{url:"talk/index.html",revision:"9a6a63501de139064e5a1e01b1960fe8"}],{})}));
//# sourceMappingURL=service-worker.js.map
