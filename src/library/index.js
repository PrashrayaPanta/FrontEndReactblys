export const ToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const FromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
