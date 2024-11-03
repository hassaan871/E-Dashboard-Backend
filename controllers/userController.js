const User = require('../models/User')

const signupUser = async (req, res) => {
    try {
        // app.use(express.json())
        let user = new User(req.body)
        let result = await user.save()
        result = result.toObject()
        delete result.password
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    };
}

const loginUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.send({ result: "Enter both Email and Password" })
        }
        let user = await User.findOne(req.body).select("-password")
        if (!user) {
            res.send({ result: "No user found" })
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { signupUser, loginUser }