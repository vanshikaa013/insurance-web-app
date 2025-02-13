import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Home from './Pages/Home.jsx';
import Homes from './Hero-pages/Homes.jsx';
import Profile from './Fot-Forms/Profile.jsx'
import Profileg from './Fot-Forms/Profile-g.jsx'
import Servicerequests from './Fot-Forms/Servicerequests.jsx';
import Policy from './Fot-Forms/Policy.jsx';
import Policycontact from './Fot-Forms/Policycontact.jsx';
import LifeInsurance from './LifeInsurance/LifeInsurance.jsx';
import Healthhome from './Health Insurance/Healthhome.jsx';
import Selfhealth from './Health Insurance/Selfhealth.jsx';
import Healthform from './Health Insurance/Healthform.jsx';
import Insurancehome from './CarInsurance/Insurancehome.jsx';
import Carmodel from './CarInsurance/Carmodel.jsx';
import Carname from './CarInsurance/Carname.jsx';
import Carvariant from './CarInsurance/Carvariant.jsx';
import Vehiclespecification from './CarInsurance/Vehiclespecification.jsx';
import CarForm from './CarInsurance/CarForm.jsx';
import BikeForm from './BikeInsurance/BikeForm.jsx';
import BikeDetails from './BikeInsurance/BikeDetails.jsx';
import ExistingPolicy from './Health Insurance/ExistingPolicy.jsx';
import Previous from './Health Insurance/Previous.jsx';
import { Motorinsurance } from './CarInsurance/Motorinsurance.jsx';
import Assesses from './Health Insurance/Assesses.jsx';
import Discoverycountry from './Health Insurance/Discovercountry.jsx';
import Emirate from './Health Insurance/Emirate.jsx';
import Tailored from './Health Insurance/Tailored.jsx';
import Businessinsurance from './Bussniesswork/Businessinsurance.jsx';
import Carnation from './CarInsurance/Carnation.jsx';
import Carbuyinsu from './CarInsurance/Carbuyinsu.jsx';
import Carbuyinsurance2 from './CarInsurance/Carbuyinsurance2.jsx';
import Carbuyinsuranceyes from './CarInsurance/Carbuyinsuranceyes.jsx';
import Carbuyinsuranceyes2 from './CarInsurance/Carbuyinsuranceyes2.jsx';
import Carbuyinsurancemonth from './CarInsurance/Carbuyinsurancemonth.jsx';
import Carbuyinsuranceyear from './CarInsurance/Carbuyinsuranceyear.jsx';
import CarCalendar from './CarInsurance/CarCalendar.jsx';
import Carbuyinsuranceacdint from './CarInsurance/Carbuyinsuranceacdint.jsx';
import Carplan from './CarInsurance/Carplan.jsx';
import Carplanmedia from './CarInsurance/carplanmedia.jsx';
import Healthplan from './Health Insurance/Healthplan.jsx';
import Healthplanform from './Health Insurance/Healthplanform.jsx';
import { Help } from './Products/Help.jsx';
// import LifePlan from './Products/LifePlan.jsx';

import TravelClaim from './Products/TravelClaim.jsx';
import TwoWheelerInsurance from './BikeInsurance/TwoWheelerInsurance.jsx';
import ComprehensivebikePlan from './BikeInsurance/ComprehensivebikePlan.jsx';
import ComprehensivebikePlanget from './BikeInsurance/ComprehensivebikePlanget.jsx';

// travel product
import { Travelplanform } from './Products/Travelplanform.jsx';
import { Travelplan } from './Allmyproduct/Trevel/Travelplan.jsx';
import TrevelHome from './Allmyproduct/Trevel/TrevelHome.jsx';
import Treveltreepage2 from './Allmyproduct/Trevel/TreveltreePage2.jsx';
import LifePlan from './LifeInsurance/LifePlan.jsx';
import LifeFormDetails from './LifeInsurance/LifeFormDetails.jsx';
import LifeInsureMedical from './LifeInsurance/LifeInsureMedical.jsx';
import MylifeModal from './LifeInsurance/MylifeModal.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Homes />} />
      
      {/*trevel product routing */}
      <Route path="/travel" element={<TrevelHome />} />
      <Route path="/treveltreePage2" element={<Treveltreepage2 />} />
      <Route path="/travelplanform" element={<Travelplan />} />
      <Route path="/travelplanform2" element={<Travelplanform />} />

      {/* health Product routing */}
      <Route path="/health" element={<Healthhome />} />
      <Route path="/stepper" element={<Selfhealth />} />
      <Route path="/stepppperform" element={<Healthform />} />
      <Route path="/healthplan" element={<Healthplan />} />
      <Route path="/healthplanform" element={<Healthplanform />} />
      <Route path="/premiums" element={<ExistingPolicy />} />
      <Route path="/myrender" element={<Previous />} />
      <Route path="/yourpolicy" element={<Assesses />} />
      <Route path="/country" element={<Discoverycountry />} />
      <Route path="/contemi" element={<Emirate />} />
      <Route path="/tailored" element={<Tailored />} />

        {/* car Product routing */}
      <Route path="/car" element={<Insurancehome />} />
      <Route path="/proceed" element={<Carmodel />} />
      <Route path="/carname" element={<Carname />} />
      <Route path="/carvar" element={<Carvariant />} />
      <Route path="/carform" element={<CarForm />} />
      <Route path="/carnation" element={<Carnation />} />
      <Route path="/carbuyinsu" element={<Carbuyinsu />} />
      <Route path="/carbuyinsurance2" element={<Carbuyinsurance2 />} />
      <Route path="/carbuyinsuranceyes" element={<Carbuyinsuranceyes />} />
      <Route path="/carbuyinsuranceyes2" element={<Carbuyinsuranceyes2 />} />
      <Route path="/carbuyinsurancemonth" element={<Carbuyinsurancemonth />} />
      <Route path="/carbuyinsuranceyear" element={<Carbuyinsuranceyear />} />
      <Route path="/carcalender" element={<CarCalendar />} />
      <Route path="/Carbuyinsuranceacdint" element={<Carbuyinsuranceacdint />} />
      <Route path="/Carbuyinsuranceplan" element={<Carplan />} />
      <Route path="/specify" element={<Vehiclespecification />} />


        {/* bike Product routing */}
      <Route path="/motor" element={<Motorinsurance />} />
      <Route path="/bikein" element={<BikeForm />} />
      <Route path="/bikedetainav" element={<BikeDetails />} />
      <Route path="/bikerto" element={<TwoWheelerInsurance />} />
      <Route path="/bikeplaann" element={<ComprehensivebikePlan />} />
      <Route path="/bikeplanbuy" element={<ComprehensivebikePlanget />} />

      {/* {business Product routing} */}
      <Route path="/business" element={<Businessinsurance />} />

        {/* life Product routing */}
      <Route path="/life" element={<LifeInsurance />} />
      <Route path="/lifeplan" element={<LifePlan />} />
      <Route path="/lifeformdetails" element={<LifeFormDetails />} />
      <Route path="/lifemedical" element={<LifeInsureMedical />} />
      <Route path="/lifeplanmodal" element={<MylifeModal   />} />
      {/* <Route path="/lifeplan" element={<LifePlan />} /> */}
        {/* Claim */}
      <Route path="/claim" element={<Help />} />
      <Route path="/allclaim" element={<TravelClaim />} />
    
        {/* fot forms claims */}
      <Route path="/claims" element={<Policycontact />} />
      <Route path="/policies" element={<Policy />} />
      <Route path="/account" element={<Profileg />} />
      <Route path="/help" element={<Servicerequests />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);