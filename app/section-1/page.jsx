"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsCameraVideo } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { MdOutlineApartment } from 'react-icons/md';
import Link from 'next/link';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import call from '@/public/animationIcon/Call.json';
import whatsapp from "@/public/animationIcon/whatsapp.json";

const propertiesDetails = {
  images: [
    'https://luxuryhomesrealestate.ae/storage/2025/01/business-bay-dubai.png',
    'https://luxuryhomesrealestate.ae/storage/2025/01/downtowndubai-157923-112913.jpg',
    'https://luxuryhomesrealestate.ae/storage/2025/01/dubai-creek-harbour--1024x576.png'
  ]
};

 
const settings = {
  ltr: true,
  dots: true,
  infinite: true,
  autoPlay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,

      }
    }
  ]
}

const faqs = [
  {
    id: 1,
    question: "How do I buy a home through your website?",
    answer: "You can browse listings, schedule a viewing, and connect with our agents to start the buying process.",
  },
  {
    id: 2,
    question: "Do I need a real estate agent to buy a property?",
    answer: "While not required, having an agent helps with negotiations, paperwork, and finding the best deals.",
  },
  {
    id: 3,
    question: "What are the closing costs when purchasing a home?",
    answer: "Closing costs typically range from 2% to 5% of the home's purchase price, covering fees like inspections, appraisals, and lender charges.",
  },
  {
    id: 4,
    question: "Can I get a mortgage pre-approval before house hunting?",
    answer: "Yes! Mortgage pre-approval helps determine your budget and shows sellers you’re a serious buyer.",
  },
  {
    id: 5,
    question: "How can I list my property on your website?",
    answer: "You can create an account and submit your property details, or contact our team to assist with the listing process.",
  },
];


const page = () => {
  const message = "I hope you are well. I am interested in learning more about your exceptional real estate services and how they can help me find the perfect property. I look forward to connecting with you soon!";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '971000000000'; // Replace with your phone number
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  const [active, setActive] = useState(1)

  return (
    <div className="lg:container mx-auto flex justify-between flex-wrap p-5">
      <div className='w-full lg:w-2/3'>
        <div className="mainPropertySlider relative overflow-hidden">
          <div className="absolute z-50 top-8 right-8 flex items-center gap-4">
            <button className='p-2 px-4 bg-[#CDAC62] text-black  border-white/20 border rounded-sm text-sm flex items-center justify-center font-bold gap-2'> <BsCameraVideo /> Video </button>
            <button className='p-2 px-4 bg-[#CDAC62] text-black  border-white/20 border rounded-sm text-sm flex items-center justify-center font-bold gap-2'> <GoLocation />  View on map  </button>
          </div>
          {(propertiesDetails.images && propertiesDetails.images.length > 0) &&
            <Slider  {...settings} >
              {
                propertiesDetails?.images.map((item, index)=>(
                  <img src={item} key={index} alt={`project.name`} className='object-cover min-w-full max-w-full w-full h-[85vh]' />
                ))
              }
            </Slider>
          }
          <div className="absolute min-h-12 w-full left-0 bottom-0 bg-black/60 text-white 'flex items-center justify-center  py-2">
            <ul className='flex items-center justify-center flex-wrap p-0 gap-4  h-full'>
              <li className='text-[#CDAC62] font-black text-2xl'> 2,500,000 AED </li>
              <li className='text-white border-[#CDAC62] border-l pl-4 uppercase'>3 Bedroom </li>
              <li className='text-white border-[#CDAC62] border-l pl-4 uppercase'>2  Bathroom </li>
              <li className='text-white border-[#CDAC62] border-l pl-4 uppercase'>Size : 800 Sqft </li>
              <button className='p-2 px-4 text-black bg-white  border-2 rounded-lg text-sm flex items-center justify-center font-bold gap-2'>  Virtual Tours  </button>
            </ul>
          </div>
                  
        </div>

          <div className="FindYourHome  border-black/30 py-8">
            <h3 className="font-bold text-xl text-[#CDAC62] my-2">Find your home at best available offers!</h3>
            <p className='text-lg text-black/80 my-3'> Listed by Sherif Moussa – Property Consultant of Luxury Homes Real Estate is pleased to offer 3 Bedroom Apartment in a great location of Downtown, Dubai.</p>
            <p className='text-lg text-black/80 my-3'>Welcome to your luxurious new home in Burj Vista Tower 1, situated in the heart of Downtown Dubai, where modern elegance meets breathtaking views and unparalleled amenities.</p>
          </div>

          <ul className='p-0 flex items-center justify-start flex-wrap mt-8 border-b border-black/30 pb-8'>
            <li className='w-auto p-2'>
              <p className='font-bold bg-[#E2E2E2] text-black gap-2 flex items-center justify-start p-4 px-2 rounded-lg'>
                <MdOutlineApartment className='text-[#CDAC62] text-md md:text-2xl' />  3: Bedroom
              </p>
            </li>
            <li className='w-auto p-2'>
              <p className='font-bold bg-[#E2E2E2] text-black gap-2 flex items-center justify-start p-4 px-2 rounded-lg'>
                <MdOutlineApartment className='text-[#CDAC62] text-md md:text-2xl' />  2: Bathroom
              </p>
            </li>
            <li className='w-auto p-2'>
              <p className='font-bold bg-[#E2E2E2] text-black gap-2 flex items-center justify-start p-4 px-2 rounded-lg'>
                <MdOutlineApartment className='text-[#CDAC62] text-md md:text-2xl' />  Size: 800 Sqft
              </p>
            </li>
            <li className='w-auto p-2'>
              <p className='font-bold bg-[#E2E2E2] text-black gap-2 flex items-center justify-start p-4 px-2 rounded-lg'>
                <MdOutlineApartment className='text-[#CDAC62] text-md md:text-2xl' />  Location: Dubai
              </p>
            </li>
            
            <li className='w-auto p-2'>
              <p className='font-black bg-[#CDAC62] text-black gap-2 flex items-center justify-start p-4 px-2 rounded-lg 3xl:text-xl'>
                <FaRegMoneyBillAlt className=' text-xl' />  2,500,000 AED
              </p>
            </li>
          </ul>
      </div>
      <div className="w-full lg:w-1/3 md:p-5">
        <div className="w-full bg-white shadow-lg rounded-2xl p-5">
          <h2 className="text-xl font-bold mb-3">Let's Talk</h2>
          <form className="flex flex-col w-full gap-4">
            <input type="text" placeholder="name" className="border p-2 rounded-md" />
            <input type="tel" placeholder="phone" className="border p-2 rounded-md" />
            <input type="email" placeholder="email" className="border p-2 rounded-md" />
            <textarea placeholder="Your message" className="resize-none border p-2 rounded-md h-20"></textarea>
            <button className="button px-6 py-3 bg-black text-white rounded-lg shadow-md border inline-block min-w-[12rem] border-black relative transition duration-300 z-10 hover:bg-gray-800">
              send
            </button>
          </form>
        </div>
      </div>
      {
        faqs.map(item=>(
          <div  key={item.id} onClick={()=> setActive(item.id)} className="mt-4 cursor-pointer flex border items-start justify-start flex-wrap gap-4 w-full">
            <div className="relative w-full bg-gray-300 px-6 font-bold border-b opacity-80">
              <h3 className="text-black text-[1.2rem] md:text-lg py-4">{item.question}</h3>
              <span className="absolute text-[1.5rem] md:text-xl right-0 left-auto top-1/2 -translate-y-1/2 px-4 py-4 bg-gray-300 text-black flex"> {active === item.id ? '-' : '+'}</span>
            </div>
            <p className={`answer relative overflow-hidden px-6 w-full text-[#666] leading-[1.8] text-[1.1rem] md:text-lg ${active === item.id ? 'h-auto pb-4' : 'h-0 hidden'}`}>
              {item.answer}
            </p>
          </div>
        ))
      }
      <Link aria-label="Send a WhatsApp message to VQS" name="whatsapp" href={whatsappLink} className='fixed bottom-8 right-4 z-50'>
        <Lottie animationData={whatsapp} className='h-24 w-16 md:h-24 md:w-24' />
        <span className="sr-only">Send a WhatsApp message to VQS</span>
      </Link>
      <Link aria-label="Call VQS" name="call" href="tel:971000000000" className='fixed bottom-28 md:bottom-8 right-0 md:right-auto md:left-4 z-50'>
        <Lottie animationData={call} className='h-24 w-24 md:h-32 md:w-32' />   
        <span className="sr-only">Call</span> 
      </Link>
    </div>
  )
}

export default page