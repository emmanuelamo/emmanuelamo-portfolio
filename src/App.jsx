import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  const navStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 50
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  };

  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem'
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          <Link 
            to="/" 
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              textDecoration: 'none'
            }}
          >
            Emmanuel Amo
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontWeight: '500',
                  color: location.pathname === item.path ? '#2563eb' : '#6b7280',
                  textDecoration: 'none',
                  borderBottom: location.pathname === item.path ? '2px solid #2563eb' : 'none',
                  paddingBottom: '0.25rem'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  };

  const mainStyle = {
    paddingTop: '4rem'
  };

  const footerStyle = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '3rem 0',
    marginTop: '4rem'
  };

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navigation />
        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer style={footerStyle}>
          <div style={footerContainerStyle}>
            <div style={footerGridStyle}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Emmanuel Amo
                </h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Application Support/Software Engineer specializing in VAS solutions, 
                  backend development, and system integration.
                </p>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Quick Links
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link to="/about" style={{ color: '#d1d5db', textDecoration: 'none' }}>About</Link>
                  <Link to="/projects" style={{ color: '#d1d5db', textDecoration: 'none' }}>Projects</Link>
                  <Link to="/blog" style={{ color: '#d1d5db', textDecoration: 'none' }}>Blog</Link>
                  <Link to="/contact" style={{ color: '#d1d5db', textDecoration: 'none' }}>Contact</Link>
                </div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
                  Connect
                </h4>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a 
                        href="https://linkedin.com/in/emmanuel-amo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#d1d5db', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.target.style.color = '#0077b5'}
                        onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                      >
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/emmanuelamo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#d1d5db', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => e.target.style.color = '#333'}
                        onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                      >
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
              </div>
            </div>
            
            <div style={{ 
              borderTop: '1px solid #374151', 
              marginTop: '2rem', 
              paddingTop: '2rem', 
              textAlign: 'center', 
              color: '#d1d5db' 
            }}>
              <p>&copy; 2024 Emmanuel Amo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
