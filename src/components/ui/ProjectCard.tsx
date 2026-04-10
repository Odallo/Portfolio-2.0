"use client";

import React from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    highlights: string[];
    tech: string[];
    github?: string;
    demo?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [shadow, setShadow] = React.useState('8px 8px 0px 0px #2d2d2d');
  const [transform, setTransform] = React.useState(index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)');

  const handleMouseEnter = () => {
    setShadow('12px 12px 0px 0px #2d2d2d');
    setTransform(index % 2 === 0 ? 'rotate(0deg)' : 'rotate(2deg)');
  };

  const handleMouseLeave = () => {
    setShadow('8px 8px 0px 0px #2d2d2d');
    setTransform(index % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)');
  };

  return (
    <div 
      className="bg-white border-4 border-[#2d2d2d] p-6 transition-transform duration-100 relative"
      style={{
        borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
        boxShadow: shadow,
        transform,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Sticky note tag for featured project */}
      {index === 0 && (
        <div 
          className="absolute -top-2 -right-2 bg-[#fff9c4] px-3 py-1 text-sm font-bold text-[#2d2d2d]"
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
            boxShadow: '2px 2px 0px 0px #2d2d2d',
            transform: 'rotate(15deg)',
          }}
        >
          FEATURED
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4 text-[#2d2d2d]"
        style={{ fontFamily: 'Kalam, cursive' }}
      >
        {project.title}
      </h3>

      <p className="text-[#2d2d2d] mb-4 whitespace-pre-line text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-2 mb-4">
        {project.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start">
            <span className="text-[#ff4d4d] mr-2 font-bold text-lg">~</span>
            <span className="text-[#2d2d2d] text-lg">{highlight}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-lg px-3 py-1 bg-[#e5e0d8] text-[#2d2d2d] font-bold"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              border: '2px solid #2d2d2d',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div 
              className="bg-white border-[3px] border-[#2d2d2d] px-4 py-2 text-center text-lg font-bold text-[#2d2d2d] transition-all duration-100 group-hover:bg-[#2d5da1] group-hover:text-white"
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
              View Code
            </div>
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div 
              className="bg-[#ff4d4d] text-white border-[3px] border-[#2d2d2d] px-4 py-2 text-center text-lg font-bold transition-all duration-100 group-hover:bg-[#2d2d2d]"
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
              Live Demo
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
