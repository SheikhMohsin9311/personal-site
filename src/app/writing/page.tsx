export default function Writing() {
  const posts = [
    {
      title: "Democracy in the Digital Age",
      date: "2024-12-10",
      excerpt: "Reflections on democratic backsliding and how technology shapes modern governance. Drawing from research on institutional erosion and the role of digital platforms in political discourse.",
      slug: "democracy-digital-age"
    },
    {
      title: "The Power of Community Action",
      date: "2024-11-15",
      excerpt: "Lessons learned from organizing fundraising initiatives and mobilizing people around shared causes. What works, what doesn't, and why collective action still matters.",
      slug: "power-community-action"
    },
    {
      title: "Teaching in the Age of AI",
      date: "2024-10-22",
      excerpt: "Thoughts on what it means to be a teacher when information is abundant but wisdom is scarce. How do we help others learn when the answers are just a search away?",
      slug: "teaching-age-ai"
    },
    {
      title: "Philosophy Meets Programming",
      date: "2024-09-18",
      excerpt: "How philosophical thinking shapes better code and better systems. On the importance of asking why before diving into how.",
      slug: "philosophy-meets-programming"
    }
  ];

  return (
    <section>
      <h1>Writing</h1>
      
      <p className="text-slate-300 leading-relaxed mb-8">
        Essays and reflections on technology, society, philosophy, and the 
        intersections between them. Some published, some personal—all attempts 
        to make sense of the world.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-slate-700 pb-6 last:border-0">
            <h2 className="text-xl font-medium mb-2">
              <a href={`/writing/${post.slug}`} className="hover:text-pink-400 transition-colors">
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
            <p className="text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-12 text-slate-400 text-sm">
        Selected articles from my newspaper column and personal essays. 
        More coming soon.
      </p>
    </section>
  );
}