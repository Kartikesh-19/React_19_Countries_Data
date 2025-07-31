import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const GoogleMapComponent = ({
  center = { lat: 40.7128, lng: -74.0060 }, // Default to New York
  zoom = 10,
  markers = [],
  height = '400px',
  width = '100%',
  mapContainerStyle = {},
  onMapClick,
  onMarkerClick,
  showInfoWindow = false,
  infoWindowContent = null,
  selectedMarker = null,
  onInfoWindowClose,
  className = '',
  ...props
}) => {
  const [map, setMap] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  // You'll need to replace this with your actual Google Maps API key
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE',
    libraries: ['places']
  });

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMapClick = useCallback((event) => {
    if (onMapClick) {
      onMapClick(event);
    }
  }, [onMapClick]);

  const handleMarkerClick = useCallback((marker, index) => {
    if (onMarkerClick) {
      onMarkerClick(marker, index);
    }
    if (showInfoWindow) {
      setInfoWindow({ marker, index });
    }
  }, [onMarkerClick, showInfoWindow]);

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindow(null);
    if (onInfoWindowClose) {
      onInfoWindowClose();
    }
  }, [onInfoWindowClose]);

  // Default map container style
  const defaultMapContainerStyle = {
    width: width,
    height: height,
    ...mapContainerStyle
  };

  if (loadError) {
    return (
      <div className={`google-map-error ${className}`} style={defaultMapContainerStyle}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          backgroundColor: '#202020',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '2rem',
          border: '2px solid #2e86c1'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Error loading Google Maps</p>
            <p style={{ fontSize: '14px', color: '#2e86c1' }}>
              Please check your API key configuration
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`google-map-loading ${className}`} style={defaultMapContainerStyle}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          backgroundColor: '#202020',
          borderRadius: '2rem',
          border: '2px solid #2e86c1'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              border: '4px solid #202020',
              borderTop: '4px solid #2e86c1',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p style={{ color: '#fff', margin: 0, fontSize: '16px' }}>Loading map...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`google-map-container ${className}`}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick}
        {...props}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            title={marker.title}
            label={marker.label}
            icon={marker.icon}
            onClick={() => handleMarkerClick(marker, index)}
          />
        ))}

        {showInfoWindow && infoWindow && (
          <InfoWindow
            position={infoWindow.marker.position}
            onCloseClick={handleInfoWindowClose}
          >
            <div>
              {infoWindowContent || (
                <div>
                  <h3>{infoWindow.marker.title || 'Location'}</h3>
                  {infoWindow.marker.description && (
                    <p>{infoWindow.marker.description}</p>
                  )}
                </div>
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default GoogleMapComponent; 