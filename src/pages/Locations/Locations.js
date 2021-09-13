import React, { useEffect } from 'react'
import { StyledLocationsPageContainer } from './LocationsStyles';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { GlobalStyle } from '../../Theme';

function Locations() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const locationData = [
        {
            location: 'Canada',
            officeName: 'Designo Central Office',
            streetName: '3886 Wellington Street',
            city: 'Toronto, Ontario M9C 3J5',
            phone: 'P : +1 253-863-8967',
            email: 'M : contact@designo.co',
            coord: [43.64531, -79.39619],
        },
        {
            location: 'Australia',
            officeName: 'Designo AU Office',
            streetName: '19 Balonne Street',
            city: 'New South Wales 2443',
            phone: 'P : (02) 6720 9092',
            email: 'M : contact@designo.au',
            coord: [-30.32925, 149.78824],
        },
        {
            location: 'United Kingdom',
            officeName: 'Designo UK Office',
            streetName: '13  Colorado Way',
            city: 'Rhyd-y-fro SA8 9GA',
            phone: 'P : 078 3115 1400',
            email: 'M : contact@designo.uk',
            coord: [51.72922, -3.86043],
        },
    ];

    const renderList = locationData.map((item, idx) => {
        return (
            <div className="location" key={idx}>
                <div className="location-map">
                    <MapContainer
                        center={item.coord}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={item.coord}></Marker>
                    </MapContainer>
                </div>

                <div className="location-desc-container flex-col-vh-center">
                    <div className="location-desc-inner-container">
                        <h2 className="phone-hero-text">{item.location}</h2>
                        <div className="location-desc-detail phone-hero-subtext">
                            <div className="location-address">
                                <p className="bold">{item.officeName}</p>
                                <p>{item.streetName}</p>
                                <p>{item.city}</p>
                            </div>
                            <div className="location-contact">
                                <p className="bold">Contact</p>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <StyledLocationsPageContainer>
            <GlobalStyle />
            <main>
                <Header />

                <div className="locations">{renderList}</div>

                <Footer />
            </main>
        </StyledLocationsPageContainer>
    )
}

export default Locations
