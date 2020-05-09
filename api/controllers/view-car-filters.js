module.exports = {
  inputs: {
    date: {
      type: 'string',
      required: true
    },
    time: {
      type: 'string',
      required: true
    },
    seating_cap: {
      type: 'number'
    },
    carrier_cap: {
      type: 'number'
    },
  },
  exits: {
    success: { 
      statusCode: 200,
      responseType: 'ok',
      description: 'All cars fetched',
    },
    fail: {
      statusCode: 400
    }
  },

  fn: async function(inputs, exits) {
    var cars = [];
    if(inputs.seating_cap && inputs.carrier_cap) {
      cars = await Car.find({ seating_cap: inputs.seating_cap, carrier_cap: inputs.carrier_cap })
    }
    else {
      if(inputs.seating_cap) {
        cars = await Car.find({ seating_cap: inputs.seating_cap })
      }
      if(inputs.carrier_cap) {
        cars = await Car.find({ carrier_cap: inputs.carrier_cap })
      }
    }
    if(cars.length == 0){
      cars = await Car.find({})
    }
    //console.log(cars)
    var result = [];
    for(var i=0; i<cars.length; i++) {
      var bookings = await Booking.find({ carId: cars[i].id, status: 'active', pickup_date: inputs.pickup_date });
      if(bookings.length == 0) {
        result.push(cars[i])
      }
    }
    return exits.success(result)
  }
}