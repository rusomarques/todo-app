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

export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
