import Vuex from 'vuex'
import Cookies from 'universal-cookie'

export default () => new Vuex.Store({
  actions: {
    nuxtServerInit({ commit }, { req, route, redirect }) {
      if (!process.server || ['/login'].includes(route.path)) {
        return
      }
    
      const cookies = new Cookies(req.headers.cookie)
      const credential = cookies.get('credential')
    
      if (credential) {
        // Cookie を Vuex Store にコミットする処理など...
        // 例えば commit('')
      } else {
        return redirect('/login')
      }
    }
  }
})
