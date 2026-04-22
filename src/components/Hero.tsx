import { motion } from 'motion/react';
import { PlayCircle, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Investasi Terbaik Adalah Ilmu
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Kuasai Keahlian <br />
              <span className="text-primary italic">Bisnis Digital</span> <br />
              Bersama Kami
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Dapatkan akses ke materi eksklusif pemasaran digital, startup, hingga data science dari para profesional di bidangnya. Siap bertransformasi?
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary-light hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Jelajahi Kursus
              </Link>
              <button className="flex items-center gap-2 px-6 py-4 text-slate-700 font-bold hover:text-primary transition-colors">
                <PlayCircle className="h-6 w-6 text-primary" />
                Lihat Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-black text-slate-900">10k+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Siswa</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">50+</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Kursus</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">4.9</p>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200"
                alt="Belajar di Rumah"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Sertifikat Resmi</p>
                <p className="text-sm font-bold text-slate-900">Terverifikasi</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Aktif Sekarang</p>
                <p className="text-sm font-bold text-slate-900">240+ Belajar</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
