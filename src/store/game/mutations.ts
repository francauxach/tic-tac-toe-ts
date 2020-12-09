export const mutations = {
  selectCell (state: any, cellId: number) {
    state.board.push(cellId)
  }
}
