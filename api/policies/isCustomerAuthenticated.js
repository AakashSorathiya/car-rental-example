const jwt = require('jsonwebtoken')

module.exports = async function(req, res, proceed) {
  const token = req.header('Authorization').replace('Bearer ', '');
  console.log(token);
  if(!token) {
    return res.badRequest("Bad Request")
  }
  const decode = jwt.verify(token, 'secret');
  const customer = await Customer.findOne({ id: decode.id.id });
  if(!customer) {
    return res.badRequest("No User Found")
  }
  req.session.customer = customer
  return proceed()
}