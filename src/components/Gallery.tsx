import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, Play } from 'lucide-react';
import { cacheImageUrl } from '@/utils/cacheImageUrl';

interface GalleryProps {
  images: string[];
}

const isVideo = (url: string) =>
  url.includes('/video/') ||
  url.endsWith('.mp4') ||
  url.endsWith('.webm');

const Gallery = ({ images }: GalleryProps) => {
  const containerRef = useScrollReveal();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted" ref={containerRef}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-reveal">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="section-subtitle animate-reveal">
            Browse through our portfolio of completed projects.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-3 px-2
        ">
          {images.map((item, index) => (
            <div
              key={index}
              className="animate-reveal cursor-pointer"
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => setSelected(item)}
            >
              <div className="
                relative aspect-square overflow-hidden rounded-lg shadow-md
                group transition-transform duration-500 hover:scale-[1.05]
              ">
                {isVideo(item) ? (
                  <>
                    {/* Video thumbnail */}
                    <video
                      src={item}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="text-white w-10 h-10" />
                    </div>
                  </>
                ) : (
                  <img
                    src={cacheImageUrl(item)}
                    alt={`Gallery item ${index + 1}`}
                    className="
                      w-full h-full object-cover
                      transition-transform duration-500 group-hover:scale-110
                    "
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (no body scroll hack) */}
      {selected && (
        <div
          className="
            fixed inset-0 z-50 bg-black/80
            flex items-center justify-center p-4
          "
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary"
            onClick={() => setSelected(null)}
          >
            <X size={32} />
          </button>

          {isVideo(selected) ? (
            <video
              src={selected}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={cacheImageUrl(selected)}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Gallery;
