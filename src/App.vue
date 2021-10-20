<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import HeaderScore from './components/HeaderScore.vue'
import GameBoard from './components/GameBoard.vue'

const store = useStore()

const totalMatches = computed(() => {
  return store.getters['game/totalMatches']
})
</script>

<template>
  <div class="bg-gray-100 h-screen w-screen">
    <HeaderScore />
    <div class="flex flex-col justify-between items-center text-gray-600 font-bold font-gochi my-4">
      <div class="text-6xl mt-6 mb-4">TIC TAC TOE</div>
      <div class="text-4xl mt-4">Match #{{ totalMatches }}</div>
    </div>
    <GameBoard />
  </div>
</template>
