export default {
  hasEnded: false,
  board: [],
  players: [
    {
      name: 'Player 1',
      mark: 'x',
      selection: [],
      isMarking: true
    },
    {
      name: 'Player 2',
      mark: '0',
      selection: [],
      isMarking: false
    }
  ],
  winner: null,
  winnerCells: [
    [
      1, 2, 3
    ],
    [
      4, 5, 6
    ],
    [
      7, 8, 9
    ],
    [
      1, 4, 7
    ],
    [
      2, 5, 8
    ],
    [
      3, 6, 9
    ],
    [
      1, 5, 9
    ],
    [
      3, 5, 7
    ]
  ]
}
