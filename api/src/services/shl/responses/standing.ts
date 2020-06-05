import { TeamNames } from "../response-formatters/team-names";

export interface StandingsResponse {
  GP: number;
  Rank: number;
  Team: {
    Id: keyof typeof TeamNames;
    Code: string;
  };
  TeamCode: string;
  Diff: number;
  G: number;
  GA: number;
  NonRegL: number;
  NonRegNonW: number;
  NonRegT: number;
  NonRegW: number;
  OTL: number;
  OTT: number;
  OTW: number;
  Points: number;
  RegL: number;
  RegT: number;
  RegW: number;
  SOL: number;
  SOW: number;
}
