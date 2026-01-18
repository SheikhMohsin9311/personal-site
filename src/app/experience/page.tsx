export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <p>
        My experience spans academic projects, research work, and practical 
        applications of data science and systems thinking.
      </p>

      <div className="mt-12 space-y-10">
        <div>
          <h2 className="text-lg font-medium text-slate-900">Research Assistant</h2>
          <p className="text-sm text-slate-600 mt-1">FLAME University · 2024 - Present</p>
          <p className="mt-3">
            Working on applied research projects at the intersection of data 
            analysis and public policy. Conducting literature reviews, building 
            analytical models, and contributing to policy briefs on governance 
            and service delivery.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-slate-900">Data Analytics Intern</h2>
          <p className="text-sm text-slate-600 mt-1">Local Government Initiative · Summer 2024</p>
          <p className="mt-3">
            Analyzed municipal service data to identify bottlenecks in citizen 
            service delivery. Developed data visualizations and presented findings 
            to administrative staff, leading to process improvements in three 
            departments.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-slate-900">Academic Projects</h2>
          <p className="text-sm text-slate-600 mt-1">FLAME University · 2023 - Present</p>
          <ul className="mt-3 space-y-2">
            <li>• Built a recommendation system for optimizing resource allocation in university facilities</li>
            <li>• Conducted statistical analysis of educational outcomes using regression modeling</li>
            <li>• Developed a web scraping tool for tracking policy changes across government websites</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-12">Skills</h2>
      <p>
        Python, R, SQL, JavaScript, statistical modeling, data visualization, 
        algorithm design, systems analysis, technical writing
      </p>
    </section>
  );
}