import { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Imię jest wymagane.';
    if (!formData.email) newErrors.email = 'Email jest wymagany.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email jest nieprawidłowy.';
    if (!formData.message) newErrors.message = 'Wiadomość jest wymagana.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSuccessMessage('');

    // Symulowana funkcja wysyłki formularza
    try {
      await sendForm(formData);
      setSuccessMessage(
        'Dziękujemy za kontakt! Odpowiemy najszybciej jak to możliwe.'
      );
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      console.error('Błąd podczas wysyłania formularza:', error);
      setErrors({
        submit:
          'Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie później.',
      });

      setTimeout(() => {
        setErrors({});
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendForm = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data sent:', data);
        resolve();
      }, 1000);
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Outworking - jesteśmy tu dla Ciebie</h2>
        <p>
          Oferujemy indywidualne oferty i wycenę, dostosowane do Twoich potrzeb.
        </p>
        <a href="#contact-form" className="contact-button">
          Napisz do nas
        </a>

        <form
          id="contact-form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">
              {!errors.name ? (
                <span className="default-message">Imię</span>
              ) : (
                <span className="error-message">{errors.name}</span>
              )}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              {!errors.message ? (
                <span className="default-message">Email</span>
              ) : (
                <span className="error-message">{errors.email}</span>
              )}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              {!errors.message ? (
                <span className="default-message">Wiadomość</span>
              ) : (
                <span className="error-message">{errors.message}</span>
              )}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.submit && <p className="error-message">{errors.submit}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
