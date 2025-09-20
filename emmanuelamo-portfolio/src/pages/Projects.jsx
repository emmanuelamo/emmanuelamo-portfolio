export default function Projects() {
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
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h1>
      <p className="text-lg text-gray-600 mb-12">
        A showcase of my work in VAS solutions, backend development, and system integration.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Production' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technical Achievements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Infrastructure & DevOps</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Set up and managed Rocky Linux servers</li>
              <li>• Configured Kannel SMS gateway with 64 modem support</li>
              <li>• Implemented monitoring with DataDog and custom tools</li>
              <li>• Automated deployment pipelines and CI/CD</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Development & Integration</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Built scalable APIs handling millions of requests</li>
              <li>• Integrated with major telecom providers</li>
              <li>• Developed real-time notification systems</li>
              <li>• Created automated reporting and analytics tools</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
