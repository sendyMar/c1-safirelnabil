export default function Footer() {
  return (
    <footer className="bg-[#050505] text-brand-light/70 py-16 border-t border-brand-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-serif text-2xl text-brand-light">Safir &amp; Elnabil</h3>
          <p className="font-sans text-sm font-light max-w-xs">
            Eksklusivitas dalam setiap tetes. Kemewahan yang diwariskan untuk Anda.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-sans uppercase tracking-widest text-brand-gold text-xs font-bold mb-2">
            Jelajahi (استكشف)
          </h4>
          <ul className="space-y-2 font-sans text-sm">
            <li><a href="#collection" className="hover:text-brand-light transition-colors">Koleksi</a></li>
            <li><a href="#" className="hover:text-brand-light transition-colors">Cerita Kami</a></li>
            <li><a href="#" className="hover:text-brand-light transition-colors">Butik</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-sans uppercase tracking-widest text-brand-gold text-xs font-bold mb-2">
            Buletin
          </h4>
          <p className="font-sans text-sm font-light">
            Berlangganan untuk menerima pembaruan tentang rilis eksklusif kami.
          </p>
          <div className="flex w-full max-w-sm mt-2">
            <input 
              type="email" 
              placeholder="Alamat email" 
              className="bg-transparent border-b border-brand-light/30 pb-2 px-2 w-full text-brand-light focus:outline-none focus:border-brand-gold transition-colors text-sm"
            />
            <button className="uppercase text-xs tracking-widest ml-4 hover:text-brand-gold transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-brand-light/10 text-center font-sans text-xs flex flex-col md:flex-row justify-between items-center opacity-50">
        <p>&copy; {new Date().getFullYear()} Safir Elnabil Parfume. Hak cipta dilindungi.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-brand-light">Kebijakan Privasi</a>
          <a href="#" className="hover:text-brand-light">Syarat Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
