if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const l=e=>d(e,c),n={module:{uri:c},exports:r,require:l};i[c]=Promise.all(a.map((e=>n[e]||l(e)))).then((e=>(s(...e),r)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"b2f62fe05be72d5570c7a483a2350a5e"},{url:"2022/03/05/docsify/index.html",revision:"945b0e08f820e702f04de1f8c8c6a2bb"},{url:"2022/03/08/pyinstaller/index.html",revision:"45373b908f942e32e65a0d200d7ed502"},{url:"2022/03/12/fluid-config/index.html",revision:"bfa9619e5ea011047fa6cc6132846639"},{url:"2022/03/14/after-site-build/index.html",revision:"8d0ca5d7560592a26c903a4e166bd768"},{url:"404.html",revision:"b9ab126293a7214587b65ef361646351"},{url:"archives/2022/03/index.html",revision:"04a6482957c298828886e901a0076e29"},{url:"archives/2022/index.html",revision:"bdd9bf8914f8fe5b4adaa0270f94fcd3"},{url:"archives/index.html",revision:"645c2c8133c319b04812e0876bfae897"},{url:"categories/Hexo教程/index.html",revision:"4e03917def393cc4e02506c8045af433"},{url:"categories/index.html",revision:"482d5915de397bc1b86715b9526a73c0"},{url:"categories/Python教程/index.html",revision:"1196e5dac1ff52af7276dbce0c2677b2"},{url:"categories/教程/index.html",revision:"ed9dcd1e0328303b160e4de14ea5a53a"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"18cb051c33f547c8f5ec2afdc833086c"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"38ab5b5ee3c16d156f7ce41b1165a740"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"cf974b2fd01d7ea3b4b2604fc5278a2f"},{url:"music/index.html",revision:"196f32d452ccadd1d0564294b09c07ab"},{url:"tags/docsify/index.html",revision:"d2462cdee80db29aedbbb396c32f0ba7"},{url:"tags/Fluid/index.html",revision:"ed639f6180f264367813252981dad2de"},{url:"tags/Hexo/index.html",revision:"23c906f28bde793adad864944e98091a"},{url:"tags/index.html",revision:"3a62643cc631c4ed2af062b4dc7b091c"},{url:"tags/pyinstaller/index.html",revision:"cf05fc2178c6331de59d8b7c98571000"},{url:"tags/建站/index.html",revision:"0919dcd17ba66727a22c4a89eb984912"},{url:"tags/静态博客/index.html",revision:"9161964a8bec244b6d23693333b40cd9"},{url:"tags/静态站点/index.html",revision:"9f6b98ab918235facb3e43ec42990721"}],{})}));
//# sourceMappingURL=service-worker.js.map
