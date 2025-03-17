import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-gray-800 border-b-2 p-6 border-[#CDAC62] pb-2">Section 3 :  CTA and Pixel  </h1>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
    
      <p className="mt-4 text-lg font-bold text-gray-700">1. What is the purpose of a Call-to-Action (CTA) button on a real estate website?</p>
      
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> CTA is to convert visitors into leads or customers. In real estate, common CTA buttons could include phrases like <b>Schedule a Viewing</b>, <b>Get More Info</b>, or <b>Contact Us</b>."</span></li>
      </ul>
    </section>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
    
      <p className="mt-4 text-lg font-bold text-gray-700">2.  How would you implement a Facebook pixel on a real estate website to track conversions and retarget users?</p>
      
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> Facebook Pixel is a piece of code that you place on your website to track visitor actions and collect data that helps you optimize ads, track conversions, and retarget users.</span></li>
        </ul>
    </section>
  
  </>
  
  )
}

export default page