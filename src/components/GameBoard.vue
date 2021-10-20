<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import Cell from './Cell.vue'

const store = useStore()

const currentPlayer = computed(() => {
  return store.getters['game/currentPlayer']
})

const hasEnded = computed(() => {
  return store.getters['game/hasEnded']
})

const winner = computed(() => {
  return store.getters['game/winner']
})

function restart () { store.dispatch('game/restart') }
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-1/5">
      <div class="flex items-center justify-center h-16 rounded-t-3xl bg-yellow-300">
        <span class="font-gochi text-white text-2xl" v-if="hasEnded && winner">Game over! The winner is {{ winner.name }}</span>
        <span class="font-gochi text-white text-2xl" v-else-if="hasEnded && !winner">Game over! We have deuce.</span>
        <span class="font-gochi text-white text-2xl" v-else>{{ currentPlayer.name + '\'s turn' }}</span>
      </div>
      <div class="bg-gray-900 grid grid-cols-3 gap-3">
        <div class="h-28" v-for="cellId in 9" :key="cellId">
          <Cell :cellId="cellId" />
        </div>
      </div>
      <div class="flex items-center justify-center h-16 rounded-b-3xl bg-red-400 cursor-pointer">
        <span @click.stop="restart" class="font-gochi text-white text-2xl">Restart</span>
      </div>
    </div>
  </div>
</template>