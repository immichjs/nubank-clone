<template>
  <footer class="fixed bottom-0 left-0 w-full h-30 flex justify-center items-center px-4 bg-violet-400">
    <div class="overflow-x-scroll">
      <ul class="grid gap-2 grid-flow-col">
        <li v-for="item in getFooterListItems" :key="item.id">
          <div class="flex flex-col bg-violet-200 w-24 p-2 rounded-sm h-24 justify-between">
            <box-icon :name="item.icon" color="#fff"/>
            <span class="justify-self-end text-white-default">{{ item.name }}</span>
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
