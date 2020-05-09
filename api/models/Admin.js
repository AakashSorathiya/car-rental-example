module.exports = {
 
  tableName: 'admin',
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
    },

    password: {
      type: 'string',
      required: true,
    },

    contact_num: {
      type: 'string',
      required: true,
    },
  },

};