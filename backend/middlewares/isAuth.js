export const isAuth = (req,res,next) => {
    if(req.user) next()
    else{
        return  res.json({loggedIn:false})
    }
}