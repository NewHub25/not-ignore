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

export function updateStoreOneVideoLocal(dataSession, newData) {
  const greatDataTemp = [...dataSession];
  const ID = greatDataTemp.find(
    (category) => category.title === newData.keywords[0]
  ).id;
  if (!ID) {
    console.log(
      "Falta crear una funcion para la categoria de: " + newData.keywords[0]
    );
  }
  greatDataTemp[ID - 1].content.push(newData);
  return {
    data: JSON.stringify(
      greatDataTemp[ID - 1],
      [
        "content",
        "layer",
        "title",
        "author",
        "description",
        "keywords",
        "title",
        "url",
      ],
      ""
    ),
    url: newData.url,
    ID,
  };
}

export async function fetchNewCategory(newCategoryJSON) {
  try {
    const f = await fetch(import.meta.env.VITE_ID_CATEGORIES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newCategoryJSON,
    });
    const json = await f.json();
    return { json };
  } catch (error) {
    console.log(error);
    return null;
  }
}
