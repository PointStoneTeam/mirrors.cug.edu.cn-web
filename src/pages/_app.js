import 'normalize.css'
import '../styles/global.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    console.log(pageProps)
  return <Component {...pageProps} />
}