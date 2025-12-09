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

  const openModal = (img: string) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // freeze scroll visually
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // restore scroll
  };

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
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-3 
            px-2
          "
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="animate-reveal cursor-pointer"
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => openModal(image)}
            >
              <div
                className="
                  relative aspect-square overflow-hidden rounded-lg shadow-md
                  group transition-transform duration-500 hover:scale-[1.05]
                "
              >
                {/* Thumbnail Image */}
                <img
                  src={cacheImageUrl(image)}
                  alt={`Gallery image ${index + 1}`}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-500 group-hover:scale-110
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="
            absolute inset-0 z-50 bg-black/80 
            flex items-center justify-center p-4
            animate-reveal
          "
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            className="
              absolute top-4 right-4 
              text-white hover:text-primary 
              transition-colors
            "
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Full Image Preview */}
          <img
            src={cacheImageUrl(selectedImage)}
            alt="Gallery preview"
            className="
              max-w-full max-h-[90vh] 
              object-contain rounded-lg shadow-2xl
              transition-transform duration-300 
              hover:scale-105
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
