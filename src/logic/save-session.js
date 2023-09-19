export const saveSession = function (data) {
  sessionStorage.setItem(
    import.meta.env.VITE_KEY_STORAGE,
    JSON.stringify(data)
  );
};

export const getSession = function () {
  return JSON.parse(sessionStorage.getItem(import.meta.env.VITE_KEY_STORAGE));
};
