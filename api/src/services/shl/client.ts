import { ShlConnection } from "./connection";
import { formatWinstreaks } from "./response-formatters/winstreaks";
import { GameResponse } from "./responses/game";
import { StandingsResponse } from "./responses/standing";
import { SkaterResponse } from "./responses/skater";
import { GoalkeeperResponse } from "./responses/goalkeeper";

export class ShlClient {
  constructor(private connection: ShlConnection) {}

  public connected = this.connection.connected;

  async connect(): Promise<void> {
    await this.connection.connect();
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
          winstreaks: async () =>
            formatWinstreaks(
              await this.connection.get<GameResponse[]>(
                `${base}/statistics/teams/standings`
              )
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
