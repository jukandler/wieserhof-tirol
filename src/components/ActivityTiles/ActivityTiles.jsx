import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityTiles.css';
import SommerImg from "../../assets/images/sommer/Biken.jpg";
import WinterImg from "../../assets/images/winter/alpinski.jpg";
import IndoorImg from "../../assets/images/indoor/naturparkhaus.jpg";

const ActivityTiles = () => {
  const activities = [
    {
      id: 'sommer',
      title: 'Sommer',
      subtitle: 'Aktiv in der Natur',
      image: SommerImg,
      link: '/sommer',
      description: 'Wandern, Radfahren und mehr in der malerischen Tiroler Bergwelt'
    },
    {
      id: 'winter',
      title: 'Winter',
      subtitle: 'Schnee & Erholung',
      image: WinterImg,
      link: '/winter',
      description: 'Skifahren, Langlaufen und gemütliche Winterwanderungen'
    },
    {
      id: 'indoor',
      title: 'Indoor',
      subtitle: 'Entspannung & Genuss',
      image: IndoorImg,
      link: '/indoor',
      description: 'Wellness, Kulinarik und regionale Erlebnisse'
    }
  ];

  return (
    <section className="activity-tiles-section">
    <div className="divider space-top"></div>
      <div className="activity-tiles-heading">
        <h2>Aktivitäten</h2>
        <p>Entdecken Sie die vielfältigen Möglichkeiten für Ihren Aufenthalt bei uns in Tirol</p>
      </div>

      <div className="activity-tiles-container">
        {activities.map(activity => (
          <Link to={activity.link} key={activity.id} className="activity-tile">
            <div className="activity-tile-image-container">
              <img src={activity.image} alt={`${activity.title} Aktivitäten`} className="activity-tile-image" />
              <div className="activity-tile-overlay"></div>
            </div>
            <div className="activity-tile-content">
              <h2 className="activity-tile-title">{activity.title}</h2>
              {/* <p className="activity-tile-subtitle">{activity.subtitle}</p> */}
              <p className="activity-tile-description">{activity.description}</p>
              <div className="activity-tile-button">
                <span>Entdecken</span>
                <svg width="18" height="12" viewBox="0 0 18 12">
                  <path d="M12 0L10.6 1.4L14.2 5H0V7H14.2L10.6 10.6L12 12L18 6L12 0Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ActivityTiles;
