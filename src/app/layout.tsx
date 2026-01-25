import "./globals.css";

export const metadata = {
  title: "Sheikh Mohsin | Scholar & Developer",
  description: "Bridging Classical Scholarship with Modern Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-100" />

        <div className="fixed -top-[15%] -left-[15%] w-[700px] h-[700px] rounded-full bg-radial-[at_center_center] from-gold-900/20 to-transparent blur-[120px] animate-float delay-0 pointer-events-none z-0"></div>
        <div className="fixed -bottom-[15%] -right-[15%] w-[600px] h-[600px] rounded-full bg-radial-[at_center_center] from-blue-900/10 to-transparent blur-[120px] animate-float delay-[-8s] pointer-events-none z-0"></div>

        <header className="fixed top-0 w-full z-50 border-b border-gold-500/15 bg-dark-main/85 backdrop-blur-xl transition-all duration-300">
          <nav className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
            <a href="/" className="font-serif text-xl font-bold text-gray-100 relative group tracking-tight z-10 transition-colors hover:text-gold-500">
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-gold-500 text-base opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-7">◆</span>
              The Scholar
            </a>

            <div className="flex gap-8 items-center">
              {[
                { label: 'Prologue', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Expertise', path: '/experience' },
                { label: 'Works', path: '/writing' },
                { label: 'Correspond', path: '/contact' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="font-sans text-xs uppercase tracking-widest text-gray-400/80 hover:text-gold-500 transition-all relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main className="relative z-10 pt-20 min-h-screen">
          {children}
        </main>

        <footer className="relative z-10 border-t border-gold-500/15 mt-24 py-8 text-center text-xs font-mono tracking-wider text-gold-500/50">
          <p>© {new Date().getFullYear()} Sheikh Mohsin</p>
        </footer>
      </body>
    </html>
  );
}
