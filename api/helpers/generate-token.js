const jwt = require('jsonwebtoken');

module.exports = {

  inputs: {
    id: {
      type: 'string',
      required: true,
    }
  },

  exits: {
    success: {
      description: 'Token Generated'
    },
    fail: {
      description: 'Bad Request'
    }
  },

  fn: function(inputs, exits) {
    const token = jwt.sign({ id: inputs.id }, 'secret');
    if(!token) {
      return exits.fail()
    }
    console.log("-------------------->>>", token);
    Token.create({
      token: token
    }).then(function(response) {
      return exits.success()
    }).catch(function(err) {
      console.log(err)
      return exits.fail()
    })
  }
}