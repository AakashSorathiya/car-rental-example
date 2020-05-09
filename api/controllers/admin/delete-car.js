module.exports = {

  inputs: {},

  exits: {
    success: {
      statusCode: 200
    },
    fail: {
      statusCode: 400
    }
  },

  fn: async function(inputs, exits) {
    const bookings = await Booking.find({ carId: this.req.query.id, status: 'active' })
    if(bookings.length == 0) {
      Car.remove({ id: this.req.query.id })
    }
    else {
      return exits.fail("Car is Booked")
    }
  }
}