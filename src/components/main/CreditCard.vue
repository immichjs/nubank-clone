<template>
  <div class="flex flex-col gap-3 w-full bg-white p-6 rounded-sm text-gray-default font-medium">
    <div class="flex items-center gap-3">
      <box-icon name='credit-card-alt' rotate="270" color="#9CA3AF"/>
      <span class="text-gray-default text-sm">Cartão de Crédito</span>
    </div>
    <p class="text-sm">Fatura Atual</p>
    <div class="flex flex-col gap-1" v-if="balanceVisibilityStatus">
      <span class="text-2xl font-bold text-invoice">{{ currentInvoice | currency }}</span>
      <p class="text-sm">Limite disponível <span class="text-available font-bold">{{ availableLimit | currency }}</span></p>
    </div>
    <div v-else class="bg-ocult h-14"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentInvoice',
      'availableLimit',
      'balanceVisibilityStatus'
    ])
  },
  methods: {
    ...mapMutations([
      'changeVisibilityStatus',
    ])
  },
}
</script>
