import { CellSelection } from '../../interfaces/CellSelection'

export function makeCellSelection ({ commit }: any, selection: CellSelection) {
  commit('selectCell', selection)
  commit('determineWinner', selection.gamePlayer)
}

export function changeTurn ({ commit }: any) {
  commit('toggleCurrentPlayer')
}

export function restart ({ commit }: any) {
  commit('restartGame')
}
