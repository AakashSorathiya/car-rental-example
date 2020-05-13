const bcrypt = require('bcrypt');

module.exports = {

  inputs: {
    name: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
    },

    password: {
      type: 'string',
      required: true,
      minLength: 8,
    },

    contact_num: {
      type: 'string',
      required: true
    },

    state: {
      type: 'string',
    },

    city: {
      type: 'string',
    },
  },

  exits: {
    success: {
      statusCode: 200,
      responseType: 'ok',
      description: 'New User Created',
    },
    badRequest: {
      responseType: 'badRequest',
      description: 'Bad Request',
    }
  },

  fn: async function(inputs, exits) {
    Customer.create({
      name: inputs.name,
      email: inputs.email,
      password: await bcrypt.hash(inputs.password, 8),
      contact_num: inputs.contact_num,
      state: inputs.state,
      city: inputs.city,
    }).then(function(response) {
      return exits.success("New Customer Created");
    }).catch(function(err) {
      console.log(err)
      return exits.badRequest();
    })
  }
}