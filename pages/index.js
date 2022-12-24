import Footer from '../Components/Footer/Footer';
import ContactSection from '../Sections/Contact/ContactSection';
import PortfolioSection from '../Sections/Portfolio/PortfolioSection';
import Header from './../Components/Header/Header';
import Hero from './../Sections/Hero/Hero';

 const Home = () => {
  
  return (
    <>
    <Header />
    <Hero />
    <PortfolioSection />
    <ContactSection />
    <Footer />
    </>
  )
}


export default  Home