<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const players = computed(() => {
  return store.getters['game/players']
})
</script>

<template>
  <div class="flex h-16 bg-green-600 justify-between items-center text-4xl text-white font-bold font-gochi relative">
    <div class="absolute w-full text-center">Score Board</div>
    <div v-for="player in players" :key="player.mark" class="px-8">{{ player.name }} has {{ player.totalWins || 'no' }} wins</div>
  </div>
</template>

<style>

</style>
