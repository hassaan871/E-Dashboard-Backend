const User = require('../models/User')

const signupUser = async (req, res)=>{
    try{
        // app.use(express.json())
        let user = new User(req.body)
        let result = await user.save()
        res.send(result)
    } catch (err){
        res.status(500).send(err.message)
    };
}

module.exports = {signupUser}