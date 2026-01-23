'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const locations = [
  'All Locations',
  'Oklahoma City, OK',
  'Tulsa, OK',
  'Fort Worth, TX',
  'Dallas, TX',
  'Miami, FL',
  'Online',
];

export default function HeroSection() {
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/hero-image.jpg"
                alt="Welcome to Life.Church"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-headline-hero font-black leading-tight">
              There&apos;s a place for you here.
            </h1>
            
            <p className="text-body-large text-gray-700 leading-relaxed">
              God created you on purpose for a purpose. At Life.Church, we want to help you become the person He created you to be. This is a safe place where you can wrestle with questions and learn more about God and yourself.
            </p>

            {/* Location Finder */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-brand-black">
                <MapPin size={20} />
                <span className="font-semibold">Find Your Closest Location</span>
              </div>
              
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:border-brand-black transition-colors text-lg"
                >
                  <option value="">Choose a Location</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
                
                {/* Custom Dropdown Arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}