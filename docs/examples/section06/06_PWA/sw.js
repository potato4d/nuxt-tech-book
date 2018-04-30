importScripts('/nuxt-tech-book/examples/section06/06_PWA/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "pwa-sample",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/nuxt-tech-book/examples/section06/06_PWA/_nuxt/app.73dbdb91f21950506ea3.js",
    "revision": "2eb2e7b3a7f59108259f1263b0165643"
  },
  {
    "url": "/nuxt-tech-book/examples/section06/06_PWA/_nuxt/layouts/default.ced614391215196235d4.js",
    "revision": "ec8ec61a5bc27a50b6e4c188bf91ebb9"
  },
  {
    "url": "/nuxt-tech-book/examples/section06/06_PWA/_nuxt/manifest.8c6f8d96678929b9e8a6.js",
    "revision": "d5d9c3aac07f9be1223eb00b700bfff4"
  },
  {
    "url": "/nuxt-tech-book/examples/section06/06_PWA/_nuxt/pages/index.80e254aa6a5b67ba5a9c.js",
    "revision": "1e2332dfbe1c5b710cbd6f7e2688d148"
  },
  {
    "url": "/nuxt-tech-book/examples/section06/06_PWA/_nuxt/vendor.07a987938fbe3ed5c8bf.js",
    "revision": "a381eb154e91b1e3e1fa03d6d0f7d1f7"
  }
])


workboxSW.router.registerRoute(new RegExp('/nuxt-tech-book/examples/section06/06_PWA/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/nuxt-tech-book/examples/section06/06_PWA/.*'), workboxSW.strategies.networkFirst({}), 'GET')

