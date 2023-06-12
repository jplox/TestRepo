const anchorElement = document.createElement("a");
const fileName = "imagetest";
const downloadUrl =
  "https://inpixondevsa.blob.core.windows.net/ab62dab8-a54d-4d5c-a370-bec92ec61def/hand-thumbs-up.svg?se=2023-06-03T09%3A25%3A48Z&sp=r&sv=2021-06-08&ss=b&srt=o&sig=KFYgzgqc/ruGoyvLYGvJFNEWKs6VDAkXYdbknODu%2B5Y%3D";

if (downloadUrl) {
  fetch(downloadUrl)
    .then((res) => {
        console.log(res , 'resss...')
        console.log('check again')
      res.blob();
    })
    .then((blob) => {
      if (blob instanceof Blob) {
        const blobUrl = URL.createObjectURL(blob);
        const anchorElement = document.createElement("a");
        anchorElement.href = blobUrl;
        anchorElement.download = fileName;
        anchorElement.click();
        anchorElement.remove();
        URL.revokeObjectURL(blobUrl);
      } else {
        console.error("Invalid blob object received.");
      }
    })
    .catch((error) => {
      console.error("Error fetching the file:", error);
    });
}
//need to export this
//comment from develop branch