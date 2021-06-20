<template>
  <div id="app" class="relative h-screen w-full flex flex-col justify-between bg-violet-400 bg-purple-100 scroll-x-none overflow-hidden">
    <Loading />
    <template v-if="!loadingState" >
      <Header/>
      <Main/>
      <Pay/>
      <VirtualCard/>
      <Footer/>
    </template>
  </div>
</template>

<script>
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'

import Loading from '@/components/features/Loading'
import Pay from '@/components/features/Pay'
import VirtualCard from '@/components/features/VirtualCard'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      userNubank: {}
    }
  },
  created () {
    const nubankUserSaved = localStorage.getItem('nubank-user')

    if (nubankUserSaved) {
      this.userNubank = JSON.parse(nubankUserSaved)
    } else {
      this.userNubank.name = prompt('Digite o seu nome e sobrenome')
      this.userNubank.balance = prompt('Digite o saldo desejado')
      this.userNubank.limit = prompt('Digite o limite desejado')
      this.userNubank.visibilityOfValues = this.balanceVisibilityStatus

      localStorage.setItem('nubank-user', JSON.stringify(this.userNubank))
    }
    this.SET_USERNAME(this.userNubank.name)
    this.SET_BALANCE(this.userNubank.balance)
    this.SET_LIMIT(this.userNubank.limit)
    this.changeVisibilityStatusIcon(this.userNubank.visibilityOfValues)
    this.load(false)
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
      'loadingState',
    ])
  },
  components: {
    Header,
    Main,
    Footer,
    Loading,
    Pay,
    VirtualCard,
  },
  methods: {
    ...mapMutations([
      'changeVisibilityStatusIcon',
      'changeVisibilityStatus',
      'SET_USERNAME',
      'SET_LIMIT',
      'SET_BALANCE'
    ]),
    ...mapActions({
      load: 'loading'
    })
  },
  watch: {
    balanceVisibilityStatus () {
      this.userNubank.visibilityOfValues = this.balanceVisibilityStatus
      localStorage.setItem('nubank-user', JSON.stringify(this.userNubank))
    }
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
