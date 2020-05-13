const jwt = require('jsonwebtoken')

module.exports = async function(req, res, proceed) {
  const token = req.header('Authorization').replace('Bearer ', '');
  console.log(token);
  if(!token) {
    return res.badRequest("Bad Request")
  }
  const decode = jwt.verify(token, 'secret');
  //console.log("--->", decode);
  const admin = await Admin.findOne({ id: decode.id });
  if(!admin) {
    return res.badRequest("No User Found")
  }
  req.session.admin = admin;
  return proceed();
}