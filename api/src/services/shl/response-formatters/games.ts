import { GameResponse } from "../responses/game";

const formatGames = (apiResponse: GameResponse[]) =>
  apiResponse
    .map((game) => ({
      ...game,
      start_date_time: new Date(game.start_date_time),
    }))
    .filter((game) => {
      const oneWeekAway = new Date();
      oneWeekAway.setDate(oneWeekAway.getDate() + 7);
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
      const gameDate = new Date(game.start_date_time);
      return twoWeeksAgo < gameDate && gameDate < oneWeekAway;
    });
