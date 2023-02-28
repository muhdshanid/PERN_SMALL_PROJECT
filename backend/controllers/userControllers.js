
export const loginSuccess = (req,res) => {
    const user = {
       ...req.user,
       loggedIn:true
    }
    return res.json(user)
}