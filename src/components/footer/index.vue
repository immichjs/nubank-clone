<template>
  <footer class="py-4 bg-violet-400">
    <div v-dragscroll class="overflow-hidden scroll-x-none">
      <ul class="grid gap-2 grid-flow-col">
        <li v-for="item in getFooterListItems" :key="item.id" @click="item.nameState ? changeState({ name: item.nameState, status: true }) : notWork()" class="cursor-pointer">
          <div class="flex flex-col bg-violet-200 w-24 p-2 rounded h-24 justify-between">
            <box-icon :name="item.icon" color="#fff"/>
            <span class="justify-self-end text-xs font-medium text-white-default">{{ item.name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index.js'

export default {
  name: 'Footer',
  mixins: [operationNotice],
  data () {
    return {
      items: 'flex flex-col bg-violet-200 rounded p-2 w-24 h-24',
    }
  },
  computed: {
    ...mapGetters([
      'getFooterListItems'
    ])
  },
  methods: {
    ...mapMutations({
      changeState: 'changeFooterItemState'
    })
  }
}
</script>

<style lang="postcss" scoped>
li:first-child {
  @apply pl-4;
}

li:last-child {
  @apply pr-4;
}
</style>
