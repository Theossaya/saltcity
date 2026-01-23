"use client";

import Container from "@/components/ui/Container";
import { useState } from "react";

const BELIEFS = [
  {
    title: "JESUS IS LORD",
    content: "He has eternally existed as the Father, the Son, and the Holy Spirit. The three are coequal and are one God. We believe in one God who exists in three persons: Father, Son, and Holy Spirit."
  },
  {
    title: "Praying in Tongues",
    content: "Jesus Christ is the eternal Son of God who became man without ceasing to be God. He was born of a virgin, lived a sinless life, died on the cross for our sins, rose from the dead, and ascended to heaven where He sits at the right hand of God the Father."
  },
  {
    title: "Water Baptism",
    content: "The Holy Spirit is the third person of the Trinity who convicts us of sin, regenerates us, and indwells believers from the moment of salvation, empowering us to live godly lives and serving as our Helper and Guide."
  },


  {
    title: "Honor",
    content: "Salvation is received by grace through faith in Jesus Christ alone. It is not earned by good works but is a free gift of God's grace. When we accept Christ, we are forgiven, justified, and adopted into God's family."
  },
  {
    title: "Women doing ministry",
    content: "After death, people will exist eternally either in heaven with God or separated from Him in hell. Our eternal destiny is determined by our response to Jesus Christ in this life."
  }
];

const VISION_AND_VALUES = [
  {
    title: "What SaltCity Is About",
    content: "“Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.” - Matthew 28:19-20\n\nGOD’s mandate for His Church worldwide is to ensure the salvation of all men, and to equip and train them for His purpose. SaltCity church obeys this divine mandate through what we call “Company Groups”\n\nThe company is geographical grouping of devoted Believers, united to inspire one another in daily sanctification, Spiritual growth and Service to the Almighty GOD. We are big on discipleship, and a large part of discipleship is training, and for training to be effective, it must be structured."
  },
  {
    title: "What Is About SaltCity",
    content: "As we are changed by the Word, this growth is supposed to be effected in the state of our biological families, human relationships, environmental care and work culture.\n\nTo this end, periodically, we organize special meetings, focusing on areas like Marriage, Family, Work, Friendship, Politics, Skill Acquistion, Health and Finance.\n\nThe end goal is to have a well-rounded believer, who is knowledgeable and proficient in every area of their lives"
  }
];

export default function OurBeliefsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=80"
            alt="Our Beliefs"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <Container>
          <div className="relative h-[400px] flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              What Does SaltCity Believe?
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
              Every local church has doctrinal beliefs that makes it unique. Here are some of ours.
            </p>
          </div>
        </Container>
      </section>

      {/* Beliefs Accordion */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-4xl font-black text-center mb-16">Our Beliefs</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {BELIEFS.map((belief, index) => (
              <details 
                key={index} 
                className="group bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg hover:bg-neutral-50 transition-colors list-none">
                  <span className="pr-8">{belief.title}</span>
                  <svg 
                    className="w-5 h-5 transition-transform group-open:rotate-180 shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-black/70 leading-relaxed border-t border-black/5 pt-4">
                  {belief.content}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Values Slider */}
      {/* Vision & Values Slider */}
<section className="py-12 bg-neutral-900">
  <Container>
    <h2 className="text-3xl font-black text-center text-white mb-10">
      Our Primary And Secondary Focus
    </h2>

    <div className="max-w-4xl mx-auto">
      <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Slide Content */}
        <div className="p-8 md:p-12 min-h-[350px] flex flex-col justify-center">
          <h3 className="text-2xl font-black mb-4">
            {VISION_AND_VALUES[activeSlide].title}
          </h3>
          
          {/* 'whitespace-pre-line' makes the text respect the line breaks.
              The logic below checks if a line starts with a quote “ to apply centering/italics.
          */}
          <div className="text-base leading-relaxed text-black/80 whitespace-pre-line">
            {VISION_AND_VALUES[activeSlide].content.split('\n').map((line, i) => (
              <p 
                key={i} 
                className={`mb-3 ${line.trim().startsWith('“') ? 'text-center italic font-medium text-black px-4 my-4' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveSlide(prev => prev === 0 ? 1 : 0)}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button
          onClick={() => setActiveSlide(prev => prev === 0 ? 1 : 0)}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {VISION_AND_VALUES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeSlide === index ? 'w-6 bg-black' : 'w-1.5 bg-black/20'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </Container>
</section>

    {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">
              Ready to Experience SaltCity?
            </h2>
            <p className="text-lg text-black/70 mb-8">
              Join us as we grow together in faith and become the people God created us to be.
            </p>
            
            {/* ADD THE OPENING '<a' BELOW */}
            <a
              href="/locations"
              className="inline-block px-8 py-3.5 rounded-full bg-black text-white font-semibold hover:bg-black/90 transition-colors"
            >
              Find a Location
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}