<template>
  <div class="absolute z-10 w-full px-8 h-screen flex flex-col justify-center items-center gap-4 bg-violet-400" v-if="startPageState">
    <img src="../../assets/img/nubank-logo-white.png" width="80">
    <div class="bg-white rounded gap-2 p-8 w-full mt-8">
      <form @submit.prevent="setData" class=" flex flex-col gap-2">
        <input type="text" class="input" required placeholder="Seu nome completo" v-model="user.name">
        <input type="number" class="input" required placeholder="Saldo bancário desejado" v-model="user.balance">
        <input type="number" class="input" required placeholder="Limite de cartão desejado" v-model="user.limit">
        <button class="border p-4 rounded bg-violet-400 text-white font-medium text-sm uppercase mt-8">Iniciar</button>
      </form>
    </div>
    <p class="text-gray-50 text-xs font-medium">Made by Mich :)</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Start',
  data () {
    return {
      userNubank: {},
      user: {
        name: '',
        balance: '',
        limit: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      startPageState: 'startState',
      balanceStatus: 'balanceVisibilityStatus'
    })
  },
  methods: {
    ...mapMutations({
      setUser: 'setUser',
      changeState: 'changeStartState',
      changeBalanceState: 'changeVisibilityStatusIcon',
      setCardIndex: 'setCardIndex',
      changeLoadingState: 'changeLoadingState'
    }),
    setData () {
      if (this.user.balance < 0 || this.user.limit < 0) {
        alert('Saldo bancário ou Limite do cartão não podem ser um valores negativos')
        return
      }
      
      this.setUser(this.user)
      this.changeState(false)
      this.changeBalanceState(true)

      Object.assign(this.userNubank, this.user)
      this.userNubank.visibilityOfValues = this.balanceStatus
      this.userNubank.cardIndex = Math.round(Math.random() * 18)

      this.setCardIndex(this.userNubank.cardIndex)
      console.log(this.userNubank)
      localStorage.setItem('nubank-user', JSON.stringify(this.userNubank))
      
      this.changeLoadingState(true)
      this.load()
    },
    ...mapActions({
      load: 'loading'
    })
  }
}
</script>

<style lang="postcss" scoped>
.input {
  @apply p-2 outline-none text-center bg-transparent border-b-2 text-sm focus:border-purple-500 border-gray-200 w-full duration-200
}
</style>
