

export const ValidEmail = (email) => {
  rs = '/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i'
  return rs.match(email);
}