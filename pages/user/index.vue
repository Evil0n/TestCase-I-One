<template>
  <loader>
    <div>
      <user-card
        v-for="userItem in userList"
        :key="userItem.id"
        :user="userItem"
      />
    </div>
  </loader>
</template>

<script>
import stateMixin from '~/mixins/stateMixin'
import UserCard from '~/components/UserCard'

export default {
  name: 'AllUsers',
  components: { UserCard },
  mixins: [stateMixin],
  created() {
    this.getAllUser()
  },
}
</script>
