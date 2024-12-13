import Layout from "@/Components/layout/layout";
import { AuthProvider } from "@/Context/context";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <AuthProvider>
          <Layout><Component {...pageProps} /></Layout>
        </AuthProvider>
}
