import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Contact as ContactType } from '@/types/content';

interface ContactProps {
  contact: ContactType;
}

const Contact = ({ contact }: ContactProps) => {
  const containerRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', date: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-reveal">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="section-subtitle animate-reveal">
            Ready to get your vehicle looking brand new? Reach out to us for a free estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-reveal-left">
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-secondary text-lg">{contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <p className="font-semibold text-secondary text-lg">{contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-secondary text-lg">{contact.address}</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src={contact.map}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          {/* Appointment Form */}
          <div className="animate-reveal-right">
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="font-display text-3xl text-secondary mb-6 tracking-wide">
                Book an Appointment
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="text-success w-16 h-16 mb-4" />
                  <p className="text-2xl font-display text-secondary mb-2">
                    Appointment Submitted!
                  </p>
                  <p className="text-muted-foreground">
                    We'll get back to you shortly to confirm your appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Tell us about your vehicle and what you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
