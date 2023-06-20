import { Avatar } from "@mui/material";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
// Transform

export default function ProfileAvatar({publicId}) {
  const image = new CloudinaryImage(publicId, {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  }).resize(fill().width(56).height(56));
  
  return (
    <div>
      <Avatar sx={{width: 56, height: 56}}>
        <AdvancedImage cldImg={image} />
      </Avatar>
    </div>
  );
}
