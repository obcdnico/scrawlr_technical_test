import { createStore } from 'vuex'
import upvote from './upvote'

// Create a new store instance.
export default createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
  	upvote
  }
})
