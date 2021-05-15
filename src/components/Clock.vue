<template>
  <div id="clock" class="display" :style="{ display: $store.state.onClock ? 'block' : 'none' }">
    {{ $store.state.time }}
  </div>
</template>
<script>
export default {
  name: 'Clock',
  data() {
    return {
      updater: 0
    }
  },
  methods: {
    update() {
      this.$store.commit('update')
    }
  },
  mounted() {
    this.update()
    this.updater = setInterval(this.update, 1000)
  },
  beforeUnmount() {
    clearInterval(this.updater)
  }
}

</script>