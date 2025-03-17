'use client';

import Image from 'next/image';
import { useState } from 'react';
import banner from  "../../public/assets/images/home.png"
import Button from '@/Components/Button';

const page = () => {
  return (
    <>
      <section className="banner bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left Section */}
              <div className="md:w-5/12 text-center md:text-left">
                <h3 className="text-[#CDAC62] text-5xl font-bold tracking-tight leading-[70px] mb-6">
                  The better way <br /> to buy real estate.
                </h3>
                <p className="mt-4 text-[#0a2233]">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its versions have evolved over layout.
                </p>
                <div className="mt-6">
                  <a href='#contact' className='px-6 py-3 bg-black text-white rounded-lg shadow-md border inline-block min-w-[12rem] border-black relative transition duration-300 z-10 hover:bg-gray-800 text-center'> Let's Talk </a> 
                </div>
              </div>

              {/* Right Section */}
              <div className="md:w-7/12 flex justify-center md:justify-end mt-10 md:mt-0 relative">
                <Image src={banner} alt="Home" width={500} height={400} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-16 bg-white mt-32">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <form  className="bg-gray-100 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Johnathon Doelsen"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="p-3 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="3 Bedroom villa apartment"
                className="mt-4 p-3 border border-gray-300 rounded-md w-full"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Please write in brief..."
                className="mt-4 p-3 border border-gray-300 rounded-md w-full"
                required
              />
              <button className='px-6 py-3 bg-black text-white rounded-lg shadow-md border inline-block min-w-[12rem] border-black relative transition duration-300 z-10 hover:bg-gray-800 text-center mt-12'> Send Message </button> 
 
            </form>
          </div>
      </section>
    </>
  );
}
 

export default page
