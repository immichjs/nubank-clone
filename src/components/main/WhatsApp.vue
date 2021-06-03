<template>
  <div class="flex flex-col gap-4 bg-white w-full h-auto rounded-sm p-6">
    <div class="flex gap-4 items-center font-medium">
      <box-icon type='logo' name='whatsapp' color="#9CA3AF"></box-icon>
      <span class="text-gray-default text-sm">WhatsApp</span>
    </div>
    <h1 class="font-semibold">Envie e receba dinheiro sem sair da conversa</h1>
    <p class="text-sm font-medium">Os pagamentos no WhatsApp são seguros, rápidos e sem tarifas. Tão fácil quanto mandar uma de "bom dia!" no grupo da família.</p>
    <ToMeetButton :description="'Quero conhecer'"/>
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
