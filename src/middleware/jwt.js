const jwt = require("jsonwebtoken");

const createJWT = (user) => {
    const token = jwt.sign({user: user.dataValues}, "private-key-classroom", )
}

//belom kelar, butuh nonton record pas review dlu baru dikelarin