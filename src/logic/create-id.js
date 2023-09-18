const createId = (subId) => {
  const cryptoRandom = crypto.randomUUID();
  return `${subId}-${cryptoRandom}`;
};
export default createId;
