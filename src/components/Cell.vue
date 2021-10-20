<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { CellSelection } from '../interfaces/CellSelection'
import { GamePlayer } from '../interfaces/GamePlayer'

const props = defineProps<{ cellId: Number }>()

const store = useStore()

const currentPlayer = computed((): GamePlayer => {
  return store.getters['game/currentPlayer']
})

const hasEnded = computed((): boolean => {
  return store.getters['game/hasEnded']
})

const board = computed(() => {
  return store.getters['game/board']
})

const mark = computed(() => {
  return board.value.find((cell: any) => cell.id === props.cellId)?.mark || ''
})

const select = () => {
  if (!hasEnded.value && !board.value.map((cell: CellSelection) => cell.id).includes(props.cellId)) {
    store.dispatch('game/makeCellSelection', { id: props.cellId, gamePlayer: currentPlayer.value, mark: currentPlayer.value.mark }).then(() => {
      if (!hasEnded.value) {
        store.dispatch('game/changeTurn')
      }
    })
  }
}
</script>

<template>
  <div @click="select" class="font-gochi select-none text-9xl bg-gray-800 h-full text-white flex justify-center items-center" :class="{'cursor-pointer': !hasEnded}">
    {{ mark }}
  </div>
</template>
