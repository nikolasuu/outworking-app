import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="container hero-content">
          <h1>Outsourcing jest prosty</h1>
          <p>
            Profesjonalna rekrutacja i rozwiązania biznesowe dopasowane do
            Twoich potrzeb.
          </p>
          <span className="designed">
            Designed by <a href="www.freepik.com">Freepik</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
