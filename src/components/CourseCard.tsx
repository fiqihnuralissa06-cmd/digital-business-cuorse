import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const formatIDR = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
            {course.category}
          </span>
        </div>
        {course.isFree && (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase shadow-sm">
              Gratis
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{course.level}</span>
          <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-bold text-slate-600">4.9</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-500 mb-6 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400 font-medium">Instruktur</p>
            <p className="text-sm font-bold text-slate-700">{course.instructor}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-primary">
              {course.isFree ? 'FREE' : formatIDR(course.price)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-6">
          <Link
            to={`/courses/${course.id}`}
            className="flex items-center justify-center py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-all"
          >
            Detail
          </Link>
          <Link
            to={`/courses/${course.id}`}
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-light hover:shadow-lg transition-all group"
          >
            Daftar
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
