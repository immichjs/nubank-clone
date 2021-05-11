<template>
  <div class="flex flex-col gap-3 w-full bg-white p-6 rounded-sm text-gray-default font-medium">
    <div class="flex items-center gap-3">
      <box-icon name='coin-stack' color="#9CA3AF"/>
      <span>Conta</span>
    </div>
    <p class="text-sm">Saldo disponível</p>
    <div class="flex flex-col gap-1">
      <span class="text-2xl font-bold text-balance" v-if="balanceVisibilityStatus">R$ {{ balanceAvailable | BRL }}</span>
      <span v-else class="bg-ocult h-8"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import BRL from '@/mixins/brlCoin'

export default {
  computed: {
    ...mapGetters([
      'balanceAvailable',
      'balanceVisibilityStatus',
    ])
  },
  mixins: [BRL]
}
</script>
