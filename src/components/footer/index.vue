<template>
  <footer class="fixed bottom-0 pb-4 w-full flex justify-center items-center bg-violet-400">
    <div class="overflow-x-scroll scroll-x-none">
      <ul class="grid gap-2 grid-flow-col">
        <li v-for="item in getFooterListItems" :key="item.id">
          <div class="flex flex-col bg-violet-200 w-24 p-2 rounded-sm h-24 justify-between">
            <box-icon :name="item.icon" color="#fff"/>
            <span class="justify-self-end text-xs font-medium text-white-default">{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  data () {
    return {
      items: 'flex flex-col bg-violet-200 rounded p-2 w-24 h-24',
    }
  },
  computed: {
    ...mapGetters([
      'getFooterListItems'
    ])
  }
}
</script>

<style lang="postcss" scoped>
footer {
  width: 375px;
}

li:first-child {
  @apply pl-4;
}

li:last-child {
  @apply pr-4;
}
</style>
