import {OrderStoreServices} from "@/db/services/orderStore-services";

export async function POST(request: Request) {

    try {
        const data = await request.json()

        const res = await OrderStoreServices.writeArticles(data)

        if (res != "OK") {
            new Error("Error write Data")
        }

    } catch (e) {
        console.log(e)
        return new Response("FAIL")
    }

    return new Response("OK")

}