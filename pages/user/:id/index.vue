<template>
  <loader>
    <div>
      <user-card :user="user" />
      <todo-list class="mt-10" :todo-list="todoList" :user-list="[user]" />
    </div>
  </loader>
</template>

<script>
import stateMixin from '~/mixins/stateMixin'
import TodoList from '~/components/TodoList'
import UserCard from '~/components/UserCard'

export default {
  name: 'User',
  components: { UserCard, TodoList },
  mixins: [stateMixin],
  created() {
    this.getUser(this.$route.params.id).then((data) => {
      this.searchTodo({ userId: data.id })
    })
  },
}
</script>
