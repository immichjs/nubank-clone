<template>
    <div class="flex flex-col gap-4 bg-white w-full h-auto rounded-sm p-6">
      <div class="flex gap-4 items-center font-medium">
        <box-icon name='bar-chart' color="#9CA3AF"></box-icon>
        <span class="text-gray-default text-sm">Investimentos Easynvent</span>
      </div>
      <p class="text-sm font-medium">Conheça a Easynvent e invista com taxa zero de corretagem e sem burocracias!</p>
      <ToMeetButton :description="'Conhecer'" :uppercase="true"/>
  </div>
</template>

<script>
import ToMeetButton from './ToMeetButton'

export default {
  components: {
    ToMeetButton
  },
}
</script>
