import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X } from 'lucide-react';
import { cacheImageUrl } from '@/utils/cacheImageUrl';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const containerRef = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-reveal">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="section-subtitle animate-reveal">
            Browse through our portfolio of completed projects and see the quality of our craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="animate-reveal cursor-pointer"
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md card-hover group">
                <img
                  src={cacheImageUrl(image)}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-secondary-foreground font-display text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-shadow">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-secondary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
