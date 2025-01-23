const jwt = require("jsonwebtoken")

module.exports = function(req , res , next){
  let token = req.headers.authorization.split(' ')[1]
  let verifiedToken = jwt.verify(token , `${process.env.SECRET_KEY}`)


  
  next()
  console.log(verifiedToken)
}