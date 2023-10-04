import { redirect } from "react-router-dom";
import { fetchData, fetchNewCategory } from "./fetch";
import { getSession, saveSession } from "./save-session";
import { saveLocalFormVideo, getLocalFormVideo } from "./local-storage";
import extractVideoId from "./extract-video-id";

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
  if (request.method === "POST") {
    const formData = await request.formData();
    let objTempData = Object.fromEntries(formData);
    const storage = getLocalFormVideo();
    if (storage) objTempData = { ...storage, ...objTempData };
    saveLocalFormVideo(objTempData);
    return redirect("./");
  }
  if (request.method === "PUT") {
    const formData = await request.formData();
    let { data, url, ID } = Object.fromEntries(formData);
    try {
      const f = await fetch(import.meta.env.VITE_ID_CATEGORIES + ID, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      const json = await f.json();
      console.log({ json });
      await loaderApp();
      return redirect(`/room/${extractVideoId(url).idYouTube}`);
    } catch (error) {
      console.warn(error.message);
      return redirect("/");
    }
  }
};

export const loaderNewVideo = async () => {
  const storage = getLocalFormVideo();
  const CATEGORIES = getSession();
  return CATEGORIES
    ? { CATEGORIES, storage }
    : { CATEGORIES: await fetchData(), storage };
};

export const actionNewCategory = async ({ request }) => {
  const formData = await request.formData();
  let objTempData = Object.fromEntries(formData);
  try {
    await fetchNewCategory(objTempData.data);
    const { data } = objTempData;
    return redirect(
      `/room/${extractVideoId(JSON.parse(data).content[0].url).idYouTube}`
    );
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};
