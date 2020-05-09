const bcrypt = require('bcrypt');

module.exports = {

  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      responseType: 'ok',
      description: 'Login',
    },
    badRequest: {
      responseType: 'badRequest',
      description: 'Bad Request',
    }
  },

  fn: async function(inputs, exits) {
    const customer = await Customer.findOne({ email: inputs.email });
    if(!customer) {
      return exits.badRequest("Invalid EmailId");
    }
    if(await bcrypt.compare(inputs.password, customer.password)) {
      await sails.helpers.generateToken.with({id: customer.id})
      return exits.success("Login Successful");
    }
    else {
      return exits.badRequest("Please provide valid email and password");
    }
  },
}