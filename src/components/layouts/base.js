import Navbar from '../navbar'
import Footer from '../footer'
import Head from 'next/head'

export default function BaseLayout({ children }) {
  return (
    <>
     <Head>
        <title>中国地质大学开源镜像站</title>
      </Head>
      <Navbar />
      <div className="flex flex-col pt-16 min-h-full box-border">
        <section className="flex-grow">{children}</section>
        <Footer />
      </div>
    </>
  )
}