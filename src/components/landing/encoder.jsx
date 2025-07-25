export const encodeFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
