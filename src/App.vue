<template>
  <div id="app" class="relative flex flex-col items-start h-screen bg-violet-400 gap-4 bg-purple-100">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'

import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  metaInfo: {
    title: 'Nubank | Clone',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  computed: {
    ...mapGetters([
      'balanceVisibilityStatus'
    ])
  },
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    ...mapMutations([
      'changeVisibilityStatus'
    ])
  }
}
</script>

<style lang="postcss">
body {
  background: #EDE9FE;
  display: flex;
  justify-content: center;
}
#app {
  font-family: 'Montserrat', sans-serif;
  width: 375px;
}

.text-ellipsis {
  @apply whitespace-nowrap overflow-hidden overflow-ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
