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
  <div @click="select" class="font-gochi select-none text-7xl sm:text-9xl bg-gray-800 h-full text-white flex justify-center items-center hover:bg-gray-700" :class="{'cursor-pointer': !hasEnded}">
    {{ mark }}
  </div>
</template>
