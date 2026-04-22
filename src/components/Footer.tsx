import { Mail, Phone, MapPin, Share2, Globe, Users, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-6">Akademi Bisnis Digital</h3>
            <p className="text-sm leading-relaxed mb-6">
              Platform edukasi bisnis digital terpercaya untuk membantu Anda meraih sukses di era digital. Belajar dari para ahli industri.
            </p>
            <div className="flex gap-4">
              <Share2 className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Globe className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Users className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Info className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Kursus</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Kategori Populer</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Startup Business</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Data Science</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Remote Work</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@akademibisnis.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span>Jl. Digital No. 123, Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Akademi Bisnis Digital. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
