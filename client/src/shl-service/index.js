export default {
  standings: () => fetch('/api/standings').then(res => res.json()),
  games: () => fetch('/api/games').then(res => res.json()),
  goalies: () => fetch('/api/goalies').then(res => res.json()),
  players: () => fetch('/api/players').then(res => res.json()),
  winstreaks: () => fetch('/api/winstreaks').then(res => res.json()),
}
