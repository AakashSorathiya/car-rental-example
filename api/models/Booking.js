module.exports = {
 
  tableName: 'booking',
  datastore: 'default',

  attributes: {

    carId: {
      model: 'car',
    },

    customerId: {
      model: 'customer',
    },

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

    status: {
      type: 'string',
      isIn: ['cancelled', 'completed', 'active'],
      required: true,
    }
  },

  // afterCreate: function(booking, proceed) {
  //   console.log("After create --->", carId)
  //   const car = Car.findOne({ id: carId })
  //   Car.updateOne({ id: carId }).set({ bookings: car.bookings.append})
  // }
  
};


