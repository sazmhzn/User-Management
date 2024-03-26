

export const ValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}