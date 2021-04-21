<template>
  <div v-if="Object.keys(user).length">
    <nuxt-link :to="`/user/${user.id}`">
      <div class="min-h-full flex mt-3 px-4">
        <div class="max-w-4xl min-w-full bg-white w-full rounded-lg shadow-xl">
          <div class="p-4 border-b">
            <h2 class="text-2xl text-indigo-500">{{ user.name }}</h2>
          </div>
          <div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">User id</p>
              <p>{{ user.id }}</p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Username</p>
              <p>{{ user.username }}</p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Email Address</p>
              <p>{{ user.email }}</p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Website</p>
              <p>{{ user.website }}</p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Address</p>
              <p>
                {{ user.address.zipcode }}, {{ user.address.city }},
                {{ user.address.street }}, {{ user.address.suite }}
              </p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Geo</p>
              <p>
                lat: {{ user.address.geo.lat }}, lng: {{ user.address.geo.lng }}
              </p>
            </div>
            <div
              class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"
            >
              <p class="text-gray-600">Company</p>
              <p>
                Company name: {{ user.company.name }} <br />
                catchPhrase: {{ user.company.catchPhrase }}<br />
                bs: {{ user.company.bs }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
    short: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
