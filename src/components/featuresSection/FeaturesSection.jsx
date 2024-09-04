import { Building, Building2, Home } from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: <Home size={30} />,
    title: 'Małe Firmy',
    description:
      'W przypadku mniejszych firm oznacza możliwość skupienia się na podstawowych zadaniach dzięki zleceniu obsługi kadrowo-płacowej czy technicznej zewnętrznemu podmiotom.',
  },
  {
    icon: <Building size={30} />,
    title: 'Średnie Firmy',
    description:
      'Średnie firmy korzystają z outsourcingu, aby elastycznie reagować na zmieniające się potrzeby rynku. Outsourcing pozwala im na skalowanie działań bez zwiększania kosztów stałych, a także na łatwiejszy dostęp do specjalistycznej wiedzy',
  },
  {
    icon: <Building2 size={30} />,
    title: 'Duże Firmy',
    description:
      'Większe firmy chętnie korzystają z outsourcingu, aby uzyskać szybki dostęp do specjalistów oraz skutecznie optymalizować koszty prowadzenia działalności oraz efektywność swoich biznesów.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Jakie firmy odnoszą najwięcej korzyści z outsourcingu?</h2>
        <div className="features-container">
          {features.map((features, index) => (
            <div key={index} className="feature-box">
              <div className="feature-icon">{features.icon}</div>
              <h3>{features.title}</h3>
              <p>{features.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
