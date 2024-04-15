import Redis, { RedisOptions } from 'ioredis';



function createRedisInstance() {
    try {
        const options: RedisOptions = {
            lazyConnect: true,
            showFriendlyErrorStack: true,
            enableAutoPipelining: true,
            maxRetriesPerRequest: 0,
            retryStrategy: (times: number) => {
                if (times > 3) {
                    throw new Error(`[Redis] Could not connect after ${times} attempts`);
                }

                return Math.min(times * 200, 1000);
            },
        };

        const redis = new Redis(options);

        redis.on('error', (error: unknown) => {
            console.warn('[Redis] Error connecting', error);
        });

        return redis;
    } catch (e) {
        throw new Error(`[Redis] Could not create a Redis instance`);
    }
}

const clientRedis = createRedisInstance()

export function connectRedis<T extends (...args: any[]) => any> (
    func: T,
) {
    return async (...args: Parameters<T>) => {

        try {

            try {

                const result = await func(...args, clientRedis); // Вызываем исходную функцию

                return result;

            } catch (err) {
                console.log(err)
                return new Error("Cant connect to Redis")
            }

             // Возвращаем результат работы функции
        } catch (err) {
            // @ts-ignore
            return { err: err.message }
        }

    };
}





