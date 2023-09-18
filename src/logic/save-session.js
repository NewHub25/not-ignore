const sessionKey = "api_key";

export const saveSession = function (data) {
  sessionStorage.setItem(sessionKey, JSON.stringify(data));
};

export const getSession = function () {
  return sessionStorage.getItem(sessionKey);
};
