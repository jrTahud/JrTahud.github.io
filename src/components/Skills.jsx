import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['HTML/CSS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'Smarty Templates', 'Responsive Design']
    },
    {
      category: 'Backend & Frameworks',
      skills: ['PHP', 'Laravel 8', 'FuelPHP', 'C#.NET / VB.NET', 'ASP.NET', 'Delphi/Pascal', 'Java']
    },
    {
      category: 'Database Management',
      skills: ['MySQL', 'MSSQL', 'Stored Procedures', 'Query Optimization', 'Database Design', 'LINQ']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'Linux/Ubuntu', 'IIS Server', 'SSH Configuration', 'Windows Hyper-V', 'Selenium WebDriver']
    }
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
