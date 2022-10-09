export enum HttpStatusCode{
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unatorized = 401,
  notFound = 404,
  serverError = 500
}

export interface HttpResponse {
  statusCode: HttpStatusCode
  body?: any
}
