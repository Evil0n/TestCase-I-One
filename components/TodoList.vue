<template>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold m-2">Todos</h2>
    <div class="md:flex content-center flex-wrap -mx-2 p-3 bg-grey">
      <div
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="md:w-1/2 lg:w-1/3 px-2 py-2"
      >
        <todo-card
          class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark h-full"
          :todo="todoItem"
          :user="getUserById(todoItem.userId)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoCard from '~/components/TodoCard'
export default {
  name: 'TodoList',
  components: { TodoCard },
  props: {
    todoList: {
      type: Array,
      default: () => [],
    },
    userList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getUserById(id) {
      return this.userList.find((user) => user.id === id) || {}
    },
  },
}
</script>
