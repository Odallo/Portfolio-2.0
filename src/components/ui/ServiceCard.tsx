"use client";

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  variant: 'primary' | 'secondary' | 'accent';
  popular?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  priceNote, 
  variant,
  popular = false 
}: ServiceCardProps) {
  const [shadow, setShadow] = React.useState('8px 8px 0px 0px #2d2d2d');
  const [transform, setTransform] = React.useState('rotate(-1deg)');

  const handleMouseEnter = () => {
    setShadow('12px 12px 0px 0px #2d2d2d');
    setTransform('rotate(0deg) scale(1.02)');
  };

  const handleMouseLeave = () => {
    setShadow('8px 8px 0px 0px #2d2d2d');
    setTransform('rotate(-1deg)');
  };

  const bgColors = {
    primary: 'bg-white',
    secondary: 'bg-[#fff9c4]',
    accent: 'bg-white'
  };

  const priceColors = {
    primary: 'text-[#ff4d4d]',
    secondary: 'text-[#2d5da1]',
    accent: 'text-[#2d2d2d]'
  };

  const buttonColors = {
    primary: 'bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white',
    secondary: 'bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d5da1] hover:text-white',
    accent: 'bg-white border-[3px] border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#e5e0d8] hover:text-[#2d2d2d]'
  };

  const featureColors = {
    primary: 'text-[#ff4d4d]',
    secondary: 'text-[#2d5da1]',
    accent: 'text-[#e5e0d8]'
  };

  return (
    <div 
      className={`${bgColors[variant]} border-4 border-[#2d2d2d] p-8 transition-all duration-100 relative ${popular ? 'md:scale-105' : ''}`}
      style={{
        borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
        boxShadow: popular ? '12px 12px 0px 0px #2d2d2d' : shadow,
        transform: popular ? 'rotate(1deg) scale(1.05)' : transform,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Popular badge */}
      {popular && (
        <div 
          className="absolute -top-3 right-6 bg-[#ff4d4d] text-white px-4 py-2 text-sm font-bold"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            boxShadow: '4px 4px 0px 0px #2d2d2d',
          }}
        >
          POPULAR
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-4 text-[#2d2d2d]"
        style={{ fontFamily: 'Kalam, cursive' }}
      >
        {title}
      </h3>
      <p className="text-[#2d2d2d] mb-6 text-lg">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start text-lg">
            <span className={`${featureColors[variant]} mr-2 font-bold`}>~</span>
            <span className="text-[#2d2d2d]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className={`text-3xl font-bold mb-2 ${priceColors[variant]}`}
        style={{ fontFamily: 'Kalam, cursive' }}
      >
        {price}
      </div>
      <p className="text-[#2d2d2d] text-lg mb-4">{priceNote}</p>
      
      <a href="/contact" className="block w-full">
        <div 
          className={`${buttonColors[variant]} px-6 py-3 text-center text-xl font-bold transition-all duration-100`}
          style={{
            borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
            boxShadow: '4px 4px 0px 0px #2d2d2d',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '2px 2px 0px 0px #2d2d2d';
            e.currentTarget.style.transform = 'translateX(2px) translateY(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '4px 4px 0px 0px #2d2d2d';
            e.currentTarget.style.transform = 'translateX(0) translateY(0)';
          }}
        >
          Get Started
        </div>
      </a>
    </div>
  );
}
