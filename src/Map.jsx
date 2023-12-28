import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map(props){
  const position = [props.lat, props.lon];

  return (
    <MapContainer key={`${props.lat}-${props.lon}`} center={position} zoom={12} className='w-[23.438rem] h-96 relative z-0  style={{ top: "8rem" }}'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A marker</Popup>
      </Marker>
    </MapContainer>
  );
};

