import { Hero } from '../components/Hero';
import { FeaturedCourses } from '../components/CourseList';
import { AboutSummary } from '../components/AboutUs';
import { motion } from 'motion/react';
import { BookOpen, Target, ShieldCheck, Rocket } from 'lucide-react';

export function Home() {
  return (
    <main>
      <Hero />
      
      {/* Categories Bar */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2"><BookOpen className="h-6 w-6" /><span className="font-bold">E-Learning</span></div>
             <div className="flex items-center gap-2"><Target className="h-6 w-6" /><span className="font-bold">Mentoring</span></div>
             <div className="flex items-center gap-2"><ShieldCheck className="h-6 w-6" /><span className="font-bold">Accredited</span></div>
             <div className="flex items-center gap-2"><Rocket className="h-6 w-6" /><span className="font-bold">Job Ready</span></div>
          </div>
        </div>
      </section>

      <FeaturedCourses />
      <AboutSummary />

      {/* CTA Section */}
      <section className="py-20 bg-primary mb-[-1px]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
              Siap Memulai Karir <br /> Impian Anda?
            </h2>
            <p className="text-primary-light brightness-150 text-lg mb-10 opacity-90">
              Bergabunglah dengan 10.000+ siswa lainnya dan mulailah belajar keahlian digital hari ini. Dapatkan diskon 50% untuk pendaftaran pertama!
            </p>
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Daftar Sekarang
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
