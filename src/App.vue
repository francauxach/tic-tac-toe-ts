<template>
  <div class="bg-gray-100 h-screen w-screen">
    <game-board />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import GameBoard from './components/GameBoard.vue'

@Options({
  components: {
    GameBoard
  }
})
export default class App extends Vue {}
</script>

<style lang="sass">

</style>
