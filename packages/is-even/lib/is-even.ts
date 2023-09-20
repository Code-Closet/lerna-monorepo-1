import { isOdd } from "is-odd";

export const isEven = (num: number): boolean => {
  return !isOdd(num);
};
