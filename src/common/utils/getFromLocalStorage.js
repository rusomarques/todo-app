export const getFromLocalStorage = (key, defaultValue) => {
  const valueInLocalStorage = window.localStorage.getItem(key);
  if (valueInLocalStorage) {
    try {
      return JSON.parse(valueInLocalStorage);
    } catch (error) {
      window.localStorage.removeItem(key);
    }
  }

  return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
};
