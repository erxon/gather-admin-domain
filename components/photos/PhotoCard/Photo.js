import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";


export default function Photo(props) {
  const publicId = `${props.uploadPreset}/${props.photo}`;

  const image = new CloudinaryImage(publicId, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().height(150));

  return <AdvancedImage cldImg={image} />;
}