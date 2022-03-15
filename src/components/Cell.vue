<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GamePlayer } from '../interfaces/GamePlayer'

const props = defineProps<{ cellId: number }>()

const store = useStore()

const currentPlayer = computed((): GamePlayer => {
  return store.getters['game/currentPlayer']
})

const hasEnded = computed((): boolean => {
  return store.getters['game/hasEnded']
})

const mark = computed(() => {
  return store.getters['game/board'][Math.floor((props.cellId - 1) / 3)][(props.cellId - 1) % 3]
})

const isInWinnerCells = computed(() => {
  return store.getters['game/winnerCells'].map((position: Array<number>) => (position[0] * 3 + position[1]) + 1).includes(props.cellId)
})

const select = () => {
  if (!hasEnded.value && !mark.value) {
    store.dispatch('game/makeCellSelection', { id: props.cellId, gamePlayer: currentPlayer.value, mark: currentPlayer.value.mark }).then(() => {
      if (!hasEnded.value) {
        store.dispatch('game/changeTurn')
      }
    })
  }
}
</script>

<template>
  <div @click="select" class="flex justify-center h-full text-white select-none font-gochi text-7xl sm:text-9xl" :class="{'cursor-pointer': !hasEnded, 'bg-green-600': isInWinnerCells, 'bg-gray-800 hover:bg-gray-700': !isInWinnerCells, 'items-start': mark === 'x', 'items-center': mark !== 'x'}">
    {{ mark }}
  </div>
</template>
