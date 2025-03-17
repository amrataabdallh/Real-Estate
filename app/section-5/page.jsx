import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="text-2xl font-bold text-gray-800 border-b-2 p-6 border-[#CDAC62] pb-2">Section 5 :  Daily Updates and Content Management  </h1>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="mt-4 text-lg font-bold text-gray-700">1. How would you implement a content management system (CMS) on a real estate website to enable daily updates? </p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800">Use a headless CMS like Strapi, Sanity, or Contentful to manage property listings. Integrate it with a database (e.g., Firebase, PostgreSQL) and connect it to a Next.js frontend. This allows admins to easily update listings daily through a user-friendly dashboard.</span></li>
      </ul>
    </section>
    <section className="p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <p className="mt-4 text-lg font-bold text-gray-700">2.  What are the best practices for updating real estate property listings on a daily basis? </p>
      <ul className="mt-2 space-y-2 text-gray-600 pl-4">
        <li><span className="font-semibold text-gray-800"> Automate Data Import: Use APIs or scripts to fetch new listings from MLS or databases.   </span></li>
        <li><span className="font-semibold text-gray-800"> Maintain Data Accuracy: Ensure property details, pricing, and availability are correct.   </span></li>
        <li><span className="font-semibold text-gray-800"> Optimize Images & Media: Compress and standardize image sizes for faster loading.   </span></li>
        <li><span className="font-semibold text-gray-800"> SEO Optimization: Update meta tags, descriptions, and structured data for search visibility.   </span></li>
        <li><span className="font-semibold text-gray-800"> User-Friendly Dashboard: Provide an intuitive CMS interface for quick edits and bulk updates.   </span></li>
      </ul>
    </section>
  </>
  
  )
}

export default page