const CACHE_NAME = "Redish101BlogHelper"

const mirror = [
  `https://registry.npmmirror.com/redish101-blog/latest`,
  `https://registry.npmjs.org/redish101-blog/latest`
]

self.db = { 
  read: (key, config) => {
      if (!config) { config = { type: "text" } }
      return new Promise((resolve, reject) => {
          caches.open(CACHE_NAME).then(cache => {
              cache.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                  if (!res) resolve(null)
                  res.text().then(text => resolve(text))
              }).catch(() => {
                  resolve(null)
              })
          })
      })
  },
  write: (key, value) => {
      return new Promise((resolve, reject) => {
          caches.open(CACHE_NAME).then(function (cache) {
              cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
              resolve()
          }).catch(() => {
              reject()
          })
      })
  }
}

const set_newest_version = async (mirror) => { //改为最新版本写入数据库
  return lfetch(mirror, mirror[0])
      .then(res => res.json()) //JSON Parse
      .then(async res => {
          await db.write('blog_version', res.version) //写入
          return;
      })
}

setInterval(async() => {
  await set_newest_version(mirror) //定时更新,一分钟一次
}, 60*1000);

setTimeout(async() => { 
  await set_newest_version(mirror)//打开五秒后更新,避免堵塞
},5000)

const config = {
  dev: {
    blog: false,
    accelerator: false,
  },
  cache: {
    name: "Redish101BlogHelper",
    enabled: true,
  },
  accelerator: [
    //加速组，同一组内的url会被并发请求其余的url
    //JsDelivr Github
    [
      "https://fastly.jsdelivr.net/gh",
      "https://cdn1.tianli0.top/gh",
      "https://cdn.oplog.cn/gh",
    ],
    //JsDelivr Combine
    [
      "https://fastly.jsdelivr.net/combine",
      "https://cdn1.tianli0.top/combine",
      "https://cdn.oplog.cn/combine",
    ],
    //NPM
    [
      "https://fastly.jsdelivr.net/npm",
      "https://gcore.jsdelivr.net/npm",
      "https://npm.elemecdn.com",
      "https://cdn1.tianli0.top/npm",
      "https://cdn.oplog.cn/npm",
      "https://unpkg.com",
    ],
  ],
  blog: {
    accelerator: true,
    origin: ["blog.redish101.top"],
    mode: "npm",
    mirrors: [],
    npm: {
      accelerator: true,
      package: "redish101-blog",
      version: db.read('blog_version') || "1.1.654874754",
    },
  },
};

config.blog.npm.urls = [
  `https://npm.elemecdn.com/${config.blog.npm.package}@${config.blog.npm.version}/public`,
  `https://cdn.tianli0.top/npm/${config.blog.npm.package}@${config.blog.npm.version}/public`,
  `https://cdn.oplog.cn/npm/${config.blog.npm.package}@${config.blog.npm.version}/public`,
  `https://fastly.jsdelivr.net/npm/${config.blog.npm.package}@${config.blog.npm.version}/public`,
  `https://unpkg.com/${config.blog.npm.package}@${config.blog.npm.version}/public`,
];

self.addEventListener("install", async function (installEvent) {
  self.skipWaiting();
  installEvent.waitUntil(
    caches.open(config.cache.name).then((cache) => {
      return cache.addAll([]);
    })
  );
});
self.addEventListener("fetch", async (event) => {
  try {
    event.respondWith(handle(event.request));
  } catch (msg) {
    event.respondWith(handleerr(event.request, msg));
  }
});
const handleerr = async (req, msg) => {
  return new Response(
    `<h1>Redish101 Blog Helper Error</h1>
    <p>Redish101 Blog Helper出现致命错误</p>
    <p>这有可能是Redish101 Blog Helper本身出现了问题（Blog Helper在正式上线到生产环境钱经历了在预览环境下严谨的测试，可能性极小）</p>
    <p>也有可能是Redish101 Blog Helper的加速节点停止了服务</p>
    <p>请尝试通过报错信息解决问题，如果无法解决，请千万不要问101，以下为报错信息</p>
    <b>${msg}</b>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
};
const handle = async (req) => {
  const urlObj = new URL(req.url);
  const urlStr = urlObj.toString();
  const urlPath = urlObj.pathname;
  const query = (q) => urlObj.searchParams.get(q);
  const domain = urlObj.hostname;
  //accelerator 加速

  let ansUrl = [];
  config.accelerator.forEach((group) => {
    group.forEach((url) => {
      if (urlStr.match(url)) {
        group.forEach((Aurl) => {
          ansUrl.push(urlStr.replace(url, Aurl));
        });
      }
    });
  });
  if (ansUrl.length > 0) {
    return caches.open(config.cache.name).then((cache) => {
      return cache.match(urlStr).then((res) => {
        if (res) return res;
        return lfetch(ansUrl, urlStr).then(async (res) => {
          if (config.cache.enabled) {
            await caches.open(config.cache.name).then((cache) => {
              cache.put(req, res.clone());
            });
          }
          return res;
        });
      });
    });
  }
  //blog 加速
  if (config.blog.accelerator) {
    if (config.blog.origin.includes(domain)) {
      return caches.open(config.cache.name).then((cache) => {
        return cache.match(urlStr).then((res) => {
          return new Promise((resolve, reject) => {
            if (res) {
              setTimeout(() => {
                resolve(res);
              }, 20);
            }

            setTimeout(() => {
              if (config.blog.mode === "mirror") {
                config.blog.mirrors.forEach((mirror) => {
                  ansUrl.push(urlStr.replace(domain, mirror));
                });
              }
              if (config.blog.mode === "npm") {
                config.blog.npm.urls.forEach((url) => {
                  ansUrl.push(npm_prefix(url, urlObj));
                });
              }
              ansUrl.push(urlStr);
              lfetch(ansUrl, urlStr).then(async (res) => {
                let newRes;
                if (npm_prefix("", urlObj).endsWith(".html")) {
                  newRes = new Response(await res.arrayBuffer(), {
                    headers: {
                      "content-type": "text/html; charset=utf-8",
                      "cache-control": "max-age=0",
                      Server: "Redish101BlogHelper",
                    },
                  });
                } else {
                  newRes = res.clone();
                }
                if (config.cache.enabled) {
                  await caches.open(config.cache.name).then(async (cache) => {
                    cache.put(req, newRes.clone());
                  });
                }
                resolve(newRes);
              });
            }, 0);
          });
        });
      });
    }
  }

  return fetch(req);
};

//Function 功能区
const npm_prefix = (url, urlObj) => {
  let path = urlObj.pathname.split("#")[0];
  if (path.endsWith("/")) path += "index";
  if (!path.split("/")[path.split("/").length - 1].includes(".")) {
    path += ".html";
  }
  return url + path;
};
const lfetch = async (urls, url) => {
  let controller = new AbortController();
  const PauseProgress = async (res) => {
    return new Response(await res.arrayBuffer(), {
      status: res.status,
      headers: res.headers,
    });
  };
  if (!Promise.any) {
    Promise.any = function (promises) {
      return new Promise((resolve, reject) => {
        promises = Array.isArray(promises) ? promises : [];
        let len = promises.length;
        let errs = [];
        if (len === 0)
          return reject(new AggregateError("All promises were rejected"));
        promises.forEach((promise) => {
          promise.then(
            (value) => {
              resolve(value);
            },
            (err) => {
              len--;
              errs.push(err);
              if (len === 0) {
                reject(new AggregateError(errs));
              }
            }
          );
        });
      });
    };
  }
  return Promise.any(
    urls.map((urls) => {
      return new Promise((resolve, reject) => {
        fetch(urls, {
          signal: controller.signal,
        })
          .then(PauseProgress)
          .then((res) => {
            if (res.status == 200) {
              controller.abort();
              resolve(res);
            } else {
              reject(res);
            }
          });
      });
    })
  );
};
const blog_version_console = (async () => {
  return await config.blog.npm.version
})
