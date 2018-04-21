export default function ({ $axios }) {
  $axios.onRequest( (config) => {
    if (config.url.indexOf('api.github.com') +1 ) {
      // config.headers.Authorization = `token XXXXXXXXX`
      // XXXX is your access token
    }
  })
}
