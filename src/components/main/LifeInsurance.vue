<template>
  <div class="flex flex-col gap-4 bg-white w-full h-auto rounded-sm p-6">
    <div class="flex gap-4 items-center font-medium">
      <img
        src="@/assets/img/umbrella.svg"
        class="bg-icon p-3 rounded-full"
        alt="Icone de Guarda-chuva"
        width="48"
      >
      <span class="text-violet-400 text-xl">Seguro de vida</span>
    </div>
    <p class="font-medium">Conheça Nubank Vida: um seguro simples e que cabe no bolso.</p>
    <ToMeetButton/>
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
