<template>
  <div @click="toggleMark" class="cell select-none text-9xl bg-gray-800 h-full text-white flex justify-center items-center cursor-pointer">
    {{ mark }}
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { GamePlayer } from '../interfaces/GamePlayer'
import { Getter } from 'vuex-class'

class Props {
  cellId = prop({
    type: Number,
    required: true
  })
}

@Options({
  name: 'Cell'
})
export default class Cell extends Vue.with(Props) {
  mark = ''
  @Getter('game/currentPlayer') currentPlayer: GamePlayer

  private toggleMark () {
    if (!this.$store.state.game.board.includes(this.cellId)) {
      this.mark = this.currentPlayer.mark
      this.$store.dispatch('game/makeCellSelection', { cellId: this.cellId, gamePlayer: this.currentPlayer })
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap')

.cell
  font-family: 'Gochi Hand', cursive

</style>
