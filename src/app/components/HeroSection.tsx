'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };

  return (
    <section className="relative bg-gradient-to-br from-[#6B46C1] to-[#553C9A] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Company intro */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Teachify
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Empowering learners worldwide with innovative education solutions. 
              Join thousands of students who are transforming their futures through 
              our comprehensive learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
              <Image
                src="/images/hero.jpg"
                alt="Professional woman"
                fill
                className="object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </section>
  );
}
