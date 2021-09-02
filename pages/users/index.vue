<template>
  <section>
    <h1>Users page</h1>
    <ul>
      <li v-for="user of 5" :key="user">
        <a href="#" @click.prevent="openUser(user)">User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "index",
  data: () => ({
    users: []
  }),
  mounted() {
    this.$axios.
  },
  methods: {
    openUser(user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>

<style scoped>

</style>
