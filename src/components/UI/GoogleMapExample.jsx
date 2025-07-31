import React, { useState } from 'react';
import GoogleMapComponent from './GoogleMap';
import { FaMapMarkerAlt, FaGlobe, FaMap } from "react-icons/fa";

const GoogleMapExample = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Portfolio-style markers data - representing your work/locations
  const portfolioMarkers = [
    {
      position: { lat: 28.6139, lng: 77.2090 },
      title: 'Delhi, India',
      description: 'Led development of enterprise-level React applications and mentored junior developers.',
      label: 'DEL',
      type: 'work',
      projects: ['E-commerce Platform', 'Banking App', 'Healthcare Dashboard']
    },
    {
      position: { lat: 19.0760, lng: 72.8777 },
      title: 'Mumbai, India',
      description: 'Built scalable frontend solutions and collaborated with cross-functional teams.',
      label: 'MUM',
      type: 'project',
      projects: ['Fintech Dashboard', 'Real Estate Portal', 'Food Delivery App']
    },
    {
      position: { lat: 12.9716, lng: 77.5946 },
      title: 'Bangalore, India',
      description: 'Developed innovative web applications and contributed to open-source projects.',
      label: 'BLR',
      type: 'experience',
      projects: ['AI-Powered Chatbot', 'Analytics Dashboard', 'Mobile App']
    },
    {
      position: { lat: 17.3850, lng: 78.4867 },
      title: 'Hyderabad, India',
      description: 'Created responsive designs and optimized user experiences for global clients.',
      label: 'HYD',
      type: 'innovation',
      projects: ['CRM System', 'Educational Platform', 'Social Media App']
    }
  ];

  const handleMarkerClick = (marker, index) => {
    console.log('Marker clicked:', marker);
    setSelectedMarker(marker);
  };

  const handleMapClick = (event) => {
    console.log('Map clicked at:', event.latLng);
    setSelectedMarker(null);
  };

  return (
    <section className="section-map container">
      <h2 className="container-title">
        My Project Journey
        <br />
        <span style={{ color: '#2e86c1' }}>Locations Where I've Delivered Excellence</span>
      </h2>
      
      <p className="paragraph" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        Explore the cities across India where I've successfully delivered innovative web applications, 
        collaborated with talented teams, and created impactful digital solutions for diverse industries.
      </p>

      <div className="map-container">
        <GoogleMapComponent
          center={{ lat: 23.5937, lng: 78.9629 }} // Center of India
          zoom={5}
          markers={portfolioMarkers}
          height="600px"
          width="100%"
          onMapClick={handleMapClick}
          onMarkerClick={handleMarkerClick}
          showInfoWindow={true}
          className="portfolio-map"
          mapContainerStyle={{
            borderRadius: '2rem',
            border: '2px solid #2e86c1',
            boxShadow: '0 10px 30px rgba(46, 134, 193, 0.3)'
          }}
        />
      </div>

      {selectedMarker && (
        <div className="selected-marker-info container-card bg-blue-box" style={{
          marginTop: '3rem',
          padding: '2rem',
          borderRadius: '1.5rem',
          border: '2px solid #2e86c1',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #2e86c1, #3498db, #5dade2)'
          }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <FaMapMarkerAlt style={{ color: '#2e86c1', fontSize: '2rem' }} />
            <h3 style={{ color: '#fff', fontSize: '2.4rem', margin: 0 }}>
              {selectedMarker.title}
            </h3>
          </div>
          
          <p style={{ 
            color: '#fff', 
            fontSize: '1.8rem', 
            lineHeight: '1.6',
            marginBottom: '1.5rem'
          }}>
            {selectedMarker.description}
          </p>

          {selectedMarker.projects && (
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                color: '#2e86c1', 
                fontSize: '1.8rem', 
                marginBottom: '1rem',
                fontWeight: '600'
              }}>
                Key Projects Delivered:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {selectedMarker.projects.map((project, index) => (
                  <span key={index} style={{
                    backgroundColor: '#2e86c1',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '2rem',
                    fontSize: '1.3rem',
                    fontWeight: '500'
                  }}>
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            color: '#2e86c1',
            fontSize: '1.4rem'
          }}>
            <FaGlobe />
            <span>
              <strong>Location:</strong> {selectedMarker.title}
            </span>
          </div>
        </div>
      )}

      <div className="map-stats" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginTop: '4rem'
      }}>
        <div className="container-card bg-green-box" style={{ textAlign: 'center', padding: '2rem' }}>
          <FaMap style={{ fontSize: '3rem', color: '#2e86c1', marginBottom: '1rem' }} />
          <h3 style={{ color: '#fff', fontSize: '2.4rem', marginBottom: '0.5rem' }}>4</h3>
          <p style={{ color: '#fff', fontSize: '1.6rem' }}>Cities</p>
        </div>
        
        <div className="container-card bg-yellow-box" style={{ textAlign: 'center', padding: '2rem' }}>
          <FaGlobe style={{ fontSize: '3rem', color: '#2e86c1', marginBottom: '1rem' }} />
          <h3 style={{ color: '#fff', fontSize: '2.4rem', marginBottom: '0.5rem' }}>12+</h3>
          <p style={{ color: '#fff', fontSize: '1.6rem' }}>Projects</p>
        </div>
        
        <div className="container-card bg-white-box" style={{ textAlign: 'center', padding: '2rem' }}>
          <FaMapMarkerAlt style={{ fontSize: '3rem', color: '#2e86c1', marginBottom: '1rem' }} />
          <h3 style={{ color: '#fff', fontSize: '2.4rem', marginBottom: '0.5rem' }}>100%</h3>
          <p style={{ color: '#fff', fontSize: '1.6rem' }}>Client Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapExample; 