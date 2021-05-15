import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      count: 0,
      time: '',
      onClock: true
    }
  },
  mutations: {
    toggle(state) {
      state.onClock = !state.onClock
    },
    update(state) {
      const replacement = state.count%2 === 0 ? ':' : ' '
      state.time = new Date().toLocaleTimeString('en-GB').replace(/:/g, replacement)
      ++state.count
    }
  }
})

createApp(App)
  .use(store)
  .mount('#app')
