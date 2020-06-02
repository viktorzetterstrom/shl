import redis, { RedisClient } from "redis";

class Cache {
  private client?: RedisClient;
  private CACHE_LIFESPAN = 600;

  constructor(private host: string, private port: number) {}

  connect() {
    this.client = redis.createClient({
      port: this.port,
      host: this.host,
    });
  }

  async get(key: string): Promise<string> {
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
}

export const cache = new Cache(
  process.env.REDIS_HOST!,
  Number(process.env.REDIS_PORT)
);
