export default function Writing() {
  const posts = [
    {
      title: "Education Policy and Real Outcomes",
      date: "2024-12-10",
      excerpt: "Co-written with my professor for Deccan Herald, exploring how policy decisions translate into actual changes in educational systems and what metrics truly matter.",
      slug: "education-policy-outcomes",
      publication: "Deccan Herald"
    },
    {
      title: "A Memoir to Thyself",
      date: "2024-11-15",
      excerpt: "A chapter contributed to Kashmir Poetics, reflecting on themes of identity, belonging, and the complexity of place in a changing world.",
      slug: "identity-place-kashmir",
      publication: "Kashmir Poetics"
    },
    {
      title: "Data-Driven Insights in Non-Profit Operations",
      date: "2024-10-08",
      excerpt: "Lessons from analyzing book donation patterns at Goonj. How simple datasets and empirical findings can reveal system gaps and drive operational improvements.",
      slug: "data-insights-nonprofit"
    },
    {
      title: "Testing as Learning",
      date: "2024-09-18",
      excerpt: "What QA testing taught me about systems thinking, user experience, and the gap between how we think software should work and how it actually does.",
      slug: "testing-as-learning"
    },
    {
      title: "Teaching 3D Printing to Juniors",
      date: "2024-08-05",
      excerpt: "Reflections from coordinating Atal Tinkering Labs. How hands-on learning changes the way students think about ideas becoming reality.",
      slug: "teaching-3d-printing"
    }
  ];

  return (
    <section>
      <h1>Writing</h1>
      
      <p className="text-slate-300 leading-relaxed mb-8">
        Essays and reflections on technology, education, policy, and the 
        intersections between them. Some published, some personal—all attempts 
        to think clearly about problems that matter.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="article-box">
            <h2 className="text-xl font-medium mb-2">
              <a href={`/writing/${post.slug}`} className="transition-colors">
                {post.title}
              </a>
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <time className="text-sm text-slate-500">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              {post.publication && (
                <>
                  <span className="text-slate-600">·</span>
                  <span className="text-sm golden-badge">{post.publication}</span>
                </>
              )}
            </div>
            <p className="text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-slate-400 text-sm">
        Selected articles from publications and personal essays. More coming soon.
      </p>
    </section>
  );
}