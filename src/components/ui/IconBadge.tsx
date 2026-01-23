import React from 'react';

interface IconBadgeProps {
  icon: React.ReactNode;
  color?: 'yellow' | 'green' | 'gray';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function IconBadge({ 
  icon, 
  color = 'yellow',
  size = 'md',
  className = '' 
}: IconBadgeProps) {
  const colorClasses = {
    yellow: 'bg-yellow-400',
    green: 'bg-green-500',
    gray: 'bg-gray-300'
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <div 
      className={`
        ${colorClasses[color]} 
        ${sizeClasses[size]}
        rounded-full
        flex items-center justify-center
        text-white
        ${className}
      `}
    >
      {icon}
    </div>
  );
}