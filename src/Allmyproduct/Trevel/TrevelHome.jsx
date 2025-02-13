import React from 'react'
import { Link } from 'react-router-dom'

const TrevelHome = () => {
    return (
        <div>
            <div className="container my-5">
                
                <div className="travel-home-container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center">
                            <h2
                                className="travel-home-title"
                                style={{ textAlign: "left !important" }}
                            >
                                Secure Your Travel in 4 Steps!
                            </h2>
                            <div className="travel-home-icons">
                                <div>
                                    {/* <i class="fas fa-tags travel-home-icon" style="color: #4caf50;"></i> */}
                                    <img
                                        className="travel-home-icon"
                                        src="https://static.pbcdn.ae/pbuae/images/lowest-price-travel.svg"
                                        alt=""
                                    />
                                    <p className="travel-home-icon-title">Lowest Prices</p>
                                </div>
                                <div>
                                    {/* <i class="fas fa-bolt travel-home-icon" style="color: #2196f3;"></i>
             */}
                                    <img
                                        className="travel-home-icon"
                                        src="https://static.pbcdn.ae/pbuae/images/instant-new.svg"
                                        alt=""
                                    />
                                    <p className="travel-home-icon-title">Instant Issuance</p>
                                </div>
                                <div>
                                    {/* <i class="fas fa-users travel-home-icon" style="color: #ff9800;"></i> */}
                                    <img
                                        className="travel-home-icon"
                                        src="https://static.pbcdn.ae/pbuae/images/personalized-plans.svg"
                                        alt=""
                                    />
                                    <p className="travel-home-icon-title">4 Personalized Plans</p>
                                </div>
                            </div>
                            <img
                                className="trevel-home-img"
                                src="https://i.ibb.co/yNQ25PX/png-clipart-of-family-with-two-gray-softside-luggage-ooty-travel-package-tour-vacation-family-vacati.png"
                                alt="Family with luggage"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="travel-home-card p-5">
                                <p className="travel-home-card-title">
                                    Secure Your Travel for Just{" "}
                                    <span className="travel-home-price">ZAR 33*</span>
                                </p>
                                <Link to="/treveltreePage2" style={{width:'100%'}} className="btn travel-tyep2 mb-3 p-2">Travling to UAE</Link>
                                <Link to="/treveltreePage2" style={{width:'100%'}} className="btn travel-tyep2   p-2">Travling out of UAE</Link>
                                <button className="btn travel-home-button w-100   p-2">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="travel-home-ratings">
                        <h6>
                            We Are Rated <span className="rating-info">4.6/5</span>
                            <span className="rating-stars">★★★★★</span>
                        </h6>
                        <div className="trevel-rat">
                            <span>
                                23486{" "}
                                <img
                                    src="https://cdn.policybazaar.ae/pbuae/images/google-logo-banner.svg"
                                    alt=""
                                />
                                Reviews
                            </span>
                            <span>50+ Insurance Partners</span>
                            <span>1 Million+ Trusted Customers</span>
                            <span>250K+ Policies Sold</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TrevelHome
