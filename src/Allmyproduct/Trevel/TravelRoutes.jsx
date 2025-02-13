import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Treveltreepage2 from './TreveltreePage2.jsx';
import TrevelHome from './TrevelHome';
import { Travelplanform } from './Travelplanform.jsx';

export default function TravelRoutes() {
  return (
    <>
        <Routes>
            <Route path="/travel" element={<TrevelHome />} />
                  <Route path="/treveltreePage2" element={<Treveltreepage2 />} />
                  <Route path="/travelplanform" element={<Travelplan />} />
                  <Route path="/travelplanform2" element={<Travelplanform />} />
        </Routes>
    </>
  )
}
