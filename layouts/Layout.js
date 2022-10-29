import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout ({ children }) {
  return (
    <div className='mainDiv'>
      <Header />
      <main className='mainContainer'>{children}</main>
      <Footer />
    </div>
  )
}
