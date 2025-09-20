export default function Projects() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
    perspective: '1000px'
  };

  const pageTitleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#1f2937',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'slideInUp 0.8s ease-out'
  };

  const pageSubtitleStyle = {
    fontSize: '1.25rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '4rem',
    animation: 'slideInUp 0.8s ease-out 0.2s both'
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const projectCardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    cursor: 'pointer',
    border: '1px solid #f3f4f6',
    position: 'relative',
    overflow: 'hidden'
  };

  const projectHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0,
    flex: 1
  };

  const statusBadgeStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    marginLeft: '1rem'
  };

  const productionBadgeStyle = {
    ...statusBadgeStyle,
    backgroundColor: '#dcfce7',
    color: '#166534'
  };

  const developmentBadgeStyle = {
    ...statusBadgeStyle,
    backgroundColor: '#fef3c7',
    color: '#92400e'
  };

  const projectDescriptionStyle = {
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  };

  const techTagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem'
  };

  const techTagStyle = {
    padding: '0.375rem 0.75rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontSize: '0.875rem',
    borderRadius: '9999px',
    fontWeight: '500'
  };

  const projectLinkStyle = {
    color: '#2563eb',
    fontWeight: '500',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'color 0.2s ease'
  };

  const achievementsSectionStyle = {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    padding: '3rem',
    borderRadius: '1rem',
    marginBottom: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transform: 'translateZ(0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const achievementsTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1f2937'
  };

  const achievementsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  };

  const achievementCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    cursor: 'pointer'
  };

  const achievementTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const achievementListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const achievementItemStyle = {
    padding: '0.5rem 0',
    color: '#4b5563',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const bulletStyle = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    flexShrink: 0
  };

  const projects = [
    {
      title: "SMS Gateway Platform",
      description: "Built a scalable SMS delivery platform using Kannel open-source gateway with 64 modem integration on Rocky Linux. Handles high-volume messaging with real-time delivery tracking and reporting.",
      technologies: ["Node.js", "Kannel", "Rocky Linux", "MySQL", "Nginx"],
      status: "Production"
    },
    {
      title: "VAS Content Delivery System",
      description: "Developed a comprehensive content delivery platform for SMS, USSD, and longcode channels. Includes automated scheduling, user status tracking, and real-time notifications.",
      technologies: ["Node.js", "MariaDB", "AWS", "Nginx", "Bitnami"],
      status: "Production"
    },
    {
      title: "Telco Integration APIs",
      description: "Created robust APIs for seamless integration with telecom providers like Airtel. Features include USSD flow management, subscriber status tracking, and automated reporting.",
      technologies: ["Node.js", "REST APIs", "MySQL", "Docker", "Jira"],
      status: "Production"
    },
    {
      title: "System Monitoring Dashboard",
      description: "Built comprehensive monitoring tools for network infrastructure, system performance, and service health. Includes automated alerting and log analysis capabilities.",
      technologies: ["PHP", "Bash", "DataDog", "Nmap", "Linux SysAdmin"],
      status: "Production"
    },
    {
      title: "Address Management System",
      description: "Developed address generation and verification system with worker processes for handling large-scale address data processing and validation.",
      technologies: ["Node.js", "MySQL", "Worker Processes", "Address APIs"],
      status: "Development"
    },
    {
      title: "FRP Bypass Solutions",
      description: "Created tools and solutions for FRP (Factory Reset Protection) bypass across different Android devices and versions, supporting client support operations.",
      technologies: ["Linux", "Android", "ADB", "Shell Scripting"],
      status: "Production"
    }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>My Projects</h1>
      <p style={pageSubtitleStyle}>
        A showcase of my work in VAS solutions, backend development, and system integration.
      </p>

      <div style={projectsGridStyle}>
        {projects.map((project, index) => (
          <div key={index} className="project-card-3d" style={{
            ...projectCardStyle,
            animation: `slideInUp 0.6s ease-out ${0.1 * (index + 1)}s both`
          }}>
            <div style={projectHeaderStyle}>
              <h3 style={projectTitleStyle}>{project.title}</h3>
              <span style={project.status === 'Production' ? productionBadgeStyle : developmentBadgeStyle}>
                {project.status}
              </span>
            </div>
            
            <p style={projectDescriptionStyle}>
              {project.description}
            </p>
            
            <div style={techTagsStyle}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={techTagStyle}>
                  {tech}
                </span>
              ))}
            </div>
            
            <a href="/contact" style={projectLinkStyle}>
              Learn More →
            </a>
          </div>
        ))}
      </div>

      <section style={achievementsSectionStyle} className="hero-3d">
        <h2 style={achievementsTitleStyle}>Technical Achievements</h2>
        <div style={achievementsGridStyle}>
          <div style={achievementCardStyle} className="skill-card-3d">
            <h3 style={achievementTitleStyle}>
              <div style={{
                width: '2rem',
                height: '2rem',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: '#dbeafe',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              Infrastructure & DevOps
            </h3>
            <ul style={achievementListStyle}>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Set up and managed Rocky Linux servers</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Configured Kannel SMS gateway with 64 modem support</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Implemented monitoring with DataDog and custom tools</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Automated deployment pipelines and CI/CD</li>
            </ul>
          </div>
          
          <div style={achievementCardStyle} className="skill-card-3d">
            <h3 style={achievementTitleStyle}>
              <div style={{
                width: '2rem',
                height: '2rem',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Development & Integration
            </h3>
            <ul style={achievementListStyle}>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Built scalable APIs handling millions of requests</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Integrated with major telecom providers</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Developed real-time notification systems</li>
              <li style={achievementItemStyle}><span style={bulletStyle}></span>Created automated reporting and analytics tools</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}