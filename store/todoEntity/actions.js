export default {
  async getList({ commit }) {
    commit('setLoading', true)
    const { data } = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    commit('setList', data)
    commit('setLoading', false)
    return data
  },
  async getById({ commit, dispatch }, id) {
    commit('setLoading', true)
    const { data } = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos',
      {
        params: { id },
      }
    )
    const result = data && data[0] ? data[0] : {}
    commit('setSingle', result)
    commit('setLoading', false)
    return result
  },
  async searchByParams({ commit }, params) {
    commit('setLoading', true)
    const { data } = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos',
      {
        params,
      }
    )
    commit('setList', data)
    commit('setLoading', false)
    return data
  },
}
