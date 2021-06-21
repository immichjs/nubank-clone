<template>
  <div class="absolute z-10 w-full h-screen flex flex-col items-center bg-violet-400" v-if="configState">
    <div class="w-full px-4 pt-8 py-4 bg-violet-400">
      <div class="flex items-center justify-between h-16 truncate gap-4">
        <h1 class="text-2xl font-bold text-white-default w-full truncate">Olá, {{ username }}</h1>
        <div :class="configIcons.divClasses" @click="changeState(false)">
          <box-icon name='x' :color="configIcons.colorIcons" />
        </div>
      </div>
    </div>
    <div v-dragscroll class="w-full px-8 h-screen overflow-y-scroll scroll-x-none">
      <div class="text-white text-center text-xs font-medium mb-8">
        <p>Agência 3962 Conta 0043215-6</p>
        <p>Banco 260 - Nu Pagamentos S.A.</p>
      </div>

      <ul>
        <li v-for="item in configItems" :key="item.id" class="flex justify-between px-4 border-b py-5 border-white border-opacity-30" @click="notWork">
          <div class="flex text-white gap-4 text-sm">
            <box-icon :name='item.icon' color="#fff"></box-icon>
            <p>{{ item.name }}</p>
          </div>
          <box-icon type='solid' name='chevron-right' size="20px" color="#fff"></box-icon>
        </li>
      </ul>

      <button class="border w-full py-4 rounded-md mt-8 focus:outline-none mb-8 uppercase font-semibold text-white text-sm" @click="logOut">Sair do app</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index'

export default {
  name: 'Config',
  data () {
      return {
      configIcons: {
        divClasses: 'flex items center p-4 bg-violet-200 rounded-full',
        colorIcons: '#F6F5F5'
      }
    }
  },
  mixins: [operationNotice],
  computed: {
    ...mapGetters({
      username: 'username',
      configItems: 'configItems',
      configState: 'configState'
    })
  },
  methods: {
    ...mapMutations({
      changeState: 'changeConfigState',
      setUser: 'setUser',
      changeStartState: 'changeStartState',
      setCardIndex: 'setCardIndex',
      changeVisibilityStatusIcon: 'changeVisibilityStatusIcon'
    }),
    logOut () {
      this.setUser({ name: '', balance: 0, limit: 0 })
      this.setCardIndex(0)
      this.changeStartState(true)
      this.changeVisibilityStatusIcon(true)
      this.changeState(false)
      localStorage.removeItem('nubank-user')
    }
  }
}
</script>

<style lang="postcss" scoped>
ul li:first-child {
  @apply border-t border-white border-opacity-30
}
</style>
