import { useUser } from "@/utils/auth/hooks";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home(props){
  const router = useRouter();
  

  return <div>
    <pre>{JSON.stringify(props.user)}</pre>
    <button onClick={() => {props.handleLogout()}}>Logout</button>
  </div>

}
export default function Page() {
  const [user, { loading, mutate }] = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout");
    mutate({})
  };

  if (loading) return <CircularProgress />;
  if (user) return <Home user={user} handleLogout={handleLogout} />
}
