export default function Experience() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <span className="inline-block mb-4 font-mono text-xs text-gold-500 tracking-[0.2em] uppercase opacity-80">
          Professional Trajectory
        </span>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-100 mb-6">
          Expertise & Impact
        </h1>
        <div className="w-24 h-0.5 bg-gold-500/50 mx-auto"></div>

        <p className="font-sans text-lg text-gray-400 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
          My experience spans research, operations, technical work, and writing—all
          driven by a desire to create measurable impact through technology and
          clear thinking.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

        {/* Timeline Column */}
        <div className="lg:col-span-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gold-500/20 md:left-8 hidden md:block"></div>

          <div className="space-y-16">

            {/* Experience Group 1 */}
            <div className="relative pl-0 md:pl-24 group">
              <div className="hidden md:block absolute left-[30px] top-6 w-3 h-3 rounded-full bg-dark-main border-2 border-gold-500 z-10 group-hover:bg-gold-500 transition-colors"></div>

              <div className="glass-panel p-8 rounded-lg border-l-2 border-l-gold-500 md:border-l border-gold-500/20 hover:border-gold-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="font-serif text-2xl text-gray-100">QA Testing Intern</h3>
                  <span className="font-mono text-xs text-gold-500 uppercase tracking-widest mt-2 md:mt-0">Remote · Jul 2025 - Aug 2025</span>
                </div>
                <div className="text-gold-400/80 font-medium mb-4">PartyHub</div>
                <p className="text-gray-400 leading-relaxed font-light">
                  Conducted manual testing of user-facing and backend systems to ensure
                  stability. Developed detailed bug reports and collaborated with developers
                  to improve system reliability. Gained hands-on experience in real-world
                  product testing cycles.
                </p>
              </div>
            </div>

            {/* Experience Group 2 */}
            <div className="relative pl-0 md:pl-24 group">
              <div className="hidden md:block absolute left-[30px] top-6 w-3 h-3 rounded-full bg-dark-main border-2 border-gold-500 z-10 group-hover:bg-gold-500 transition-colors"></div>

              <div className="glass-panel p-8 rounded-lg border-l-2 border-l-gold-500 md:border-l border-gold-500/20 hover:border-gold-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="font-serif text-2xl text-gray-100">Research & Ops Intern</h3>
                  <span className="font-mono text-xs text-gold-500 uppercase tracking-widest mt-2 md:mt-0">Goonj, Delhi · May 2025 - Jun 2025</span>
                </div>
                <div className="text-gold-400/80 font-medium mb-4">Goonj (Non-Profit)</div>
                <p className="text-gray-400 leading-relaxed font-light mb-4">
                  Focused on data-driven insights and operational efficiency in material reuse.
                </p>
                <ul className="space-y-2 text-sm text-gray-400/80 list-disc list-inside marker:text-gold-500">
                  <li>Analysed redistribution records to study utilisation patterns.</li>
                  <li>Created structured datasets to quantify utility of educational material.</li>
                  <li>Proposed process optimisations based on empirical findings.</li>
                  <li>Led a team of interns coordinating educational outreach campaigns.</li>
                </ul>
              </div>
            </div>

            {/* Experience Group 3 */}
            <div className="relative pl-0 md:pl-24 group">
              <div className="hidden md:block absolute left-[30px] top-6 w-3 h-3 rounded-full bg-dark-main border-2 border-gold-500 z-10 group-hover:bg-gold-500 transition-colors"></div>

              <div className="glass-panel p-8 rounded-lg border-l-2 border-l-gold-500 md:border-l border-gold-500/20 hover:border-gold-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h3 className="font-serif text-2xl text-gray-100">Coordinator & Instructor</h3>
                  <span className="font-mono text-xs text-gold-500 uppercase tracking-widest mt-2 md:mt-0">JNV Kashmir · 2023 - 2024</span>
                </div>
                <div className="text-gold-400/80 font-medium mb-4">Atal Tinkering Labs</div>
                <p className="text-gray-400 leading-relaxed font-light">
                  Coordinated lab activities and taught 3D printing and basic fabrication
                  to junior students. Facilitated hands-on learning environments where students
                  could transform ideas into physical objects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="lg:col-span-4 space-y-12">

          {/* Skills Widget */}
          <div className="bg-gradient-to-br from-dark-secondary to-dark-main border border-gold-500/10 p-8 rounded-lg">
            <h3 className="font-serif text-xl text-gray-100 mb-6 flex items-center gap-3">
              <span className="text-gold-500">❖</span> Technical Arsenal
            </h3>

            <div className="space-y-6">
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'TypeScript', 'SQL'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-gold-200 bg-gold-900/20 rounded border border-gold-500/20">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Domains</div>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Algorithms', 'AWS', 'Data Mining', 'TCS'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800/40 rounded border border-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Leadership */}
          <div className="bg-gradient-to-br from-dark-secondary to-dark-main border border-gold-500/10 p-8 rounded-lg">
            <h3 className="font-serif text-xl text-gray-100 mb-6 flex items-center gap-3">
              <span className="text-gold-500">❖</span> Leadership
            </h3>
            <ul className="space-y-4">
              <li className="text-sm text-gray-300">
                <strong className="block text-gold-400 mb-1">Dot Slash Club</strong>
                Generic Member & Contributor to University Coding Team
              </li>
              <li className="text-sm text-gray-300">
                <strong className="block text-gold-400 mb-1">Debate Team Member</strong>
                Representing University in National Circuits
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center lg:text-left">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 font-sans text-sm font-medium px-8 py-3 bg-gold-500 text-dark-main border border-gold-500 uppercase tracking-widest transition-all duration-300 hover:bg-gold-600 hover:border-gold-600 group"
            >
              <span>Download CV</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}