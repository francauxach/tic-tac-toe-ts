import { GamePlayer } from '../../interfaces/GamePlayer'

export function board (state: any) {
  return state.board
}

export function hasEnded (state: any) {
  return state.hasEnded
}

export function players (state: any) {
  return state.players
}

export function currentPlayer (state: any) {
  return state.players.find((player: GamePlayer) => player.isMarking === true)
}

export function winner (state: any) {
  return state.winner
}

export function totalMatches (state: any) {
  return state.totalMatches
}
