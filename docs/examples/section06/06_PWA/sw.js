importScripts('/examples/section06/06_PWA/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-sample",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/examples/section06/06_PWA/_nuxt/app.cb31dd9190cc13da414f.js",
    "revision": "4e63caa584aa0383ef2c67864da96489"
  },
  {
    "url": "/examples/section06/06_PWA/_nuxt/layouts/default.ced614391215196235d4.js",
    "revision": "ec8ec61a5bc27a50b6e4c188bf91ebb9"
  },
  {
    "url": "/examples/section06/06_PWA/_nuxt/manifest.e58dd66d9a3ae0bd6159.js",
    "revision": "08bffd423a6a5b8f00257724ef5e3a6d"
  },
  {
    "url": "/examples/section06/06_PWA/_nuxt/pages/index.80e254aa6a5b67ba5a9c.js",
    "revision": "1e2332dfbe1c5b710cbd6f7e2688d148"
  },
  {
    "url": "/examples/section06/06_PWA/_nuxt/vendor.07a987938fbe3ed5c8bf.js",
    "revision": "a381eb154e91b1e3e1fa03d6d0f7d1f7"
  }
])


workboxSW.router.registerRoute(new RegExp('/examples/section06/06_PWA/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/examples/section06/06_PWA/.*'), workboxSW.strategies.networkFirst({}), 'GET')

