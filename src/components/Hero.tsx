import { ChevronDown } from 'lucide-react';

interface HeroProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
}

const Hero = ({ heroImage, heroTitle, heroSubtitle }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-secondary-foreground text-shadow mb-6 tracking-wider animate-reveal visible">
          {heroTitle}
        </h1>
        <p className="text-xl md:text-2xl text-secondary-foreground/90 max-w-3xl mx-auto mb-10 text-shadow animate-reveal visible" style={{ animationDelay: '0.2s' }}>
          {heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal visible" style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="btn-primary text-lg">
            Get a Free Quote
          </a>
          <a href="#services" className="btn-secondary border-2 border-secondary-foreground/30 text-lg">
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/70 hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  );
};

export default Hero;
