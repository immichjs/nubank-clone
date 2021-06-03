<template funcional>
  <div class="flex flex-col gap-4 bg-white w-full h-auto rounded-sm p-6">
    <div class="flex gap-4 items-center font-medium">
      <img
        src="@/assets/img/present.svg"
        class="bg-icon p-3 rounded-full"
        alt="Icone de Guarda-chuva"
        width="48"
      >
      <span class="text-violet-400 text-xl">Rewards</span>
    </div>
    <p class=" text-sm font-medium">Apague compras com pontos que nunca expiram.</p>
    <ToMeetButton :description="'Conhecer'" :uppercase="true"/>
  </div>
</template>

<script>
import ToMeetButton from './ToMeetButton'
export default {
  components: {
    ToMeetButton,
  }
}
</script>
