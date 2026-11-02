export default function AboutUs() {
  return (
    <section className="site-container py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="catalog-eyebrow">ABOUT US</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            CV. Senia Mandiri Jaya
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              CV. Senia Mandiri Jaya adalah pemasok peralatan keselamatan terkemuka di Indonesia yang berfokus pada penyediaan produk &amp; layanan APD berkinerja tinggi dan inovatif.
            </p>
            <p>
              Selama sangat berpengalaman kami telah menyediakan solusi keselamatan untuk berbagai industri, mulai dari minyak dan gas, pertambangan, konstruksi, pemadam kebakaran, otomotif, utilitas, listrik, kimia, mesin dan peralatan, militer, dan industri umum &amp; berat lainnya.
            </p>
            <p>
              CV. Senia Mandiri Jaya menyediakan berbagai macam produk keselamatan &amp; APD yang lengkap. Mulai dari helm tugas berat &amp; las, kacamata keselamatan polikarbonat yang sangat ringan, pelindung pernapasan, sarung tangan Kevlar &amp; bahan kimia, pakaian kerja tugas berat &amp; pelindung, pakaian pemadam kebakaran aramid, rompi keselamatan, derek penyelamat, pancuran darurat, hingga pancuran pencuci mata, dan aksesori keselamatan &amp; APD lainnya.
            </p>
          </div>
        </div>

        <figure>
          <img
            src="/images/about/mining-workers.jpg"
            alt="Ilustrasi perlengkapan APD wajib untuk pekerja tambang"
            className="h-auto w-full rounded-3xl shadow-xl"
          />
        </figure>
      </div>
    </section>
  )
}
