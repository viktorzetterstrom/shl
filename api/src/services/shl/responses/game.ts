export interface GameResponse {
  live?: {
    gametime: string;
    time_period: number;
    game_id: number;
    period: number;
    round: number;
    home_team_code: string;
    home_score: number;
    away_team_code: string;
    away_score: number;
    venue: string;
    attendance: number;
    status_string: string;
  };
  game_id: number;
  game_uuid: string;
  season: string;
  series: string;
  game_type: string;
  round_number: number;
  start_date_time: string;
  home_team_code: string;
  home_team_result: number;
  away_team_code: string;
  away_team_result: number;
  period_results: string;
  game_center_active: boolean;
  played: boolean;
  overtime: boolean;
  penalty_shots: boolean;
  ticket_url: string;
  game_center_url_desktop: string;
  game_center_url_mobile: string;
  tv_channels: string[];
  venue: string;
}
