import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}
      <style jsx global>{`
      .lastStringNft {
          width: 90%;
          margin: 10px auto;
          padding: 10px 0;
          border-top: 1px solid #c9c9c9;
          font-size: 18px;
          color: #333;
          display: flex;
          justify-content: space-between;
        }
        .lastStringNft b {
          margin: 0 5px 0 0;
          flex-grow: 1;
        }
      `}</style>
      </main>
      <Footer />
    </>
  )
}