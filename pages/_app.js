import Layout from "@/utils/Layout";
import UserProvider from "@/utils/UserProvider";

export default function App({ Component, pageProps }) {

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
