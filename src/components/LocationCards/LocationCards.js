import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLocationsCardsContainer } from './LocationCardsStyles'

function LocationCards() {
    return (
        <StyledLocationsCardsContainer>
            <div className="card-container">
                <div className="location-section">
                    <div className="canada location-img" />
                    <div className="bot-container">
                        <h3>CANADA</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>

                <div className="location-section">
                    <div className="australia location-img" />
                    <div className="bot-container">
                        <h3>AUSTRALIA</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>
                <div className="location-section">
                    <div className="uk location-img" />
                    <div className="bot-container">
                        <h3>UNITED KINGDOM</h3>
                        <Link to="/locations" className="button link-btn">
                            SEE LOCATION
                        </Link>
                    </div>
                </div>
            </div>
        </StyledLocationsCardsContainer>
    )
}

export default LocationCards
