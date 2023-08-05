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

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
