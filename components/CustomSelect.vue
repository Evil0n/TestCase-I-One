<template>
  <div class="flex-auto flex flex-col">
    <div class="flex flex-col items-center relative w-400">
      <div class="w-full">
        <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
          <div class="flex flex-auto flex-wrap"></div>
          <div
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800 cursor-pointer"
            @click.stop.prevent="toggle"
          >
            {{ getValueLabel }}
          </div>
          <div v-show="value.length">
            <button
              class="cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none"
              @click.prevent.stop="$emit('input', [])"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x w-4 h-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
          >
            <button
              class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
              @click.prevent.stop="toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 transform"
                :class="{ 'rotate-180': show }"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        v-show="show"
        class="absolute shadow top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto"
      >
        <div
          v-for="(option, id) in options"
          :key="id"
          class="flex flex-col w-full"
          @click.prevent.stop="onSelect(option)"
        >
          <div
            class="cursor-pointer w-full border-gray-100 border-b hover:bg-green-900"
          >
            <div
              class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-green-900 hover:text-green-100 hover:border-green-900"
              :class="{ 'border-green-900': value.includes(option.value) }"
            >
              <div class="w-full items-center flex">
                <div class="mx-2 leading-6">{{ option.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultMessage: {
      type: String,
      default: 'No user filter specified',
    },
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    getValueLabel() {
      if (!this.value.length) {
        return this.defaultMessage
      }
      return this.options
        .filter((option) => this.value.includes(option.value))
        .map((toLabels) => toLabels.title)
        .join(', ')
    },
  },

  mounted() {
    window.addEventListener('click', this.close)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close)
  },
  methods: {
    close() {
      this.show = false
    },
    toggle() {
      this.show = !this.show
    },
    onSelect(option) {
      let toEmit
      if (this.value.includes(option.value)) {
        toEmit = this.value.filter((id) => id !== option.value)
      } else {
        toEmit = [...this.value, option.value]
      }
      this.$emit('input', toEmit)
    },
  },
}
</script>

<style scoped>
.top-100 {
  top: 100%;
}
.max-h-select {
  max-height: 300px;
}
.w-400 {
  width: 400px;
}
</style>
