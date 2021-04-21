import { mapActions, mapState } from 'vuex'
import Loader from '~/components/Loader'

export default {
  components: { Loader },

  computed: {
    ...mapState('todoEntity', {
      todoList: 'list',
      todo: 'single',
    }),
    ...mapState('userEntity', {
      userList: 'list',
      user: 'single',
    }),
  },
  methods: {
    ...mapActions('todoEntity', {
      getAllTodo: 'getList',
      searchTodo: 'searchByParams',
      getTodo: 'getById',
    }),
    ...mapActions('userEntity', {
      getAllUser: 'getList',
      searchUser: 'searchByParams',
      getUser: 'getById',
    }),
  },
}
