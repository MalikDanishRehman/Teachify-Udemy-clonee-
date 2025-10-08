import { notFound } from 'next/navigation';

type VideoItem = {
  id: string; // YouTube video id
  title: string;
};

const courseSlugToVideos: Record<string, VideoItem[]> = {
  'complete-react-developer-course': [
    { id: 'bMknfKXIFA8', title: 'React Course Overview' },
    { id: 'Ke90Tje7VS0', title: 'React JS Crash Course' },
    { id: 'SqcY0GlETPk', title: 'Redux Toolkit Tutorial' },
  ],
  'advanced-javascript-concepts': [
    { id: 'W6NZfCO5SIk', title: 'JavaScript Basics' },
    { id: 'Mus_vwhTCq0', title: 'Deep JS Foundations' },
    { id: 'DIl0HnI6U7c', title: 'Event Loop Explained' },
  ],
  'nodejs-backend-development': [
    { id: 'Oe421EPjeBE', title: 'Node.js Crash Course' },
    { id: 'TlB_eWDSMt4', title: 'Express.js Tutorial' },
    { id: 'X91jsJyZofw', title: 'REST APIs with Node' },
  ],
  'python-for-data-science': [
    { id: 'LHBE6Q9XlzI', title: 'Python for Data Science' },
    { id: 'krd5dF3sF7g', title: 'NumPy Tutorial' },
    { id: 'vmEHCJofslg', title: 'Pandas Tutorial' },
  ],
};

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const videos = courseSlugToVideos[params.slug];
  if (!videos) return notFound();

  const title = params.slug
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-600 mt-1">Curated YouTube lessons for this course</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
              <YouTubeEmbed videoId={v.id} title={v.title} />
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


