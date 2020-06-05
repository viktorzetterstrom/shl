import { GameResponse } from "../responses/game";
import { TeamNames } from "./team-names";

// TODO: Refactor correctly with typescript
export const formatWinstreaks = (apiResponse: GameResponse[]) => {
  const playedGames = apiResponse.filter(
    (game) => new Date() > new Date(game.start_date_time)
  );
  const teamWinstreaks: any = {};
  Object.entries(TeamNames).forEach(([teamId, teamName]) => {
    teamWinstreaks[teamId] = {
      id: teamId,
      name: teamName,
      streaks: {
        both: 0,
        home: 0,
        away: 0,
      },
    };
  });

  const hasLostHome: any = {};
  const hasLostAway: any = {};

  playedGames.forEach((game) => {
    const homeCode = game.home_team_code;
    const awayCode = game.away_team_code;
    const homeResult = game.home_team_result;
    const awayResult = game.away_team_result;

    if (homeResult > awayResult) {
      hasLostAway[awayCode] = true;

      teamWinstreaks[homeCode].streaks = {
        ...teamWinstreaks[homeCode].streaks,
        both:
          !hasLostHome[homeCode] && !hasLostAway[homeCode]
            ? (teamWinstreaks[homeCode].streaks.both += 1)
            : teamWinstreaks[homeCode].streaks.both,
        home: !hasLostHome[homeCode]
          ? (teamWinstreaks[homeCode].streaks.home += 1)
          : teamWinstreaks[homeCode].streaks.home,
      };
    } else {
      hasLostHome[homeCode] = true;

      teamWinstreaks[awayCode].streaks = {
        ...teamWinstreaks[awayCode].streaks,
        both:
          !hasLostHome[awayCode] && !hasLostAway[awayCode]
            ? (teamWinstreaks[awayCode].streaks.both += 1)
            : teamWinstreaks[awayCode].streaks.both,
        away: !hasLostAway[awayCode]
          ? (teamWinstreaks[awayCode].streaks.away += 1)
          : teamWinstreaks[awayCode].streaks.away,
      };
    }
  });
  return Object.values(teamWinstreaks)
    .sort((a: any, b: any) => b.streaks.away - a.streaks.away)
    .sort((a: any, b: any) => b.streaks.home - a.streaks.home)
    .sort((a: any, b: any) => b.streaks.both - a.streaks.both);
};
