import React, { useState, useEffect, useRef } from 'react';
import fetchSpreadsheetData from "../../helpers/fetchSpreadsheetData";
import { Link } from 'react-router-dom';
import './stickyTopBar.css';

const StickyTopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');
  const [slots, setSlots] = useState(null);
  
  useEffect(() => {
    fetchSpreadsheetData('Sheet1!A2:A6', setSlots);
  }, []);

  // Scroll-Handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Bestimmt, ob nach oben oder unten gescrollt wird
      if (currentScrollY < lastScrollY) {
        // Nach oben scrollen - Bar einblenden
        setIsVisible(true);
      } else if (currentScrollY > 50) {
        // Nach unten scrollen und nicht ganz oben - Bar ausblenden
        setIsVisible(false);
        // Beim Scrollen nach unten auch einklappen
        if (expanded) {
          setExpanded(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, expanded]);

  // Aktualisiert die Höhe, wenn sich der expanded-Status ändert
  useEffect(() => {
    if (expanded && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight('0px');
    }
  }, [expanded]);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

    if (!slots) {
        return undefined;
    }

  return (
    <div className={`sticky-bar ${isVisible ? 'visible' : 'hidden'} ${expanded ? 'expanded' : ''}`}>
      <div className="sticky-bar-header" onClick={toggleExpand}>
        <div className="sticky-title">
          Letzte Chance: Restplätze und Angebote
          <span className="toggle-icon">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 24 24"
              className={expanded ? 'rotate-icon' : ''}
            >
              <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
      
      <div 
        className="sticky-content-wrapper"
        style={{ maxHeight: contentHeight }}
      >
        <div className="sticky-content" ref={contentRef}>
          {slots.map((slot, i) => <div key={i}>{slot}</div>)}
            <Link to="/anfrage"><button className="button button-primary">Jetzt unverbindlich anfragen</button></Link>
        </div>
      </div>
    </div>
  );
};

export default StickyTopBar;
