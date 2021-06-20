<template>
  <div id="app" class="relative h-screen w-full flex flex-col justify-between bg-violet-400 bg-purple-100 scroll-x-none overflow-hidden">
    <Start/>
    <Loading/>
    <template v-if="!loadStatus" >
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
import Start from '@/components/features/Start'
import Pay from '@/components/features/Pay'
import VirtualCard from '@/components/features/VirtualCard'

import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      userNubank: {},
    }
  },
  created () {
    const nubankUserSaved = JSON.parse(localStorage.getItem('nubank-user'))

    nubankUserSaved && nubankUserSaved.cardIndex
      ? this.userNubank = nubankUserSaved
      : this.changeStartState(true)

    this.setUser({ name: this.userNubank.name, balance: this.userNubank.balance, limit: this.userNubank.limit })
    this.changeVisibilityStatusIcon(this.userNubank.visibilityOfValues)
    this.changeLoadingState(true)
    this.load(false)
  },
  metaInfo: {
    title: 'Nubank | Clone',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  computed: {
    ...mapGetters({
      balanceStatus: 'balanceVisibilityStatus',
      loadStatus: 'loadingState',
      balance: 'balanceAvailable',
      limit: 'availableLimit',
      username: 'username',
      startPageState: 'startState'
    })
  },
  components: {
    Start,
    Header,
    Main,
    Footer,
    Loading,
    Pay,
    VirtualCard,
  },
  methods: {
    ...mapMutations([
      'changeStartState',
      'changeVisibilityStatusIcon',
      'changeVisibilityStatus',
      'changeLoadingState',
      'SET_USERNAME',
      'SET_LIMIT',
      'SET_BALANCE',
      'setUser'
    ]),
    ...mapActions({
      load: 'loading'
    })
  },
  watch: {
    balanceStatus () {
      if (!this.startPageState) {
        this.userNubank = JSON.parse(localStorage.getItem('nubank-user'))
        this.userNubank.visibilityOfValues = this.balanceStatus
        localStorage.setItem('nubank-user', JSON.stringify(this.userNubank))
      }
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
