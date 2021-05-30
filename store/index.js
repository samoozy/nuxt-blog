import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {

          setTimeout(() => {
            vuexContext.commit('setPosts', 
              [
                {
                  id: '1',
                  title: 'Hello World!', 
                  previewText: 'This is our first Lorem Ipsum Test'
                },
                {
                  id: '2', 
                  title: 'Hello World 2!', 
                  previewText: 'This is our first Lorem Ipsum Test 2'
                }
              ]
            )

            resolve()
          }, 1500)

        })
      },
      setPosts(context, payload) {
        context.commit('setPosts', payload)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore