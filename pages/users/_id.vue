<template>
  <section>
    <h1>User {{$route.params.id}}</h1>
  </section>
</template>

<script>
export default {
  name: "_id",
  validate() {
    return true
  }
}
</script>

<style scoped>

</style>
