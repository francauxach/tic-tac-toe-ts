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
    <div>
      <div class="flex items-center justify-center h-16 bg-amber-300 rounded-t-3xl" :class="{'bg-blue-400': winner}">
        <span class="text-xl text-white font-gochi sm:text-2xl" v-if="hasEnded && winner">Game over! The winner is {{ winner.name }}</span>
        <span class="text-xl text-white font-gochi sm:text-2xl" v-else-if="hasEnded && !winner">Game over! We have deuce.</span>
        <span class="text-xl text-white font-gochi sm:text-2xl" v-else>{{ currentPlayer.name + '\'s turn' }}</span>
      </div>
      <div class="grid grid-cols-3 gap-3 bg-gray-900">
        <div class="h-26 w-26 sm:h-28 sm:w-28" v-for="cellId in 9" :key="cellId">
          <Cell :cellId="cellId" />
        </div>
      </div>
      <div class="flex items-center justify-center h-16 bg-red-400 cursor-pointer rounded-b-3xl hover:bg-red-500">
        <span @click.stop="restart" class="text-2xl text-white font-gochi">Restart</span>
      </div>
    </div>
  </div>
</template>
