export interface GoalkeeperResponse {
  PlayerId: number;
  Info: {
    PlayerId: number;
    FirstName: string;
    LastName: string;
    Number: number;
    Position: string;
    Birthdate: string;
    Height: number;
    Nationality: string;
    Team: {
      Id: string;
      Code: string;
    };
    Teams: [string];
    TeamCode: string;
    Weight: number;
  };
  GP: number;
  GPI: number;
  Rank: number;
  GA: number;
  GAA: number;
  GS: number;
  L: number;
  MIP: string;
  SO: number;
  SOGA: number;
  SVS: number;
  SVSPerc: number;
  T: number;
  ValidRanking: boolean;
  W: number;
}
