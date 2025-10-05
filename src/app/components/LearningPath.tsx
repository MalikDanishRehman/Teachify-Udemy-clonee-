'use client';

import Image from 'next/image';

interface LearningPath {
  id: number;
  title: string;
  description: string;
  courses: number;
  duration: string;
  progress: number;
  thumbnail: string;
}

interface LearningPathProps {
  path: LearningPath;
}

export default function LearningPath({ path }: LearningPathProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <div className="w-full h-32 relative">
          <Image
            src={path.thumbnail}
            alt={path.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            Learning Path
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2">
          {path.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {path.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {path.courses} courses
          </div>
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {path.duration}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{path.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${path.progress}%` }}
            ></div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-medium hover:bg-purple-700 transition-colors">
          {path.progress > 0 ? 'Continue Path' : 'Start Path'}
        </button>
      </div>
    </div>
  );
}