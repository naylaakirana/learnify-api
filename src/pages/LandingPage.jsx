import Footer from "../components/Footer";
import NavbarComp from "../components/NavbarComp";
import { BookOpen, GraduationCap, Monitor } from "lucide-react";

// ✅ TAMBAHAN
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // ✅ TAMBAHAN
  const navigate = useNavigate();

  // ✅ TAMBAHAN
  const handleStartLearning = () => {
    navigate("/login");
  };

  // ✅ TAMBAHAN
  const handleLearnMore = () => {
    navigate("/courses");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <NavbarComp />

      {/* HERO */}
      <section className="bg-[#1057C1] min-h-125 flex items-center px-16 py-16 relative overflow-hidden">
        <div className="max-w-lg z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Learn More Easily <br /> With <br /> Learnify
          </h1>
          <p className="text-white/80 mb-8 text-base">
            The best online learning platform to improve your skills and career
            with experienced mentors.
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* ✅ DIUBAH: tambah onClick */}
            <button
              onClick={handleStartLearning}
              className="bg-white text-[#1057C1] font-semibold px-6 py-3 rounded-lg hover:bg-[#c2d6f4] transition-colors duration-200"
            >
              Start Learning
            </button>

            {/* ✅ DIUBAH: tambah onClick */}
            <button
              onClick={handleLearnMore}
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-10 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#0a2f6b] mb-3">
          Featured Features
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-12">
          Enjoy various learning features designed to help you grow faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#c2d6f4] flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-[#1057C1]"></div>
              </div>
              <span className="text-4xl font-bold text-gray-300">01</span>
            </div>
            <h3 className="text-lg font-semibold text-[#0a2f6b] mb-3">
              Learn Anytime
            </h3>
            <p className="text-gray-500 text-sm">
              Access learning materials anytime and anywhere according to your
              schedule
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#c2d6f4] flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-[#1057C1]"></div>
              </div>
              <span className="text-4xl font-bold text-gray-300">02</span>
            </div>
            <h3 className="text-lg font-semibold text-[#0a2f6b] mb-3">
              User Friendly Display
            </h3>
            <p className="text-gray-500 text-sm">
              Simple and easy-to-use design for all users
            </p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#c2d6f4] flex items-center justify-center">
                <div className="w-5 h-5 rounded bg-[#1057C1]"></div>
              </div>
              <span className="text-4xl font-bold text-gray-300">03</span>
            </div>
            <h3 className="text-lg font-semibold text-[#0a2f6b] mb-3">
              Learning Progress
            </h3>
            <p className="text-gray-500 text-sm">
              Track your learning progress from time to time easily
            </p>
          </div>
        </div>
      </section>

      {/* WHY LEARNIFY */}
      <section className="py-24 px-6 bg-linear-to-br from-slate-50 via-blue-50 to-white text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2f6b] mb-4">
            Why Choose <span className="text-[#1057C1]">Learnify</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
            A learning platform specifically designed to maximize your
            potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-[#c2d6f4] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <BookOpen size={32} className="text-[#1057C1]" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2f6b] mb-3">
                Structured Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Curriculum from basic to advanced levels designed systematically
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <GraduationCap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2f6b] mb-3">
                Quick Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Find the materials you need quickly and practically
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <Monitor size={32} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0a2f6b] mb-3">
                Multi Device Access
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from mobile or laptop with automatic synchronization
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}