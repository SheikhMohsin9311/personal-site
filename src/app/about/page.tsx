export default function About() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-24 min-h-screen relative">
      {/* Decorative Header */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <span className="inline-block mb-4 font-mono text-xs text-gold-500 tracking-[0.2em] uppercase opacity-80">
          The Narrative
        </span>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-100 mb-6">
          About Sheikh Mohsin
        </h1>
        <div className="w-24 h-0.5 bg-gold-500/50 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        {/* Main Narrative Column */}
        <div className="lg:col-span-7 space-y-16">

          {/* Section 1: Intro */}
          <section className="relative">
            <h2 className="font-serif text-2xl text-gold-500 mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold-500/50"></span>
              The Academic Journey
            </h2>
            <div className="prose prose-invert prose-p:text-gray-300/90 prose-p:leading-loose prose-p:font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold-500 first-letter:mr-3 first-letter:float-left">
                I'm currently a sophomore pursuing Computer Science and Business Analytics
                at <strong className="text-gray-100 font-medium">FLAME University</strong> in Pune, on a merit-based full ride scholarship.
                My academic journey is one of duality—combining technical depth with interdisciplinary breadth.
                I deliberately weave coursework in Philosophy and Public Policy alongside core computer science,
                believing that the most profound insights lie at the intersections of disciplines.
              </p>
            </div>
          </section>

          {/* Section 2: Philosophy */}
          <section>
            <h2 className="font-serif text-2xl text-gold-500 mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold-500/50"></span>
              Driving Philosophy
            </h2>
            <div className="prose prose-invert prose-p:text-gray-300/90 prose-p:leading-loose prose-p:font-light">
              <p className="mb-6">
                I'm drawn to work where technology meets real-world complexities. My specific interests lie in
                understanding how data, processes, and algorithms can reduce inefficiencies and solve problems
                that matter in the immediate accumulation of value.
              </p>
              <div className="pl-6 border-l-2 border-gold-500/30 italic text-gold-200/80 my-8 font-serif text-lg">
                "I prefer research that's grounded in something tangible—work that creates measurable impact
                rather than just theoretical exploration."
              </div>
              <p>
                This philosophy extends to my writing. Whether analyzing education policy for the
                <em> Deccan Herald</em> or contributing poetic thought to <em>Kashmir Poetics</em>, writing
                is not just a medium of expression but a tool for thought—helping me clarify complex problems
                and bridge the gap between technical innovation and human understanding.
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar / Secondary Content */}
        <div className="lg:col-span-5 space-y-8 mt-4">

          {/* Profile Card / Widget */}
          <div className="glass-panel p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-gray-100 mb-1">Scholarship</h3>
            <p className="font-mono text-xs text-gold-500 mb-6 uppercase tracking-wider">Academic Foundations</p>

            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="text-gold-500 mt-1">✦</span>
                <div>
                  <div className="text-gray-200 font-medium text-sm">FLAME University</div>
                  <div className="text-gray-500 text-xs">B.Sc. Computer Science & Business Analytics</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold-500 mt-1">✦</span>
                <div>
                  <div className="text-gray-200 font-medium text-sm">Dot Slash Club</div>
                  <div className="text-gray-500 text-xs">Core Member & Developer</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-gold-500 mt-1">✦</span>
                <div>
                  <div className="text-gray-200 font-medium text-sm">Atal Tinkering Labs</div>
                  <div className="text-gray-500 text-xs">Former Coordinator & Instructor</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Extracurriculars */}
          <div className="border border-gold-500/20 p-8 rounded-lg bg-dark-main/50">
            <h3 className="font-serif text-xl text-gray-100 mb-6">Beyond the Desk</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Debate Competitions", "Badminton", "Philosophy Reading",
                "Public Policy", "Photography", "Creative Writing"
              ].map((item, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-mono text-gold-300 bg-gold-900/10 border border-gold-500/20 rounded hover:bg-gold-500/20 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-400 font-light leading-relaxed">
              "Photography teaches me to see the world differently, while debate sharpens
              my ability to construct and defend arguments—skills that translate well
              into everything else I do."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}