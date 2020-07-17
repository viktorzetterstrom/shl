import { ShlConnection } from "./connection";
import { GameResponse } from "./external-response-types/game";
import { StandingsResponse } from "./external-response-types/standing";
import { SkaterResponse } from "./external-response-types/skater";
import { GoalkeeperResponse } from "./external-response-types/goalkeeper";

export class ShlClient {
  constructor(private connection: ShlConnection) {}

  async connect(): Promise<void> {
    await this.connection.connect();
  }

  get connected() {
    return this.connection.connected;
  }

  season(year: number) {
    const base = `/seasons/${year}`;
    return {
      games: async () => this.connection.get<GameResponse[]>(`${base}/games`),

      game: async (gameId: number) =>
        this.connection.get<GameResponse>(`${base}/games/${gameId}`),

      statistics: {
        goalkeepers: async () =>
          this.connection.get<GoalkeeperResponse[]>(
            `${base}/statistics/goalkeepers?sort=savesPercent`
          ),
        skaters: async () =>
          this.connection.get<SkaterResponse[]>(
            `${base}/statistics/players?sort=points`
          ),
        teams: {
          standings: async () =>
            this.connection.get<StandingsResponse[]>(
              `${base}/statistics/teams/standings`
            ),
        },
      },
    };
  }

  async teams() {
    return this.connection.get("/teams");
  }

  async team(teamId: number) {
    return this.connection.get(`/teams/${teamId}`);
  }

  async videos() {
    return this.connection.get("/videos");
  }

  articles() {
    return this.connection.get("articles");
  }
}
