import { Mail, Phone, MapPin, Users, Globe, Award, Sparkles } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 mb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Visi & Misi</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            Mencetak <span className="text-primary">1 Juta Talenta</span> <br /> Digital Indonesia
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Akademi Bisnis Digital lahir dari semangat untuk mendemokratisasi pendidikan bisnis berkualitas. Kami percaya setiap individu berhak mendapatkan akses ke ilmu digital terbaik tanpa batasan.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">Kisah Kami</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Dimulai dari sebuah komunitas kecil di Jakarta pada tahun 2020, kami menyadari besarnya kesenjangan antara kurikulum pendidikan formal dengan kebutuhan industri digital yang sangat dinamis.
              </p>
              <p>
                Banyak lulusan muda merasa kebingungan saat memasuki dunia kerja karena kurangnya keahlian praktis dalam pemasaran digital, analisis data, dan operasional startup. Itulah mengapa kami membangun kurikulum praktis yang berorientasi pada hasil.
              </p>
              <p>
                Kini, Akademi Bisnis Digital telah tumbuh menjadi salah satu ed-tech terkemuka dengan ribuan alumni yang telah sukses bekerja di berbagai startup ternama dan menjadi freelancer internasional.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary mb-4 text-primary"><Users className="h-8 w-8" /></div>
              <p className="text-3xl font-black text-slate-900">10k+</p>
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Alumni Sukses</p>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white">
              <div className="h-16 w-16 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mb-4 text-primary"><Globe className="h-8 w-8" /></div>
              <p className="text-3xl font-black">20+</p>
              <p className="text-xs font-bold uppercase text-slate-300 tracking-wider">Negara Jangkauan</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-slate-100">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary"><Award className="h-8 w-8" /></div>
              <p className="text-3xl font-black text-slate-900">100%</p>
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Materi Praktis</p>
            </div>
            <div className="bg-primary rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white text-white">
              <div className="h-16 w-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center mb-4 text-white"><Sparkles className="h-8 w-8" /></div>
              <p className="text-3xl font-black">50+</p>
              <p className="text-xs font-bold uppercase text-primary-light brightness-200 tracking-wider">Mitra Industri</p>
            </div>
          </div>
        </div>

        {/* Team Intro */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Didukung Tenaga Ahli</h2>
          <p className="text-slate-600">Mentor kami adalah praktisi berprestasi dari perusahaan teknologi global.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { name: "Andi Wijaya", role: "Digital Marketer @ Meta", img: "https://i.pravatar.cc/150?u=andi" },
            { name: "Maya Siska", role: "Data Scientist @ Go-jek", img: "https://i.pravatar.cc/150?u=maya" },
            { name: "Budi Santoso", role: "Business Lead @ Grab", img: "https://i.pravatar.cc/150?u=budi" },
            { name: "Rina Kusuma", role: "Startup Specialist", img: "https://i.pravatar.cc/150?u=rina" },
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute -inset-4 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <img src={member.img} alt={member.name} className="h-32 w-32 rounded-full relative z-10 border-4 border-white shadow-xl" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h4>
              <p className="text-sm text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
