import Vue from 'vue'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import graphqlClient from './api'
Vue.prototype.$request = graphqlClient
import './api/constant'

const App = {
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App