<template>
  <loader>
    <todo-card :user="user" :todo="todo" />
    <user-card :user="user" />
  </loader>
</template>

<script>
import stateMixin from '~/mixins/stateMixin'
import TodoCard from '~/components/TodoCard'
import UserCard from '~/components/UserCard'

export default {
  name: 'Todo',
  components: { UserCard, TodoCard },
  mixins: [stateMixin],
  created() {
    this.getTodo(this.$route.params.id).then((data) => {
      this.getUser(data.userId)
    })
  },
}
</script>
