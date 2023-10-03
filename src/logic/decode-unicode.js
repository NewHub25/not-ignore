const decodedText = (originalText) => {
  return originalText.replace(/\\u(\d{4})/g, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
  });
};

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
