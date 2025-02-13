import React, { useState } from "react";
import './travelclaim.css'
import { Autocomplete, TextField, Typography } from "@mui/material";

const TravelClaim = () => {
    // Static names list with updated details
    const names = [
        {
            name: "Orient Insurance",
            details: (
                <>
                    <Typography className="">

                
                        <div className="my_media-mobile">

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmWhts..svg" />
                                <p className="mail-med">Whatsapp</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex   mt-3">
                            <h6 style={{ color: '#000', fontSize: '15px' }}>Emergency Assistance</h6>
                        </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>





                        </div>



                        {/* ====================== Claim ========================== */}

                        <div className="mt-4 d-flex">
                            <h6 >Claims</h6>
                        </div>
                        <div className="mb-2">
                            <hr />
                        </div>

                        <div class="stepper d-flex flex-column mt-5 ml-2">
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Notify the Insurance Company</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted  pb-3">Contact your insurance company as soon as possible to inform them about the claim via the contact details provided above.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Complete the Claim Form</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Fill out the claim form accurately and provide all the requested information. Be thorough in providing details to avoid any delays in processing your claim.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                                    <div class="line h-100 d-none"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Submit the Claim</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Submit the claim form and all supporting documents to the insurance company through the designated channels.</p>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <p className="my-li_"> <span style={{ color: '#000', fontWeight: '600', fontSize: '12px' }}>NOTE:</span> The specific steps and requirements may vary depending on the insurance company and policy terms. It is
                                essential to carefully review your policy documents and follow the instructions provided by your insurer.</p>
                        </div>

                        <div className="mt-3">
                            <h5 style={{ color: '#000' }}>Documents required</h5>
                            <p style={{ color: '#000' }}>Here is an exhaustive list of documents required to file the claim. You may need some or all of them, based on your specific condition:</p>
                        </div>

                        <div className="mt-4">
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Travel insurance policy documents</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Completed claim form (provided by the insurance company)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Proof of travel (e.g., travel itinerary, boarding passes, hotel bookings)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Receipts and invoices for expenses incurred (e.g., medical bills, cancellation fees, lost baggage receipts)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Police reports or incident reports (in case of theft, loss, or accidents)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Medical records and reports (if claiming for medical expenses)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Any other relevant supporting documents as specified by the insurer</li>
                        </div>



                    </Typography>
                </>
            ),
        },
        {
            name: "GiG Gulf (Previously AXA)",
            details: (
                <>

<Typography className="">

                
<div className="my_media-mobile">

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
        <p className="mail-med">Email</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
        <p className="mail-med">Contact</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmWhts..svg" />
        <p className="mail-med">Whatsapp</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex   mt-3">
    <h6 style={{ color: '#000', fontSize: '15px' }}>Emergency Assistance</h6>
</div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
        <p className="mail-med">Email</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
        <p className="mail-med">Contact</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>





</div>



{/* ====================== Claim ========================== */}

<div className="mt-4 d-flex">
    <h6 >Claims</h6>
</div>
<div className="mb-2">
    <hr />
</div>

<div class="stepper d-flex flex-column mt-5 ml-2">
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
            <div class="line h-100"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Notify the Insurance Company</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted  pb-3">Contact your insurance company as soon as possible to inform them about the claim via the contact details provided above.</p>
        </div>
    </div>
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
            <div class="line h-100"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Complete the Claim Form</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Fill out the claim form accurately and provide all the requested information. Be thorough in providing details to avoid any delays in processing your claim.</p>
        </div>
    </div>
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
            <div class="line h-100 d-none"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Submit the Claim</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Submit the claim form and all supporting documents to the insurance company through the designated channels.</p>
        </div>
    </div>

</div>

<div className="">
    <p className="my-li_"> <span style={{ color: '#000', fontWeight: '600', fontSize: '12px' }}>NOTE:</span> The specific steps and requirements may vary depending on the insurance company and policy terms. It is
        essential to carefully review your policy documents and follow the instructions provided by your insurer.</p>
</div>

<div className="mt-3">
    <h5 style={{ color: '#000' }}>Documents required</h5>
    <p style={{ color: '#000' }}>Here is an exhaustive list of documents required to file the claim. You may need some or all of them, based on your specific condition:</p>
</div>

<div className="mt-4">
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Travel insurance policy documents</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Completed claim form (provided by the insurance company)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Proof of travel (e.g., travel itinerary, boarding passes, hotel bookings)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Receipts and invoices for expenses incurred (e.g., medical bills, cancellation fees, lost baggage receipts)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Police reports or incident reports (in case of theft, loss, or accidents)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Medical records and reports (if claiming for medical expenses)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Any other relevant supporting documents as specified by the insurer</li>
</div>



</Typography>

                </>
            ),
        },
        {
            name: "Watania Takaful",
            details: (
                <>

<Typography className="">

                
                        <div className="my_media-mobile">

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmWhts..svg" />
                                <p className="mail-med">Whatsapp</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex   mt-3">
                            <h6 style={{ color: '#000', fontSize: '15px' }}>Emergency Assistance</h6>
                        </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>





                        </div>



                        {/* ====================== Claim ========================== */}

                        <div className="mt-4 d-flex">
                            <h6 >Claims</h6>
                        </div>
                        <div className="mb-2">
                            <hr />
                        </div>

                        <div class="stepper d-flex flex-column mt-5 ml-2">
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Notify the Insurance Company</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted  pb-3">Contact your insurance company as soon as possible to inform them about the claim via the contact details provided above.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Complete the Claim Form</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Fill out the claim form accurately and provide all the requested information. Be thorough in providing details to avoid any delays in processing your claim.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                                    <div class="line h-100 d-none"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Submit the Claim</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Submit the claim form and all supporting documents to the insurance company through the designated channels.</p>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <p className="my-li_"> <span style={{ color: '#000', fontWeight: '600', fontSize: '12px' }}>NOTE:</span> The specific steps and requirements may vary depending on the insurance company and policy terms. It is
                                essential to carefully review your policy documents and follow the instructions provided by your insurer.</p>
                        </div>

                        <div className="mt-3">
                            <h5 style={{ color: '#000' }}>Documents required</h5>
                            <p style={{ color: '#000' }}>Here is an exhaustive list of documents required to file the claim. You may need some or all of them, based on your specific condition:</p>
                        </div>

                        <div className="mt-4">
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Travel insurance policy documents</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Completed claim form (provided by the insurance company)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Proof of travel (e.g., travel itinerary, boarding passes, hotel bookings)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Receipts and invoices for expenses incurred (e.g., medical bills, cancellation fees, lost baggage receipts)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Police reports or incident reports (in case of theft, loss, or accidents)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Medical records and reports (if claiming for medical expenses)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Any other relevant supporting documents as specified by the insurer</li>
                        </div>



                    </Typography>

                </>
            ),
        },
        {
            name: "Rak Insurance",
            details: (
                <>

<Typography className="">

                
                        <div className="my_media-mobile">

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmWhts..svg" />
                                <p className="mail-med">Whatsapp</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex   mt-3">
                            <h6 style={{ color: '#000', fontSize: '15px' }}>Emergency Assistance</h6>
                        </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
                                <p className="mail-med">Email</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4 gap-2">
                                <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
                                <p className="mail-med">Contact</p>
                            </div>
                            <div className="my-li_1">
                                <div className="">
                                    <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
                                </div>
                            </div>





                        </div>



                        {/* ====================== Claim ========================== */}

                        <div className="mt-4 d-flex">
                            <h6 >Claims</h6>
                        </div>
                        <div className="mb-2">
                            <hr />
                        </div>

                        <div class="stepper d-flex flex-column mt-5 ml-2">
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Notify the Insurance Company</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted  pb-3">Contact your insurance company as soon as possible to inform them about the claim via the contact details provided above.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                                    <div class="line h-100"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Complete the Claim Form</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Fill out the claim form accurately and provide all the requested information. Be thorough in providing details to avoid any delays in processing your claim.</p>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                                    <div class="line h-100 d-none"></div>
                                </div>
                                <div>
                                    <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Submit the Claim</h6>
                                    <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Submit the claim form and all supporting documents to the insurance company through the designated channels.</p>
                                </div>
                            </div>

                        </div>

                        <div className="">
                            <p className="my-li_"> <span style={{ color: '#000', fontWeight: '600', fontSize: '12px' }}>NOTE:</span> The specific steps and requirements may vary depending on the insurance company and policy terms. It is
                                essential to carefully review your policy documents and follow the instructions provided by your insurer.</p>
                        </div>

                        <div className="mt-3">
                            <h5 style={{ color: '#000' }}>Documents required</h5>
                            <p style={{ color: '#000' }}>Here is an exhaustive list of documents required to file the claim. You may need some or all of them, based on your specific condition:</p>
                        </div>

                        <div className="mt-4">
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Travel insurance policy documents</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Completed claim form (provided by the insurance company)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Proof of travel (e.g., travel itinerary, boarding passes, hotel bookings)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Receipts and invoices for expenses incurred (e.g., medical bills, cancellation fees, lost baggage receipts)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Police reports or incident reports (in case of theft, loss, or accidents)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Medical records and reports (if claiming for medical expenses)</li>
                            <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Any other relevant supporting documents as specified by the insurer</li>
                        </div>



                    </Typography>

                </>
            ),
        },
        {
            name: "Alliance Insurance",
            details: (
                <>

<Typography className="">

                
<div className="my_media-mobile">

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
        <p className="mail-med">Email</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
        <p className="mail-med">Contact</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmWhts..svg" />
        <p className="mail-med">Whatsapp</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex   mt-3">
    <h6 style={{ color: '#000', fontSize: '15px' }}>Emergency Assistance</h6>
</div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmEmail..svg" />
        <p className="mail-med">Email</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>

    <div className="d-flex mt-4 gap-2">
        <img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/Claim/clmHead..svg" />
        <p className="mail-med">Contact</p>
    </div>
    <div className="my-li_1">
        <div className="">
            <p className="hel_whats">Travel.Claims@nextcarehealth.com</p>
        </div>
    </div>





</div>



{/* ====================== Claim ========================== */}

<div className="mt-4 d-flex">
    <h6 >Claims</h6>
</div>
<div className="mb-2">
    <hr />
</div>

<div class="stepper d-flex flex-column mt-5 ml-2">
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
            <div class="line h-100"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Notify the Insurance Company</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted  pb-3">Contact your insurance company as soon as possible to inform them about the claim via the contact details provided above.</p>
        </div>
    </div>
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
            <div class="line h-100"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Complete the Claim Form</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Fill out the claim form accurately and provide all the requested information. Be thorough in providing details to avoid any delays in processing your claim.</p>
        </div>
    </div>
    <div class="d-flex mb-1">
        <div class="d-flex flex-column pr-4 align-items-center">
            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
            <div class="line h-100 d-none"></div>
        </div>
        <div>
            <h6 class="my-pera_" style={{ marginLeft: '10px' }}>Submit the Claim</h6>
            <p style={{ fontSize: '12px', marginLeft: '8px' }} class="lead my-li_ text-muted pb-3">Submit the claim form and all supporting documents to the insurance company through the designated channels.</p>
        </div>
    </div>

</div>

<div className="">
    <p className="my-li_"> <span style={{ color: '#000', fontWeight: '600', fontSize: '12px' }}>NOTE:</span> The specific steps and requirements may vary depending on the insurance company and policy terms. It is
        essential to carefully review your policy documents and follow the instructions provided by your insurer.</p>
</div>

<div className="mt-3">
    <h5 style={{ color: '#000' }}>Documents required</h5>
    <p style={{ color: '#000' }}>Here is an exhaustive list of documents required to file the claim. You may need some or all of them, based on your specific condition:</p>
</div>

<div className="mt-4">
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Travel insurance policy documents</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Completed claim form (provided by the insurance company)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Proof of travel (e.g., travel itinerary, boarding passes, hotel bookings)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Receipts and invoices for expenses incurred (e.g., medical bills, cancellation fees, lost baggage receipts)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Police reports or incident reports (in case of theft, loss, or accidents)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Medical records and reports (if claiming for medical expenses)</li>
    <li className="my-li_" style={{ listStyleType: 'none', fontSize: '13px', marginBottom: '12px', color: '#000' }}><img class="img-fluid" src="https://cdn.policybazaar.ae/prequote/public/src/assets/images/icon-half-checkgreen..svg" /> Any other relevant supporting documents as specified by the insurer</li>
</div>



</Typography>

                </>
            ),
        },
    ];

    const [selectedName, setSelectedName] = useState(null);

    return (
        <>
            {/* Navigation */}
            <div className="container mt-2">
                <div>
                    <a href="claim">
                        <i className="fa-solid fa-arrow-left"></i> Back to Claim
                    </a>
                </div>
            </div>

            {/* Claim Process Section */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="mb-2">Claim Process</h4>
                        <p style={{ fontSize: "12px", marginBottom: "10px" }}>Travel Insurance</p>
                        <p style={{ fontSize: "12px" }}>
                            Please select the region of Travel and Insurer name to get the claim process
                        </p>

                        {/* Source/Destination Dropdown */}
                        <div className="mt-4" style={{ width: "100%" }}>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                style={{ width: "100%", padding: "15px" }}
                            >
                                <option selected>Select Source/Destination</option>
                                <option value="1">In Bound</option>
                                <option value="3">Out Bound</option>
                            </select>
                        </div>

                        {/* Autocomplete Section */}
                        <div className="mt-4" style={{ width: "100%" }}>
                            <Autocomplete
                                options={names}
                                getOptionLabel={(option) => option.name}
                                onChange={(event, value) => setSelectedName(value)}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select a Name" fullWidth />
                                )}
                            />
                            {selectedName && (
                                <div style={{ marginTop: "20px" }}>
                                    <Typography variant="h6">Reimbursement Claim</Typography>
                                    {selectedName.details}
                                </div>
                            )}
                        </div>

                        {/* Claim Steps Section */}

                    </div>

                    {/* Emergency Assistance Section */}

                </div>
            </div>
        </>
    );
};

export default TravelClaim;
