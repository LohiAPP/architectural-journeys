export function Footer() {
  return (
    <footer className="bg-[var(--cream)] px-6 pb-10 pt-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center gap-4 md:gap-6">
          <img src="/logon.jpeg" alt="Logo" className="h-16 md:h-24 w-auto object-contain mix-blend-multiply opacity-80" />
          <div className="flex items-baseline gap-3 md:gap-4 mt-1">
            <span className="font-serif text-2xl md:text-4xl text-[var(--ink)] tracking-tight">Manushyalaya</span>
            <span className="text-[var(--ink)] text-[10px] md:text-sm tracking-[0.4em] uppercase font-medium opacity-80">
              Architects
            </span>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-[var(--ink)]/15 pt-10 md:grid-cols-4">
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Studio</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[var(--clay)]">About</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">Team</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">Careers</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Connect</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-[var(--clay)]">Instagram</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">Journal</a></li>
              <li><a href="#" className="hover:text-[var(--clay)]">ArchDaily</a></li>
            </ul>
          </div>
          <div>
            <p className="text-hairline text-[var(--ink-soft)] mb-4">Contact</p>
            <ul className="space-y-1 text-sm">
              <li><a href="mailto:manushyalayaarchitectures@gmail.com" className="hover:text-[var(--clay)]">manushyalayaarchitectures@gmail.com</a></li>
              <li><a href="tel:+918499877947" className="hover:text-[var(--clay)]">+91 84998 77947</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 text-xs text-[var(--ink-soft)] md:flex-row">
          <span>© 2012 Manushyalaya Architects LLP — All rights reserved.</span>
          <span>Designed & built in Hyd & VJY, India.</span>
        </div>
      </div>
    </footer>
  );
}
