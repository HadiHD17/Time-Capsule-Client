export const renderAttachment = (attachment) => {
  if (!attachment || !attachment.file_url) return null;

  let fileUrl = attachment.file_url;

  if (!fileUrl.startsWith("http") && !fileUrl.startsWith("data:")) {
    fileUrl = `http://localhost:8000/storage/${fileUrl}`;
  }

  if (attachment.file_type?.startsWith("image")) {
    return <img src={fileUrl} alt="Image attachment" className="preview-img" />;
  } else if (attachment.file_type?.startsWith("audio")) {
    return (
      <audio controls>
        <source src={fileUrl} type={attachment.file_type} />
        Your browser does not support the audio element.
      </audio>
    );
  }
};
