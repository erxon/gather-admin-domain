import Admin from "@/components/home/Admin";
import FoundMissingPeopleData from "@/components/home/FoundMissingPeopleData";
import NumberOfActiveReports from "@/components/home/NumberOfActiveReports";
import NumberOfUsers from "@/components/home/NumberOfUsers";
import PendingUsers from "@/components/home/PendingUsers";
import { useUser } from "@/utils/auth/hooks";
import { CircularProgress, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home(props) {
  const router = useRouter();

  return (
    <div>
      <pre>{JSON.stringify(props.user)}</pre>
      <button
        onClick={() => {
          props.handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default function Page() {
  const [user, { loading, mutate }] = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Admin username={user.username} mutate={mutate}/>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <NumberOfActiveReports />
        </Grid>
        <Grid item xs={12} md={6}>
          <NumberOfUsers />
        </Grid>
      </Grid>
      <FoundMissingPeopleData />
      <PendingUsers />
    </div>
  );
}
