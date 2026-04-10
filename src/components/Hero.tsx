import Image from "next/image";
import HandDrawnButtonClient from "./ui/HandDrawnButtonClient";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 relative">
      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-20 right-20 w-16 h-16 bg-[#ff4d4d] rounded-full animate-bounce"
        style={{
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          boxShadow: '4px 4px 0px 0px #2d2d2d',
        }}
      />
      
      <div className="hidden md:block absolute top-40 right-32 w-2 h-20 bg-[#2d5da1]"
        style={{
          borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          transform: 'rotate(-15deg)',
          boxShadow: '4px 4px 0px 0px #2d2d2d',
        }}
      />

      <div className="max-w-5xl relative">
        <div className="bg-white border-4 border-[#2d2d2d] p-8 md:p-12 mb-8"
          style={{
            borderRadius: '255px 35px 225px 35px / 35px 225px 35px 255px',
            boxShadow: '8px 8px 0px 0px #2d2d2d',
            transform: 'rotate(-1deg)',
          }}
        >
          {/* Tape decoration */}
          <div 
            className="absolute top-0 left-1/2 w-32 h-8 bg-gray-300 opacity-60"
            style={{
              borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
              transform: 'translateX(-50%) translateY(-50%) rotate(-2deg)',
              boxShadow: '2px 2px 0px 0px rgba(45, 45, 45, 0.2)',
            }}
          />

          <h1 className="text-5xl md:text-7xl mb-6 text-[#2d2d2d]"
            style={{ fontFamily: 'Kalam, cursive' }}
          >
            Software Developer
            <span className="inline-block ml-2 text-[#ff4d4d] animate-bounce">!</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#2d2d2d] mb-8 leading-relaxed">
            I build reliable, scalable, and human-centered digital solutions
            using modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <HandDrawnButtonClient href="/projects" size="md">
              View Projects
            </HandDrawnButtonClient>

            <HandDrawnButtonClient href="/services" variant="secondary" size="md">
              Get a Free Quote
            </HandDrawnButtonClient>

            <HandDrawnButtonClient href="/resume_eugine_odallo_wakho (1).pdf" size="sm">
              Download CV
            </HandDrawnButtonClient>
          </div>
        </div>

        {/* Hand-drawn arrow pointing to CTA */}
        <div className="hidden md:block absolute -bottom-8 left-20">
          <svg width="100" height="60" viewBox="0 0 100 60" className="animate-pulse">
            <path 
              d="M 10 30 Q 30 10, 50 30 T 90 30" 
              stroke="#2d5da1" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="5,5"
            />
            <path 
              d="M 85 25 L 95 30 L 85 35" 
              stroke="#2d5da1" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
