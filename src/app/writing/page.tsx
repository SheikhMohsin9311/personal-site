export default function Writing() {
    const posts = [
      {
        title: "Understanding Algorithmic Efficiency in Public Systems",
        date: "2024-12-15",
        excerpt: "Exploring how computational thinking can identify and reduce bottlenecks in government service delivery systems.",
        slug: "algorithmic-efficiency-public-systems"
      },
      {
        title: "Data-Driven Approaches to Policy Analysis",
        date: "2024-11-20",
        excerpt: "A framework for using statistical methods to evaluate policy outcomes and inform decision-making.",
        slug: "data-driven-policy-analysis"
      },
      {
        title: "Systems Thinking in Business Analytics",
        date: "2024-10-08",
        excerpt: "How understanding complex systems can lead to better business insights and strategic decisions.",
        slug: "systems-thinking-analytics"
      }
    ];
  
    return (
      <section>
        <h1>Writing</h1>
        
        <p className="text-slate-700 leading-relaxed mb-8">
          Thoughts on technology, policy, and the intersection of data science 
          with real-world problem solving.
        </p>
  
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-slate-200 pb-6 last:border-0">
              <h2 className="text-xl font-medium mb-2">
                <a href={`/writing/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </a>
              </h2>
              <time className="text-sm text-slate-500 block mb-3">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <p className="text-slate-700 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }