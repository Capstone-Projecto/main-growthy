const jwt = require('jsonwebtoken');
const verifiedToken = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.send('Access Denied');
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.send('Invalid Token');
    }
}

module.exports = verifiedToken;