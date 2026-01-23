import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function NewToLifeSection() {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-dark-section.jpg"
          alt="Life.Church gathering"
          fill
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold">
            New to Life.Church?
          </h2>

          {/* Paragraph */}
          <p className="text-xl md:text-2xl leading-relaxed text-white/90">
            Here you&apos;ll find a safe place to explore your beliefs and connect with others. Wherever you are in life, you&apos;re welcome here.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              href="/who-we-are"
            >
              Learn More About Us
            </Button>
            
            <Button 
              variant="secondary" 
              href="https://live.life.church"
              target="_blank"
              icon={<ExternalLink size={18} />}
              iconPosition="right"
            >
              Attend Life.Church Online
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}