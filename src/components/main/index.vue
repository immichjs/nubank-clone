<template>
  <main class="flex flex-col items-center w-full px-4 overflow-y-scroll scroll-y-none md:scroll-y-style h-70 gap-4">
    <WhatsApp/>
    <CreditCard/>
    <NuConta/>
    <Loan/>
    <LifeInsurance/>
    <Rewards/>
    <Easynvent/>
    <GooglePay/>
  </main>
</template>

<script>
import WhatsApp from './WhatsApp'
import CreditCard from './CreditCard'
import NuConta from './NuConta'
import Loan from './Loan'
import LifeInsurance from './LifeInsurance'
import Rewards from './Rewards'
import Easynvent from './Easynvent'
import GooglePay from './GooglePay'

export default {
  components: {
    WhatsApp,
    CreditCard,
    NuConta,
    Loan,
    LifeInsurance,
    Rewards,
    Easynvent,
    GooglePay,
  }
}
</script>
