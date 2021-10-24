export default {
  hasEnded: false,
  board: [...Array(3)].map(() => [...Array(3)].map(() => undefined)),
  players: [
    {
      name: 'Player 1',
      mark: 'x',
      selection: [],
      isMarking: true,
      totalWins: 0
    },
    {
      name: 'Player 2',
      mark: '0',
      selection: [],
      isMarking: false,
      totalWins: 0
    }
  ],
  totalMatches: 1,
  winner: null,
}
