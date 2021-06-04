<template>
  <div class="flex flex-col gap-4 bg-white w-full h-auto rounded-sm p-6">
    <div class="flex gap-4 items-center font-medium">
      <box-icon name='donate-heart' color="#9CA3AF"></box-icon>
      <span class="text-gray-default text-sm">Empréstimo</span>
    </div>
    <div v-if="balanceStatus">
      <p class="text-sm font-medium">Valor disponível até</p>
      <p class="font-bold">{{ loanValue | currency }}</p>
    </div>
    <div v-else class="bg-ocult h-12"></div>
    <ToMeetButton :description="'Simular empréstimo'" :uppercase="true"/>
  </div>
</template>

<script>
import ToMeetButton from './ToMeetButton'
import { mapGetters } from 'vuex'

export default {
  components: {
    ToMeetButton
  },
  computed: {
    ...mapGetters({
      loanValue: 'loanAvailable',
      balanceStatus: 'balanceVisibilityStatus'
    })
  },
}
</script>
