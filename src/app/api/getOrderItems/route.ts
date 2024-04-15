import {AddToOrderServices} from "@/db/services/addToOrder-service"


export async function GET() {

    const items = await AddToOrderServices.getArticles()

    return new Response(JSON.parse(JSON.stringify(items)))

}













