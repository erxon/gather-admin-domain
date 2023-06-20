import Layout from "@/utils/Layout";
import { useUser } from "@/utils/auth/hooks";
import { CircularProgress, Typography, Box } from "@mui/material";
import Form from "@/components/auth/login/Form";

export default function App({ Component, pageProps }) {
  const [user, { loading }] = useUser();

  if (loading) return <CircularProgress />;
  if (!user && !loading) {
    return <Form />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
