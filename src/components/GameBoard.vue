<template>
  <div class="flex flex-col items-center">
    <div class="w-1/5">
      <div class="flex items-center justify-center h-16 rounded-t-3xl bg-yellow-300">
        <span class="font-gochi text-white text-2xl" v-if="hasEnded && winner">Game over! The winner is {{ winner.name }}</span>
        <span class="font-gochi text-white text-2xl" v-else-if="hasEnded && !winner">Game over! We have deuce.</span>
        <span class="font-gochi text-white text-2xl" v-else>{{ currentPlayer.name + '\'s turn' }}</span>
      </div>
      <div class="bg-gray-900 grid grid-cols-3 gap-3">
        <div class="h-28" v-for="cellId in 9" :key="cellId">
          <cell :cellId="cellId" />
        </div>
      </div>
      <div class="flex items-center justify-center h-16 rounded-b-3xl bg-red-400 cursor-pointer">
        <span @click.once="restart" class="font-gochi text-white text-2xl">Restart</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Cell from './Cell.vue'
import { GamePlayer } from '../interfaces/GamePlayer'
import { Action, Getter } from 'vuex-class'

@Options({
  components: { Cell },
  name: 'GameBoard'
})
export default class GameBoard extends Vue {
  @Getter('game/currentPlayer') currentPlayer: GamePlayer
  @Getter('game/hasEnded') hasEnded: boolean
  @Getter('game/winner') winner: GamePlayer
  @Action('game/restart') restart: Function
}
</script>

<style lang="sass">

</style>
