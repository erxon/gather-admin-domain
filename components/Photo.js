//customizable width and height
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";

export default function Photo({ publicId, width, height }) {
  const image = new CloudinaryImage(publicId, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().width(width).height(height));

  return (
    <div>
      <AdvancedImage cldImg={image} />
    </div>
  );
}
