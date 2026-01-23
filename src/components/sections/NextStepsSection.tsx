import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import IconBadge from '../ui/IconBadge';
import { Heart, Users, List } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: <Heart size={28} />,
    title: 'Ask for Prayer',
    description: "We'd love to pray with you.",
    color: 'yellow' as const,
    href: '/prayer',
  },
  {
    icon: <Users size={28} />,
    title: 'Join a LifeGroup',
    description: 'Find the people you can grow, laugh, and pray with.',
    color: 'green' as const,
    href: '/lifegroups',
  },
  {
    icon: <List size={28} />,
    title: 'Find More Next Steps',
    description: 'Discover the next step on your journey.',
    color: 'gray' as const,
    href: '/next-steps',
  },
];

export default function NextStepsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Take Your Next Step
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Link key={step.title} href={step.href} className="block">
              <Card className="text-center h-full flex flex-col items-center">
                {/* Icon Badge */}
                <IconBadge 
                  icon={step.icon} 
                  color={step.color}
                  size="lg"
                  className="mb-6"
                />
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-3">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}