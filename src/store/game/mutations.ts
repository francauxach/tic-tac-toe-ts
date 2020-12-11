import { GamePlayer } from '../../interfaces/GamePlayer'

export const mutations = {
  selectCell (state: any, cellId: number) {
    state.board.push(cellId)
  },
  toggleCurrentPlayer (state: any) {
    state.players.forEach((player: GamePlayer) => {
      player.isMarking = !player.isMarking
    })
  }
}
