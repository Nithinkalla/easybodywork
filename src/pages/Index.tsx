import { useState, useEffect } from 'react';
import { SiteContent } from '@/types/content';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load content');
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-display text-secondary mb-4">Error Loading Content</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-display text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar siteName={content.siteName} />
      <Hero
        heroImage={content.heroImage}
        heroTitle={content.heroTitle}
        heroSubtitle={content.heroSubtitle}
      />
      <Services services={content.services} />
      <Gallery images={content.gallery} />
      <Contact contact={content.contact} />
      <Footer siteName={content.siteName} contact={content.contact} />
      <WhatsAppButton phoneNumber={content.contact.whatsapp} />
    </div>
  );
};

export default Index;
