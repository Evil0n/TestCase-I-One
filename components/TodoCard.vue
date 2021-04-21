<template>
  <div
    class="py-4 px-8 bg-white shadow-lg rounded-lg flex-col flex justify-center"
  >
    <nuxt-link :to="`/todo/${todo.id}`">
      <h2 class="text-gray-800 text-3xl font-semibold">Todo {{ todo.id }}</h2>
      <p class="mt-2 text-gray-600">title: {{ todo.title }}</p>
    </nuxt-link>

    <label class="inline-flex items-center mt-3">
      <input
        :id="`todoDone${todo.id}`"
        class="form-checkbox h-5 w-5 text-gray-600"
        type="checkbox"
        :value="todo.completed"
        @change="$emit('change', $event)"
      /><span class="ml-2 text-gray-700">Done</span>
    </label>
    <div class="flex justify-end mt-4">
      <nuxt-link
        :to="`/user/${user.id}`"
        class="text-xl font-medium text-indigo-500"
        >{{ user.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCard',

  props: {
    todo: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>
