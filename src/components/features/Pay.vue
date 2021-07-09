<template>
  <transition mode="out-in" enter-active-class="animate__animated animate__slideInUp" leave-active-class="animate__animated animate__slideOutDown">
    <div class="absolute w-full bottom-0 bg-white h-100vh-16px" v-if="payStatus">
      <div class="flex justify-between items-center p-2 rounded-t-lg">
        <box-icon name='x' size="md" color="#ccc" class="cursor-pointer" @click="changeState({ name: 'payStatus', status: false })"></box-icon>
      </div>
      
      <div class="grid grid-rows-3 h-100vh-68px">
        <div class="flex items-center border-b" @click="notWork">
          <box-icon name="move" color="#830AD1" class="w-20"/>
          <div class="text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Pagar com Pix</span>
            <p>Leia um QR Code ou cole um código</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#ccc" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
        <div class="flex items-center border-b" @click="notWork">
          <box-icon name="credit-card-alt" color="#830AD1" class="w-20"/>
          <div class="text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Pagar fatura do cartão</span>
            <p>Libere o limite do seu Cartão de Crédito</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#ccc" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
        <div class="flex items-center" @click="notWork">
          <box-icon name="barcode" color="#830AD1" class="w-20"/>
          <div class="text-sm text-gray-500 w-full">
            <span class="font-semibold text-gray-900">Pagar um boleto</span>
            <p>Contas de luz, água, etc</p>
          </div>
          <box-icon type='solid' name='chevron-right' color="#ccc" size="16px" class="w-32 flex justify-center"></box-icon>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index.js'

export default {
  name: 'Pay',
  mixins: [operationNotice],
  computed: {
    ...mapGetters(['payStatus'])
  },
  methods: {
    ...mapMutations({
      changeState: 'changeFooterItemState'
    }),
  }
}
</script>

<style>

</style>
