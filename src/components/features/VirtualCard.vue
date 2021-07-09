<template>
  <transition mode="out-in" enter-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutDown">
    <div class="absolute w-full bottom-0 bg-white h-100vh-16px rounded-t-lg"  v-if="vcState">
      <div class="flex justify-between items-center p-2 rounded-t-lg">
        <box-icon name='x' size="md" color="#ccc" class="cursor-pointer" @click="changeState({ name: 'virtualCardStatus', status: false })"></box-icon>
        <h1 class="text-center uppercase text-xs font-semibold text-gray-400">Cartão Virtual</h1>
        <box-icon name="help-circle" color="#ccc" @click="notWork"/>
      </div>

      <div class="bg-violet-400 mt-10 rounded-xl mx-8 p-8 flex flex-col gap-12">
        <div class="flex justify-between items-center">
          <img src="../../assets/img/nubank-logo-white.png" width="32">
          <img src="../../assets/img/mastercard-logo.png" width="48">
        </div>
        <div class="flex">
          <p class="text-justify text-white font-semibold w-full md:text-lg">{{ creditCard[cardIndex].number }}</p>
          <box-icon name='copy' color="#fff" class="cursor-pointer" @click="notWork"></box-icon>
        </div>
      </div>

      <div class="px-14 mt-8">
        <div class="py-3 border-b border-gray-100">
          <span class="text-gray-400 text-xs font-medium">Nome do Titular</span>
          <p class="font-semibold text-violet-400 uppercase">{{ username }}</p>
        </div>
        <div class="flex justify-between py-3">
          <div>
            <span class="text-gray-400 text-xs font-medium">Data de vencimento</span>
            <p class="font-semibold text-violet-400">{{ creditCard[cardIndex].cardExpiry }}</p>
          </div>
          <div>
            <span class="text-gray-400 text-xs font-medium">Cód. de Segurança</span>
            <p class="font-semibold text-violet-400">{{ creditCard[cardIndex].cvv }}</p>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 w-full grid grid-cols-2 p-2 border-t py-4">
        <div class="flex flex-col items-center border-r gap-4 justify-center" @click="notWork">
          <box-icon name='trash-alt' color="#9333C2"></box-icon>
          <span class="text-sm">Apagar Cartão</span>
        </div>
        <div class="flex flex-col gap-4 items-center justify-center" @click="notWork">
          <box-icon name='lock-open-alt' color="#9333C2"></box-icon>
          <span class="text-sm ">Bloquear Cartão</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index.js'

export default {
  name: 'VirtualCard',
  mixins: [operationNotice],
  computed: {
    ...mapGetters({
      vcState: 'virtualCardStatus',
      username: 'username',
      creditCard: 'creditCardNumbers',
      cardIndex: 'cardIndex'
    })
  },
  methods: {
    ...mapMutations({
      changeState: 'changeFooterItemState'
    }),
  },
}
</script>

<style>

</style>
