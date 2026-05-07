import './Experience.css'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Gold Value Creation (GVC)',
      position: 'Software Developer / Programmer',
      duration: 'March 2022 - July 2026',
      description: 'Led website maintenance and development using FuelPHP framework. Managed MySQL database optimization and implemented Docker containerization for development environments. Proficient in version control with Git and test automation using Selenium WebDriver.',
      highlights: ['FuelPHP', 'JavaScript & jQuery', 'MySQL', 'Docker', 'Git', 'Selenium WebDriver']
    },
    {
      id: 2,
      company: 'Theater Solaire (Oriental Group)',
      position: 'Software Developer / Programmer',
      duration: 'January 2019 - March 2022',
      description: 'Developed desktop applications using Embarcadero Delphi with Object Pascal. Deployed SOAP APIs using IIS and managed MySQL database configurations. Developed and maintained websites using Laravel 8 with deployment on IIS and Ubuntu servers.',
      highlights: ['Delphi/Pascal', 'Laravel 8', 'SOAP API', 'IIS Server', 'MySQL', 'Ubuntu Server']
    },
    {
      id: 3,
      company: 'Document Security Asia (DSA)',
      position: 'Software Developer / Programmer',
      duration: '2018',
      description: 'Deployed critical Windows Forms applications for Philippine National Police branches. Developed Warrant of Arrest, Police Clearance, and Health Clearance systems using VB.NET. Actively participated in system analysis, database design (ERD), and test automation.',
      highlights: ['VB.NET', 'WinForms', 'MSSQL', 'System Design', 'Bug Fixes', 'UI/UX Improvements']
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-position">{exp.position}</h3>
                <span className="experience-duration">{exp.duration}</span>
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <span key={idx} className="highlight-badge">{highlight}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
