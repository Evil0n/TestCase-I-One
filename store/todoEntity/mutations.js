import vue from 'vue'
const set = vue.set
export default {
  setList(state, todoList) {
    set(state, 'list', todoList)
  },
  setSingle(state, todo) {
    set(state, 'single', todo)
  },
  setLoading(state, loading) {
    set(state, 'loading', loading)
  },
}
