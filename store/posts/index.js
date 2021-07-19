const state = () => ({
  posts: [],
  error: null,
})

const actions = {
  async fetchPosts( {commit}) {
    try {
      const response = await this.$axios.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      console.log(response)
      commit('SET_POSTS', response)
    } catch (e) {
      console.error(e)
    }
  },
}

const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
}

const getters = {
  getPosts(state) {
    return state.posts
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
