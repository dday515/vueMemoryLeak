import axios from 'axios'

if (process.env.NODE_ENV !== 'development') {
  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    // we can't seem to catch the 302 status code as an error,
    // however, since it redirects to another domain (login.microsoftonline.com) it causes
    // a CORS error which makes error.response be undefined here
    console.log('intercepting error ' + error)
    let prefix = 'https://login.microsoftonline.com/41bfaf09-d27b-4e02-be19-1a5b0a72fcc0/oauth2/authorize?response_type=id_token&redirect_uri='
    let suffix = '&client_id=32cd4e95-22e9-460d-a675-8aee520d3274&scope=openid+profile+email&response_mode=form_post&nonce=95cf734dd9c5430095d4c8165f3d4070_20170601133017&state=redir%3D%252F'
    if (typeof error.response === 'undefined' && !error.toString().includes('HTTP status code 500')) {
      // eslint-disable-next-line no-undef
      appInsights.trackEvent('AXIOS_REDIRECT', { error: error.toString(), username: JSON.stringify(window.user) })
      window.location = prefix + encodeURI(window.location.href) + suffix
    } else {
      return Promise.reject(error)
    }
  })
}

export default axios
