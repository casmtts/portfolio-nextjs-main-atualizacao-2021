
//Import Components
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Profile from '../components/Profile'
import Services from '../components/Services'
import Skills from '../components/Skills'


function Home() {
  return (
    <>
      <Navbar />
      <main className="site-main-shell">
        <Profile />
        <Services />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>

  )
}

export default Home
