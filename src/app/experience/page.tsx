export default function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <p>
        My experience spans research, operations, technical work, and writing—all 
        driven by a desire to create measurable impact through technology and 
        clear thinking.
      </p>

      <div className="mt-12 space-y-10">
        <div className="experience-box">
          <h2 className="text-lg font-medium">QA Testing Intern</h2>
          <p className="text-sm text-slate-400 mt-1">PartyHub · Remote · July 2025 - August 2025</p>
          <p className="mt-3">
            Conducted manual testing of user-facing and backend systems to ensure 
            stability and smooth deployment. Developed detailed bug reports and 
            collaborated with developers to improve system reliability and user 
            experience. Tested new features under development, verified API responses, 
            and checked cross-device compatibility. Gained hands-on experience in 
            real-world product testing cycles, issue tracking, and iterative release 
            validation.
          </p>
        </div>

        <div className="experience-box">
          <h2 className="text-lg font-medium">Research and Operations Intern</h2>
          <p className="text-sm text-slate-400 mt-1">Goonj · Delhi · May 2025 - June 2025</p>
          <p className="mt-3">
            Worked with Goonj, a non-profit addressing issues of surplus and shortage 
            in urban and rural India. Focused on data-driven insights and operational 
            efficiency in education and material reuse verticals. Analysed records 
            related to book donations, usage, and redistribution to study utilisation 
            patterns and system gaps. Created structured datasets and simple visual 
            summaries to quantify utility and impact of educational material. Proposed 
            process optimisations to improve sorting and reallocation based on 
            empirical findings. Led a team of interns coordinating educational outreach 
            campaigns, aligning field data with on-ground needs.
          </p>
        </div>

        <div className="experience-box">
          <h2 className="text-lg font-medium">Writer & Contributor</h2>
          <p className="text-sm text-slate-400 mt-1">Various Publications</p>
          <p className="mt-3">
            Written for Deccan Herald with my professor about education policy, 
            exploring how policy decisions affect real outcomes in educational systems. 
            Also contributed chapters to Kashmir Poetics, a Kashmir-based magazine, 
            exploring themes of identity, place, and change.
          </p>
        </div>

        <div className="experience-box">
          <h2 className="text-lg font-medium">Atal Tinkering Labs Coordinator</h2>
          <p className="text-sm text-slate-400 mt-1">Jawahar Navodaya Vidyalaya · Kashmir</p>
          <p className="mt-3">
            Taught 3D printing and basic fabrication to junior students, helping 
            them understand how ideas become physical objects. This role taught me 
            patience, clear explanation, and the importance of hands-on learning.
          </p>
        </div>
      </div>

      <h2 className="mt-12">Technical Skills</h2>
      <p className="mb-4">
        <span className="text-slate-400">Programming Languages:</span> C++, Python
      </p>
      <p className="mb-4">
        <span className="text-slate-400">Data & Analytics:</span> Data Structures & Algorithms, 
        Data Analysis, AWS, Data Mining, Theoretical Computer Science, Algorithmic Thinking
      </p>
      <p className="mb-4">
        <span className="text-slate-400">Languages:</span> English, Hindi, Urdu, Kashmiri
      </p>

      <h2 className="mt-8">Academic Involvement</h2>
      <ul>
        <li>Member of Dot Slash Club (University Coding Team - Programming and Hackathons)</li>
        <li>Full ride merit-based scholarship recipient at FLAME University</li>
        <li>Badminton Team member</li>
        <li>Debate Team member</li>
        <li>Former Extracurricular Head at Jawahar Navodaya Vidyalaya</li>
      </ul>

      <div className="mt-8">
        <a 
          href="/resume.pdf" 
          className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-all hover:shadow-lg hover:shadow-violet-500/50"
        >
          View Resume
        </a>
      </div>
    </section>
  );
}