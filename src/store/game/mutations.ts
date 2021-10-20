import { CellSelection } from '../../interfaces/CellSelection'
import { GamePlayer } from '../../interfaces/GamePlayer'

export const mutations = {
  selectCell (state: any, selection: CellSelection) {
    state.players.find((player: GamePlayer) => player.mark === selection.gamePlayer.mark).selection.push(selection.id)
    state.board.push(selection)
  },
  toggleCurrentPlayer (state: any) {
    state.players.forEach((player: GamePlayer) => {
      player.isMarking = !player.isMarking
    })
  },
  determineWinner (state: any, currentPlayer: GamePlayer) {
    if (state.winnerCells.some((cell: Array<number>) => cell.every((value: number) => currentPlayer.selection.includes(value)))) {
      currentPlayer.totalWins += 1
      state.winner = currentPlayer
      state.hasEnded = true
    }

    if (state.board.length === 9) {
      state.hasEnded = true
    }
  },
  restartGame (state: any) {
    if (state.winner || state.board.length === 9) {
      state.totalMatches += 1
    }
    state.board = []
    state.players.forEach((player: GamePlayer) => { player.selection = [] })
    state.players[0].isMarking = true
    state.players[1].isMarking = false
    state.winner = null
    state.hasEnded = false
  }
}
