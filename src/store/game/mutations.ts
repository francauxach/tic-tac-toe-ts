import { CellSelection } from '../../interfaces/CellSelection'
import { GamePlayer } from '../../interfaces/GamePlayer'
import { checkWinner } from 'matrix-winner-decider'

export const mutations = {
  selectCell (state: any, selection: CellSelection) {
    state.players.find((player: GamePlayer) => player.mark === selection.gamePlayer.mark).selection.push(selection.id)
    state.board[Math.floor((selection.id - 1) / 3)][(selection.id - 1) % 3] = selection.mark
  },
  toggleCurrentPlayer (state: any) {
    state.players.forEach((player: GamePlayer) => {
      player.isMarking = !player.isMarking
    })
  },
  determineWinner (state: any, currentPlayer: GamePlayer) {
    const winnerCells = checkWinner(state.board, state.players.map((player: GamePlayer) => player.mark), 3)

    if (winnerCells) {
      currentPlayer.totalWins += 1
      state.winner = currentPlayer
      state.winnerCells = winnerCells
      state.hasEnded = true
    }

    if (state.board.flat().filter((cell: any) => cell).length === 9) {
      state.hasEnded = true
    }
  },
  restartGame (state: any) {
    if (state.winner || state.board.flat().filter((cell: any) => cell).length === 9) {
      state.totalMatches += 1
    }
    state.board = [...Array(3)].map(() => [...Array(3)].map(() => undefined)),
    state.players.forEach((player: GamePlayer) => { player.selection = [] })
    state.players[0].isMarking = true
    state.players[1].isMarking = false
    state.winner = null
    state.winnerCells = []
    state.hasEnded = false
  }
}
