import React, { useState, useRef, useEffect } from 'react';
import './galleryNew.css';

const GalleryNew = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const galleryRef = useRef(null);

  // Automatisches Scrollen für die Thumbnails, um den aktiven sichtbar zu halten
  useEffect(() => {
    if (galleryRef.current) {
      const thumbnails = galleryRef.current.querySelector('.gallery-thumbnails');
      const activeThumb = thumbnails.querySelector(`.thumbnail-item:nth-child(${activeIndex + 1})`);
      
      if (activeThumb) {
        thumbnails.scrollLeft = activeThumb.offsetLeft - thumbnails.offsetWidth / 2 + activeThumb.offsetWidth / 2;
      }
    }
  }, [activeIndex]);

  // Schließt die Lightbox mit der Escape-Taste
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight' && isLightboxOpen) {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft' && isLightboxOpen) {
        navigateLightbox(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, lightboxIndex]);

  // Verhindert Scrollen des Hintergrunds, wenn Lightbox geöffnet ist
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateLightbox = (direction) => {
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
      setLightboxIndex(newIndex);
    }
  };

  // Touch-Events für Swipe-Gesten
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe nach links
      navigateLightbox(1);
    }

    if (touchStart - touchEnd < -100) {
      // Swipe nach rechts
      navigateLightbox(-1);
    }
  };

  return (
    <div className="gallery-container" ref={galleryRef}>
      <div className="gallery-main">
        <img 
          src={images[activeIndex].large} 
          alt={images[activeIndex].alt} 
          className="gallery-main-image" 
          onClick={() => openLightbox(activeIndex)}
        />
        <div className="gallery-main-caption">
          <p>{images[activeIndex].caption}</p>
        </div>
      </div>
      
      <div className="gallery-thumbnails-container">
        <button 
          className="gallery-nav-button gallery-nav-prev" 
          onClick={() => {
            const newIndex = Math.max(0, activeIndex - 1);
            setActiveIndex(newIndex);
          }}
          disabled={activeIndex === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
          </svg>
        </button>
        
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`thumbnail-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        
        <button 
          className="gallery-nav-button gallery-nav-next" 
          onClick={() => {
            const newIndex = Math.min(images.length - 1, activeIndex + 1);
            setActiveIndex(newIndex);
          }}
          disabled={activeIndex === images.length - 1}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="gallery-lightbox"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
              </svg>
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={images[lightboxIndex].large} 
                alt={images[lightboxIndex].alt} 
                className="lightbox-image" 
              />
              
              {images[lightboxIndex].caption && (
                <div className="lightbox-caption">
                  <p>{images[lightboxIndex].caption}</p>
                </div>
              )}
            </div>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              disabled={lightboxIndex === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
              </svg>
            </button>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              disabled={lightboxIndex === images.length - 1}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
              </svg>
            </button>
            
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryNew;
