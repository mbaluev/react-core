export const ROUTER_CONST = {
  HOME: {
    name: 'home',
    fullName: 'home',
    path: '/',
  },
  FIELDS: {
    name: 'fields',
    fullName: 'fields',
    path: '/fields',
  },
  PRODUCTS: {
    name: 'products',
    fullName: 'products',
    path: '/products',
    DETAILS: {
      name: 'details',
      fullName: 'products.details',
      path: '/:id',
    },
  },
  QUOTES: {
    name: 'quotes',
    fullName: 'quotes',
    path: '/quotes',
    DETAILS: {
      name: 'details',
      fullName: 'quotes.details',
      path: '/:id',
    },
  },
};
