import { fetchData } from "./fetch";
import { getSession, saveSession } from "./save-session";

export const loaderApp = async () => {
  const data = await fetchData();
  saveSession(data);
  return data;
};

export const loaderIndex = async () => {
  const data = getSession();
  return data ?? (await fetchData());
};
