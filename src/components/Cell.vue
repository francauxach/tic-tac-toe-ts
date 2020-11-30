<template>
  <div class="bg-gray-800 h-full text-white flex justify-center items-center">{{ cell }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Cell',
  props: ['cell']
})
export default class Cell extends Vue {}
</script>

<style>

</style>
