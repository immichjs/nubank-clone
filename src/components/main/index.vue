<template>
  <main class="flex flex-col items-center w-full px-4 overflow-y-scroll h-70 gap-4">
    <CreditCard/>
    <NuConta/>
    <LifeInsurance/>
    <Rewards/>
  </main>
</template>

<script>
import CreditCard from './CreditCard'
import NuConta from './NuConta'
import LifeInsurance from './LifeInsurance'
import Rewards from './Rewards'

export default {
  components: {
    CreditCard,
    NuConta,
    LifeInsurance,
    Rewards,
  }
}
</script>
