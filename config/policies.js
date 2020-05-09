/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  'view-car': true,
  'view-car-filters': true,
  'customer/login': true,
  'customer/signup': true,
  'admin/login': true,
  'admin/signup': true,
  'customer/book-car': 'isCustomerAuthenticated',
  'admin/add-car': 'isAdminAuthenticated',
  'admin/delete-car': 'isAdminAuthenticated',

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

};
