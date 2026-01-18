export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        I'm always interested in connecting with people working on similar 
        problems or exploring new opportunities at the intersection of 
        technology, data, and public policy.
      </p>

      <h2>Get in Touch</h2>

      <p>
        The best way to reach me is via email. I typically respond within 
        a day or two.
      </p>

      <div className="mt-8 space-y-4">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">Email</p>
          <a 
            href="mailto:sheikh.mohsin@example.com" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            sheikh.mohsin@example.com
          </a>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">LinkedIn</p>
          <a 
            href="https://linkedin.com/in/sheikh-mohsin" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            linkedin.com/in/sheikh-mohsin
          </a>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">GitHub</p>
          <a 
            href="https://github.com/sheikmohsin" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            github.com/sheikmohsin
          </a>
        </div>
      </div>

      <h2>What I'm Looking For</h2>

      <p>
        I'm particularly interested in research opportunities, internships, 
        or project collaborations that involve:
      </p>

      <ul>
        <li>Applied research in public policy and governance</li>
        <li>Data analysis for social impact organizations</li>
        <li>Systems design for improving institutional efficiency</li>
        <li>Technical roles with a focus on measurable outcomes</li>
      </ul>

      <p className="mt-6">
        If you have ideas for collaboration or just want to discuss these 
        topics, I'd be happy to hear from you.
      </p>
    </section>
  );
}