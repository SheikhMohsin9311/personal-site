export default function Home() {
  return (
    <div className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="welcome-label">Scholar · Researcher · Developer</div>
          
          <h1 className="hero-heading">
            Sheikh Mohsin
          </h1>
          
          <p className="hero-subtitle">
            Bridging Classical Scholarship with Modern Innovation
          </p>
          
          <p className="hero-description">
            Dedicated to the pursuit of knowledge through rigorous inquiry and innovative 
            research methodologies. My work explores the intersection of traditional scholarly 
            practices and contemporary technological advancement, seeking to advance understanding 
            through empirical investigation and theoretical discourse.
          </p>

          <div className="research-focus">
            <h3>Areas of Inquiry</h3>
            <ul className="research-list">
              <li>Computational Linguistics & Natural Language Processing</li>
              <li>Human-Computer Interaction & Interface Design</li>
              <li>Digital Humanities & Cultural Preservation</li>
              <li>Machine Learning & Artificial Intelligence</li>
            </ul>
          </div>
          
          <div className="hero-buttons">
            <a href="/writing" className="btn-primary">
              View Publications
            </a>
            <a href="/contact" className="btn-secondary">
              Academic Inquiry
            </a>
          </div>

          <div className="quote-block">
            The advancement of knowledge requires both the wisdom of tradition and the courage 
            to explore uncharted territories of understanding.
            <div className="quote-author">— Personal Philosophy</div>
          </div>
        </div>

        <div className="credentials">
          <div className="credential-card">
            <span className="credential-icon">🎓</span>
            <h3 className="credential-title">Academic Credentials</h3>
            <p className="credential-subtitle">Doctoral Studies in Computer Science</p>
            <p className="credential-text">
              Specializing in artificial intelligence and computational theory, with 
              extensive research in machine learning algorithms and their applications 
              to real-world problems.
            </p>
            <span className="publication-badge">15+ PEER-REVIEWED PAPERS</span>
          </div>
          
          <div className="credential-card">
            <span className="credential-icon">📚</span>
            <h3 className="credential-title">Research Experience</h3>
            <p className="credential-subtitle">Principal Investigator & Collaborator</p>
            <p className="credential-text">
              Led multi-disciplinary research initiatives examining the convergence of 
              traditional methodologies with emerging technologies in data science and 
              computational linguistics.
            </p>
            <span className="publication-badge">7+ YEARS ACTIVE RESEARCH</span>
          </div>
          
          <div className="credential-card">
            <span className="credential-icon">🔬</span>
            <h3 className="credential-title">Current Investigations</h3>
            <p className="credential-subtitle">Ongoing Scholarly Work</p>
            <p className="credential-text">
              Exploring novel approaches to human-AI collaboration, ethical frameworks 
              for algorithmic decision-making, and the preservation of cultural knowledge 
              through digital archival systems.
            </p>
            <span className="publication-badge">3 ACTIVE PROJECTS</span>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}