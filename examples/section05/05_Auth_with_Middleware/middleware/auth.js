import Cookies from 'universal-cookie'

export default function ({ req, route, redirect, store }) {
  if (!process.server || ['/login'].includes(route.path)) {
    return
  }

  const cookies = new Cookies(req.headers.cookie)
  const credential = cookies.get('credential')

  if (credential) {
    // Cookie を Vuex Store にコミットする処理など...
    // 例えば store.dispatch('setToken', credential)
  } else {
    return redirect('/login')
  }
}