import mongoose from "mongoose";
import dns from "node:dns";

// Fix Node.js querySrv ECONNREFUSED on Windows
dns.setServers(["8.8.8.8", "1.1.1.1"]);


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error");
        console.log(error);
    }
}
export default connectDb