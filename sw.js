// 全局变量声明
const cache_name = 'Redish101BlogHelper' // 缓存名称
let cachelist = [
    '/helper/error.html',
    '/helper/offline.html'
] //缓存列表

// 监听器
self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
})

self.addEventListener('install', async function (installEvent) {
    self.skipWaiting()
    installEvent.waitUntil(
        caches.open(cache_name)
            .then(function (cache) {
                console.log('[ SUCCESS ] 成功注册缓存');
                return cache.addAll(cachelist);
            })
    );
})

// 主函数
const handle = async(req) => {
    console.log('[ Request ] '+ 'URL: '+req.url)
    const domain = req.url.split('/')[2];
    if (domain.match("unpkg.com")) {
        return fetch(req.url.replace("https://unpkg.com", "https://zhimg.unpkg.com"));
    }
    if (domain.match("cdn.jsdelivr.net")) {
        return fetch(req.url.replace("https://cdn.jsdelivr.net", "https://cdn1.tianli0.top"))
    }
    if (domain.match("cdn.jsdelivr.net")) {
        return fetch(req.url.replace("http://cdn.jsdelivr.net", "https://cdn1.tianli0.top"))
    }
    return fetch(req.url).then(function (res) {
        if (!res) { throw 'error' } //1
        return caches.open(cache_name).then(function (cache) {
            cache.delete(req);
            cache.put(req, res.clone());
            return res;
        });
    }).catch(function (err) {
        return caches.match(req).then(function (resp) {
            return resp || caches.match(new Request('/offline.html')) //2
        })
    })
}

// 缓存数据库
self.CACHE_NAME = 'Redish101BlogHelper';
self.db = {
    read: (key) => {
        return new Promise((resolve, reject) => {
            caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                res.text().then(text => resolve(text))
            }).catch(() => {
                resolve(null)
            })
        })
    },
    read_arrayBuffer: (key) => {
        return new Promise((resolve, reject) => {
            caches.match(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`)).then(function (res) {
                res.arrayBuffer().then(aB => resolve(aB))
            }).catch(() => {
                resolve(null)
            })
        })
    },
    write: (key, value) => {
        return new Promise((resolve, reject) => {
            caches.open((cache_name)).then(function (cache) {
                cache.put(new Request(`https://LOCALCACHE/${encodeURIComponent(key)}`), new Response(value));
                resolve()
            }).catch(() => {
                reject()
            })
        })
    }
}