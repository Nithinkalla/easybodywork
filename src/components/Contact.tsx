import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Contact as ContactType } from '@/types/content';

interface ContactProps {
  contact: ContactType;
}

const Contact = ({ contact }: ContactProps) => {
  const containerRef = useScrollReveal();
  const [isSubmitted, setIsSubmitted] = useState(false);

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

          {/* Left: Info & Map */}
          <div className="animate-reveal-left">

            <div className="space-y-6 mb-8">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-secondary text-lg">{contact.phone}</p>
                </div>
              </a>

              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow group">
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

            {/* Map */}
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

          {/* Right: Form */}
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
                    We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xovgkpgq"  // << REPLACE THIS
                  method="POST"
                  onSubmit={() => setIsSubmitted(true)}
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="New Appointment Request" />

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input name="name" required className="input-field" placeholder="John Doe" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input name="phone" required className="input-field" placeholder="+44 123 456 789" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Preferred Date</label>
                    <input type="date" name="date" required className="input-field" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea name="message" rows={4} className="input-field" placeholder="Describe the work needed..." />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    Submit Appointment
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
