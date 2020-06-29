import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return <Component {...pageProps} />
}