<template>
  <transition mode="out-in" enter-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutDown">
    <div class="absolute w-full bottom-0 bg-white h-100vh-16px" v-if="depositStatus">
      <div class="flex justify-between items-center p-2 rounded-t-lg">
        <box-icon name='x' size="md" color="#6B7280" class="cursor-pointer" @click="changeState({ name: 'depositStatus', status: false })"></box-icon>
      </div>

      <h1 class="font-semibold text-2xl mx-4">Como você quer<br> depositar na sua conta<br> do Nubank?</h1>
      
      <div class="flex flex-col h-100vh-68px">
        <div class="flex items-center border-b py-6" @click="notWork">
          <box-icon name="move" color="#6B7280" class="w-20"/>
          <div class="flex flex-col gap-2 text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Pix</span>
            <p class="text-xs">Sem custo e cai na hora, mesmo de madrugada e fim de semana.</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#6B7280" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
        <div class="flex items-center border-b py-6" @click="notWork">
          <box-icon name="barcode" color="#6B7280" class="w-20"/>
          <div class="flex flex-col gap-2 text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Boleto</span>
            <p class="text-xs">Sem custo e pode levar 3 dias úteis para o dinheiro cair.</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#6B7280" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
        <div class="flex items-center border-b py-6" @click="notWork">
          <box-icon name="money" color="#6B7280" class="w-20"/>
          <div class="flex flex-col gap-2 text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">TEC/DOC</span>
            <p class="text-xs">Pode ter custo e cai somente em horários comercial de dias úteis</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#6B7280" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
        <div class="flex items-center border-b py-6" @click="notWork">
          <box-icon name="money" color="#6B7280" class="w-20"/>
          <div class="flex flex-col gap-2 text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Trazer seu salário</span>
            <p class="text-xs">Receba todo mês direto aqui na sua conta, sem custo.</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#6B7280" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index.js'

export default {
  name: 'Deposit',
  mixins: [operationNotice],
  computed: {
    ...mapGetters(['depositStatus'])
  },
  methods: {
    ...mapMutations({
      changeState: 'changeFooterItemState'
    }),
  }
}
</script>
