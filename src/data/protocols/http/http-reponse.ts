export enum HttpStatusCode{
  unatorized = 401,
  noContent = 204
}

export interface HttpResponse {
  statusCode: HttpStatusCode
  body?: any
}
