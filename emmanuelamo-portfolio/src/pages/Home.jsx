export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Emmanuel Amo</span> 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Application Software Engineer specializing in VAS solutions, backend development, 
            and system integration. Building scalable platforms that power telecom services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Backend Development</h3>
            <p className="text-gray-600">Node.js, PHP, APIs, Database Design, System Architecture</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">VAS Solutions</h3>
            <p className="text-gray-600">SMS, USSD, Longcode, Kannel, Telecom Integration</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">System Administration</h3>
            <p className="text-gray-600">Linux, AWS, Nginx, Monitoring, DevOps, Automation</p>
          </div>
        </div>
      </section>

      {/* Recent Work Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">SMS Gateway Platform</h3>
            <p className="text-gray-600 mb-4">
              Built a scalable SMS delivery platform using Kannel with 64 modem integration on Rocky Linux. 
              Handles high-volume messaging with real-time tracking.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Kannel</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Rocky Linux</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MySQL</span>
            </div>
            <a href="/projects" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View Project →
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">VAS Content Delivery</h3>
            <p className="text-gray-600 mb-4">
              Developed comprehensive content delivery platform for SMS, USSD, and longcode channels 
              with automated scheduling and real-time notifications.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MariaDB</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">AWS</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Nginx</span>
            </div>
            <a href="/projects" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gray-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Work Together?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can bring your ideas to life.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg inline-block"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  );
}
