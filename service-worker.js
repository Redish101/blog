if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const l=e=>a(e,r),f={module:{uri:r},exports:s,require:l};i[r]=Promise.all(d.map((e=>f[e]||l(e)))).then((e=>(c(...e),s)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7651558eec543d4eabb5b2639b7a36af"},{url:"archives/2022/03/index.html",revision:"e3a6ca1cf3f1a019d354b0afc3d49d50"},{url:"archives/2022/05/index.html",revision:"0e90dd1148760aabd0587bb247b4b341"},{url:"archives/2022/index.html",revision:"06f72cc11fea2ae13f579a6df9024282"},{url:"archives/index.html",revision:"13986c68223aca12060bad8ca49608e3"},{url:"baidu_verify_code-l7Baw38I2G.html",revision:"54689dcd8532dddfcc4f1593fcb13050"},{url:"bg.jpg",revision:"d0ef69a6a69d4b9c6023ef2d7e8f41bd"},{url:"categories/Hexo教程/index.html",revision:"49327925c9bbc7275dd0173dd82af39d"},{url:"categories/index.html",revision:"8c897c74eb627c20ad59858f07b2f984"},{url:"categories/Python教程/index.html",revision:"3dba2e3c29e5af58f0e550fb2b77b17c"},{url:"categories/教程/index.html",revision:"369fe81c4670d688f0195d1c54eff8b6"},{url:"categories/白嫖万法/index.html",revision:"45a9a8bb539841d999123407bc0ce3c2"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"4ca8a94d1575cc4f4e851e63211a7e06"},{url:"friend-links-policy/index.html",revision:"739c4ceb6c58691ad82a0d17359f700b"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"998309038c1dbae90ec8d134b19f47d9"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"60f218d6e8d6b3e23875efadbc2df72f"},{url:"music/index.html",revision:"29df0cf8da79c64f9893afa3c8fd8ea2"},{url:"p/15511.html",revision:"a6d0999bd7121526d39bc137f0e12bab"},{url:"p/33392.html",revision:"4a492d413e8a4d8f6de8396a00fdae41"},{url:"p/39585.html",revision:"e6b946a0efd798b662c546c09ec7d7e7"},{url:"p/45082.html",revision:"9e1ca0d5219463d79054fdc8e5b0a745"},{url:"p/49350.html",revision:"3d0ea6e20b738a52dbf6f30b59b29c80"},{url:"p/8071.html",revision:"9ab9d3d1e22f0c1160ca0b94b807bc57"},{url:"sw.js",revision:"01536302b37f0a3e379b9a52ae053b80"},{url:"tags/docsify/index.html",revision:"57682814c518a2ad4b1d0cbd165e75c5"},{url:"tags/FastAPI/index.html",revision:"b14b60aa90092020fa6e75de637cff6f"},{url:"tags/Fluid/index.html",revision:"e6779fecb9cb19e0ac5e0dddfa65a954"},{url:"tags/Hexo/index.html",revision:"94c6bc2a9c558e1c29af0afefc10d7a6"},{url:"tags/index.html",revision:"94b7d27c952be0c3b5e458c894747e24"},{url:"tags/pyinstaller/index.html",revision:"fd2c6d9a2ace72ce57b9e28fd94433f3"},{url:"tags/Python/index.html",revision:"8aecdab1c63d5bb72e42703a095b21b7"},{url:"tags/Vercel/index.html",revision:"0df1939e12a84a8b90f27a61278c65e3"},{url:"tags/建站/index.html",revision:"f7c944d9764e1c8264b4091843bff22d"},{url:"tags/静态博客/index.html",revision:"0a889cadbda44e77f60450565f9475a4"},{url:"tags/静态站点/index.html",revision:"335febdf302abb677061b016ee492552"},{url:"talk/index.html",revision:"6ec007917a561fea5bfbe51266674884"}],{})}));
//# sourceMappingURL=service-worker.js.map
