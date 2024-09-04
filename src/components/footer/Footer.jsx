import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Outworking. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
