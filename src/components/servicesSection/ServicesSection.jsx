import { Code, FileText, HandCoins, User } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    icon: <User size={40} />,
    title: 'Outsourcing HR',
    description:
      'Oddelegowanie zarządzania zasobami ludzkimi do specjalisty zewnętrznego.',
  },
  {
    icon: <HandCoins size={40} />,
    title: 'Outsourcing payroll',
    description:
      'Zlecenie zewnętrznej firmie prowadzenie procesu wypłaty wynagrodzeń, naliczania podatków i składek.',
  },
  {
    icon: <FileText size={40} />,
    title: 'Outsourcing kadr i płac',
    description:
      'Obejmuje outsourcing payroll oraz dodatkową obsługę dokumentacji kadrowej i zarządzanie personalnymi aspektami zatrudnienia.',
  },
  {
    icon: <Code size={40} />,
    title: 'Outsourcing kadr IT',
    description:
      'Zlecenie projektów informatycznych (np. z zakresu cyberbezpieczeństwa) specjalistom z zewnątrz.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Outworking – oferta dostosowana do Twoich potrzeb</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
