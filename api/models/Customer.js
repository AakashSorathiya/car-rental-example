module.exports = {
 
  tableName: 'customer',
  datastore: 'default',

  attributes: {
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

    bookings: {
      collection: 'booking',
      via: 'customerId',
    }
  },
  
};


