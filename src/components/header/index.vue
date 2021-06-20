<template>
  <header class="w-full px-4 pt-8 py-4 bg-violet-400">
    <div class="flex items-center justify-between h-16 truncate">
      <h1 class="text-2xl font-bold text-white-default w-1/2 truncate">Olá, {{ username }}</h1>
      <div class="flex gap-2">
        <div :class="configIcons.divClasses" @click="changeVisibilityStatusIcon(false)" v-if="balanceVisibilityStatus">
          <box-icon name='hide' :color="configIcons.colorIcons" />
        </div>

        <div :class="configIcons.divClasses" @click="changeVisibilityStatusIcon(true)" v-else>
          <box-icon name='show' :color="configIcons.colorIcons" />
        </div>

        <div :class="configIcons.divClasses" @click="notWork">
          <box-icon name='cog' :color="configIcons.colorIcons" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { operationNotice } from '../../assets/mixin/index'

export default {
  name: 'Header',
  mixins: [operationNotice],
  data () {
    return {
      configIcons: {
        divClasses: 'flex items center p-4 bg-violet-200 rounded-full',
        colorIcons: '#F6F5F5'
      }
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'balanceVisibilityStatus',
    ])
  },
  methods: {
    ...mapMutations([
      'changeVisibilityStatusIcon'
    ])
  }
}
</script>
