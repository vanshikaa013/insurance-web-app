import React, { useState } from 'react';
import './abouttravel.css';

const AccordionWithIcons = ({ sectionId }) => {
    const [activeAccordion, setActiveAccordion] = useState(`${sectionId}-collapseOne`); // Default open accordion

    const handleToggle = (accordionId) => {
        setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
    };

    return (
        <div className="accordion" id={`accordionExample-${sectionId}`}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button btn-font-cng mb-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${sectionId}-collapseOne`}
                        aria-expanded={activeAccordion === `${sectionId}-collapseOne`}
                        aria-controls={`${sectionId}-collapseOne`}
                        onClick={() => handleToggle(`${sectionId}-collapseOne`)}
                    >
                        Q1. Why do I need insurance for travellers?{' '}
                        <span style={{ marginLeft: 'auto' }}>
                            <i className={`fa-solid ${activeAccordion === `${sectionId}-collapseOne` ? 'fa-minus' : 'fa-plus'}`}></i>
                        </span>
                    </button>
                </h2>
                <div
                    id={`${sectionId}-collapseOne`}
                    className={`accordion-collapse collapse ${activeAccordion === `${sectionId}-collapseOne` ? 'show' : ''}`}
                    data-bs-parent={`#accordionExample-${sectionId}`}
                >
                    <div className="accordion-body">
                        <p className="my-fontspera">
                            Travel insurance covers you against unexpected events such as medical emergencies, trip cancellations,
                            lost or delayed luggage, and other unforeseen expenses that can occur while traveling.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button btn-font-cng collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${sectionId}-collapseTwo`}
                        aria-expanded={activeAccordion === `${sectionId}-collapseTwo`}
                        aria-controls={`${sectionId}-collapseTwo`}
                        onClick={() => handleToggle(`${sectionId}-collapseTwo`)}
                    >
                        Q2. When to purchase travel insurance?{' '}
                        <span style={{ marginLeft: 'auto' }}>
                            <i className={`fa-solid ${activeAccordion === `${sectionId}-collapseTwo` ? 'fa-minus' : 'fa-plus'}`}></i>
                        </span>
                    </button>
                </h2>
                <div
                    id={`${sectionId}-collapseTwo`}
                    className={`accordion-collapse collapse ${activeAccordion === `${sectionId}-collapseTwo` ? 'show' : ''}`}
                    data-bs-parent={`#accordionExample-${sectionId}`}
                >
                    <div className="accordion-body">
                        <p className="my-fontspera">
                            It's best to buy insurance as soon as you book your trip. This way, you're covered for any pre-trip issues
                            that might cause you to cancel such as illness or a family emergency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutTravel = () => {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropUp">
                Know More
            </button>

            <div
                className="modal fade my-mode"
                id="staticBackdropUp"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                <img
                                    src="https://cdn.policybazaar.ae/pbuae/images/faq-travel-image-2.svg"
                                    alt=""
                                />{' '}
                                Frequently Asked Questions
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex align-items-start">
                                <div
                                    className="nav  flex-column nav-pills me-3 border-end pe-3 pt-0"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        className="nav-link active "
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        Home
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        Profile
                                    </button>
                                    <button
                                        className="nav-link"
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-messages"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                    >
                                        Messages
                                    </button>
                                </div>

                                <div className="tab-content w-100" id="v-pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="v-pills-home"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-home-tab"
                                    >
                                        <AccordionWithIcons sectionId="home" />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-profile"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-profile-tab"
                                    >
                                        <AccordionWithIcons sectionId="profile" />
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="v-pills-messages"
                                        role="tabpanel"
                                        aria-labelledby="v-pills-messages-tab"
                                    >
                                        <AccordionWithIcons sectionId="messages" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTravel;
