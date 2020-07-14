import redis, { RedisClient } from "redis";

class Cache {
  private client?: RedisClient;
  private readonly CACHE_LIFESPAN: number = 600;

  public connected: boolean = false;

  constructor(private host: string, private port: number) {}

  async connect() {
    return new Promise((resolve, reject) => {
      try {
        this.client = redis.createClient({
          port: this.port,
          host: this.host,
        });

        this.client.on("ready", () => {
          this.connected = this.client!.connected;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async get(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (!this.client) {
        throw new Error("No redis connection");
      }
      this.client.get(key, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      });
    });
  }

  set(key: string, input: string) {
    if (!this.client) {
      throw new Error("No redis connection");
    }
    this.client.setex(key, this.CACHE_LIFESPAN, input);
  }

  flushAll(): void {
    if (!this.client) {
      throw new Error("No redis connection");
    }
    this.client.flushall();
  }
}

export const cache = new Cache(
  process.env.REDIS_HOST!,
  Number(process.env.REDIS_PORT)
);
