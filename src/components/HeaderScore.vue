<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const players = computed(() => {
  return store.getters['game/players']
})
</script>

<template>
  <div class="flex items-center justify-between h-16 px-8 text-4xl font-bold text-white bg-emerald-600 font-gochi">
    <div class="order-2">Score Board</div>
    <div v-for="player in players" :key="player.mark" :class="{'order-1': player.mark === 'x', 'order-3': player.mark !== 'x'}">{{ player.name }} has {{ player.totalWins || 'no' }} wins</div>
  </div>
</template>

<style>

</style>
