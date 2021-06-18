<template>
    <button
        class="py-2.5 px-4 rounded border border-purple-600 self-start text-violet-400 font-bold text-xs"
        :class="[uppercase ? 'uppercase' : '']"
        @click="notWork"
    >{{ description }}</button>
</template>

<script>
import { operationNotice } from '../../assets/mixin/index'

export default {
    props: {
        description: { type: String },
        uppercase: { type: Boolean },
    },
    mixins: [operationNotice]
}
</script>
