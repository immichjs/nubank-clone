<template>
  <div class="realtive w-full h-screen flex flex-col justify-center items-center gap-8" v-if="state">
    <img src="../../assets/img/nubank-logo-white.png" width="64" class="relative bottom-16">
    <box-icon name='loader-alt' animation="spin" size="24px" color="#fff" class="absolute bottom-28"></box-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      state: 'loadingState'
    })
  }
}
</script>
