import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';

export default function BibleAppSection() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Logo/Badge */}
            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-4 py-2 rounded-lg">
              <BookOpen size={24} />
              <span className="font-bold text-lg">Bible App</span>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Read or listen to the Bible, explore Bible Plans, create Prayers, study with Friends, and much more—all for free!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                href="https://www.bible.com"
                target="_blank"
                className="bg-black text-white hover:bg-gray-800"
              >
                Download the Bible App
              </Button>
              
              <Button 
                variant="secondary" 
                href="https://www.bible.com/life-church"
                target="_blank"
                className="border-black text-black hover:bg-black/5"
              >
                Follow Life.Church in Bible App
              </Button>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/images/phone-mockup.png"
                alt="Bible App on mobile device"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}