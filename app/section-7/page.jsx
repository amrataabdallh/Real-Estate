import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-gray-800 border-b-2 p-6 border-[#CDAC62] pb-2">Section 7 :  Analytic Reporting  </h1>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="mt-4 text-lg font-bold text-gray-700">1.  How would you set up analytic reporting for a real estate website using Google Analytics?</p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> Set Up GA4 – Create a property & add tracking via GTM. </span></li>
        <li><span className="font-semibold text-gray-800"> Enable Enhanced Measurement – Track page views, scrolls, clicks. </span></li>
        <li><span className="font-semibold text-gray-800"> Track Events – Property views, form submissions, calls. </span></li>
        <li><span className="font-semibold text-gray-800"> Define Conversions – Mark key actions in GA4. </span></li>
        <li><span className="font-semibold text-gray-800"> Set Up Funnels – Analyze user journeys. </span></li>
        <li><span className="font-semibold text-gray-800"> Integrate – Link GA4 with Google Ads, Search Console, CRM. </span></li>
        <li><span className="font-semibold text-gray-800"> Optimize – Use reports to improve UX & marketing. </span></li>
      </ul>
    </section>

    <section className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <p className="mt-4 text-lg font-bold text-gray-700">2.  How would you track traffic and conversions from Google Ads, Meta, and other platforms?</p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> Use UTM parameters for tracking, set up conversion events in Google Tag Manager, and integrate platforms like Google Ads, Meta Pixel, and other ad tracking pixels with your site or app. Then, monitor performance in Google Analytics and each ad platform’s dashboard. </span></li>
      </ul>
    </section>


    <section className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <p className="mt-4 text-lg font-bold text-gray-700">3.  What metrics would you use to measure the success of a real estate website, and how would you use data to inform design and marketing decisions?</p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="text-gray-800 font-bold mt-8 block"> Key metrics: </span></li>
        <li><span className="font-semibold text-gray-800"> Traffic & Engagement: Page views, session duration, bounce rate (Google Analytics) </span></li>
        <li><span className="font-semibold text-gray-800"> Lead Generation: Form submissions, call clicks, chat interactions </span></li>
        <li><span className="font-semibold text-gray-800"> Conversion Rate: % of visitors who contact an agent or schedule a viewing </span></li>
        <li><span className="font-semibold text-gray-800"> SEO Performance: Organic traffic, keyword rankings </span></li>
        <li><span className="font-semibold text-gray-800"> Ad Performance: ROI on Google Ads, Meta Ads, cost per lead </span></li>
        <li><span className="text-gray-800 font-bold mt-8 block"> Use data to: </span></li>
        <li><span className="font-semibold text-gray-800"> Improve UX (reduce bounce rate, optimize page load speed) </span></li>
        <li><span className="font-semibold text-gray-800"> Refine marketing (focus on high-converting channels, adjust ad targeting) </span></li>
        <li><span className="font-semibold text-gray-800"> Optimize content (enhance listings, improve SEO, A/B test CTAs) </span></li>
      </ul>
    </section> 
  </>
  
  )
}

export default page