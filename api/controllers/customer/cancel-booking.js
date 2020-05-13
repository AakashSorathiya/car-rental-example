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
    const booking = await Booking.findOne({ id: this.req.query.id })
    if(!booking) {
      return exits.fail("No booking found")
    }
    Booking.updateOne({ id: booking.id }).set({ status: 'cancelled'}).then(function(response) {
      return exits.success("Booking Cancelled")
    }).catch(function(err) {
      console.log(err)
      return exits.fail("Bad Request")
    })
  }
}