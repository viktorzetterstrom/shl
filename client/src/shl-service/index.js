
const apiUrl = process.env.NODE_ENV === 'development'
  ? 'https://localhost:4443/shl'
  : 'https://api.zetterstrom.dev/shl';

const shlService = {
  standings: () => fetch(`${apiUrl}/standings`).then(res => res.json()),
  games: () => fetch(`${apiUrl}/games`).then(res => res.json()),
  goalies: () => fetch(`${apiUrl}/goalies`).then(res => res.json()),
  players: () => fetch(`${apiUrl}/players`).then(res => res.json()),
  winstreaks: () => fetch(`${apiUrl}/winstreaks`).then(res => res.json()),
}

export default shlService;
