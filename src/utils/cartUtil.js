export const getQty = (arr) => {
  let sum = 0;
  arr.map((item) => {
    sum += item.count;
    return sum;
  });
  return sum;
};
