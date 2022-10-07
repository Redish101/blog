// 监听器
self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
})

// 主函数
const handle = async(req) => {
    const domain = req.url.split('/')[2];
}