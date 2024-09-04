import AdvantagesSection from './components/advantagesSection/AdvantagesSection.jsx';
import ContactSection from './components/contactSection/ContactSection.jsx';
import FeaturesSection from './components/featuresSection/FeaturesSection.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import HeroSection from './components/heroSection/HeroSection.jsx';
import ServicesSection from './components/servicesSection/ServicesSection.jsx';
import WhyOutworkingSection from './components/whyOutworkingSection/WhyOutworkingSection.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AdvantagesSection />
      <WhyOutworkingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
