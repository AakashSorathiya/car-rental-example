module.exports = {

  inputs: {
    brand: {
      type: 'string',
    },
    model: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    seating_cap: {
      type: 'number',
      required: true,
    },
    carrier_cap: {
      type: 'number',
      required: true,
    },
    description: {
      type: 'string'
    },
  },

  exits: {
    success: {
      statusCode: 200
    },
    fail: {
      statusCode: 400
    }
  },

  fn: async function(inputs, exits) {
    const car = Car.create({
      brand: inputs.brand,
      model: inputs.model,
      color: inputs.color,
      seating_cap: inputs.seating_cap,
      carrier_cap: inputs.carrier_cap,
      description: inputs.description,
    }).fetch().then(function(response) {
      exits.success("Car Added Successfully")
    }).catch(function(err) {
      console.log(err)
      return exits.fail("Bad Request")
    })
  },
}