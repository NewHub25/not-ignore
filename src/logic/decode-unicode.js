export const decodedText = (originalText) => {
  return originalText.replace(/\\u(\d{4})/g, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
  });
};
