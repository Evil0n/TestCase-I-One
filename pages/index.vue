<template>
  <loader>
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold m-2">User filter:</h2>

      <custom-select v-model="filter" class="m-2" :options="filterOptions" />
      <todo-list :user-list="userList" :todo-list="todoListWithFilter" />
    </div>
  </loader>
</template>

<script>
import stateMixin from '~/mixins/stateMixin'
import TodoList from '~/components/TodoList'
import CustomSelect from '~/components/CustomSelect'

export default {
  name: 'Home',
  components: { CustomSelect, TodoList },
  mixins: [stateMixin],
  data() {
    return {
      filter: [],
    }
  },
  computed: {
    todoListWithFilter() {
      return this.todoList.filter(
        (todo) => this.filter.length === 0 || this.filter.includes(todo.userId)
      )
    },
    filterOptions() {
      return this.userList.map((item) => ({
        value: item.id,
        title: item.name,
      }))
    },
  },
  created() {
    this.getAllTodo()
    this.getAllUser()
  },
}
</script>
