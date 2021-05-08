<template>
  <header class="w-full px-4 pt-12">
    <div class="flex items-center justify-between h-16">
      <h1 class="text-2xl font-bold text-white-default text-ellipsis w-7/12">Olá, {{ getUserName }}</h1>
      <div class="flex gap-2">
        <div :class="configIcons.divClasses" @click="changeVisibilityAccountValue" v-if="getVisibleAccountValue">
          <box-icon
            name='show'
            :color="configIcons.colorIcons"
          />
        </div>
        <div :class="configIcons.divClasses" @click="changeVisibilityAccountValue" v-else>
          <box-icon
            name='hide'
            :color="configIcons.colorIcons"
          />
        </div>
        <div
          :class="configIcons.divClasses"
        >
          <box-icon name='cog' :color="configIcons.colorIcons"/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Header',
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
      'getUserName',
      'getVisibleAccountValue',
    ])
  },
  methods: {
    ...mapMutations([
      'changeVisibilityAccountValue'
    ])
  }
}
</script>
