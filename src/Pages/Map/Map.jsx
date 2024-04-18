import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = () => {
    const Center = [23.7956, 90.3537]
    return (
        <div>
            <Helmet>
                <title>Farmers Insurance | Location</title>
            </Helmet>
            <MapContainer center={Center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={Center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;