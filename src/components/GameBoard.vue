<template>
  <div class="flex flex-col items-center">
    <div class="w-1/5">
      <div class="bg-gray-900 grid grid-cols-3 gap-3">
        <div class="h-28" v-for="cellId in 9" :key="cellId">
          <cell :cellId="cellId" />
        </div>
      </div>
      <div class="mt-4">
        <p v-if="hasEnded && winner">The game is over and the winner is: {{ winner.name }}</p>
        <p v-else-if="hasEnded && !winner">The game is over and we have deuce!</p>
        <p v-else>The current player is: {{ currentPlayer.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Cell from './Cell.vue'
import { GamePlayer } from '../interfaces/GamePlayer'
import { Getter } from 'vuex-class'

@Options({
  components: { Cell },
  name: 'GameBoard'
})
export default class GameBoard extends Vue {
  @Getter('game/currentPlayer') currentPlayer: GamePlayer
  @Getter('game/hasEnded') hasEnded: boolean
  @Getter('game/winner') winner: GamePlayer
}
</script>

<style lang="sass">

</style>
