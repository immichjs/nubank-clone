<template>
  <div id="app" class="flex flex-col items-start h-screen bg-violet-400">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Main from '@/components/main'
import Footer from '@/components/footer'

export default {
  name: 'App',
  metaInfo: {
    title: 'Nubank | Clone',
    htmlAttrs: {
      lang: 'pt-br',
    }
  },
  components: {
    Header,
    Main,
    Footer,
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Montserrat', sans-serif;
}

.text-ellipsis {
  @apply whitespace-nowrap overflow-hidden overflow-ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
