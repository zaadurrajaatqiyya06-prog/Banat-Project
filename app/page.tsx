import Link from "next/link"
import { ShieldCheck, ShoppingBag, Info } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-banat-background">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-banat-secondary" />
              <span className="font-bold text-xl text-banat-text">Banat</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-banat-text font-medium hover:text-banat-secondary transition"
              >
                Home
              </Link>
              <Link
                href="/toko"
                className="text-banat-text font-medium hover:text-banat-secondary transition"
              >
                Toko
              </Link>
              <Link
                href="/tentang-kami"
                className="text-banat-text font-medium hover:text-banat-secondary transition"
              >
                Tentang Kami
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/toko"
                className="bg-banat-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-banat-secondary/90 transition"
              >
                Lihat Toko
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6 text-banat-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-banat-primary to-banat-accent py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Banat Official
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Anggun dalam setiap detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/toko"
              className="bg-banat-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-banat-secondary/90 transition shadow-lg"
            >
              Lihat Koleksi
            </Link>
            <Link
              href="/tentang-kami"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-banat-text mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Tentang Kami
          </h2>
          <p className="text-lg md:text-xl text-banat-muted leading-relaxed mb-8">
            Banat Official adalah sebuah brand yang lahir dari semangat untuk menghadirkan keindahan dalam keseharian.
            Kami percaya bahwa keanggunan bukan hanya tentang penampilan, tetapi juga tentang nilai, kualitas, dan ketulusan di setiap produk yang kami ciptakan.
          </p>
          <p className="text-lg text-banat-text leading-relaxed mb-12">
            Melalui dua anak brand kami — <span className="font-semibold">Banat Collection</span> dalam dunia aksesoris muslimah, dan{" "}
            <span className="font-semibold">Banat Project</span> dalam dunia kuliner — kami hadir untuk menemani hari-hari Anda dengan produk yang penuh makna.
          </p>

          {/* Two Brand Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Banat Collection */}
            <div className="bg-banat-background rounded-2xl p-6 border border-banat-primary/10">
              <div className="w-14 h-14 bg-banat-collection-base rounded-xl flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-banat-text mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                Banat Collection
              </h3>
              <p className="text-banat-muted leading-relaxed">
                Aksesoris muslimah modern yang menggabungkan nilai keanggunan dan kenyamanan. Setiap produk kami dirancang dengan detail yang cermat, pilihan warna netral yang timeless, serta material berkualitas tinggi.
              </p>
            </div>

            {/* Banat Project */}
            <div className="bg-banat-background rounded-2xl p-6 border border-banat-primary/10">
              <div className="w-14 h-14 bg-banat-project-base rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-banat-text mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                Banat Project
              </h3>
              <p className="text-banat-muted leading-relaxed">
                Label kuliner rumahan yang menghadirkan produk makanan autentik dengan cita rasa yang kaya. Dibuat dari bahan-bahan pilihan dan resep yang teruji, setiap sajian kami adalah ungkapan kasih sayang dari tangan ke meja makan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-banat-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Siap Melihat Koleksi Kami?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Jelajahi produk terbaru dari Banat Collection dan Banat Project.
          </p>
          <Link
            href="/toko"
            className="bg-banat-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-banat-secondary/90 transition shadow-lg inline-block"
          >
            Kunjungi Toko
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-banat-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-banat-secondary" />
              <span className="font-bold text-white">Banat Official</span>
            </div>
            <div className="flex items-center gap-6 text-white/60">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/toko" className="hover:text-white transition">Toko</Link>
              <Link href="/tentang-kami" className="hover:text-white transition">Tentang Kami</Link>
            </div>
            <p className="text-white/40 text-sm">© 2024 Banat Official. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
