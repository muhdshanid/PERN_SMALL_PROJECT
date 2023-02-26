import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors())

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${PORT}`);
})