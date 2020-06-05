import qs from "querystring";
import axios from "axios";

const baseUrl = "https://openapi.shl.se";
const auth = "/oauth2/token";

export class ShlConnection {
  public connected: boolean = false;
  private accessToken?: string;
  private expires?: Date;

  constructor(private id: string, private secret: string) {}

  async connect() {
    const url = baseUrl + auth;
    const { data: response } = await axios.post(
      url,
      qs.encode({
        client_id: this.id,
        client_secret: this.secret,
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    this.accessToken = response.access_token;

    if (!this.accessToken) {
      this.connected = false;
      throw new Error("Unable to connect to external SHL api");
    }

    this.connected = true;
    this.expires = new Date();
    this.expires.setSeconds(this.expires.getSeconds() + response.expires_in);
  }

  async get<T = any>(queryString: string): Promise<T> {
    if (!this.connected) {
      throw new Error("Not connected to external SHL api");
    }
    if (new Date() > this.expires!) {
      await this.connect();
    }
    const { data: response } = await axios.get(baseUrl + queryString, {
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });
    return response;
  }
}
