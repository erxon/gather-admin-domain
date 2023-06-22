import Layout from "@/components/profile/Layout";
import { useRouter } from "next/router";
import useSWR from 'swr';
import { fetcher } from "@/utils/auth/hooks";
import { CircularProgress, Paper, Typography } from "@mui/material";
import EditProfileDetails from "@/components/profile/EditProfile/EditProfileDetails";
import ChangeOtherAdminPassword from "@/components/profile/EditProfile/ChangeOtherAdminPassword";

export default function Page(){
    const router = useRouter();

    const {id} = router.query;

    const {data, error, isLoading} = useSWR(`/api/admin/${id}`, fetcher);

    if(error) return <Typography>Something went wrong.</Typography>
    if(isLoading) return <CircularProgress />

    return <Layout>
        <Paper variant="outlined" sx={{ mb: 4, p: 3 }}>
          <EditProfileDetails user={data} />
        </Paper>
        <Paper variant="outlined" sx={{ mb: 3, p: 3 }}>
          <ChangeOtherAdminPassword user={data} />
        </Paper>
    </Layout>

}