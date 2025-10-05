'use client';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { name: 'My Learning', icon: '📚', active: true },
    { name: 'Browse', icon: '🔍' },
    { name: 'My Courses', icon: '🎓' },
    { name: 'Messages', icon: '💬' },
    { name: 'Notifications', icon: '🔔' },
    { name: 'Certificates', icon: '🏆' },
    { name: 'Help & Support', icon: '❓' },
  ];

  const categories = [
    'Development', 'Business', 'Finance & Accounting', 'IT & Software',
    'Office Productivity', 'Personal Development', 'Design', 'Marketing',
    'Lifestyle', 'Photography & Video', 'Health & Fitness', 'Music', 'Teaching & Academics',
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Close sidebar"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                  ${item.active 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="px-4 py-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          <div className="px-4 py-4 border-t border-gray-200">
            <div className="bg-purple-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-purple-900">Learning Streak</span>
                <span className="text-sm font-bold text-purple-600">7 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-900">Courses Completed</span>
                <span className="text-sm font-bold text-purple-600">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}