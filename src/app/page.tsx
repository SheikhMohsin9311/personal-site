export default function Home() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-4xl font-semibold tracking-tight">
        Hey! I'm Sheikh Mohsin
      </h1>

      <p className="mt-6 text-slate-300 leading-relaxed text-lg">
        A Computer Science and Business Analytics student at FLAME University, 
        writer, and researcher interested in driving positive change everywhere 
        that I can.
      </p>

      <p className="mt-4 text-slate-300 leading-relaxed">
        My interests lie in understanding how technology can reduce inefficiencies, 
        enhance accessibility, and solve problems that matter in the short run. I'm 
        drawn to research through computerisation in something tangible—using data, 
        processes, and algorithms to create measurable impact.
      </p>

      <p className="mt-4 text-slate-300 leading-relaxed">
        I'm passionate about crafting meaningful projects and experiences that 
        resonate with people. My academic journey is a blend of creativity, 
        continuous learning, and a commitment to excellence. Currently, I'm one 
        of the few students on a full ride scholarship at FLAME University.
      </p>

      <div className="mt-8">
        <p className="text-slate-400">
          Feel free to reach out if you have any inquiries or opportunities to 
          collaborate at{' '}
          <a 
            href="mailto:sheikh.mohsin@flame.edu.in"
            className="text-violet-400 hover:text-pink-400 transition-colors"
          >
            sheikh.mohsin@flame.edu.in
          </a>
        </p>
      </div>
    </section>
  );
}