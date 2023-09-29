export const saveLocalFormVideo = function (data) {
  localStorage.setItem(
    import.meta.env.VITE_KEY_FORM_VIDEO,
    JSON.stringify(data)
  );
};

export const getLocalFormVideo = function () {
  return JSON.parse(localStorage.getItem(import.meta.env.VITE_KEY_FORM_VIDEO));
};

export const deleteLocalFormVideo = function () {
  localStorage.removeItem(import.meta.env.VITE_KEY_FORM_VIDEO);
};
