import dotenv from "dotenv";
import connectDB from "./src/db/db.js";

dotenv.config({
    path: ".env"
})


connectDB();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.DB_URL}`)
//         app.on("error", (error) => {
//             console.log("Error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is runnig on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error", error)
//         throw error
//     }
// })()
