<template>
  <section class="container">
    <div v-if="active">
      <p v-if="isOnline" class="is-online">
        Application is online
      </p>
      <p v-else class="is-offline">
        Application is offline.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      isOnline: false
    }
  },
  mounted () {
    this.active = true
    this.isOnline = navigator.onLine
  }
}
</script>

<style>

.is-online {
  color: #62C082;
  font-weight: bold;
  font-size: 24px;
}

.is-offline {
  color: #F64F45;
  font-weight: bold;
  font-size: 24px;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
