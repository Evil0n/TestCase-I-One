export default {
  async getList({ commit }) {
    commit('setLoading', true)
    const { data } = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    commit('setList', data)
    commit('setLoading', false)
    return data
  },
  async getById({ commit }, id) {
    commit('setLoading', true)
    const { data } = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/users',
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
      'https://jsonplaceholder.typicode.com/users',
      {
        params,
      }
    )
    commit('setList', data)
    commit('setLoading', false)
    return data
  },
}
