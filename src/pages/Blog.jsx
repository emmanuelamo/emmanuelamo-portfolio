export default function Blog() {
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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Technical insights, tutorials, and experiences from my work in VAS solutions and backend development.
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === "All"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                {post.category}
              </span>
              <div className="text-sm text-gray-500">
                {post.date} • {post.readTime}
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
              {post.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Read More →
            </button>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Get notified when I publish new technical articles and insights.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
