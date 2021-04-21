import vue from 'vue'
const set = vue.set
export default {
  setList(state, userList) {
    set(state, 'list', userList)
  },
  setSingle(state, user) {
    set(state, 'single', user)
  },
  setLoading(state, loading) {
    set(state, 'loading', loading)
  },
}
