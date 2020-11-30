<template>
  <div class="flex justify-center">
    <div class="w-1/5 bg-gray-900 grid grid-cols-3 gap-3">
      <div class="h-28" v-for="cell in 9" :key="cell">
        <cell :cell="cell" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Cell from './Cell.vue'

@Options({
  components: { Cell },
  name: 'GameBoard'
})
export default class GameBoard extends Vue {}
</script>

<style lang="sass">

</style>
