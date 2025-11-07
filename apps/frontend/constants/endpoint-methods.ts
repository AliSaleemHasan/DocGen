export enum EndpointMethod {
  GET,
  POST,
  PUT,
  DELETE,
}

const allKeys = Object.keys(EndpointMethod);

export const apiMethodNames = allKeys.filter((key) => isNaN(Number(key)));
