import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            I'm a dedicated Full-Stack Software Developer with 8+ years of professional experience in web and desktop application development. With a Bachelor's degree in Information Technology from STI College-Caloocan, I've worked on diverse projects for major companies including Theater Solaire (Oriental Group) and Gold Value Creation (GVC), delivering robust solutions using multiple technology stacks.
          </p>
          <p className="about-text">
            My expertise spans full-stack web development (PHP, Laravel, FuelPHP, JavaScript, jQuery) and desktop applications (C#.NET, VB.NET, Delphi). I'm proficient in database design and management (MySQL, MSSQL), DevOps practices (Docker, Git), and test automation. I specialize in developing scalable, maintainable applications with a focus on clean code, proper architecture, and continuous improvement.
          </p>
          <p className="about-text">
            I'm passionate about solving complex technical challenges, optimizing system performance, and collaborating with cross-functional teams. When not coding, I enjoy exploring emerging technologies and sharing knowledge with fellow developers. Based in Navotas City, Philippines, I'm committed to delivering high-quality software solutions that make a real impact.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">8+</span>
              <span className="highlight-text">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">15+</span>
              <span className="highlight-text">Tech Skills</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3</span>
              <span className="highlight-text">Major Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
