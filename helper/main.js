/**
 * Redish101 Blog Helper v3
 * @description Redish101博客评论拦截等功能的Service Worker方式实现
 * @author Redish101<admin@redish101.top>
 * @version 3.0.0
 */

/**
 * 基于本地缓存实现的数据库
 */
self.CACHE_NAME = "Redish101 Blog Helper";
self.db = {
  /**
   * 读取数据
   * @param {*} key 数据标志符
   * @returns null
   */
  read: (key) => {
    return new Promise((resolve, reject) => {
      caches
        .match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`))
        .then(function (res) {
          res.text().then((text) => resolve(text));
        })
        .catch(() => {
          resolve(null);
        });
    });
  },
  /**
   * 写入数据
   * @param {*} key 数据标志符
   * @param {*} value 数据内容
   * @returns null
   */
  write: (key, value) => {
    return new Promise((resolve, reject) => {
      caches
        .open(CACHE_NAME)
        .then(function (cache) {
          cache.put(
            new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`),
            new Response(value)
          );
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
};

/**
 * 安装时执行
 */
self.addEventListener("install", async (installEvent) => {
  self.skipWaiting();
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("");
      return cache.addAll(["/"]);
    })
  );
});

/**
 * 发起请求时执行
 */
self.addEventListener("fetch", async (event) => {
  event.respondWith(handle(event.request));
});

/**
 * 主函数
 * @returns 一般情况下为请求原内容
 */

const handle = async (req) => {
  return fetch(req);
};
