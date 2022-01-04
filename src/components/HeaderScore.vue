<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const players = computed(() => {
  return store.getters['game/players']
})
</script>

<template>
  <div class="relative flex items-center justify-between h-16 text-4xl font-bold text-white bg-green-600 font-gochi">
    <div class="absolute w-full text-center">Score Board</div>
    <div v-for="player in players" :key="player.mark" class="px-8">{{ player.name }} has {{ player.totalWins || 'no' }} wins</div>
  </div>
</template>

<style>

</style>
