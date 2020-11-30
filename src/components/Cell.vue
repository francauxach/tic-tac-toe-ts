<template>
  <div @click="toggleMark" class="cell select-none text-9xl bg-gray-800 h-full text-white flex justify-center items-center cursor-pointer">{{ mark }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Cell',
  props: ['cell']
})
export default class Cell extends Vue {
  mark = ''
  options = ['x', '0']

  private toggleMark () {
    this.mark = this.options[Math.floor(Math.random() * this.options.length)]
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap')

.cell
  font-family: 'Gochi Hand', cursive

</style>
