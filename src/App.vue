<template>
  <div id="app" class="h-screen w-full flex flex-col justify-between bg-violet-400 bg-purple-100">
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
    const name = prompt('Digite o seu nome e sobrenome')
    const balance = prompt('Digite o saldo desejado')
    const limit = prompt('Digite o limite desejado')
    this.SET_USERNAME(name)
    this.SET_BALANCE(balance)
    this.SET_LIMIT(limit)
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
      'SET_LIMIT',
      'SET_BALANCE'
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
}

@media only screen and (min-width: 768px) {
  #app {
    width: 375px;
  }
}

.text-ellipsis {
  @apply whitespace-nowrap overflow-hidden overflow-ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
