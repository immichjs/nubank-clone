<template>
  <main class="flex flex-col items-center w-full p-4 overflow-y-scroll h-70 gap-4">
    <CreditCard/>
    <NuConta/>
    <CreditCard/>
    <NuConta/>
  </main>
</template>

<script>
import CreditCard from './CreditCard'
import NuConta from './NuConta'

export default {
  components: {
    CreditCard,
    NuConta,
  }
}
</script>

<style>

</style>
