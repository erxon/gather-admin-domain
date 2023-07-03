import { Box, Divider, Paper, Typography, Button, Alert } from "@mui/material";
import Photo from "../../Photo";
import StackRowLayout from "../../StackRowLayout";
import Link from "next/link";
import { useState } from "react";
import FullScreenPhoto from "./FullScreenPhoto";
import ConfirmationModal from "./ConfirmationModal";

function Label({ name }) {
  return (
    <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>{name}</Typography>
  );
}

function Field({ labelName, fieldValue }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Label name={labelName} />
      <Typography>{fieldValue}</Typography>
    </Box>
  );
}
function SocialMediaAccount({ labelName, fieldValue }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Label name={labelName} />
      <Typography>
        <Link href="">{fieldValue}</Link>
      </Typography>
    </Box>
  );
}

export default function UnverifiedUserProfile({ profile }) {
  const [openPhoto, setOpenPhoto] = useState({ open: false, photo: "" });
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const handlePhotoClose = () => {
    setOpenPhoto({ open: false });
  };

  const handleConfirmationModalClose = () => {
    setOpenConfirmationModal(false);
  };

  return (
    <div>
      <FullScreenPhoto
        photo={openPhoto.photo}
        open={openPhoto.open}
        handleClose={handlePhotoClose}
      />
      <ConfirmationModal
        userId={profile._id}
        open={openConfirmationModal}
        handleClose={handleConfirmationModalClose}
      />
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Box>
          <StackRowLayout spacing={1}>
            <Paper sx={{ p: 3 }} variant="outlined">
              <Typography sx={{ mb: 2 }} variant="body1">
                Profile Photo
              </Typography>
              <Button
                onClick={() => {
                  setOpenPhoto({ open: true, photo: profile.photo });
                }}
              >
                <Photo publicId={profile.photo} width={200} height={200} />
              </Button>
            </Paper>
            <Paper sx={{ p: 3, width: "100%" }} variant="outlined">
              {/*Valid Photo*/}
              <Typography sx={{ mb: 2 }} variant="body1">
                Valid Photo
              </Typography>
              <Button
                onClick={() => {
                  setOpenPhoto({ open: true, photo: profile.validPhoto });
                }}
              >
                <Photo publicId={profile.validPhoto} width={400} height={200} />
              </Button>
            </Paper>
          </StackRowLayout>
        </Box>
        <Paper sx={{ mt: 2, p: 3 }} variant="outlined">
          <StackRowLayout spacing={2}>
            <Field labelName="First name" fieldValue={profile.firstName} />
            <Field labelName="Last name" fieldValue={profile.lastName} />
            <Field labelName="Email" fieldValue={profile.email} />
            <Field
              labelName="Contact Number"
              fieldValue={profile.contactNumber}
            />
          </StackRowLayout>
        </Paper>
        <Paper sx={{ mt: 3, p: 3 }} variant="outlined">
          <Typography sx={{ mb: 2 }} variant="h6">
            Social Media Accounts
          </Typography>
          <StackRowLayout spacing={2}>
            <SocialMediaAccount
              labelName="Facebook"
              fieldValue={profile.socialMediaAccounts.facebook}
            />
            <SocialMediaAccount
              labelName="Instagram"
              fieldValue={profile.socialMediaAccounts.instagram}
            />
            <SocialMediaAccount
              labelName="Twitter"
              fieldValue={profile.socialMediaAccounts.twitter}
            />
          </StackRowLayout>
        </Paper>
        <Box sx={{ mt: 2 }}>
          <Button
            onClick={() => {
              setOpenConfirmationModal(true);
            }}
            variant="contained"
          >
            Verify
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
