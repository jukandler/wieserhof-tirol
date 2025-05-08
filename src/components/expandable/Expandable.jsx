import React, { useState, useRef, useEffect } from 'react';
import './expandable.css';

const Expandable = ({ title, image, description }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('100px');
  const contentRef = useRef(null);
  
  // Erstellt eine gekürzte Version des Beschreibungstextes
  const shortDescription = description.substring(0, 150) + '...';
  
  // Aktualisiert die Höhe, wenn sich der expanded-Status ändert
  useEffect(() => {
    if (expanded && contentRef.current) {
      // Kurze Verzögerung, um sicherzustellen, dass der DOM aktualisiert wurde
      setTimeout(() => {
        setContentHeight(`${contentRef.current.scrollHeight}px`);
      }, 10);
    } else {
      setContentHeight('100px');
    }
  }, [expanded]);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`activity-teaser ${expanded ? 'expanded' : ''}`}>
      <div className="teaser-image">
        <img src={image} alt={title} />
      </div>
      
      <div className="teaser-content">
        <h3 className="teaser-title">{title}</h3>
        
        <div 
          className="teaser-description-container"
          style={{ maxHeight: contentHeight }}
        >
          <div className="teaser-description-inner" ref={contentRef}>
            <p 
              className="teaser-description" 
              dangerouslySetInnerHTML={{__html: expanded ? description : shortDescription}}
            ></p>
          </div>
        </div>
        
        <button 
          className="teaser-read-more"
          onClick={toggleExpand}
        >
          <span>{expanded ? 'Weniger anzeigen' : 'Weiterlesen'}</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            className={expanded ? 'rotate-icon' : ''}
          >
            <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Expandable;
