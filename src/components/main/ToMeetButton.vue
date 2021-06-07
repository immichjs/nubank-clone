<template>
    <button
        class="py-2.5 px-4 rounded border border-purple-600 self-start text-violet-400 font-bold text-xs"
        :class="[
            uppercase ? 'uppercase' : '',
        ]"
        @click="aviso"
    >{{ description }}</button>
</template>

<script>

export default {
    props: {
        description: { type: String },
        uppercase: { type: Boolean },
    },
    methods: {
        aviso() {
            alert('Esse funcionamento ainda está em desenvolvimento.')
        }
    }
}
</script>
