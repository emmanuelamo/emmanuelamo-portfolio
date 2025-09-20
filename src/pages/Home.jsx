export default function Home() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '4rem 0',
    background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
    borderRadius: '0.5rem',
    marginBottom: '4rem'
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1.5rem',
    lineHeight: '1.1'
  };

  const heroSubtitleStyle = {
    fontSize: '1.25rem',
    color: '#6b7280',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 2rem auto'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const primaryButtonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.125rem',
    transition: 'background-color 0.2s'
  };

  const secondaryButtonStyle = {
    border: '2px solid #2563eb',
    color: '#2563eb',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.125rem',
    transition: 'all 0.2s'
  };

  const sectionTitleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#1f2937'
  };

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const skillCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const iconContainerStyle = {
    width: '4rem',
    height: '4rem',
    backgroundColor: '#dbeafe',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem auto'
  };

  const skillTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#1f2937'
  };

  const skillDescriptionStyle = {
    color: '#6b7280',
    lineHeight: '1.6'
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const projectCardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const projectTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937'
  };

  const projectDescriptionStyle = {
    color: '#6b7280',
    marginBottom: '1rem',
    lineHeight: '1.6'
  };

  const techTagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const techTagStyle = {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontSize: '0.875rem',
    borderRadius: '9999px',
    fontWeight: '500'
  };

  const projectLinkStyle = {
    color: '#2563eb',
    fontWeight: '500',
    textDecoration: 'none'
  };

  const ctaSectionStyle = {
    textAlign: 'center',
    backgroundColor: '#f9fafb',
    padding: '3rem',
    borderRadius: '0.5rem'
  };

  const ctaTitleStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1f2937'
  };

  const ctaDescriptionStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6'
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <div>
          <h1 style={heroTitleStyle}>
            Hi, I'm <span style={{ color: '#2563eb' }}>Emmanuel Amo</span> 👋
          </h1>
          <p style={heroSubtitleStyle}>
            Application Software Engineer specializing in VAS solutions, backend development, 
            and system integration. Building scalable platforms that power telecom services.
          </p>
          <div style={buttonContainerStyle}>
            <a href="/projects" style={primaryButtonStyle}>
              View My Work
            </a>
            <a href="/contact" style={secondaryButtonStyle}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 style={sectionTitleStyle}>Technical Expertise</h2>
        <div style={skillsGridStyle}>
          <div style={skillCardStyle}>
            <div style={iconContainerStyle}>
              <svg width="32" height="32" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 style={skillTitleStyle}>Backend Development</h3>
            <p style={skillDescriptionStyle}>Node.js, PHP, APIs, Database Design, System Architecture</p>
          </div>
          
          <div style={skillCardStyle}>
            <div style={{...iconContainerStyle, backgroundColor: '#dcfce7'}}>
              <svg width="32" height="32" fill="none" stroke="#16a34a" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 style={skillTitleStyle}>VAS Solutions</h3>
            <p style={skillDescriptionStyle}>SMS, USSD, Longcode, Kannel, Telecom Integration</p>
          </div>
          
          <div style={skillCardStyle}>
            <div style={{...iconContainerStyle, backgroundColor: '#f3e8ff'}}>
              <svg width="32" height="32" fill="none" stroke="#9333ea" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={skillTitleStyle}>System Administration</h3>
            <p style={skillDescriptionStyle}>Linux, AWS, Nginx, Monitoring, DevOps, Automation</p>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section>
        <h2 style={sectionTitleStyle}>Recent Work</h2>
        <div style={projectsGridStyle}>
          <div style={projectCardStyle}>
            <h3 style={projectTitleStyle}>SMS Gateway Platform</h3>
            <p style={projectDescriptionStyle}>
              Built a scalable SMS delivery platform using Kannel with 64 modem integration on Rocky Linux. 
              Handles high-volume messaging with real-time tracking.
            </p>
            <div style={techTagsStyle}>
              <span style={techTagStyle}>Node.js</span>
              <span style={techTagStyle}>Kannel</span>
              <span style={techTagStyle}>Rocky Linux</span>
              <span style={techTagStyle}>MySQL</span>
            </div>
            <a href="/projects" style={projectLinkStyle}>
              View Project →
            </a>
          </div>
          
          <div style={projectCardStyle}>
            <h3 style={projectTitleStyle}>VAS Content Delivery</h3>
            <p style={projectDescriptionStyle}>
              Developed comprehensive content delivery platform for SMS, USSD, and longcode channels 
              with automated scheduling and real-time notifications.
            </p>
            <div style={techTagsStyle}>
              <span style={{...techTagStyle, backgroundColor: '#dcfce7', color: '#166534'}}>Node.js</span>
              <span style={{...techTagStyle, backgroundColor: '#dcfce7', color: '#166534'}}>MariaDB</span>
              <span style={{...techTagStyle, backgroundColor: '#dcfce7', color: '#166534'}}>AWS</span>
              <span style={{...techTagStyle, backgroundColor: '#dcfce7', color: '#166534'}}>Nginx</span>
            </div>
            <a href="/projects" style={projectLinkStyle}>
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Ready to Work Together?</h2>
        <p style={ctaDescriptionStyle}>
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can bring your ideas to life.
        </p>
        <a
          href="/contact"
          style={{
            ...primaryButtonStyle,
            display: 'inline-block'
          }}
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
}