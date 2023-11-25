import cors from "cors"
import express from "express"
import userRoute from "./routes/userRoute.js"


const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoute);


app.listen(3000, () => {
    console.log("server berjalan...");
})