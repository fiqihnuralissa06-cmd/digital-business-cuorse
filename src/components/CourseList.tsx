import { COURSES } from '../constants/courses';
import { CourseCard } from './CourseCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedCourses() {
  const featured = COURSES.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Kursus <span className="text-primary tracking-tight underline adorn-primary">Terpopuler</span>
            </h2>
            <p className="text-slate-600 max-w-xl">
              Pilih dari ratusan kursus berkualitas yang telah membantu ribuan siswa mencapai impian karir digital mereka.
            </p>
          </div>
          <Link
            to="/courses"
            className="flex items-center gap-2 text-primary font-bold hover:underline group"
          >
            Lihat Semua Kursus
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
