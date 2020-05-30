import Navbar from '../navbar'
import Footer from '../footer'

export default function BaseLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-16 min-h-full box-border">
        <section className="flex-grow">{children}</section>
        <Footer />
      </div>
    </>
  )
}