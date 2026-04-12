export default function Footer() {
  return (
    <footer className="bg-[#0a2f6b] text-white py-12 px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-3">Learnify</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Platform belajar online terbaik untuk meningkatkan skill dan karir
            kamu.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Account</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Kontak</h4>
          <ul className="space-y-2 text-white/60 text-sm">
            <li>dindaauliaazzahra@smkwikrama.sch.id</li>
            <li>Bogor, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40 text-sm">
        © 2025 Learnify. All rights reserved.
      </div>
    </footer>
  );
}
