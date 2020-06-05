import { StandingsResponse } from "../responses/standing";
import { TeamNames } from "./team-names";

export const formatStandings = (apiResponse: StandingsResponse[]) =>
  apiResponse.map((position) => ({
    ...position,
    team: {
      ...position.Team,
      name: TeamNames[position.Team.Id],
    },
  }));
