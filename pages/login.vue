<template>
  <section>
    <form action="">
      <h1>Login page</h1>
      <div class="form-group">
        <input type="text" class="form-control">

        <p>
          <nuxt-link to="/">Home</nuxt-link>
        </p>

        <button class="btn btn-primary" type="submit">Login</button>

      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "login",
  layout: 'empty'
}
</script>

<style scoped>
  form {
    width: 500px;
    margin: 0 auto;
  }
</style>
