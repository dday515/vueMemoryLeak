// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueQuillEditor from 'vue-quill-editor'
import tinymce from 'tinymce'
// A tinymce theme is also required
import 'tinymce/themes/modern/theme'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueQuillEditor /* { default global options } */)
/* eslint-disable no-new */

Vue.directive('tinymce-editor', {
  bind: function (el, binding, vNode) {
    Vue.nextTick(() => {
      tinymce.init({
        target: el,
        height: 250,
        skin_url: '/static/css/tinymceskins/lightgray',
        setup: function (editor) {
          editor.on('init', function () {
            tinymce.editors[tinymce.editors.findIndex(i => i['targetElm'] === el)].setContent(el.value)
          })

          editor.on('keyup', function () {
            let newValue = tinymce.editors[tinymce.editors.findIndex(i => i['targetElm'] === el)].getContent()
            let event = new Event('input', { bubbles: true })
            el.value = newValue
            el.dispatchEvent(event)
          })

          editor.on('change', function () {
            let newValue = tinymce.editors[tinymce.editors.findIndex(i => i['targetElm'] === el)].getContent()
            let event = new Event('input', { bubbles: true })
            el.value = newValue
            el.dispatchEvent(event)
          })
        }
      })
    })
  },
  unbind (el) {
    let event = new Event('input', { bubbles: true })
    el.value = ''
    el.dispatchEvent(event)
    tinymce.editors[tinymce.editors.findIndex(i => i['targetElm'] === el)].remove()
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
