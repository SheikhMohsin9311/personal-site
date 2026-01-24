export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20 min-h-[calc(100vh-80px)] flex flex-col justify-center relative">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <div className="max-w-3xl w-full">
          {/* Welcome Pill */}
          <div className="inline-block px-5 py-2.5 mb-10 border border-gold-500/40 bg-gradient-to-br from-gold-500/10 to-gold-900/5 backdrop-blur-md relative transition-all duration-300 hover:border-gold-500/60 hover:bg-gold-500/15 hover:-translate-y-0.5 group">
            <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-gold-500 opacity-50"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-gold-500 opacity-50"></div>
            <span className="font-mono text-xs font-medium text-gold-500 tracking-[0.2em] uppercase">
              Scholar · Researcher · Developer
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-100 leading-[1.15] mb-6 tracking-tight">
            <span className="italic font-normal block md:inline mr-4">Sheikh</span>
            Mohsin
          </h1>

          <p className="font-serif text-2xl md:text-3xl italic text-gold-500 mb-8 font-normal leading-relaxed">
            Bridging Classical Scholarship with Modern Innovation
          </p>

          <div className="w-20 h-0.5 bg-gold-500 mx-auto my-8 opacity-60"></div>

          <p className="font-sans text-lg md:text-xl text-gray-300/80 mb-12 leading-loose font-light max-w-2xl mx-auto">
            Dedicated to the pursuit of knowledge through rigorous inquiry and innovative
            research methodologies. My work explores the intersection of traditional scholarly
            practices and contemporary technological advancement.
          </p>

          <div className="hidden">
            <h3>Areas of Inquiry</h3>
            <ul>
              <li>Computational Linguistics & Natural Language Processing</li>
              <li>Human-Computer Interaction & Interface Design</li>
              <li>Digital Humanities & Cultural Preservation</li>
              <li>Machine Learning & Artificial Intelligence</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
            <a href="/writing" className="group font-sans text-sm font-medium px-10 py-4 bg-gold-500 text-dark-main border-2 border-gold-500 uppercase tracking-widest transition-all duration-300 relative overflow-hidden hover:bg-gold-600 hover:border-gold-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/20">
              <span className="relative z-10">View Publications</span>
              <div className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full transition-transform duration-500 group-hover:translate-x-full"></div>
            </a>

            <a href="/contact" className="font-sans text-sm font-medium px-10 py-4 bg-transparent text-gray-200 border-2 border-gold-500/40 uppercase tracking-widest transition-all duration-300 hover:bg-gold-500/10 hover:border-gold-500 hover:text-gold-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold-500/10">
              Academic Inquiry
            </a>
          </div>

          {/* Quote Block */}
          <div className="glass-panel text-left p-10 md:p-12 max-w-2xl mx-auto rounded transition-all duration-300 hover:border-gold-500/40 hover:bg-gold-500/15 hover:shadow-xl hover:shadow-gold-500/10">
            <div className="relative">
              <span className="absolute -left-6 -top-4 font-serif text-6xl text-gold-500/50 leading-none">"</span>
              <p className="font-serif italic text-xl md:text-2xl text-gray-200/90 leading-relaxed pl-4">
                The advancement of knowledge requires both the wisdom of tradition and the courage
                to explore uncharted territories of understanding.
              </p>
              <div className="mt-4 text-right font-mono text-xs text-gold-500/70 uppercase tracking-wider">— Personal Philosophy</div>
            </div>
          </div>
        </div>

        {/* Credentials Section (Hidden initially as per original CSS) */}
        <div className="hidden">
          {/* Content kept for structure/seo/future use, but hidden */}
          <div>Academic Credentials</div>
          <div>Research Experience</div>
          <div>Current Investigations</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gold-500/50 animate-bounce cursor-pointer hover:text-gold-500 transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}