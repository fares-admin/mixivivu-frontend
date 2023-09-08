interface EndPointObject {
  baseUrl: string
  child: {
    [x: string]: string
  }
}

export const internalUserEndpoints: EndPointObject = {
  baseUrl: '/api/internal-user',
  child: {
    authLogin: '/auth/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update-user',
    delete: '/delete-user',
  },
}

export const productEndpoints: EndPointObject = {
  baseUrl: '/api/products',
  child: {
    getList: '/get-list',
    addNew: '/add-new',
  },
}

export const featureEndpoints: EndPointObject = {
  baseUrl: '/api/features',
  child: {
    getList: '/get-list',
  },
}

export const categoryEndpoints: EndPointObject = {
  baseUrl: '/api/categories',
  child: {
    getList: '/get-list',
  },
}

export const flightEndpoints: EndPointObject = {
  baseUrl: '/api/plane-ticket-fe',
  child: {
    search: '/search-flight',
    baggage: '/get-baggage',
  },
}

export const reviewEndpoints: EndPointObject = {
  baseUrl: '/api/reviews',
  child: {
    getList: '/get-list',
    addNew: '/add-new',
    approve: '/approve',
    delete: '/delete-review',
  },
}

export const roomEndpoints: EndPointObject = {
  baseUrl: '/api/rooms',
  child: {
    getList: '/get-list',
    addNew: '/add-new',
    update: '/update-room',
    delete: '/delete-room',
  },
}

export const imageEndpoints: EndPointObject = {
  baseUrl: '/api/images',
  child: {
    getList: '/get-list',
    addNew: '/add-new',
    update: '/update-image',
    delete: '/delete-image',
  },
}

export const emailEndpoints: EndPointObject = {
  baseUrl: '',
  child: {
    sendEmail: '/send_email',
  },
}

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
