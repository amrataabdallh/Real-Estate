import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-gray-800 border-b-2 p-6 border-[#CDAC62] pb-2">Section 4 :  GTM  </h1>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="mt-4 text-lg font-bold text-gray-700">1. What is the purpose of Google Tag Manager (GTM) on a real estate website?</p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> Google Tag Manager  is a tag management system that allows you to manage and deploy marketing tags (like tracking pixels, analytics scripts, and other codes) on your real estate website without needing to modify the code directly. </span></li>
      </ul>
    </section>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <p className="mt-4 text-lg font-bold text-gray-700">2.  How would you set up GTM on a real estate website to track events and conversions?</p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> opent the tage manager link <b>https://tagmanager.google.com/</b>.</span></li>
        <li><span className="font-semibold text-gray-800"> Create Account.</span></li>
        <li><span className="font-semibold text-gray-800"> Get the GTM Snippet.</span></li>
        <li><span className="font-semibold text-gray-800"> Add the Snippets to Your Website.</span></li>
        <li><span className="font-semibold text-gray-800"> Get the GTM Snippet and I'll add it to my code between head tag.</span></li>
        </ul>
    </section>
  
  </>
  
  )
}

export default page