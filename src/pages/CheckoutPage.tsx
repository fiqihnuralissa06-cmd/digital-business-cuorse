import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSES } from '../constants/courses';
import { CreditCard, ShieldCheck, ArrowLeft, Check, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function CheckoutPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);
  const [isSuccess, setIsSuccess] = React.useState(false);

  if (!course || course.isFree) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h2 className="text-2xl font-bold">Terjadi kesalahan pada pembayaran</h2>
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

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/courses');
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md w-full"
        >
          <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-8">
            <Check className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Pembayaran Berhasil!</h2>
          <p className="text-slate-500 mb-8">
            Selamat! Anda telah terdaftar di kursus <strong>{course.title}</strong>. Anda akan diarahkan ke kelas dalam beberapa detik.
          </p>
          <div className="animate-pulse flex justify-center">
            <div className="h-2 w-2 bg-primary rounded-full mx-1"></div>
            <div className="h-2 w-2 bg-primary rounded-full mx-1"></div>
            <div className="h-2 w-2 bg-primary rounded-full mx-1"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/courses/${course.id}`} className="flex items-center gap-2 text-slate-500 hover:text-primary mb-8 transition-colors group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Detail Kursus</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-8">Ringkasan Pesanan</h2>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex gap-6 mb-8">
                <img src={course.thumbnail} alt={course.title} className="h-24 w-32 rounded-xl object-cover" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-slate-400">{course.instructor}</p>
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="flex justify-between text-slate-600">
                  <span>Harga Kursus</span>
                  <span>{formatIDR(course.price)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Diskon</span>
                  <span className="text-green-500">- Rp 0</span>
                </div>
                <div className="flex justify-between text-xl font-black text-slate-900 pt-4 border-t border-slate-100">
                  <span>Total Bayar</span>
                  <span className="text-primary">{formatIDR(course.price)}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <p className="text-sm text-slate-600 font-medium">Transaksi aman dengan enkripsi SSL 256-bit.</p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8">Informasi Pembayaran</h2>
            
            <div className="flex gap-4 mb-8">
              <div className="flex-1 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                <CreditCard className="h-6 w-6 text-primary mb-2" />
                <p className="text-xs font-bold uppercase text-primary">Kartu Kredit</p>
              </div>
              <div className="flex-1 p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
                <div className="h-6 w-6 bg-slate-100 rounded mb-2"></div>
                <p className="text-xs font-bold uppercase text-slate-400">Bank Transfer</p>
              </div>
              <div className="flex-1 p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
                <div className="h-6 w-6 bg-slate-100 rounded mb-2"></div>
                <p className="text-xs font-bold uppercase text-slate-400">E-Wallet</p>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nama di Kartu</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Contoh: John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nomor Kartu</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Masa Berlaku</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">CVC</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      className="w-full pl-10 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="***"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-primary-light hover:shadow-2xl active:scale-95 transition-all mt-4"
              >
                Bayar Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
