import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants/courses';
import { CheckCircle2, Clock, Users, ArrowLeft, Play, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h2 className="text-2xl font-bold">Kursus tidak ditemukan</h2>
        <Link to="/courses" className="text-primary hover:underline mt-4 inline-block">Kembali ke Daftar Kursus</Link>
      </div>
    );
  }

  const formatIDR = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleEnroll = () => {
    if (course.isFree) {
      alert('Selamat! Anda telah terdaftar di kursus ' + course.title);
      // In real app, we would redirect to a learning dashboard
    } else {
      navigate(`/checkout/${course.id}`);
    }
  };

  const curriculum = [
    "Pengenalan dan Dasar-dasar",
    "Konsep Utama dan Terminologi",
    "Strategi dan Metodologi Kerja",
    "Optimasi dan Skalabilitas Bisnis",
    "Analisis Data dan Monitoring",
    "Persiapan Karir dan Ujian Akhir"
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/courses" className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Kursus</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase mb-6 inline-block">
                {course.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {course.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">{course.duration} Total Waktu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">1,240 Siswa Terdaftar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">24 Video Pembelajaran</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-4">Deskripsi Kursus</h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                {course.description} Materi ini dirancang untuk membekali Anda dengan pengetahuan mendalam dan keterampilan praktis. Anda akan belajar dari nol hingga mahir dengan panduan langkah-demi-langkah.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mb-6">Kurikulum Pembelajaran</h2>
              <div className="space-y-4">
                {curriculum.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-all cursor-default">
                    <div className="h-10 w-10 flex-none rounded-full bg-white flex items-center justify-center font-bold text-primary shadow-sm">
                      {i + 1}
                    </div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar / Price Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 fill-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <p className="text-slate-400 text-sm font-medium mb-1">Harga Kursus</p>
                    <p className="text-4xl font-black text-primary">
                      {course.isFree ? 'GRATIS' : formatIDR(course.price)}
                    </p>
                  </div>

                  <button
                    onClick={handleEnroll}
                    className="w-full py-4 rounded-2xl bg-primary text-white font-black text-lg hover:bg-primary-light hover:shadow-xl active:scale-95 transition-all mb-4"
                  >
                    {course.isFree ? 'Daftar Sekarang' : 'Beli Kursus'}
                  </button>

                  <p className="text-center text-xs text-slate-400 font-medium mb-8">
                    Jaminan uang kembali 30 hari jika tidak puas.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <Shield className="h-5 w-5 text-green-500" />
                      Akses Selamanya
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      E-Sertifikat Resmi
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <Users className="h-5 w-5 text-green-500" />
                      Komunitas Eksklusif
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
