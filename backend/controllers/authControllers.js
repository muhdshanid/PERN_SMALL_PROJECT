import dotenv from 'dotenv'
dotenv.config()


export const sendResponse = (req,res) => {
    res.redirect(`${process.env.CLIENT_URL}`)
}