export default function Blog() {
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
    marginBottom: '3rem',
    animation: 'slideInUp 0.8s ease-out 0.2s both'
  };

  const categoriesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '4rem'
  };

  const categoryButtonStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#f3f4f6',
    color: '#6b7280'
  };

  const activeCategoryStyle = {
    ...categoryButtonStyle,
    backgroundColor: '#2563eb',
    color: 'white'
  };

  const blogPostsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginBottom: '4rem'
  };

  const blogPostStyle = {
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

  const postHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const categoryBadgeStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    fontSize: '0.875rem',
    borderRadius: '9999px',
    fontWeight: '500'
  };

  const postMetaStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const postTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
    lineHeight: '1.3'
  };

  const postExcerptStyle = {
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontSize: '1rem'
  };

  const readMoreStyle = {
    color: '#2563eb',
    fontWeight: '500',
    textDecoration: 'none',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'color 0.2s ease'
  };

  const newsletterSectionStyle = {
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    padding: '3rem',
    borderRadius: '1rem',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    transform: 'translateZ(0)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const newsletterTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1f2937'
  };

  const newsletterDescriptionStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '2rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    lineHeight: '1.6'
  };

  const newsletterFormStyle = {
    display: 'flex',
    maxWidth: '400px',
    margin: '0 auto',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const emailInputStyle = {
    flex: '1',
    minWidth: '250px',
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease'
  };

  const subscribeButtonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  };

  const blogPosts = [
    {
      title: "Building Scalable SMS Gateways with Kannel and Rocky Linux",
      excerpt: "Learn how to set up a robust SMS gateway using Kannel open-source software on Rocky Linux, including 64 modem configuration and high-availability setup.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Infrastructure"
    },
    {
      title: "VAS Solutions: Integrating SMS, USSD, and Longcode Channels",
      excerpt: "A comprehensive guide to building Value-Added Services platforms that handle multiple communication channels with real-time monitoring and reporting.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Telecom"
    },
    {
      title: "Node.js API Development for Telecom Integration",
      excerpt: "Best practices for building robust APIs that integrate with telecom providers, including error handling, rate limiting, and performance optimization.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Development"
    },
    {
      title: "System Monitoring and Alerting with DataDog",
      excerpt: "How to implement comprehensive monitoring solutions for network infrastructure and application performance using DataDog and custom tools.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "DevOps"
    },
    {
      title: "FRP Bypass Solutions: A Technical Deep Dive",
      excerpt: "Understanding Factory Reset Protection bypass techniques and tools for Android devices, including security considerations and best practices.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Mobile"
    },
    {
      title: "Building Real-time Notification Systems",
      excerpt: "Architecture patterns for implementing real-time notification systems that scale, including WebSocket management and message queuing.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Architecture"
    }
  ];

  const categories = ["All", "Infrastructure", "Telecom", "Development", "DevOps", "Mobile", "Architecture"];

  return (
    <div style={containerStyle}>
      <h1 style={pageTitleStyle}>Blog</h1>
      <p style={pageSubtitleStyle}>
        Technical insights, tutorials, and experiences from my work in VAS solutions and backend development.
      </p>

      {/* Category Filter */}
      <div style={categoriesStyle}>
        {categories.map((category, index) => (
          <button
            key={index}
            style={category === "All" ? activeCategoryStyle : categoryButtonStyle}
            className="btn-3d"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div style={blogPostsStyle}>
        {blogPosts.map((post, index) => (
          <article key={index} className="project-card-3d" style={{
            ...blogPostStyle,
            animation: `slideInUp 0.6s ease-out ${0.1 * (index + 1)}s both`
          }}>
            <div style={postHeaderStyle}>
              <span style={categoryBadgeStyle}>
                {post.category}
              </span>
              <div style={postMetaStyle}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <h2 style={postTitleStyle}>
              {post.title}
            </h2>
            
            <p style={postExcerptStyle}>
              {post.excerpt}
            </p>
            
            <a href="/contact" style={readMoreStyle}>
              Read More →
            </a>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <section style={newsletterSectionStyle} className="hero-3d">
        <h2 style={newsletterTitleStyle}>Stay Updated</h2>
        <p style={newsletterDescriptionStyle}>
          Get notified when I publish new technical articles and insights.
        </p>
        <div style={newsletterFormStyle}>
          <input
            type="email"
            placeholder="Enter your email"
            style={emailInputStyle}
          />
          <button style={subscribeButtonStyle} className="btn-3d">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}