const User = require('../db/models/user')

const authTeacher = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.role !== 2) 
            return res.status(500).json({msg: "Admin resources access denied."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authTeacher