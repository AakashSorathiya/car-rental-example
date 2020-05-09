module.exports = {

  inputs: {
    pickup_date: {
      type: 'string',
      required: true,
    },
    return_date: {
      type: 'string',
      required: true,
    },
    pickup_time: {
      type: 'string',
      required: true,
    },
    return_time: {
      type: 'string',
      required: true,
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
    Booking.create({
      carId: this.req.query.carId,
      customersId: this.req.session.customer.id,
      pickup_date: inputs.pickup_date,
      return_date: inputs.return_date,
      pickup_time: inputs.pickup_time,
      return_time: inputs.return_time,
      status: 'active',
    }).fetch().then(function(response) {
      return exits.success("Booking Successful")
    }).catch(function(err) {
      console.log(err)
      return exits.fail("Bad Request")
    })
  }
}