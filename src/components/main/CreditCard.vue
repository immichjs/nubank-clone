<template>
  <div class="flex flex-col gap-3 w-full bg-white p-6 rounded-sm text-gray-default font-medium">
    <div class="flex items-center gap-3">
      <box-icon name='credit-card-alt' size="md" color="#9CA3AF"/>
      <span>Cartão de Crédito</span>
    </div>
    <p class="text-sm">Fatura Atual</p>
    <div class="flex flex-col gap-1">
      <span class="text-2xl font-bold text-invoice">R$ {{ currentInvoice }}</span>
      <p class="text-sm">Limite disponível <span class="text-avaliable font-bold">R$ {{ avaliableLimit }}</span></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'currentInvoice',
      'avaliableLimit',
    ])
  }
}
</script>

<style>

</style>
