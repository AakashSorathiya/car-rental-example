module.exports = {
 
  tableName: 'cars',
  datastore: 'default',

  attributes: {

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

    bookings: {
      collection: 'booking',
      via: 'carId',
    },
  },
  
};


