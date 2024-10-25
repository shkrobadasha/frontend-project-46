const json = (result) => {
  const newRes = JSON.stringify(result, null, 2);

  return newRes;
};
export default json;
