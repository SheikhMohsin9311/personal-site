export default function Writing() {
  const posts = [
    {
      title: "Education Policy and Real Outcomes",
      date: "2024-12-10",
      excerpt: "Co-written with my professor for Deccan Herald, exploring how policy decisions translate into actual changes in educational systems.",
      slug: "education-policy-outcomes",
      publication: "Deccan Herald",
      type: "Opinion"
    },
    {
      title: "A Memoir to Thyself",
      date: "2024-11-15",
      excerpt: "A chapter contributed to Kashmir Poetics, reflecting on themes of identity, belonging, and the complexity of place in a changing world.",
      slug: "identity-place-kashmir",
      publication: "Kashmir Poetics",
      type: "Essay"
    },
    {
      title: "Data-Driven Insights in Non-Profit Operations",
      date: "2024-10-08",
      excerpt: "Lessons from analyzing book donation patterns at Goonj. How simple datasets and empirical findings can reveal system gaps.",
      slug: "data-insights-nonprofit",
      type: "Case Study"
    },
    {
      title: "Testing as Learning",
      date: "2024-09-18",
      excerpt: "What QA testing taught me about systems thinking, and the gap between how we think software should work and how it actually does.",
      slug: "testing-as-learning",
      type: "Reflection"
    },
    {
      title: "Teaching 3D Printing to Juniors",
      date: "2024-08-05",
      excerpt: "Reflections from coordinating Atal Tinkering Labs. How hands-on learning changes the way students think about ideas becoming reality.",
      slug: "teaching-3d-printing",
      type: "Field Note"
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-24 min-h-screen relative">
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <span className="inline-block mb-4 font-mono text-xs text-gold-500 tracking-[0.2em] uppercase opacity-80">
          The Archive
        </span>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-100 mb-6">
          Selected Works
        </h1>
        <div className="w-24 h-0.5 bg-gold-500/50 mx-auto"></div>
        <p className="font-sans text-lg text-gray-400 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
          Essays and reflections on technology, education, policy, and the
          intersections between them. Attempts to think clearly about problems that matter.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 to-gold-900/10 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <a href={`/writing/${post.slug}`} className="relative block glass-panel p-8 rounded-lg hover:border-gold-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h2 className="text-2xl font-serif text-gray-100 group-hover:text-gold-400 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 shrink-0">
                  {post.publication && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-dark-main bg-gold-500 rounded-sm">
                      {post.publication}
                    </span>
                  )}
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium text-gold-500/80 border border-gold-500/20 rounded-sm">
                    {post.type}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center text-sm font-medium text-gold-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Read Article <span className="ml-2">→</span>
              </div>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">
          End of Selected Works
        </p>
      </div>
    </div>
  );
}