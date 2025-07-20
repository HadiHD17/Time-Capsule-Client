export const renderAttachment = (attachment) => {
  if (!attachment || !attachment.file_url) return null;

  let fileUrl = attachment.file_url;

  // Optional: Handle base64 or public URLs
  if (!fileUrl.startsWith("http") && !fileUrl.startsWith("data:")) {
    fileUrl = `http://localhost:8000/storage/${fileUrl}`;
  }

  const extension = attachment.file_url.split(".").pop().toLowerCase();

  if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) {
    return (
      <img
        src={fileUrl}
        alt="Capsule Attachment"
        style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }}
      />
    );
  }

  if (["mp3", "wav", "ogg"].includes(extension)) {
    return <audio controls src={fileUrl} />;
  }

  if (["mp4", "webm"].includes(extension)) {
    return <video controls src={fileUrl} style={{ maxWidth: "100%" }} />;
  }

  // Fallback for other types
  return (
    <a href={fileUrl} download>
      📥 Download Attachment
    </a>
  );
};
