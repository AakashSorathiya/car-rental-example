module.exports = {
  inputs: { },
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
    const cars = await Car.find({});
    if(!cars) {
      return exits.fail("No cars found");
    }
    return exits.success(cars);
  }
}