if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>a(e,r),l={module:{uri:r},exports:c,require:f};i[r]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"0b3205f1b920b41222ce90b4529fd0b4"},{url:"2022/03/05/docsify/index.html",revision:"32a6d2224797050342de8a9e7dff2f13"},{url:"2022/03/08/pyinstaller/index.html",revision:"502e6ab85e21ad8d2b8b4b4bbdf0885b"},{url:"2022/03/09/fluid-config/index.html",revision:"860d81ec24bc8e4013337b453b64cdf2"},{url:"404.html",revision:"7964365a1550ab688af33da5608eeb3e"},{url:"archives/2022/03/index.html",revision:"165133d1be92d73534e627e3f165af8a"},{url:"archives/2022/index.html",revision:"d27986231d849f25de5aa9f97af4214a"},{url:"archives/index.html",revision:"70286fd639917182c634bde190cd7a7b"},{url:"categories/index.html",revision:"efaee2ab9bbf588d07c856d94107ca74"},{url:"categories/教程/index.html",revision:"a5292a905929b0821d3e8f5761624d80"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"18cb051c33f547c8f5ec2afdc833086c"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"bbeae932bcf32e1bd190d54ac0139bae"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"e5cc7a4790d1a2d36ba75be4a2ca0539"},{url:"music/index.html",revision:"3fa83017a7c49248f8f05a3bc1b2dc65"},{url:"tags/docsify/index.html",revision:"3772c676414ffcf603920ccd43ffb8b7"},{url:"tags/Fluid/index.html",revision:"c25823b30f741ef3f79adb149851536f"},{url:"tags/Hexo/index.html",revision:"f77c6bc168da3db957162dbd815752ee"},{url:"tags/index.html",revision:"c000a85d0ed02cfc13d0f5d15cbb2e1a"},{url:"tags/pyinstaller/index.html",revision:"ceb1b4025e72dbb5208799f56f620ef2"},{url:"tags/静态站点/index.html",revision:"f53e21a967aaa1c63ae276ea87d6b9e1"}],{})}));
//# sourceMappingURL=service-worker.js.map
