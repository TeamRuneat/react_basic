export const get =
  <T>(property: keyof T) =>
  (obj: T) =>
    obj[property];
