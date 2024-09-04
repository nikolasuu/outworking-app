import './AdvantagesSection.css';

const advantages = [
  {
    title: 'Zgodność z prawem',
    description:
      'Dbałość o zgodność działań z obowiązującymi przepisami i regulacjami.',
  },
  {
    title: 'Oszczędność czasu',
    description:
      'Pozwala skoncentrować się na kluczowych zadaniach biznesowych.',
  },
  {
    title: 'Terminowość',
    description: 'Gwarancja terminowej realizacji usług bez opóźnień.',
  },
  {
    title: 'Usługi specjalistów',
    description: 'Dostęp do wiedzy i umiejętności doświadczonych ekspertów.',
  },
];

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="container">
        <h2>Outsourcing z Outworking to gwarancja</h2>
        <div className="advantages-container">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-box">
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
