import { GamePlayer } from './GamePlayer'

export interface CellSelection {
  id: number,
  gamePlayer: GamePlayer,
  mark: string
}
