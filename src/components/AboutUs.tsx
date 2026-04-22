import { CheckCircle2, Award, Zap, Smile } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSummary() {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Sertifikat Resmi",
      description: "Dapatkan sertifikat yang diakui oleh mitra industri global."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Materi Terupdate",
      description: "Kurikulum yang selalu diperbarui sesuai tren pasar terbaru."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Mentor Praktisi",
      description: "Belajar langsung dari ahli yang berpengalaman di bidangnya."
    },
    {
      icon: <Smile className="h-8 w-8 text-primary" />,
      title: "Akses Selamanya",
      description: "Sekali beli, Anda memiliki akses tanpa batas ke materi kursus."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
                  alt="Team"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
                  alt="Tech"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Speaker"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=400"
                  alt="Meeting"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
              Kenapa Memilih <br />
              <span className="text-primary italic">Akademi Bisnis Digital?</span>
            </h2>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              Kami percaya bahwa pendidikan berkualitas harus dapat diakses oleh siapa saja. Melalui platform ini, kami berkomitmen untuk mencetak talenta digital kompeten yang siap bersaing secara global.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
