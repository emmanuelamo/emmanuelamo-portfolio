export default function About() {
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
    marginBottom: '3rem',
    color: '#1f2937',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'slideInUp 0.8s ease-out'
  };

  const heroSectionStyle = {
    background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
    padding: '3rem',
    borderRadius: '1rem',
    marginBottom: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transform: 'translateZ(0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const heroTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#1f2937'
  };

  const heroTextStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.7',
    marginBottom: '0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    cursor: 'pointer',
    border: '1px solid #f3f4f6'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const iconStyle = {
    width: '2rem',
    height: '2rem',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#dbeafe',
    color: '#2563eb'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const listItemStyle = {
    padding: '0.75rem 0',
    borderBottom: '1px solid #f3f4f6',
    color: '#4b5563',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const bulletStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    flexShrink: 0
  };

  const philosophySectionStyle = {
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

  const philosophyTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#1f2937',
    textAlign: 'center'
  };

  const philosophyTextStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.7',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const statCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    cursor: 'pointer'
  };

  const statNumberStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    fontSize: '1rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>About Me</h1>
      
      {/* Professional Summary */}
      <section style={heroSectionStyle} className="hero-3d animate-stagger-1">
        <h2 style={heroTitleStyle}>Professional Summary</h2>
        <p style={heroTextStyle}>
          Experienced Application Support/Software Engineer with a strong background in VAS (Value-Added Services), 
          backend development, system integration, and server management. At Nalo Solutions, I design and 
          implement scalable content delivery platforms that power services across SMS, USSD, and longcode 
          channels, ensuring performance, reliability, and user engagement.
        </p>
      </section>

      {/* Skills Grid */}
      <div style={gridStyle}>
        <div style={cardStyle} className="skill-card-3d animate-stagger-2">
          <h3 style={cardTitleStyle}>
            <div style={{...iconStyle, backgroundColor: '#dbeafe', color: '#2563eb'}}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            Technical Expertise
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><span style={bulletStyle}></span>Node.js & React Development</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>MariaDB & Database Management</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>Nginx & Bitnami Stacks</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>AWS Infrastructure</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>API Development & Integration</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>Linux/Windows/macOS Administration</li>
          </ul>
        </div>

        <div style={cardStyle} className="skill-card-3d animate-stagger-3">
          <h3 style={cardTitleStyle}>
            <div style={{...iconStyle, backgroundColor: '#dcfce7', color: '#16a34a'}}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            Specializations
          </h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><span style={bulletStyle}></span>Telecom VAS Solutions</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>SMS & USSD Integration</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>System Monitoring & Automation</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>Content Delivery Platforms</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>Real-time Notifications</li>
            <li style={listItemStyle}><span style={bulletStyle}></span>FRP Bypass Solutions</li>
          </ul>
        </div>
      </div>

      {/* Current Role */}
      <section style={heroSectionStyle} className="hero-3d animate-stagger-4">
        <h2 style={heroTitleStyle}>Current Role at Nalo Solutions</h2>
        <p style={heroTextStyle}>
          I specialize in Node.js and work extensively with MariaDB, Nginx, Bitnami stacks, and AWS infrastructure. 
          I develop APIs that integrate with telcos (like Airtel) and build tools to automate reporting, monitoring, 
          and log analysis—enabling faster decision-making and improved service uptime.
        </p>
        <p style={heroTextStyle}>
          From scheduling content to pushing real-time notifications based on user status (active, inactive), 
          I blend technical execution with operational efficiency. Beyond backend work, I contribute to system 
          monitoring, client support, FRP bypass solutions, Linux/Windows/macOS installations, and hardware setups.
        </p>
      </section>

      {/* Philosophy */}
      <section style={philosophySectionStyle} className="hero-3d animate-stagger-5">
        <h2 style={philosophyTitleStyle}>Philosophy & Approach</h2>
        <p style={philosophyTextStyle}>
          Driven by continuous learning and a problem-solving mindset, I enjoy creating tools that simplify 
          workflows and align tech solutions with business goals. Whether it's integrating USSD flows or 
          building robust message delivery tracking for reporting, I take pride in ensuring things work 
          well—and work smart.
        </p>
      </section>

      {/* Stats */}
      <div style={statsGridStyle}>
        <div style={statCardStyle} className="skill-card-3d animate-stagger-6">
          <div style={statNumberStyle}>5+</div>
          <div style={statLabelStyle}>Years Experience</div>
        </div>
        <div style={statCardStyle} className="skill-card-3d animate-stagger-6">
          <div style={statNumberStyle}>50+</div>
          <div style={statLabelStyle}>Projects Completed</div>
        </div>
        <div style={statCardStyle} className="skill-card-3d animate-stagger-6">
          <div style={statNumberStyle}>99.9%</div>
          <div style={statLabelStyle}>Uptime Achieved</div>
        </div>
        <div style={statCardStyle} className="skill-card-3d animate-stagger-6">
          <div style={statNumberStyle}>24/7</div>
          <div style={statLabelStyle}>Support Available</div>
        </div>
      </div>
    </div>
  );
}