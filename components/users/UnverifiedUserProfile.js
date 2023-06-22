import { Box, Divider, Paper, Typography, Button, Alert } from "@mui/material";
import Photo from "../Photo";
import StackRowLayout from "../StackRowLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const handleVerify = async () => {
    console.log("verify user", profile._id, "set status: verified");
    const verifyUser = await fetch(`/api/users/${profile._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "verified",
      }),
    });

    if (verifyUser.status === 200) {
      setVerified(true);
    } else {
      setError({
        error: true,
        message: "Something went wrong.",
      });
    }
  };
  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Box>
        <Photo publicId={profile.photo} width={200} height={200} />
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
      <Box sx={{mt: 2}}>
        {error.error && <Typography color="red">{error.message}</Typography>}
        {!verified ? (
          <Button onClick={handleVerify} variant="contained">
            Verify
          </Button>
        ) : (
          <Alert sx={{ width: "100%" }} severity="success">
            User has been verified.
          </Alert>
        )}
      </Box>
    </Paper>
  );
}