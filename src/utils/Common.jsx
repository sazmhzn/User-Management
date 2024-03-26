

export const ValidEmail = (email) => {
  const rs = '/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i'
  return rs.match(email);
}