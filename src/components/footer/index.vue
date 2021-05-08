<template>
  <footer class="fixed bottom-0 left-0 w-full h-32 flex justify-center items-center px-4">
    <div class="overflow-x-scroll">
      <ul class="grid gap-2 grid-flow-col">
        <li v-for="item in getFooterListItems" :key="item.id">
          <div class="flex flex-col bg-violet-200 w-24 h-24 rounded-sm p-2">
            <box-icon name='shopping-bag-alt' color="#fff" type='solid' />
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
