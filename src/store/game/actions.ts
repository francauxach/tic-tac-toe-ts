import { CellSelection } from '../../interfaces/CellSelection'

export function makeCellSelection ({ commit }: any, selection: CellSelection) {
  commit('selectCell', selection.cellId)
  commit('toggleCurrentPlayer')
}
