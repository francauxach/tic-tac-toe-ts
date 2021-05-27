<template>
  <div @click="select" class="font-gochi select-none text-9xl bg-gray-800 h-full text-white flex justify-center items-center" :class="{'cursor-pointer': !hasEnded}">
    {{ mark }}
  </div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { CellSelection } from '../interfaces/CellSelection'
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
  @Getter('game/currentPlayer') currentPlayer: GamePlayer
  @Getter('game/hasEnded') hasEnded: boolean

  private mark = ''

  private select () {
    if (!this.hasEnded && !this.$store.state.game.board.map((cell: CellSelection) => cell.id).includes(this.cellId)) {
      this.mark = this.currentPlayer.mark
      this.$store.dispatch('game/makeCellSelection', { id: this.cellId, gamePlayer: this.currentPlayer, mark: this.currentPlayer.mark }).then(() => {
        if (!this.hasEnded) {
          this.$store.dispatch('game/changeTurn')
        }
      })
    }
  }

  mounted () {
    this.$store.subscribeAction((action: any) => {
      if (action.type === 'game/restart') {
        this.mark = ''
      }
    })
  }
}
</script>

<style lang="sass">

</style>
