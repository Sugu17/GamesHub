import noImage from "../assets/no-camera.png";

const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const targetIndex = url.indexOf(target) + target.length;
  return url.slice(0, targetIndex) + "crop/600/400/" + url.slice(targetIndex);
};

export default getCroppedImageURL;
