import { Service } from '@/types/content';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  const containerRef = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-background" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid gap-8 justify-center
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3">
          <h2 className="section-title mb-4 animate-reveal">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="section-subtitle animate-reveal">
            From minor dents to major collision repairs, we offer comprehensive auto body services
            with quality you can trust.
          </p>
        </div>

        {/* Services Grid */}
{/* Services Grid */}
<div className="grid gap-8
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                justify-items-center">
  {services.map((service, index) => (
    <div
      key={service.title}
      className="animate-reveal group"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-2xl text-secondary mb-3 tracking-wide">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Accent Line */}
        <div className="h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
