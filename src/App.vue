<template>
  <div id="app" class="h-screen flex flex-col items-start bg-violet-400 gap-4 bg-purple-100">
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
  created () {
    const name = prompt('Digite o seu nome abaixo')
    this.SET_USERNAME(name)
  },
  metaInfo: {
    title: 'Nubank | Clone',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  computed: {
    ...mapGetters([
      'balanceVisibilityStatus',
    ])
  },
  components: {
    Header,
    Main,
    Footer,
  },
  methods: {
    ...mapMutations([
      'changeVisibilityStatus',
      'SET_USERNAME',
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
