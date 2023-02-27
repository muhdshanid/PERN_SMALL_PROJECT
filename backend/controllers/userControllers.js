
export const loginSuccess = (req,res) => {
    const user = {
       ...req.user,
       loggedIn:true
    }
    res.json(user)
}