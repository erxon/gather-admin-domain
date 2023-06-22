import useSWR from "swr";
import { fetcher } from "@/utils/auth/hooks";
import { CircularProgress, Typography, Box, Grid, Paper } from "@mui/material";

import Layout from "./Layout";
import Folder from "./References/Folder";
import QueryPhoto from "./QueryPhoto";

function filterPhotosByType(data, filter) {
  return data.filter((document) => {
    return document.type === filter;
  });
}

function getPhotos(data, filter) {
  if (filter === 0) {
    return data;
  } else if (filter === 1) {
    return filterPhotosByType(data, "reference");
  } else {
    return filterPhotosByType(data, "query");
  }
}

export default function DisplayPhotos(props) {
  const { data, error, isLoading } = useSWR("/api/photos", fetcher);

  if (error)
    return <Typography>Something went wrong retrieving photos.</Typography>;
  if (isLoading) return <CircularProgress />;

  const referencePhotos = getPhotos(data, 1);
  const queryPhotos = getPhotos(data, 2);

  if (props.filter === 1)
    return (
      <Box>
        <Layout heading="Folders">
          {referencePhotos.length > 0 &&
            referencePhotos.map((reference) => {
              return <Folder key={reference._id} reference={reference} />;
            })}
        </Layout>
      </Box>
    );

  if (props.filter === 2)
    return (
      <Layout heading="Query Photos">
        {queryPhotos.length > 0 &&
          queryPhotos.map((photo) => {
            return <QueryPhoto key={photo._id} photo={photo} />;
          })}
      </Layout>
    );

  return (
    <Box>
      <Layout heading="Folders">
        {referencePhotos.length > 0 &&
          referencePhotos.map((reference) => {
            return <Folder key={reference._id} reference={reference} />;
          })}
      </Layout>
      <Layout heading="Query Photos">
        {queryPhotos.length > 0 &&
          queryPhotos.map((photo) => {
            return <QueryPhoto key={photo._id} photo={photo} />;
          })}
      </Layout>
    </Box>
  );
}
