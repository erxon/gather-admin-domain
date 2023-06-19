import Layout from "@/utils/Layout"

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
