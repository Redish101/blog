if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const f=e=>d(e,c),l={module:{uri:c},exports:r,require:f};i[c]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(a(...e),r)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"d814ddadec511ed8081a70381742039a"},{url:"2022/03/05/docsify/index.html",revision:"025371073ae0258fe36d10730a51afdf"},{url:"2022/03/08/pyinstaller/index.html",revision:"db889b60f09d9ffea83f873b7ed30857"},{url:"2022/03/12/fluid-config/index.html",revision:"917f0e1de23af0f8ae00504240d0152b"},{url:"404.html",revision:"30e2457d01bdb87e5d2a39f885c1ceea"},{url:"archives/2022/03/index.html",revision:"4c2a9e55e7375c9c69e8fdcef3841148"},{url:"archives/2022/index.html",revision:"3be91177ee864a883b3d0035a99020d4"},{url:"archives/index.html",revision:"3cef5182b37aab54f13c130caa3c31c9"},{url:"categories/index.html",revision:"ade9fdc6828136ecdf9294bbdad53e3f"},{url:"categories/教程/index.html",revision:"658184dca586610c069a66d8b54281f2"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"18cb051c33f547c8f5ec2afdc833086c"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"90e0893eb2c140e527c6f3c3e744a944"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"e3c451f0cda71a5a2d6f88f4c2fe5c13"},{url:"music/index.html",revision:"94c31dedeba519d58dfd58550523bf52"},{url:"tags/docsify/index.html",revision:"9f8c322431962f0a3bff2d163cd247b0"},{url:"tags/Fluid/index.html",revision:"b09b84ef396a69fe59f7e59ffb88c3a5"},{url:"tags/Hexo/index.html",revision:"d4ecd193aa95d8f43d1ef89b344ad395"},{url:"tags/index.html",revision:"650676a681ce0ffc291220f4887fc239"},{url:"tags/pyinstaller/index.html",revision:"1794f7ad20b9e644155af55ef2d37a44"},{url:"tags/静态站点/index.html",revision:"9c3fd25e7f0018c75320c8f356338d55"}],{})}));
//# sourceMappingURL=service-worker.js.map
