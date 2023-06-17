const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Partial<T> => {
  const finalObj: Partial<T> = {};
  for (const k of keys) {
    if (obj && Object.hasOwnProperty.call(obj, k)) {
      finalObj[k] = obj[k];
    }
  }
  return finalObj;
};

export default pick;
