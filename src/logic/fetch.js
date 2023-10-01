import { decodedText } from "./decode-unicode";
import { equalityFunction } from "./equality-function";
import { getSession } from "./save-session";

const API = import.meta.env.VITE_ID_CATEGORIES;

export async function fetchData() {
  try {
    const response = await fetch(API);
    if (!response.ok) {
      throw new Error("La solicitud no pudo ser completada.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function postData(data) {
  const keys = ["content", "layer", "title"];
  if (!keys.every((prop) => data[prop])) {
    throw new Error("Falta elementos en tu nueva categoría.");
  }

  const arrayFromJSON = getSession();
  if (arrayFromJSON) {
    if (
      arrayFromJSON.some((category) =>
        equalityFunction(category, data[keys[2]])
      )
    ) {
      throw new Error("Ya existe la categoría.");
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("La solicitud no pudo ser completada.");
      }
      const data = await response.json();
      console.log(`%cSuccess${data}`, "color: green");
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    throw new Error("Al parecer no hay sesión guardada.");
  }
}

export async function updateData(id, data) {
  if (!id) throw new Error("Debe ir un ID para actualizar");

  const keys = ["content", "layer", "title"];
  if (!keys.every((prop) => data[prop])) {
    throw new Error("Falta elementos en tu nueva categoría.");
  }

  try {
    const response = await fetch(API + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("La solicitud no pudo ser completada.");
    }
    const data = await response.json();
    console.log(`%cSuccess${data}`, "color: green");
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function fetchWikipedia(word) {
  try {
    const response = await fetch(
      "https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=" +
        word
    );
    if (!response.ok) {
      throw new Error("La solicitud a Wikipedia no pudo ser completada.");
    }
    const {
      query: {
        search: [{ snippet }],
      },
    } = await response.json();
    return decodedText(snippet).replace(/<.+?>/g, "");
  } catch (error) {
    console.error("Error:", error);
  }
}
