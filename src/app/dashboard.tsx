'use client';

import { useState } from 'react';

// ========================================
// COMPONENT IMPORTS (Internal Components)
// ========================================
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CourseCard from './components/CourseCard'
import LearningPath from './components/LearningPath'
import PricingPlans from './components/RecentActivity'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

// ========================================
// MAIN DASHBOARD COMPONENT
// ========================================
export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "John Doe",
      progress: 75,
      duration: "32 hours",
      rating: 4.8,
      students: 12500,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
      price: "$89.99",
      originalPrice: "$199.99"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Jane Smith",
      progress: 45,
      duration: "28 hours",
      rating: 4.9,
      students: 8900,
      thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=225&fit=crop",
      price: "$79.99",
      originalPrice: "$149.99"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      instructor: "Mike Johnson",
      progress: 20,
      duration: "40 hours",
      rating: 4.7,
      students: 15200,
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop",
      price: "$99.99",
      originalPrice: "$179.99"
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Sarah Wilson",
      progress: 0,
      duration: "35 hours",
      rating: 4.6,
      students: 21000,
      thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=225&fit=crop",
      price: "$94.99",
      originalPrice: "$189.99"
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      description: "Master both frontend and backend development",
      courses: 8,
      duration: "6 months",
      progress: 60,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      id: 2,
      title: "Data Science Professional",
      description: "Learn data analysis, machine learning, and visualization",
      courses: 12,
      duration: "8 months",
      progress: 25,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Hero Section */}
      <HeroSection />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
           

            {/* Learning Paths */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningPaths.map((path) => (
                  <LearningPath key={path.id} path={path} />
                ))}
              </div>
            </div>

            {/* My Courses */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="mb-8">
              <PricingPlans />
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
