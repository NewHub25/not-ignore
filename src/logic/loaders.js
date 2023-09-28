import { redirect } from "react-router-dom";
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

export const actionNewVideo = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
  localStorage.setItem("video", JSON.stringify(updates));
  return redirect("/newvideo/");
};

export const loaderNewVideo = async () => {
  const storage = localStorage.getItem("video");
  console.log("loader: " + storage);
  const data = getSession();
  return data ?? (await fetchData());
};
