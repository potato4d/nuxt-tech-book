importScripts('/examples/section06/06_API_And_Proxy/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-sample",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/examples/section06/06_API_And_Proxy/_nuxt/app.4d5aecb3ea4565ffcc9c.js",
    "revision": "6f435afd70a324f4d11b7ebc61477539"
  },
  {
    "url": "/examples/section06/06_API_And_Proxy/_nuxt/layouts/default.ced614391215196235d4.js",
    "revision": "ec8ec61a5bc27a50b6e4c188bf91ebb9"
  },
  {
    "url": "/examples/section06/06_API_And_Proxy/_nuxt/manifest.ce56cefebaa3aab33da9.js",
    "revision": "e07103f76c0063713d2017665280a060"
  },
  {
    "url": "/examples/section06/06_API_And_Proxy/_nuxt/pages/index.80e254aa6a5b67ba5a9c.js",
    "revision": "1e2332dfbe1c5b710cbd6f7e2688d148"
  },
  {
    "url": "/examples/section06/06_API_And_Proxy/_nuxt/vendor.07a987938fbe3ed5c8bf.js",
    "revision": "a381eb154e91b1e3e1fa03d6d0f7d1f7"
  }
])


workboxSW.router.registerRoute(new RegExp('/examples/section06/06_API_And_Proxy/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/examples/section06/06_API_And_Proxy/.*'), workboxSW.strategies.networkFirst({}), 'GET')

