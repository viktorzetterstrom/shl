export class ShlClient {
  constructor(private connection) {}

  season(year) {
    const base = `/seasons/${year}`;
    return {
      games: () => this.connection.get(`${base}/games`),
      game: (gameId) => this.connection.get(`${base}/games/${gameId}`),
      statistics: {
        goalkeepers: () =>
          this.connection.get(
            `${base}/statistics/goalkeepers?sort=savesPercent`
          ),
        skaters: () =>
          this.connection.get(`${base}/statistics/skaters?sort=points`),
        teams: {
          standings: () =>
            this.connection.get(`${base}/statistics/teams/standings`),
        },
      },
    };
  }

  teams() {
    return this.connection.get("/teams");
  }

  team(teamId) {
    return this.connection.get(`/teams/${teamId}`);
  }

  videos() {
    return this.connection.get("/videos");
  }

  articles() {
    return this.connection.get("articles");
  }
}
