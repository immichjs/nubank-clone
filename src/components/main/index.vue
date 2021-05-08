<template>
  <main class="flex flex-col items-center w-full p-4 overflow-y-scroll h-70 gap-4">
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>
    <CreditCard/>
  </main>
</template>

<script>
import CreditCard from './CreditCard'

export default {
  components: {
    CreditCard,
  }
}
</script>

<style>

</style>
