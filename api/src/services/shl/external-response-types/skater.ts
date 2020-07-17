export interface SkaterResponse {
  PlayerId: number;
  GP: number;
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
    Teams: string[];
    TeamCode: string;
    Weight: number;
  };
  Rank: number;
  TOI: number;
  TOI_GP: string;
  A: number;
  BkS: number;
  G: number;
  GWG: number;
  Hits: number;
  Minus: number;
  PIM: number;
  PPG: number;
  Plus: number;
  PlusMinus: number;
  SOG: number;
  TP: number;
}
