import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Warrant of Arrest System',
      description: 'Developed a comprehensive warrant of arrest management system deployed across all Philippine National Police branches. Built with VB.NET WinForms, this system streamlined law enforcement processes and improved data management efficiency.',
      tags: ['VB.NET', 'WinForms', 'MSSQL', 'System Design'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Police Clearance Portal',
      description: 'Created a centralized police clearance issuance system for PNP branches. Implemented database queries, stored procedures, and form interactions to automate the clearance process for thousands of daily requests.',
      tags: ['VB.NET', 'WinForms', 'Database Design'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Health Clearance Management System',
      description: 'Built a health clearance System for health offices nationwide using VB.NET. Features include document management, data validation, and integration with the national health database.',
      tags: ['VB.NET', 'WinForms', 'MSSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Desktop Application Modernization',
      description: 'Led the upgrade of legacy WinForms applications to modern UI/UX standards. Improved user interface design, optimized performance, and added new features while maintaining backward compatibility.',
      tags: ['VB.NET', 'Delphi', 'UI/UX', 'Refactoring'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Web Application Development (Laravel 8)',
      description: 'Developed and maintained responsive web applications using Laravel 8 framework. Implemented MySQL stored procedures, created RESTful APIs, and deployed applications on both IIS and Ubuntu servers.',
      tags: ['Laravel 8', 'MySQL', 'JavaScript', 'Bootstrap'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'FuelPHP Website Maintenance & Enhancement',
      description: 'Maintained and enhanced web applications using FuelPHP framework. Optimized database queries, implemented Docker containerization for local testing, and automated testing using Selenium WebDriver. Currently deployed in production.',
      tags: ['FuelPHP', 'jQuery', 'MySQL', 'Docker', 'Selenium'],
      link: 'https://gvc.co.jp/',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} className="project-link">View Project</a>
              <a href={project.github} className="project-link github-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
