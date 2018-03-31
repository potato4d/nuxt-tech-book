<template>
  <section class="container">
    <ul>
      <li v-for="user in users" :key="user.id">
        <p>
          <img :src="user.profile_image_url" alt="" width="48"><br>
          <strong>{{user.id}}</strong><br>
          {{user.description}}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  async asyncData({ app }) {
    const users = await app.$axios.$get('/users')
    return {
      users
    }
  }
}
</script>

<style>
p {
  margin: 0 0 16px;
  line-height: 1.5;
}
</style>
