<template>
  <section>
    <h1>HOME</h1>
    <p>
      <nuxt-link to="/login">
        Move to login
      </nuxt-link>
    </p>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
section {
  margin: 16px;
}
</style>
