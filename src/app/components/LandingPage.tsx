'use client';

import Link from 'next/link';
import HeroSection from './HeroSection';
import RecentActivity from './RecentActivity';
import Footer from './Footer';
import Sidebar from './Sidebar';
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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={handleMenuClick}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors lg:hidden"
                aria-label="Toggle sidebar menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-indigo-600 ml-4">Teachify</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                Login
              </Link>
              <Link href="/signup" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

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

      {/* Learning Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Learning Streak</h3>
              <p className="text-3xl font-bold text-green-600">7 days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Courses Completed</h3>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hours Learned</h3>
              <p className="text-3xl font-bold text-purple-600">156</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">My Courses</h2>
            <Link href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-blue-600">Progress</span>
                  <span className="text-sm font-bold text-blue-600">75%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Complete React Developer Course</h3>
                <p className="text-sm text-gray-600 mb-2">by John Doe</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.8
                  </span>
                  <span>12.5k students</span>
                  <span>32 hours</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$89.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$199.99</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-green-600">Progress</span>
                  <span className="text-sm font-bold text-green-600">45%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 mb-4">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Advanced JavaScript Concepts</h3>
                <p className="text-sm text-gray-600 mb-2">by Jane Smith</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9
                  </span>
                  <span>8.9k students</span>
                  <span>28 hours</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$79.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$149.99</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-purple-600">Progress</span>
                  <span className="text-sm font-bold text-purple-600">20%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2 mb-4">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Node.js Backend Development</h3>
                <p className="text-sm text-gray-600 mb-2">by Mike Johnson</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.7
                  </span>
                  <span>15.2k students</span>
                  <span>40 hours</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$99.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$179.99</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Continue
                  </button>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Python for Data Science</h3>
                <p className="text-sm text-gray-600 mb-2">by Sarah Wilson</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <svg className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.6
                  </span>
                  <span>21.0k students</span>
                  <span>35 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$94.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$189.99</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Start Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - Using RecentActivity Component */}
      <RecentActivity />

      {/* Footer - Using Footer Component */}
      <Footer />

      {/* Sidebar - Using Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
    </div>
  );
}