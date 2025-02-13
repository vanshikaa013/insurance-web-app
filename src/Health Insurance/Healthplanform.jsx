import React from 'react'
import '../Products/carplanmedia.css'

const Healthplanform = () => {
    const questions = [
        "Have you ever been accepted for life and/or health insurance on sub-standard terms?",
        "Whether the member is currently covered under any Medical Insurance Plan?",
        "Have you ever been declined for life and/or health insurance?",
        "Do you have any family history of cancer?",
        "Are you currently suffering or have suffered from any type of cancer?",
        "Are you suffering or ever suffered from any type of Cancer?",
        "Did you have any bone fractures or injuries to bones or tendons?",
        "Has any material used for osteosynthesis etc. been removed?",
        "Any dimness of vision or cataract etc?",
        "Have you been tested or treated for Hepatitis A or C?",
        "Are you suffering from hypertension?",
        "Are you suffering from diabetes or are you insulin dependent?",
        "Do you undergo routine medical check-ups?",
        "Any other pre-existing diseases, symptoms, or complaints within the last ten years not mentioned above?",
        "Have you ever undergone surgery to remove a body organ or structure or been hospitalized in the past?",
        "Has there been any Loss/Gain of weight in the last 12 months?",
      ];
    return (
        <>
            <div className="container">
                <div className="col-sm-9">
                <div className="container mt-4">
            <h3>Self - Basic Details</h3>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="middleName" className="form-label">Middle Name (Optional)</label>
                        <input type="text" className="form-control" id="middleName" placeholder="Middle Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="maritalStatus" className="form-label">Marital Status</label>
                        <select className="form-select" id="maritalStatus">
                            <option value="">Select Status</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="nationality" className="form-label">Nationality</label>
                        <select className="form-select" id="nationality">
                            <option value="">Select Nationality</option>
                            <option value="Indian">Indian</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="tel" className="form-control" id="mobile" placeholder="*****0077" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="gc*******@gmail.com" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="street" className="form-label">Street/Road</label>
                        <input type="text" className="form-control" id="street" placeholder="Street/road" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" placeholder="City" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="poBox" className="form-label">PO Box Number</label>
                        <input type="text" className="form-control" id="poBox" placeholder="PO Box Number" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input type="text" className="form-control" id="country" placeholder="Country" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="height" className="form-label">Height (in cms)</label>
                        <input type="number" className="form-control" id="height" placeholder="Height" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="weight" className="form-label">Weight (in kgs)</label>
                        <input type="number" className="form-control" id="weight" placeholder="Weight" />
                    </div>
            
                    <div className="col-md-6">
                        <label className="form-label">Already Insured?</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="insured" id="insuredNo" value="No" defaultChecked />
                                <label className="form-check-label" htmlFor="insuredNo">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="insured" id="insuredYes" value="Yes" />
                                <label className="form-check-label" htmlFor="insuredYes">Yes</label>
                            </div>
                        </div>
                    </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="validVisa" className="form-label">All Members hold a Valid Residence VISA of UAE?</label>
                        <select className="form-select" id="validVisa">
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="occupation" className="form-label">Occupation</label>
                        <select className="form-select" id="occupation">
                            <option value="">Select Occupation</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="employer" className="form-label">Employer</label>
                        <select className="form-select" id="employer">
                            <option value="">Select Employer</option>
                            <option value="Company A">Company A</option>
                            <option value="Company B">Company B</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="incomeRange" className="form-label">Income Range</label>
                        <select className="form-select" id="incomeRange">
                            <option value="">Select Income Range</option>
                            <option value="<5000">&lt;5000</option>
                            <option value="5000-10000">5000-10000</option>
                            <option value=">10000">&gt;10000</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="passportNumber" className="form-label">Passport Number</label>
                        <input type="text" className="form-control" id="passportNumber" placeholder="Passport Number" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="visaFileNumber" className="form-label">Visa File Number</label>
                        <input type="text" className="form-control" id="visaFileNumber" placeholder="Visa File Number" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="emiratesId" className="form-label">Emirates ID</label>
                        <input type="text" className="form-control" id="emiratesId" placeholder="Emirates ID" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="emiratesExpiry" className="form-label">Emirates ID Expiry Date</label>
                        <input type="date" className="form-control" id="emiratesExpiry" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="insurerType" className="form-label">Insurer DHA Type</label>
                        <select className="form-select" id="insurerType">
                            <option value="">Select Type</option>
                            <option value="Type A">Type A</option>
                            <option value="Type B">Type B</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="policyStartDate" className="form-label">When do you want to start the policy?</label>
                        <input type="date" className="form-control" id="policyStartDate" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="sponsorFirstName" className="form-label">Sponsor First Name</label>
                        <input type="text" className="form-control" id="sponsorFirstName" placeholder="Sponsor First Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sponsorMiddleName" className="form-label">Sponsor Middle Name (Optional)</label>
                        <input type="text" className="form-control" id="sponsorMiddleName" placeholder="Sponsor Middle Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="sponsorLastName" className="form-label">Sponsor Last Name</label>
                        <input type="text" className="form-control" id="sponsorLastName" placeholder="Sponsor Last Name" />
                    </div>
                </div>

                <h5>Critical Details</h5>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label className="form-label">Are you presently in good health, entirely free from any physical/mental impairment and deformity?</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="goodHealth" id="healthNo" value="No" defaultChecked />
                                <label className="form-check-label" htmlFor="healthNo">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="goodHealth" id="healthYes" value="Yes" />
                                <label className="form-check-label" htmlFor="healthYes">Yes</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Is there a member in your family that is not proposed for insurance?</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familyMember" id="familyNo" value="No" defaultChecked />
                                <label className="form-check-label" htmlFor="familyNo">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familyMember" id="familyYes" value="Yes" />
                                <label className="form-check-label" htmlFor="familyYes">Yes</label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mb-4">
          <label htmlFor="reason" className="form-label">
            Please specify reason
          </label>
          <textarea
            className="form-control"
            id="reason"
            rows="2"
            placeholder="Enter your reason here"
          ></textarea>
        </div>

        <h2 className="mb-4">Cancer</h2>
      <div className="row">
        {questions.map((question, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card shadow-sm p-3 rounded-3">
              <p className="mb-3">{question}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-outline-secondary btn-sm">No</button>
                <button className="btn btn-outline-primary btn-sm">Yes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-3">
          <label className="form-label">Do you smoke?</label>
          <select className="form-select">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Do you consume alcohol?</label>
          <select className="form-select">
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <h5>KYC</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Application Type</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="new">New</option>
              <option value="update">Update</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Class of Insurance required</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Place of Birth</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Residential Status</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="resident">Resident</option>
              <option value="non-resident">Non-Resident</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Occupation Type</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Monthly Income</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="below-50k">Below 50k</option>
              <option value="50k-1lakh">50k-1 Lakh</option>
              <option value="above-1lakh">Above 1 Lakh</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">ID Type</label>
            <select className="form-select">
              <option value="">Select</option>
              <option value="aadhaar">Aadhaar</option>
              <option value="passport">Passport</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">ID Number</label>
            <input type="text" className="form-control" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">ID Expiry Date</label>
            <input type="date" className="form-control" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            In the last 6 months, have you submitted any KYC documents to DIN?
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="kycSubmission"
                value="no"
              />
              <label className="form-check-label">No</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="kycSubmission"
                value="yes"
              />
              <label className="form-check-label">Yes</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Do you classify yourself as a PEP or are you a direct relative or known
            associate of a PEP?
          </label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pepStatus"
                value="no"
              />
              <label className="form-check-label">No</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="pepStatus"
                value="yes"
              />
              <label className="form-check-label">Yes</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Payer Details (If payment is made by a third party)</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="payerDetails"
                value="no"
              />
              <label className="form-check-label">No</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="payerDetails"
                value="yes"
              />
              <label className="form-check-label">Yes</label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Do you want tax invoice in company's name?</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="taxInvoice"
                value="no"
              />
              <label className="form-check-label">No</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="taxInvoice"
                value="yes"
              />
              <label className="form-check-label">Yes</label>
            </div>
          </div>
        </div>
        <h5>Documents</h5>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Applicant Emirates ID (Front & Back)</label>
          <input type="file" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Applicant Passport Copy</label>
          <input type="file" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Applicant Visa Page</label>
          <input type="file" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Previous Insurance shop (Optional)</label>
          <input type="file" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Sponsor Emirates ID (Optional)</label>
          <input type="file" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Sponsor Passport Copy (Optional)</label>
          <input type="file" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Sponsor Visa Page (Optional)</label>
          <input type="file" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Medical Reports (Optional)</label>
          <input type="file" className="form-control" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Other Documents (Optional)</label>
          <input type="file" className="form-control" />
        </div>
      </div>

      <div className="form-check mt-4">
        <input className="form-check-input" type="checkbox" id="termsCheck" />
        <label className="form-check-label" htmlFor="termsCheck">
          I agree to the below T&C
        </label>
      </div>
      <div>
        <button className='btn'>Proceed</button>
      </div>
                </div>
            </form>
        </div>
                </div>
            </div>
        </>
    )
}

export default Healthplanform;
