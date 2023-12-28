import SEO from '../components/SEO';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO title="" description="" />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
