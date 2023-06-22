import { useUser } from "@/utils/auth/hooks";
import { CircularProgress } from "@mui/material";
import Form from "@/components/auth/login/Form";

export default function UserProvider({ children }) {
  const [user, { loading }] = useUser();

  if (loading) return <CircularProgress />;
  if (!user && !loading) {
    return <div style={{display: 'flex', justifyContent: 'center'}}><Form /></div>;
  } else {
    return <div>{children}</div>;
  }
}
