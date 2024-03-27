import mongoose from 'mongoose'



const connectionDB = async () => {

    if (mongoose.connections[0].readyState) {
        return true
    }

    try {
        // @ts-ignore
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connected')
        return true
    } catch (err) {
        console.log(err)
    }

}


export default connectionDB;


