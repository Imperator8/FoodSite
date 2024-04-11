import {createClient} from 'redis'


const clientRedis = createClient();

(async () => {
    await clientRedis.connect();
})()

export function connectRedis<T extends (...args: any[]) => any> (
    func: T,
) {
    return async (...args: Parameters<T>) => {

        try {

            try {

                const result = await func(...args, clientRedis); // Вызываем исходную функцию

                return result;

            } catch (err) {
                return new Error("Cant connect to Redis")
            }

             // Возвращаем результат работы функции
        } catch (err) {
            // @ts-ignore
            return { err: err.message }
        }

    };
}





