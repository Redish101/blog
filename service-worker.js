if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const l=e=>d(e,s),f={module:{uri:s},exports:r,require:l};i[s]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(c(...e),r)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"e0939dfdbcb38fcb0dcdcc61b1960d64"},{url:"2022/03/04/docsify/index.html",revision:"a2c1a9dbd651e37990c14c34612ec429"},{url:"2022/03/07/pyinstaller/index.html",revision:"7e01e49883ce93ac6b8b6657032eb9bb"},{url:"2022/03/12/fluid-config/index.html",revision:"8de6a6b36cfc9ba8d3141e242b37621b"},{url:"2022/03/14/after-site-build/index.html",revision:"a7aef249ee623bedf718a453d96b12fd"},{url:"404.html",revision:"73fe4774a571776cb7e9cf0458326352"},{url:"archives/2022/03/index.html",revision:"8d87ad1beec7357fd2c9e3e2bbe3269d"},{url:"archives/2022/index.html",revision:"932ba0c434eda3f240ada91e9d395916"},{url:"archives/index.html",revision:"e6b5353157a2efe5594c1e1110e822b7"},{url:"categories/Hexo教程/index.html",revision:"fe160cff799e6fd43f9fa0b352fa778e"},{url:"categories/index.html",revision:"6ddc35ca60a982c23d4802107a3583b6"},{url:"categories/Python教程/index.html",revision:"ce4e69437b2c4d0532a81e3bd97aa0da"},{url:"categories/教程/index.html",revision:"75ce1a1ae36dabc88661a251be3f6fcb"},{url:"css/gitalk.css",revision:"5ce280d86637a41c57fdc51fd463237a"},{url:"css/highlight-dark.css",revision:"be3af4b8abf2074e66acb737867c43dc"},{url:"css/highlight.css",revision:"fdd56de5edd1e833674574fdc74bbfe7"},{url:"css/mac.css",revision:"b767e9e92dfa6163a6f0f22616daf04a"},{url:"css/main.css",revision:"18cb051c33f547c8f5ec2afdc833086c"},{url:"go.html",revision:"0c55af851dbfd4f5503598e8eba5136a"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"index.html",revision:"7d22b1c3286a7fe13ede98f0c6cc15e0"},{url:"js/boot.js",revision:"9a954f041665f6c6dd239e94803cd150"},{url:"js/color-schema.js",revision:"6552e853a9a711bc68ba3319a7ddfdff"},{url:"js/events.js",revision:"035809ecd3b1aa9612c11c9b0bf71387"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"26ff27e9c7abf1d66d5bf0acab1a5d76"},{url:"js/local-search.js",revision:"13adc3aec731d37d3ae6eaf07e94c716"},{url:"js/plugins.js",revision:"017e220f2a03605608af09e6f8464323"},{url:"js/utils.js",revision:"8a0ef4d80a973a1514c6d22a24fac883"},{url:"links/index.html",revision:"0af6baf473447eb8f79dce97acbf0a80"},{url:"music/index.html",revision:"b8a31c8af3defab00101e4bcc9a64752"},{url:"tags/docsify/index.html",revision:"ee0476fdb075cf8c2e7e9359a0febecd"},{url:"tags/Fluid/index.html",revision:"68103d3d90597a294f5a7e548e171407"},{url:"tags/Hexo/index.html",revision:"557521eb6af21c5b3ed9671e768bd4e7"},{url:"tags/index.html",revision:"15c6f0e7460a44007d7cf58241ea2e29"},{url:"tags/pyinstaller/index.html",revision:"5370e7b55f8495849a6b22fd650ef8bd"},{url:"tags/建站/index.html",revision:"1843550514e453fe89ed007dbe68f291"},{url:"tags/静态博客/index.html",revision:"9d779b9221c7a8079cc1c8d1455ae5b7"},{url:"tags/静态站点/index.html",revision:"a043beb44053dc9681ea1e0227894545"},{url:"talk/index.html",revision:"c96aabd80d48cd82cf95c1f6e7d5d251"}],{})}));
//# sourceMappingURL=service-worker.js.map
