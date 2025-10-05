'use client';

import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  instructor: string;
  progress: number;
  duration: string;
  rating: number;
  students: number;
  thumbnail: string;
  price: string;
  originalPrice: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const formatStudents = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            unoptimized
          />
        </div>
        {course.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
              <div 
                className="bg-purple-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 text-xs mb-3">
          by {course.instructor}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(course.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-600 ml-1">
              {course.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500">
            {formatStudents(course.students)} students
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-500 mb-3">
          <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {course.duration}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {course.originalPrice}
              </span>
            )}
          </div>
          
          <button className={`
            px-3 py-1.5 text-xs font-medium rounded-md transition-colors
            ${course.progress > 0 
              ? 'bg-purple-600 text-white hover:bg-purple-700' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }
          `}>
            {course.progress > 0 ? 'Continue' : 'Start Course'}
          </button>
        </div>
      </div>
    </div>
  );
}