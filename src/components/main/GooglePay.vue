<template>
  <div class="flex flex-col gap-3 w-full bg-white p-6 rounded-sm text-gray-default font-medium">
    <div class="flex items-center gap-3">
      <box-icon name='credit-card-alt' rotate="270" color="#9CA3AF"/>
      <span class="text-gray-default text-sm">Google Pay</span>
    </div>
    <p class="text-sm font-medium text-black">Use o Google Pay com seus cartões Nubank</p>
    <ToMeetButton :description="'Registrar meu cartão'" :uppercase="true"/>
  </div>
</template>

<script>
import ToMeetButton from './ToMeetButton'
export default {
  components: {
    ToMeetButton
  }
}
</script>
