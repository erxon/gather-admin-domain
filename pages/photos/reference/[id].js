import { useRouter } from "next/router";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { fetcher } from "@/utils/auth/hooks";

import ReferencePhoto from "@/components/photos/References/ReferencePhoto";

import FolderIcon from "@mui/icons-material/Folder";
import useSWR from "swr";
import StackRowLayout from "@/components/StackRowLayout";
import Layout from "@/components/photos/Layout";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `/api/photos/single/${id}`,
    fetcher
  );

  if (error)
    return <Typography>Something went wrong while fetching photos.</Typography>;
  if (isLoading) return <CircularProgress />;

  return (
    <Box>
      <StackRowLayout spacing={1}>
        <FolderIcon color="primary" />
        <Typography variant="h6">{data.missingPerson}</Typography>
      </StackRowLayout>
      <Divider sx={{ my: 2 }} />
      <Layout heading={`Reference photos of ${data.missingPerson}`}>
        {data.images.map((image) => {
          return (
            <ReferencePhoto
              key={image._id}
              publicId={image.publicId}
              fileName={image.fileName}
            />
          );
        })}
      </Layout>
    </Box>
  );
}
