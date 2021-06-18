<template>
  <div class="relative bg-violet-400 w-full h-screen flex flex-col justify-center items-center gap-8" v-if="state">
    <img src="../../assets/img/nubank-logo-white.png" width="64">
    <box-icon name='loader-alt' animation="spin" size="36px" color="#fff" class="absolute bottom-72"></box-icon>
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
