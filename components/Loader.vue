<template>
  <div>
    <div v-if="todoLoading || userLoading">Loading...</div>
    <slot v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Loader',
  computed: {
    ...mapState('todoEntity', {
      todoLoading: 'loading',
    }),
    ...mapState('userEntity', {
      userLoading: 'loading',
    }),
  },
}
</script>
