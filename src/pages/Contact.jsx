export default function Contact() {
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

  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
    marginBottom: '4rem'
  };

  const formCardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    border: '1px solid #f3f4f6'
  };

  const formTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#1f2937'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  };

  const inputStyle = {
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    backgroundColor: 'white'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'inherit'
  };

  const submitButtonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    alignSelf: 'flex-start'
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  };

  const contactCardStyle = {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    border: '1px solid #e0f2fe'
  };

  const contactTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#1f2937'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1.5rem'
  };

  const iconContainerStyle = {
    width: '3rem',
    height: '3rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    flexShrink: 0
  };

  const contactDetailsStyle = {
    flex: 1
  };

  const contactLabelStyle = {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.25rem'
  };

  const contactValueStyle = {
    color: '#6b7280',
    fontSize: '1rem'
  };

  const socialCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)',
    border: '1px solid #f3f4f6'
  };

  const socialTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#1f2937'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const socialLinkStyle = {
    width: '3rem',
    height: '3rem',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const linkedinStyle = {
    ...socialLinkStyle,
    backgroundColor: '#0077b5',
    color: 'white'
  };

  const githubStyle = {
    ...socialLinkStyle,
    backgroundColor: '#333',
    color: 'white'
  };

  const twitterStyle = {
    ...socialLinkStyle,
    backgroundColor: '#1da1f2',
    color: 'white'
  };

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>Get In Touch</h1>
      <p style={pageSubtitleStyle}>
        Let's discuss your next project or collaborate on something amazing.
      </p>

      <div style={mainGridStyle}>
        {/* Contact Form */}
        <div style={formCardStyle} className="project-card-3d animate-stagger-1">
          <h2 style={formTitleStyle}>Send a Message</h2>
          <form style={formStyle}>
            <div style={inputGroupStyle}>
              <label htmlFor="name" style={labelStyle}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                style={inputStyle}
                placeholder="Your full name"
              />
            </div>
            
            <div style={inputGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={inputStyle}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div style={inputGroupStyle}>
              <label htmlFor="subject" style={labelStyle}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                style={inputStyle}
                placeholder="What's this about?"
              />
            </div>
            
            <div style={inputGroupStyle}>
              <label htmlFor="message" style={labelStyle}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                style={textareaStyle}
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={submitButtonStyle}
              className="btn-3d"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={contactInfoStyle}>
          <div style={contactCardStyle} className="skill-card-3d animate-stagger-2">
            <h3 style={contactTitleStyle}>Contact Information</h3>
            
            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <svg width="24" height="24" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div style={contactDetailsStyle}>
                <div style={contactLabelStyle}>Email</div>
                <div style={contactValueStyle}>emmanuel.amo@example.com</div>
              </div>
            </div>
            
            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <svg width="24" height="24" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div style={contactDetailsStyle}>
                <div style={contactLabelStyle}>Location</div>
                <div style={contactValueStyle}>Ghana, West Africa</div>
              </div>
            </div>
            
            <div style={contactItemStyle}>
              <div style={iconContainerStyle}>
                <svg width="24" height="24" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div style={contactDetailsStyle}>
                <div style={contactLabelStyle}>Availability</div>
                <div style={contactValueStyle}>Open to new opportunities</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div style={socialCardStyle} className="skill-card-3d animate-stagger-3">
            <h3 style={socialTitleStyle}>Connect With Me</h3>
            <div style={socialLinksStyle}>
              <a
                href="https://linkedin.com/in/emmanuelamo"
                target="_blank"
                rel="noopener noreferrer"
                style={linkedinStyle}
                className="btn-3d"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/emmanuelamo"
                target="_blank"
                rel="noopener noreferrer"
                style={githubStyle}
                className="btn-3d"
                aria-label="GitHub"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="#"
                style={twitterStyle}
                className="btn-3d"
                aria-label="Twitter"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}