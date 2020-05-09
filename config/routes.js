module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'POST /admin/login': 'admin/login',
  'POST /admin/signup': 'admin/signup',
  'POST /customer/login': 'customer/login',
  'POST /customer/signup': 'customer/signup',
  'POST /add_car': 'admin/add-car',
  'GET /view_car': 'view-car',
  'POST /book_car': 'customer/book-car',
  'POST /view_car_filters': 'view-car-filters',
  'DELETE /delete_car': 'admin/delete-car',
}