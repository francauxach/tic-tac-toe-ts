<template>
  <div @click="toggleMark" class="cell select-none text-9xl bg-gray-800 h-full text-white flex justify-center items-center cursor-pointer">{{ mark }}</div>
</template>

<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component'
import { CellSelection } from '../interfaces/CellSelection'

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
  options = ['x', '0']

  private toggleMark () {
    this.mark = this.options[Math.floor(Math.random() * this.options.length)]
    const selection: CellSelection = { cellId: this.cellId, gamePlayer: { name: 'Franc', selection: [1] } }
    this.$store.dispatch('game/makeCellSelection', selection)
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap')

.cell
  font-family: 'Gochi Hand', cursive

</style>
