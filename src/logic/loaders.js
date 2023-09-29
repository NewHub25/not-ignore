import { redirect } from "react-router-dom";
import { fetchData } from "./fetch";
import { getSession, saveSession } from "./save-session";
import { saveLocalFormVideo, getLocalFormVideo } from "./local-storage";

export const loaderApp = async () => {
  const data = await fetchData();
  saveSession(data);
  return data;
};

export const loaderIndex = async () => {
  const data = getSession();
  return data ?? (await fetchData());
};

export const actionNewVideo = async ({ request }) => {
  const formData = await request.formData();
  let objTempData = Object.fromEntries(formData);
  const storage = getLocalFormVideo();
  if (storage) objTempData = { ...storage, ...objTempData };
  saveLocalFormVideo(objTempData);
  return redirect("./");
};

export const loaderNewVideo = async () => {
  const storage = getLocalFormVideo();
  const CATEGORIES = getSession();
  return CATEGORIES
    ? { CATEGORIES, storage }
    : { CATEGORIES: await fetchData(), storage };
};
