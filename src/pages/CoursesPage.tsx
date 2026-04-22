import { COURSES } from '../constants/courses';
import { CourseCard } from '../components/CourseCard';
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { CourseCategory } from '../types';

export function CoursesPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string | 'All'>('All');

  const categories: (CourseCategory | 'All')[] = [
    'All',
    'Digital Marketing',
    'Influencer',
    'Streamer',
    'Business Analyst',
    'Data Scientist',
    'Startup',
    'Remote Work'
  ];

  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Pilih <span className="text-primary tracking-tight">Keahlian</span> Anda</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan berbagai kursus bisnis digital yang dirancang khusus untuk membantu Anda meraih kesuksesan di industri teknologi masa depan.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari kursus..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto invisible-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-none px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <div className="mb-6 inline-block p-6 bg-slate-50 rounded-full">
              <Search className="h-12 w-12 text-slate-300" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Kursus Tidak Ditemukan</h3>
            <p className="text-slate-500">Coba gunakan kata kunci atau kategori yang berbeda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
