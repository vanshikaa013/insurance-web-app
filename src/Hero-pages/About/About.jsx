import React from 'react'
import './About.css'
export default function About() {
  return (
    <>
        <div className='About-section'>
            <div className='container'>
                <div className='About-heading'>
                    <h5>What make <img className='about-img' src="https://i.ibb.co/k5VNpBT/image-2.png" alt="" /> one of <b>India's
                    favorite place</b> to buy insurance?</h5>
                </div>
                <div className='About-media-heading'>
                    <h5 className='p'>Why <img className='about-media-img' src="https://i.ibb.co/k5VNpBT/image-2.png" alt="" /> Better?</h5>
                </div>
                <div className='about-pre'>
                    <p>At <b>Shoplnsurance</b>, we are dedicated to providing the best insurance options for millions of customers. With partnerships with over 50 insurers, we offer transparent comparisons, the best prices, and strong claims support.</p>
                </div>
                <div className='about-mainbox'>
                    <div className='about-box1'>
                        {/* <img src="https://acko-cms.ackoassets.com/saif_sara_wrapper_98ddd7393f.png" alt="" /> */}
                        <img src="https://res.cloudinary.com/dfporfl8y/image/upload/v1735902892/bnpoxcjudmvs9kepssk4.png" alt="" />
                    </div>
                    <div className='about-box2'> 
                        <div className='about1'>
                            <span>9 million+ Customer</span>
                            <p>trust us & have bought their insurance on Shoplnsurance.</p>
                        </div>
                        <div className='about2'>
                            <span>50+ insurers</span>
                            <p>Partnered with us so that you can compare easily & transparently.</p>
                        </div>
                        <div className='about2'>
                            <span>Great Price</span>
                            <p>For all kinds of insurance plans available online.</p>
                        </div>
                        <div className='about2'>
                            <span>Claims</span>
                            <p>Support built in with every policy for help when you need it the most.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
