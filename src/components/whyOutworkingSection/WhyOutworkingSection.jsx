import './WhyOutworkingSection.css';

const WhyOutworkingSection = () => {
  return (
    <section className="why-outworking-section">
      <div className="container">
        <h2>Dlaczego Outworking jako dostawca usług outsourcingowych?</h2>
        <div className="why-outworking-content">
          <p>
            Outworking wyróżnia się 12-letnim doświadczeniem w branży
            outsourcingu. Obsłużyliśmy ponad 2000 zadowolonych klientów, co
            potwierdza naszą skuteczność i zaangażowanie w realizację zleceń.
          </p>
          <p>
            Nasze podejście opiera się na indywidualnym dostosowaniu usług do
            potrzeb każdego klienta. Zapewniamy pełną zgodność z przepisami
            prawa, oszczędność czasu, terminowość oraz dostęp do wiedzy i
            umiejętności najlepszych specjalistów w branży.
          </p>
          <p>
            Współpracujemy z wieloma renomowanymi firmami, co dodatkowo
            potwierdza naszą pozycję na rynku. Jesteśmy partnerem, na którym
            można polegać.
          </p>
        </div>
        <div className="partner-logos">
          <img src="/adecco-new.webp" alt="Adecco" />
          <img src="/hays.webp" alt="Hays" />
          <img src="/ranstad.webp" alt="Randstad" />
        </div>
      </div>
    </section>
  );
};

export default WhyOutworkingSection;
