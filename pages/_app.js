import Layout from '../components/layout/Layout'
import CustomHead from '../components/meta/CustomHead'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CustomHead />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
