'use client';

import Link from 'next/link';
import HeroSection from './HeroSection';
import RecentActivity from './RecentActivity';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { CourseSection } from './CourseCard';
import Header from './Header';
import { useState } from 'react';

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
     <Header onMenuClick={handleMenuClick} />
      {/* Hero Section */}
      <HeroSection />

      {/* Navigation Menu */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">📚</span>
              <span className="font-medium">My Learning</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">🔍</span>
              <span className="font-medium">Browse</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">🎓</span>
              <span className="font-medium">My Courses</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">💬</span>
              <span className="font-medium">Messages</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">🔔</span>
              <span className="font-medium">Notifications</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">🏆</span>
              <span className="font-medium">Certificates</span>
            </Link>
            <Link href="#" className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors">
              <span className="text-xl">❓</span>
              <span className="font-medium">Help & Support</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Categories</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              'Development', 'Business', 'Finance & Accounting', 'IT & Software', 'Office Productivity',
              'Personal Development', 'Design', 'Marketing', 'Lifestyle', 'Photography & Video',
              'Health & Fitness', 'Music', 'Teaching & Academics'
            ].map((category) => (
              <div key={category} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* Featured Courses Section */}
      <CourseSection />
      {/* Pricing Plans Section - Using RecentActivity Component */}
      <RecentActivity />

      {/* Footer - Using Footer Component */}
      <Footer />

      {/* Sidebar - Using Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}